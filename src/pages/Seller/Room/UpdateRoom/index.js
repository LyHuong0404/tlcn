/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styles from './UpdateRoom.module.scss';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import Image from '~/components/Image';
import { updateRoom, addImageRoom, deleteImageRoom } from '~/actions/sellerActions';
import { toast } from 'react-toastify';
import { detailRoom } from '~/actions/userActions';
import Select from 'react-select';
import { getDistricts, getWards } from '~/actions/addressActions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudUploadAlt, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import Loading from '~/components/Loading';
import { useTranslation } from 'react-i18next';

const customStyles = {
    control: (provided) => ({
        ...provided,
        width: '200px',
        height: '30px',
        alignContent: 'center',
    }),
};

//dùng param
function UpdateRoom() {
    const { t } = useTranslation();
    const params = useParams();
    const roomID = params.id;
    const { provins } = useSelector((state) => state.provins);
    const navigate = useNavigate();
    const [provinceRef, setProvinceRef] = useState({});
    const [districtRef, setDistrictRef] = useState({});
    const [wardRef, setWardRef] = useState({});
    const [room, setRoom] = useState({});
    const [districts, setDistricts] = useState([]);
    const [wards, setWards] = useState([]);
    const [menuActive, setMenuActive] = useState(1);
    const { control, register, handleSubmit } = useForm();
    const [filePreview, setFilePreview] = useState('');
    const [avatar, setAvatar] = useState('');
    const [selectedImagesPreview, setSelectedImagesPreview] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleAvatar = (e) => {
        const src = URL.createObjectURL(e.target.files[0]);
        setFilePreview(src);
        setAvatar(e.target.files[0]);
    };

    const fetchDistrict = async (provinceCode) => {
        const result = await getDistricts(provinceCode);
        const districtOptions = result?.map((district) => ({
            code: district.code,
            label: district.name,
            value: district.name,
        }));
        setDistricts(districtOptions);
    };

    const fetchWard = async (districtCode) => {
        const wardResult = await getWards(districtCode);
        const wardOptions = wardResult?.map((ward) => ({
            code: ward.code,
            label: ward.name,
            value: ward.name,
        }));

        setWards(wardOptions);
    };

    useEffect(() => {
        const fetchData = async () => {
            if (roomID != null) {
                const result = await detailRoom(roomID);
                setRoom(result?.room);
                setSelectedImagesPreview(result?.room?.images);
                setProvinceRef({
                    value: result?.room?.address?.split(',')[3],
                    label: result?.room?.address?.split(',')[3],
                });
                setDistrictRef({
                    value: result?.room?.address?.split(',')[2],
                    label: result?.room?.address?.split(',')[2],
                });
                setWardRef({
                    value: result?.room?.address?.split(',')[1],
                    label: result?.room?.address?.split(',')[1],
                });
                if (result?.room?.districtCode) {
                    fetchWard(result?.room?.districtCode);
                }
                if (result?.room?.provinceCode) {
                    fetchDistrict(result?.room?.provinceCode);
                }
            }
        };
        fetchData();
    }, [roomID]);

    const handleChangeProvince = (e) => {
        fetchDistrict(e.code);
        setProvinceRef(e);
        setDistrictRef(null);
        setWardRef(null);
    };

    const handleChangeDistrict = (e) => {
        fetchWard(e.code);
        setDistrictRef(e);
        setWardRef(null);
    };

    const onSelectFile = (event) => {
        const selectedFiles = event.target.files;
        const selectedFilesArray = Array.from(selectedFiles);
        const imagesArray = selectedFilesArray.map((file) => {
            return URL.createObjectURL(file);
        });
        setSelectedImagesPreview((previousImages) => previousImages.concat(imagesArray));

        let fullData = { roomId: roomID, imagesFile: selectedFilesArray };
        const formData = new FormData();
        for (const key in fullData) {
            if (key === 'imagesFile') {
                for (let file of selectedFilesArray) {
                    formData.append('imagesFile', file);
                }
            } else {
                formData.append(key, fullData[key]);
            }
        }
        try {
            const addImage = async () => {
                await addImageRoom(formData);
            };
            addImage();
        } catch (error) {
            console.log(error);
        }
        event.target.value = '';
    };

    const handleDeleteImage = (image) => {
        setSelectedImagesPreview(selectedImagesPreview.filter((e) => e !== image));
        try {
            const deleteImage = async () => {
                await deleteImageRoom(image.id);
            };
            deleteImage();
        } catch (error) {
            console.error('Error fetching data:', error);
        }

        URL.revokeObjectURL(image);
    };

    const submitForm = async (data) => {
        let fullData;

        if (avatar !== '') {
            fullData = { ...data, id: roomID, avatarFile: avatar };
        } else {
            const avatarBlob = await fetch(room['avatarUrl']).then((r) => r.blob());
            fullData = { ...data, id: roomID, avatarFile: avatarBlob };
        }

        const formData = new FormData();
        for (const key in fullData) {
            if (fullData[key] === '') {
                fullData[key] = room[key];
            }
            if (key === 'wardCode') {
                if (fullData['wardCode'] === undefined) {
                    fullData['wardCode'] = room.wardCode;
                } else {
                    fullData['wardCode'] = data.wardCode.code;
                }
            }
            formData.append(key, fullData[key]);
        }

        try {
            const fetchData = async () => {
                setLoading(true);
                const data = await updateRoom(formData);
                if (data?.success) {
                    // navigate('/seller/allrooms');
                    toast.success('Room updated successfully.');
                }
                setLoading(false);
            };
            fetchData();
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const provinceOptions = provins.map((province) => ({
        code: province.code,
        label: province.name,
        value: province.name,
    }));

    return (
        <form onSubmit={handleSubmit(submitForm)} encType="multipart/form-data">
            {loading && <Loading />}
            <div className="sb2-2">
                <div className="sb2-2-2">
                    <ul>
                        <li>
                            <Link to="/seller/dashboard">
                                <i className="fa fa-home" aria-hidden="true"></i> {t('Home')}
                            </Link>
                        </li>
                        <li className="active-bre">
                            <a className="txt-none"> {t('Update Room')}</a>
                        </li>
                    </ul>
                </div>
                <div className="sb2-2-add-blog sb2-2-1">
                    <h2>{t('Update Room Detail')}</h2>
                    <ul className="nav nav-tabs tab-list" style={{ marginTop: '10px' }}>
                        <li className={menuActive === 1 ? 'active' : ''} onClick={() => setMenuActive(1)}>
                            <Link data-toggle="tab">
                                <i className="fa fa-info" aria-hidden="true"></i> <span>{t('Detail')}</span>
                            </Link>
                        </li>
                        <li className={menuActive === 2 ? 'active' : ''} onClick={() => setMenuActive(2)}>
                            <Link data-toggle="tab">
                                <i className="fa fa-bed" aria-hidden="true"></i> <span>{t('Facilities')}</span>
                            </Link>
                        </li>

                        <li className={menuActive === 3 ? 'active' : ''} onClick={() => setMenuActive(3)}>
                            <Link data-toggle="tab">
                                <i className="fa fa-money" aria-hidden="true"></i> <span>{t('Price & Avatar')}</span>
                            </Link>
                        </li>
                        <li className={menuActive === 4 ? 'active' : ''} onClick={() => setMenuActive(4)}>
                            <Link data-toggle="tab">
                                <i className="fa fa-picture-o" aria-hidden="true"></i> <span>{t('Photo Gallery')}</span>
                            </Link>
                        </li>
                        <li className={menuActive === 5 ? 'active' : ''} onClick={() => setMenuActive(5)}>
                            <Link data-toggle="tab">
                                <i className="fa fa-map-marker" aria-hidden="true"></i> <span>{t('Address')}</span>
                            </Link>
                        </li>
                    </ul>
                    <div className="tab-content">
                        {menuActive === 1 ? (
                            <div id="home" className={`tab-pane fade ${menuActive === 1 ? 'in active' : ''}`}>
                                <div className="box-inn-sp">
                                    <div className="inn-title">
                                        <h4>{t('Listing Information')}</h4>
                                    </div>
                                    <div className={styles.box}>
                                        <div className="row">
                                            <div className="input-field col s12">
                                                <br />
                                                <input
                                                    id="list-title"
                                                    type="text"
                                                    className="validate"
                                                    name="subject"
                                                    defaultValue={room.subject}
                                                    style={{ height: '3rem' }}
                                                    {...register('subject', { required: true })}
                                                />
                                                <label htmlFor="list-title">{t('Name')}</label>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="input-field col s3">
                                                <br />
                                                <input
                                                    id="t2-width"
                                                    type="number"
                                                    className="validate"
                                                    name="width"
                                                    defaultValue={room.width}
                                                    style={{ height: '3rem' }}
                                                    {...register('width', { required: true })}
                                                />
                                                <label htmlFor="t2-width">{t('Width')} (m)</label> <br />
                                            </div>

                                            <div className="input-field col s3">
                                                <br />
                                                <input
                                                    id="t2-height"
                                                    type="number"
                                                    className="validate"
                                                    name="height"
                                                    defaultValue={room.height}
                                                    style={{ height: '3rem' }}
                                                    {...register('height', { required: true })}
                                                />
                                                <label htmlFor="t2-height">{t('Height')} (m)</label> <br />
                                            </div>
                                            <div className="input-field col s3">
                                                <br />
                                                <input
                                                    id="guests"
                                                    type="number"
                                                    className="validate"
                                                    name="totalPerson"
                                                    style={{ height: '3rem' }}
                                                    defaultValue={room.totalPerson}
                                                    {...register('totalPerson', { required: true })}
                                                />
                                                <label htmlFor="guests">{t('Guests')}</label> <br />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="input-field col s12">
                                                <br />
                                                <textarea
                                                    id="textarea1"
                                                    className="materialize-textarea"
                                                    name="description"
                                                    defaultValue={room.description}
                                                    {...register('description', { required: true })}
                                                ></textarea>
                                                <label htmlFor="textarea1">{t('Descriptions')}:</label> <br />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <></>
                        )}
                        {menuActive === 2 ? (
                            <div id="menu4" className={`tab-pane fade ${menuActive === 2 ? 'in active' : ''}`}>
                                <div className="inn-title">
                                    <h4>{t('Facilities')}</h4>
                                </div>
                                <div className="row">
                                    <div className="col s12">
                                        <div
                                            className={styles.box}
                                            style={{ padding: '25px', display: 'flex', justifyContent: 'space-evenly' }}
                                        >
                                            <div>
                                                <input
                                                    type="checkbox"
                                                    id="item10"
                                                    name="isFreeParking"
                                                    className="filled-in"
                                                    defaultChecked={room.isFreeParking}
                                                    {...register('isFreeParking')}
                                                />
                                                <label htmlFor="item10">{t('Free Parking')}</label>
                                                <br />

                                                <input
                                                    type="checkbox"
                                                    id="item11"
                                                    name="tvAvailable"
                                                    className="filled-in"
                                                    defaultChecked={room.tvAvailable}
                                                    {...register('tvAvailable')}
                                                />

                                                <label htmlFor="item11">{t('Television')}</label>
                                                <br />

                                                <input
                                                    type="checkbox"
                                                    id="item12"
                                                    className="filled-in"
                                                    name="furnitureAvailable"
                                                    defaultChecked={room.furnitureAvailable}
                                                    {...register('furnitureAvailable')}
                                                />
                                                <label htmlFor="item12">{t('Furniture Available')}</label>
                                                <br />

                                                <input
                                                    type="checkbox"
                                                    id="item13"
                                                    name="airConditionAvailable"
                                                    className="filled-in"
                                                    defaultChecked={room.airConditionAvailable}
                                                    {...register('airConditionAvailable')}
                                                />
                                                <label htmlFor="item13">{t('Air Conditioning')}</label>
                                                <br />
                                            </div>
                                            <div>
                                                <input
                                                    type="checkbox"
                                                    id="item14"
                                                    className="filled-in"
                                                    name="attic"
                                                    defaultChecked={room.attic}
                                                    {...register('attic')}
                                                />
                                                <label htmlFor="item14">{t('Attic')}</label>
                                                <br />

                                                <input
                                                    type="checkbox"
                                                    id="item15"
                                                    name="privateToilet"
                                                    className="filled-in"
                                                    defaultChecked={room.privateToilet}
                                                    {...register('privateToilet')}
                                                />

                                                <label htmlFor="item15">{t('Private Toilet')}</label>
                                                <br />

                                                <input
                                                    type="checkbox"
                                                    id="item16"
                                                    name="allowedPet"
                                                    className="filled-in"
                                                    defaultChecked={room.allowedPet}
                                                    {...register('allowedPet')}
                                                />
                                                <label htmlFor="item16">{t('Allow Pet')}</label>
                                                <br />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <></>
                        )}
                        {menuActive === 3 ? (
                            <div id="menu4" className={`tab-pane fade ${menuActive === 3 ? 'in active' : ''}`}>
                                <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                                    <div className="inn-title">
                                        <h4>{t('Avatar')}</h4>
                                    </div>
                                    <div className="inn-title">
                                        <h4>{t('Price')}</h4>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col s6 content profile">
                                        <div className={styles.upload}>
                                            <label htmlFor="avatarRoom">
                                                <Image
                                                    className={styles.avatarPreview}
                                                    src={avatar ? filePreview : room.avatarUrl}
                                                    alt="avatar"
                                                />
                                                <input
                                                    id="avatarRoom"
                                                    type="file"
                                                    style={{ display: 'none' }}
                                                    onChange={handleAvatar}
                                                    name="avatarFile"
                                                />
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col s6">
                                        <div className={styles.box} style={{ padding: '0 20px 25px 20px' }}>
                                            <div className="input-field">
                                                <br />
                                                <label htmlFor="t2-price">{t('Price')} / {t('month')} (VNĐ)</label>
                                                <input
                                                    id="t2-price"
                                                    type="number"
                                                    className="validate"
                                                    defaultValue={room.price}
                                                    name="price"
                                                    style={{ height: '3rem' }}
                                                    {...register('price', { required: true })}
                                                />
                                            </div>

                                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                <div className="input-field">
                                                    <br />
                                                    <label htmlFor="t3-price">{t('Water Price')} (VNĐ)</label>
                                                    <input
                                                        id="t3-price"
                                                        type="number"
                                                        className="validate"
                                                        defaultValue={room.priceWater}
                                                        name="priceWater"
                                                        style={{ height: '3rem' }}
                                                        {...register('priceWater', { required: true })}
                                                    />
                                                </div>
                                                <div className="input-field">
                                                    <br />
                                                    <label htmlFor="t4-price">{t('Electricity Price')} (VNĐ)</label>
                                                    <input
                                                        id="t4-price"
                                                        type="number"
                                                        className="validate"
                                                        defaultValue={room.priceElectric}
                                                        name="priceElectric"
                                                        style={{ height: '3rem' }}
                                                        {...register('priceElectric', { required: true })}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <></>
                        )}
                        {menuActive === 4 ? (
                            <div id="menu2" className={`tab-pane fade ${menuActive === 4 ? 'in active' : ''}`}>
                                <div className="inn-title">
                                    <h4>{t('Photo Gallery')}</h4>
                                </div>
                                <div className={styles.box_upload}>
                                    <label htmlFor="file-input" className={styles.file_input}>
                                        <input
                                            type="file"
                                            multiple
                                            id="file-input"
                                            style={{ display: 'none' }}
                                            onChange={onSelectFile}
                                        />
                                        <div className={styles.upload_image}>
                                            {selectedImagesPreview.length > 0 ? (
                                                <FontAwesomeIcon icon={faCloudUploadAlt} style={{ fontSize: '70px' }} />
                                            ) : (
                                                <>
                                                    <FontAwesomeIcon
                                                        icon={faCloudUploadAlt}
                                                        style={{ fontSize: '70px' }}
                                                    />
                                                    <div className={styles.text}>
                                                        <p>{t('Drop files here or click to upload.')}</p>
                                                        {/* <span>
                                                            (This is just a demo dropzone. Selected files are
                                                            <strong> not</strong> actually uploaded.)
                                                        </span> */}
                                                    </div>
                                                </>
                                            )}
                                        </div>
                                    </label>
                                    <div className={styles.images}>
                                        {selectedImagesPreview &&
                                            selectedImagesPreview.map((image, index) => {
                                                return (
                                                    <div key={index} className={styles.image}>
                                                        <Image
                                                            src={image?.imgUrl || image}
                                                            height={180}
                                                            width={280}
                                                            alt="upload"
                                                        />
                                                        <button
                                                            className={styles.deleteButton}
                                                            onClick={(event) => {
                                                                event.preventDefault(); // Prevent the default behavior (form submission)
                                                                handleDeleteImage(image);
                                                            }}
                                                        >
                                                            <FontAwesomeIcon icon={faTimesCircle} />
                                                        </button>
                                                    </div>
                                                );
                                            })}
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <></>
                        )}
                        {menuActive === 5 ? (
                            <div id="menu1" className={`tab-pane fade ${menuActive === 5 ? 'in active' : ''}`}>
                                <div className="inn-title">
                                    <h4>{t('Room Address')}</h4>
                                </div>
                                <div className={styles.box}>
                                    <div className="row">
                                        <div className="input-field col s12">
                                            <br />
                                            <input
                                                id="addressDetail"
                                                type="text"
                                                className="validate"
                                                name="addressDetail"
                                                defaultValue={room.address.split(',')[0]}
                                                style={{ height: '3rem' }}
                                                {...register('addressDetail')}
                                            />
                                            <label htmlFor="addressDetail">{t('Detailed Address')}</label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="input-field col s12">
                                            <label htmlFor="address">{t('Address')}</label>
                                        </div>
                                    </div>
                                    <br />
                                    <div className={`row ${styles.custom_row}`}>
                                        <div className="col s3 no-left custom">
                                            <div>
                                                <Select
                                                    id="selectOption"
                                                    options={provinceOptions || []}
                                                    placeholder={t('Select a province')}
                                                    isSearchable
                                                    styles={customStyles}
                                                    value={provinceRef}
                                                    onChange={handleChangeProvince}
                                                />
                                            </div>
                                        </div>
                                        <div className="col s3 no-left custom">
                                            <div>
                                                <Select
                                                    id="selectOption"
                                                    options={districts || []}
                                                    placeholder={t('Select a district')}
                                                    isSearchable
                                                    styles={customStyles}
                                                    value={districtRef}
                                                    key={districtRef}
                                                    onChange={handleChangeDistrict}
                                                />
                                            </div>
                                        </div>
                                        <div className="col s3 no-left custom">
                                            <div>
                                                <Controller
                                                    name="wardCode"
                                                    control={control}
                                                    render={({ field }) => (
                                                        <Select
                                                            {...field}
                                                            id="selectOption"
                                                            options={wards || []}
                                                            placeholder={t('Select a ward')}
                                                            isSearchable
                                                            styles={customStyles}
                                                            value={wardRef}
                                                            onChange={(e) => setWardRef(e)}
                                                        />
                                                    )}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s12" style={{ marginTop: '0' }}>
                                        <input
                                            type="submit"
                                            className="waves-effect waves-light btn-large"
                                            value="Save"
                                        />
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <></>
                        )}
                    </div>
                </div>
            </div>
        </form>
    );
}

export default UpdateRoom;
