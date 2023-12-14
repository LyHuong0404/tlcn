import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import styles from './Survey.module.scss';
import Image from '../Image';
import images from '~/assets/images';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import { useForm } from 'react-hook-form';
import { makeSurvey } from '~/actions/userActions';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';

function Survey({ onClose }) {
    const { register, handleSubmit } = useForm();
    const { user } = useSelector((state) => state.auth);
    const [price, setPrice] = useState([0, 10000000]);
    const [isOpen, setIsOpen] = useState(true);

    const handleChangePrice = (event, newValue) => {
        setPrice(newValue);
    };

    const submitForm = (data) => {
        const registerNotify = true;
        const priceMin = price[0];
        const priceMax = price[1];
        const attic = data.attic;
        const furnitureAvailable = data.furnitureAvailable;
        const airConditionAvailable = data.airConditionAvailable;
        const isFreeParking = data.isFreeParking;
        const privateToilet = data.privateToilet;
        const allowedPet = data.allowedPet;

        try {
            const fetchData = async () => {
                const rs = await makeSurvey({
                    registerNotify,
                    priceMin,
                    priceMax,
                    attic,
                    furnitureAvailable,
                    airConditionAvailable,
                    isFreeParking,
                    privateToilet,
                    allowedPet,
                });
                if (rs?.success) {
                    onClose();
                    toast.success('Thank you for your survey!');
                }
            };
            fetchData();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className={`${isOpen ? styles.wrapper : styles.wrapperclose}`}>
            <form onSubmit={handleSubmit(submitForm)}>
                <div className={styles.edit_form}>
                    <div className={styles.edit_form_overlay}></div>
                    <div className={styles.edit_form_body}>
                        <div style={{ height: '60px', padding: '15px 25px 0 0' }}>
                            <FontAwesomeIcon
                                icon={faXmark}
                                className={styles.icon_close}
                                onClick={() => {
                                    setIsOpen(false);
                                    onClose();
                                }}
                            />
                        </div>
                        <div className={styles.content}>
                            <div className={styles.form_image}>
                                <div style={{ textAlign: 'center' }}>
                                    <h3>
                                        Hello, <strong>{user.username}</strong>
                                    </h3>
                                    <p>For better suggestions, help us complete a few questions!</p>
                                </div>
                                <Image src={images.survey} />
                            </div>
                            <div className={styles.form_survey}>
                                <p>What kind of room are you looking for?</p>
                                <span className={styles.title_option}>Price</span>
                                <div style={{ margin: '10px 0 0 10px' }}>
                                    <Slider
                                        value={price}
                                        onChange={handleChangePrice}
                                        valueLabelDisplay="auto"
                                        aria-labelledby="range-slider"
                                        min={0}
                                        max={10000000}
                                    />
                                    <Typography variant="body3">
                                        {price[0]} - {price[1]}
                                    </Typography>
                                </div>

                                <br />
                                <span className={styles.title_option}>Amenities</span>
                                <div style={{ margin: '10px 0 0 5px' }}>
                                    <div style={{ display: 'flex' }}>
                                        <div style={{ width: '50%' }}>
                                            <input type="checkbox" id="attic" name="attic" {...register('attic')} />
                                            <label htmlFor="attic">Attic</label>
                                        </div>

                                        <input
                                            type="checkbox"
                                            id="isFreeParking"
                                            name="isFreeParking"
                                            {...register('isFreeParking')}
                                        />
                                        <label htmlFor="isFreeParking">Free Parking</label>
                                    </div>
                                    <div style={{ display: 'flex' }}>
                                        <div style={{ width: '50%' }}>
                                            <input
                                                type="checkbox"
                                                id="allowedPet"
                                                name="allowedPet"
                                                {...register('allowedPet')}
                                            />
                                            <label htmlFor="allowedPet">Allowed Pet</label>
                                        </div>

                                        <div>
                                            <input
                                                type="checkbox"
                                                id="airConditionAvailable"
                                                name="airConditionAvailable"
                                                {...register('airConditionAvailable')}
                                            />
                                            <label htmlFor="airConditionAvailable">Air Conditioning</label>
                                        </div>
                                    </div>
                                    <div style={{ display: 'flex' }}>
                                        <div style={{ width: '50%' }}>
                                            <input
                                                type="checkbox"
                                                id="privateToilet"
                                                name="privateToilet"
                                                {...register('privateToilet')}
                                            />
                                            <label htmlFor="privateToilet">Private Toilet</label>
                                        </div>
                                        <input
                                            type="checkbox"
                                            id="furnitureAvailable"
                                            name="furnitureAvailable"
                                            {...register('furnitureAvailable')}
                                        />
                                        <label htmlFor="furnitureAvailable">Furniture Available</label>
                                    </div>
                                </div>
                                <button type="submit" className={styles.btn_submit}>
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Survey;
