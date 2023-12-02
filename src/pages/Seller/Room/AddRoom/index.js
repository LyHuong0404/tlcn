/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './AddRoom.module.scss';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudUploadAlt, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import Image from '~/components/Image';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
import { getProvinces, getDistricts, getWards } from '~/actions/addressActions';
import { newRoom } from '~/actions/sellerActions';

function AddRoom() {
    const dispatch = useDispatch();
    const { provins } = useSelector((state) => state.provins);
    const { districts } = useSelector((state) => state.districts);
    const { wards } = useSelector((state) => state.wards);
    const [menuActive, setMenuActive] = useState(1);
    const [selectedImagesPreview, setSelectedImagesPreview] = useState([]);
    const [imageFiles, setImageFiles] = useState([]);
    const { register, handleSubmit } = useForm();
    const [filePreview, setFilePreview] = useState('');
    const [avatar, setAvatar] = useState('');

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
        setImageFiles(selectedFilesArray);
        setSelectedImagesPreview((previousImages) => previousImages.concat(imagesArray));

        event.target.value = '';
    };

    useEffect(() => {
        dispatch(getProvinces());
    }, [dispatch]);

    const handleDeleteHandler = (image) => {
        setSelectedImagesPreview(selectedImagesPreview.filter((e) => e !== image));
        URL.revokeObjectURL(image);
    };

    const handleChangeProvince = (e) => {
        dispatch(getDistricts(e.target.value));
    };

    const handleChangeDistrict = (e) => {
        dispatch(getWards(e.target.value));
    };

    const submitForm = (data) => {
        const fullData = {
            ...data,
            avatarFile: avatar,
            imagesFile: imageFiles,
        };

        const formData = new FormData();
        for (const key in fullData) {
            formData.append(key, fullData[key]);
        }
        const fetchData = async () => {
            try {
                const data = await newRoom(formData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
        // navigate('/');
    };

    return (
        <form onSubmit={handleSubmit(submitForm)} encType="multipart/form-data">
            <div className="sb2-2">
                <div className="sb2-2-2">
                    <ul>
                        <li>
                            <Link to="/seller/dashboard">
                                <i className="fa fa-home" aria-hidden="true"></i> Home
                            </Link>
                        </li>
                        <li className="active-bre">
                            <a className="txt-none"> Add Room</a>
                        </li>
                    </ul>
                </div>
                <div className="sb2-2-add-blog sb2-2-1">
                    <h2>Add Room Detail</h2>
                    <ul className="nav nav-tabs tab-list" style={{ marginTop: '10px' }}>
                        <li className={menuActive === 1 ? 'active' : ''} onClick={() => setMenuActive(1)}>
                            <Link data-toggle="tab">
                                <i className="fa fa-info" aria-hidden="true"></i> <span>Detail</span>
                            </Link>
                        </li>
                        <li className={menuActive === 2 ? 'active' : ''} onClick={() => setMenuActive(2)}>
                            <Link data-toggle="tab">
                                <i className="fa fa-map-marker" aria-hidden="true"></i> <span>Address</span>
                            </Link>
                        </li>
                        <li className={menuActive === 3 ? 'active' : ''} onClick={() => setMenuActive(3)}>
                            <Link data-toggle="tab">
                                <i className="fa fa-picture-o" aria-hidden="true"></i> <span>Photo Gallery</span>
                            </Link>
                        </li>
                        <li className={menuActive === 4 ? 'active' : ''} onClick={() => setMenuActive(4)}>
                            <Link data-toggle="tab">
                                <i className="fa fa-bed" aria-hidden="true"></i> <span>Facilities</span>
                            </Link>
                        </li>
                    </ul>
                    <div className="tab-content">
                        {menuActive === 1 ? (
                            <div id="home" className={`tab-pane fade ${menuActive === 1 ? 'in active' : ''}`}>
                                <div className="box-inn-sp">
                                    <div className="inn-title">
                                        <h4>Listing Information</h4>
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
                                                    {...register('subject', { required: true })}
                                                />
                                                <label htmlFor="list-title">Name</label>
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
                                                    {...register('width', { required: true })}
                                                />
                                                <label htmlFor="t2-width">Width (m)</label> <br />
                                            </div>

                                            <div className="input-field col s3">
                                                <br />
                                                <input
                                                    id="t2-height"
                                                    type="number"
                                                    className="validate"
                                                    name="height"
                                                    {...register('height', { required: true })}
                                                />
                                                <label htmlFor="t2-height">Height (m)</label> <br />
                                            </div>

                                            <div className="input-field col s3">
                                                <br />
                                                <input
                                                    id="t2-price"
                                                    type="number"
                                                    className="validate"
                                                    name="price"
                                                    {...register('price', { required: true })}
                                                />
                                                <label htmlFor="t2-price">Price (VNĐ)</label> <br />
                                            </div>
                                            <div className="input-field col s3">
                                                <br />
                                                <input
                                                    id="guests"
                                                    type="number"
                                                    className="validate"
                                                    name="totalPerson"
                                                    {...register('totalPerson', { required: true })}
                                                />
                                                <label htmlFor="guests">Guests</label> <br />
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
                                                <label htmlFor="textarea1">Descriptions:</label> <br />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <></>
                        )}
                        {menuActive === 2 ? (
                            <div id="menu1" className={`tab-pane fade ${menuActive === 2 ? 'in active' : ''}`}>
                                <div className="inn-title">
                                    <h4>Room Address</h4>
                                </div>
                                <div className={styles.box}>
                                    <div className={`row ${styles.custom_row}`}>
                                        <div className="col s3 no-left">
                                            <Box sx={{ minWidth: 120 }}>
                                                <FormControl fullWidth>
                                                    <InputLabel id="demo-simple-select-label">
                                                        Choose a province
                                                    </InputLabel>
                                                    <Select
                                                        labelId="demo-simple-select-label"
                                                        id="demo-simple-select"
                                                        value={provins.code}
                                                        label="Choose a province"
                                                        onChange={handleChangeProvince}
                                                        defaultValue=""
                                                    >
                                                        {provins?.map((e) => (
                                                            <MenuItem key={e.code} value={e.code}>
                                                                {e.name}
                                                            </MenuItem>
                                                        ))}
                                                    </Select>
                                                </FormControl>
                                            </Box>
                                        </div>
                                        <div className="col s3 no-left">
                                            <Box sx={{ minWidth: 120 }}>
                                                <FormControl fullWidth>
                                                    <InputLabel id="demo-simple-select-label">
                                                        Choose a district
                                                    </InputLabel>
                                                    <Select
                                                        labelId="demo-simple-select-label"
                                                        id="demo-simple-select"
                                                        value={districts?.code}
                                                        label="Choose a district"
                                                        onChange={handleChangeDistrict}
                                                        defaultValue=""
                                                    >
                                                        {districts?.map((e) => (
                                                            <MenuItem key={e.code} value={e.code}>
                                                                {e.name}
                                                            </MenuItem>
                                                        ))}
                                                    </Select>
                                                </FormControl>
                                            </Box>
                                        </div>
                                        <div className="col s3 no-left">
                                            <Box sx={{ minWidth: 120 }}>
                                                <FormControl fullWidth>
                                                    <InputLabel id="demo-simple-select-label">Choose a ward</InputLabel>
                                                    <Select
                                                        value={wards?.code}
                                                        label="Choose a ward"
                                                        defaultValue=""
                                                        name="wardCode"
                                                        {...register('wardCode', { required: true })}
                                                    >
                                                        {wards?.map((e) => (
                                                            <MenuItem key={e.code} value={e.code}>
                                                                {e.name}
                                                            </MenuItem>
                                                        ))}
                                                    </Select>
                                                </FormControl>
                                            </Box>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="input-field col s12">
                                            <br />
                                            <input
                                                id="detail-address"
                                                type="text"
                                                className="validate"
                                                name="address"
                                                {...register('addressDetail', { required: true })}
                                            />
                                            <label htmlFor="detail-address">Detailed Address</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <></>
                        )}
                        {menuActive === 3 ? (
                            <div id="menu2" className={`tab-pane fade ${menuActive === 3 ? 'in active' : ''}`}>
                                <div className="inn-title">
                                    <h4>Photo Gallery</h4>
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
                                                        <p>Drop files here or click to upload.</p>
                                                        <span>
                                                            (This is just a demo dropzone. Selected files are
                                                            <strong> not</strong> actually uploaded.)
                                                        </span>
                                                    </div>
                                                </>
                                            )}
                                        </div>
                                    </label>
                                    <div className={styles.images}>
                                        {selectedImagesPreview &&
                                            selectedImagesPreview.map((image, index) => {
                                                return (
                                                    <div key={image} className={styles.image}>
                                                        <Image src={image} height={180} width={280} alt="upload" />
                                                        <button
                                                            className={styles.deleteButton}
                                                            onClick={() => handleDeleteHandler(image)}
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
                        {menuActive === 4 ? (
                            <div id="menu4" className={`tab-pane fade ${menuActive === 4 ? 'in active' : ''}`}>
                                <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                                    <div className="inn-title">
                                        <h4>Facilities</h4>
                                    </div>
                                    <div className="inn-title">
                                        <h4>Avatar Room</h4>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col s6">
                                        <div className={styles.box} style={{ padding: '25px' }}>
                                            <input
                                                type="checkbox"
                                                id="item1"
                                                className="filled-in"
                                                name="attic"
                                                {...register('attic')}
                                            />
                                            <label htmlFor="item1">Attic</label>
                                            <br />

                                            <input
                                                type="checkbox"
                                                id="item2"
                                                name="privateToilet"
                                                className="filled-in"
                                                {...register('privateToilet')}
                                            />

                                            <label htmlFor="item2">Private Toilet</label>
                                            <br />

                                            <input
                                                type="checkbox"
                                                id="item3"
                                                name="allowedPet"
                                                className="filled-in"
                                                {...register('allowedPet')}
                                            />
                                            <label htmlFor="item3">Allow Pet</label>
                                            <br />

                                            {/* <input type="checkbox" id="item4" name="allowedPet" className="filled-in" />
                                            <label htmlFor="item4">Allow Pet</label>
                                            <br />

                                            <input type="checkbox" id="item5" name="allowedPet" className="filled-in" />
                                            <label htmlFor="item5">Allow Pet</label>
                                            <br /> */}
                                        </div>
                                    </div>
                                    <div className="col s6 content profile">
                                        <div className={styles.upload}>
                                            {avatar ? (
                                                <>
                                                    <Image
                                                        className={styles.avatarPreview}
                                                        src={avatar ? filePreview : ''}
                                                        // src={avatar ? filePreview : currentUser.avatar}
                                                        alt="avatar"
                                                    />
                                                    <input
                                                        type="file"
                                                        style={{ display: 'none' }}
                                                        onChange={handleAvatar}
                                                        name="avatarFile"
                                                    />
                                                </>
                                            ) : (
                                                <label>
                                                    <input
                                                        type="file"
                                                        style={{ display: 'none' }}
                                                        onChange={handleAvatar}
                                                    />
                                                    <h1>
                                                        <i className="fas fa-camera"></i>
                                                        <p>Drop file here or click to upload</p>
                                                    </h1>
                                                </label>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s12" style={{ marginTop: '0' }}>
                                        <input
                                            type="submit"
                                            className="waves-effect waves-light btn-large"
                                            value="Submit"
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

export default AddRoom;
