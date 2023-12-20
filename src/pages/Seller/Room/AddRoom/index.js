/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styles from './AddRoom.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudUploadAlt, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import Image from '~/components/Image';
import { getDistricts, getWards } from '~/actions/addressActions';
import { newRoom } from '~/actions/sellerActions';
import { toast } from 'react-toastify';
import Select from 'react-select';
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

function AddRoom() {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const { provins } = useSelector((state) => state.provins);
    const { control, register, handleSubmit } = useForm();
    const [menuActive, setMenuActive] = useState(1);
    const [selectedImagesPreview, setSelectedImagesPreview] = useState([]);
    const [imageFiles, setImageFiles] = useState(null);
    const [filePreview, setFilePreview] = useState('');
    const [avatar, setAvatar] = useState('');
    const [districts, setDistricts] = useState([]);
    const [wards, setWards] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        return () => {
            avatar && URL.revokeObjectURL(avatar);
        };
    }, [avatar]);

    const handleAvatar = (e) => {
        const src = URL.createObjectURL(e.target.files[0]);
        setFilePreview(src);
        setAvatar(e.target.files[0]);
    };
    const onSelectFile = (event) => {
        const selectedFiles = event.target.files;
        const selectedFilesArray = Array.from(selectedFiles);
        const imagesArray = selectedFilesArray.map((file) => {
            return URL.createObjectURL(file);
        });
        setImageFiles((previous) => (previous ? [...previous, ...selectedFilesArray] : selectedFilesArray));
        setSelectedImagesPreview((previousImages) => previousImages.concat(imagesArray));

        event.target.value = '';
    };

    const handleDeleteImage = (image) => {
        setSelectedImagesPreview(selectedImagesPreview.filter((e) => e !== image));
        setImageFiles(imageFiles.filter((e) => e !== image));
        URL.revokeObjectURL(image);
    };

    const handleChangeProvince = (e) => {
        const fetchData = async () => {
            const result = await getDistricts(e?.code);
            const districtOptions = result?.map((district) => ({
                code: district.code,
                label: district.name,
                value: district.name,
            }));
            setDistricts(districtOptions);
        };
        fetchData();
    };

    const handleChangeDistrict = (e) => {
        const fetchData = async () => {
            const result = await getWards(e.code);
            const wardOptions = result?.map((ward) => ({
                code: ward.code,
                label: ward.name,
                value: ward.name,
            }));
            setWards(wardOptions);
        };
        fetchData();
    };

    const submitForm = (data) => {
        const fullData = {
            ...data,
            wardCode: data?.wardCode?.code,
            avatarFile: avatar,
            imagesFile: imageFiles,
        };
        const formData = new FormData();
        for (const key in fullData) {
            if (key === 'imagesFile') {
                if (Array.isArray(imageFiles))
                    for (let file of imageFiles) {
                        formData.append('imagesFile', file);
                    }
            } else {
                formData.append(key, fullData[key]);
            }
        }
        const fetchData = async () => {
            try {
                setLoading(true);
                const data = await newRoom(formData);
                if (data?.success) {
                    navigate('/seller/allrooms');
                    toast.success(t('Add Room successfully!'));
                }
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    };

    const provinceOptions = provins.map((province) => ({
        code: province.code,
        label: province.name,
        value: province.name,
    }));

    return (
        <>
            {loading && <Loading />}
            <form onSubmit={handleSubmit(submitForm)} encType="multipart/form-data">
                <div className="sb2-2">
                    <div className="sb2-2-2">
                        <ul>
                            <li>
                                <Link to="/seller/dashboard">
                                    <i className="fa fa-home" aria-hidden="true"></i> {t('Home')}
                                </Link>
                            </li>
                            <li className="active-bre">
                                <a className="txt-none"> {t('Add Room')}</a>
                            </li>
                        </ul>
                    </div>
                    <div className="sb2-2-add-blog sb2-2-1">
                        <h2>{t('Add Room Detail')}</h2>
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
                                    <i className="fa fa-money" aria-hidden="true"></i>{' '}
                                    <span>{t('Price & Avatar')}</span>
                                </Link>
                            </li>
                            <li className={menuActive === 4 ? 'active' : ''} onClick={() => setMenuActive(4)}>
                                <Link data-toggle="tab">
                                    <i className="fa fa-picture-o" aria-hidden="true"></i>{' '}
                                    <span>{t('Photo Gallery')}</span>
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
                                                        style={{ height: '3rem' }}
                                                        {...register('subject', { required: true })}
                                                    />
                                                    <label htmlFor="list-title">{t('Room Name')}</label>
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
                                                style={{
                                                    padding: '25px',
                                                    display: 'flex',
                                                    justifyContent: 'space-evenly',
                                                }}
                                            >
                                                <div>
                                                    <input
                                                        type="checkbox"
                                                        id="item4"
                                                        name="isFreeParking"
                                                        className="filled-in"
                                                        {...register('isFreeParking')}
                                                    />
                                                    <label htmlFor="item4">{t('Free Parking')}</label>
                                                    <br />

                                                    <input
                                                        type="checkbox"
                                                        id="item2"
                                                        name="tvAvailable"
                                                        className="filled-in"
                                                        {...register('tvAvailable')}
                                                    />

                                                    <label htmlFor="item2">{t('Television')}</label>
                                                    <br />

                                                    <input
                                                        type="checkbox"
                                                        id="item1"
                                                        className="filled-in"
                                                        name="furnitureAvailable"
                                                        {...register('furnitureAvailable')}
                                                    />
                                                    <label htmlFor="item1">{t('Furniture Available')}</label>
                                                    <br />

                                                    <input
                                                        type="checkbox"
                                                        id="item3"
                                                        name="airConditionAvailable"
                                                        className="filled-in"
                                                        {...register('airConditionAvailable')}
                                                    />
                                                    <label htmlFor="item3">{t('Air Conditioning')}</label>
                                                    <br />
                                                </div>
                                                <div>
                                                    <input
                                                        type="checkbox"
                                                        id="item5"
                                                        className="filled-in"
                                                        name="attic"
                                                        {...register('attic')}
                                                    />
                                                    <label htmlFor="item5">{t('Attic')}</label>
                                                    <br />

                                                    <input
                                                        type="checkbox"
                                                        id="item6"
                                                        name="privateToilet"
                                                        className="filled-in"
                                                        {...register('privateToilet')}
                                                    />

                                                    <label htmlFor="item6">{t('Private Toilet')}</label>
                                                    <br />

                                                    <input
                                                        type="checkbox"
                                                        id="item7"
                                                        name="allowedPet"
                                                        className="filled-in"
                                                        {...register('allowedPet')}
                                                    />
                                                    <label htmlFor="item7">{t('Allow Pet')}</label>
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
                                            <h4>{t('Room Avatar')}</h4>
                                        </div>
                                        <div className="inn-title">
                                            <h4>{t('Price')}</h4>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col s6 content profile">
                                            <div className={styles.upload}>
                                                {avatar ? (
                                                    <label htmlFor="avatarRoom">
                                                        <Image
                                                            className={styles.avatarPreview}
                                                            src={avatar ? filePreview : ''}
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
                                                ) : (
                                                    <label>
                                                        <input
                                                            type="file"
                                                            style={{ display: 'none' }}
                                                            onChange={handleAvatar}
                                                        />
                                                        <h1>
                                                            <i className="fas fa-camera"></i>
                                                            <p style={{ fontStyle: 'italic' }}>
                                                                {t('Drop file here or click to upload')}
                                                            </p>
                                                        </h1>
                                                    </label>
                                                )}
                                            </div>
                                        </div>
                                        <div className="col s6">
                                            <div className={styles.box} style={{ padding: '0 20px 25px 20px' }}>
                                                <div className="input-field">
                                                    <br />
                                                    <label htmlFor="t2-price">
                                                        {t('Price')} / {t('month')} (VNĐ)
                                                    </label>
                                                    <input
                                                        id="t2-price"
                                                        type="number"
                                                        className="validate"
                                                        style={{ height: '3rem' }}
                                                        name="price"
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
                                                            style={{ height: '3rem' }}
                                                            name="priceWater"
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
                                                            style={{ height: '3rem' }}
                                                            name="priceElectric"
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
                                                    <FontAwesomeIcon
                                                        icon={faCloudUploadAlt}
                                                        style={{ fontSize: '70px' }}
                                                    />
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
                                                            <Image src={image} height={180} width={280} alt="upload" />
                                                            <button
                                                                className={styles.deleteButton}
                                                                onClick={() => handleDeleteImage(image)}
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
                                                        issearchable="true"
                                                        styles={customStyles}
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
                                                        issearchable="true"
                                                        styles={customStyles}
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
                                                                id="selectOption"
                                                                options={wards || []}
                                                                placeholder={t('Select a ward')}
                                                                issearchable="true"
                                                                styles={customStyles}
                                                                {...field}
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
                                                value={t('Save')}
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
        </>
    );
}

export default AddRoom;
