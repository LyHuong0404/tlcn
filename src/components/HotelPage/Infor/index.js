import { Navigation, Pagination, Scrollbar, A11y, Zoom } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './Infor.module.scss';
import { useEffect, useState } from 'react';
import Image from '~/components/Image';
import { Rating } from '@mui/material';
// Import Swiper styles
import 'swiper/swiper-bundle.css';
import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/zoom';
import { Link, useParams } from 'react-router-dom';
import RoomLocation from '~/components/RoomLocation';
import { useForm } from 'react-hook-form';
import { addReview } from '~/actions/userActions';
import { getListReviews } from '~/actions/otherActions';
import { useTranslation } from 'react-i18next';

function Infor({ data }) {
    const { t } = useTranslation();
    const params = useParams();
    const id = params.id;
    const { register, handleSubmit } = useForm();
    const [photoActive, setPhotoActive] = useState(true);
    const [mapActive, setMapActive] = useState(false);
    const [menuActive, setMenuActive] = useState(1);
    const [rating, setRating] = useState(5);
    const [review, setReview] = useState({});

    useEffect(() => {
        try {
            const fetchData = async () => {
                const rs = await getListReviews(id, 0);
                setReview(rs?.content[0]);
            };
            fetchData();
        } catch (error) {
            console.log(error);
        }
    }, []);

    const handleActive = () => {
        setPhotoActive(!photoActive);
        setMapActive(!mapActive);
    };

    const handleChangeRating = (event, newValue) => {
        setRating(newValue);
    };

    const submitForm = (dataSubmit) => {
        let fullData = { ...dataSubmit, roomId: data.room.id, star: rating };
        const formData = new FormData();
        for (const key in fullData) {
            formData.append(key, fullData[key]);
        }
        try {
            const fetchData = async () => {
                const rs = await addReview(formData);
                console.log(rs);
            };
            fetchData();
        } catch (error) {
            console.log(error);
        }
    };

    const renderStars = (averageStar) => {
        const stars = Array.from({ length: 5 }, (_, index) => (
            <i key={index} className={`fa fa-star ${index < averageStar ? 'htlfndr-star-color' : ''}`}></i>
        ));

        return <>{stars}</>;
    };
    return (
        <main
            id="htlfndr-main-content"
            className="col-sm-12 col-md-8 col-lg-9 post htlfndr-hotel-single-content"
            role="main"
        >
            <section id="htlfndr-gallery-and-map-tabs">
                <button
                    onClick={handleActive}
                    style={{ padding: '11px' }}
                    className={photoActive ? styles.outline_active : styles.outline}
                >
                    {t('PHOTO')}
                </button>
                <button
                    onClick={handleActive}
                    style={{ padding: '11px' }}
                    className={mapActive ? styles.outline_active : styles.outline}
                >
                    {t('MAP')}
                </button>
                {mapActive ? (
                    <RoomLocation address={data?.room?.address} />
                ) : (
                    <div id="htlfndr-gallery-tab-1" className="htlfndr-hotel-gallery">
                        <div id="htlfndr-gallery-synced-1" className="htlfndr-gallery-carousel">
                            <div id="htlfndr-room-slider" className={styles.SliderWrapper}>
                                <Swiper
                                    modules={[Zoom, Navigation, Pagination, Scrollbar, A11y]}
                                    spaceBetween={50}
                                    slidesPerView={1}
                                    // loop={true}
                                    zoom={true}
                                    // navigation={true}
                                    grabCursor={true}
                                    pagination={{ clickable: true }}
                                >
                                    {data?.room?.images.map((slide, index) => (
                                        <div className="htlfndr-gallery-item swiper-zoom-container" key={index}>
                                            <SwiperSlide key={index}>
                                                <Image src={slide.imgUrl} alt="cwef" className={styles.slide} />
                                            </SwiperSlide>
                                        </div>
                                    ))}
                                </Swiper>
                            </div>

                            <br />
                        </div>
                    </div>
                )}
            </section>
            {/* infor */}
            <section id="htlfndr-hotel-description-tabs">
                <div>
                    <button
                        onClick={() => setMenuActive(1)}
                        className={`group-button ${menuActive === 1 ? styles.active : styles.outline}`}
                    >
                        {t('DESCRIPTION')}
                    </button>

                    <button
                        onClick={() => setMenuActive(3)}
                        className={`group-button ${menuActive === 3 ? styles.active : styles.outline}`}
                    >
                        {t('AMENITIES')}
                    </button>

                    <button
                        onClick={() => setMenuActive(4)}
                        className={`group-button ${menuActive === 4 ? styles.active : styles.outline}`}
                    >
                        {t('REVIEWS')}
                    </button>
                    {data?.isCanReview && (
                        <button
                            onClick={() => setMenuActive(5)}
                            className={`group-button ${menuActive === 5 ? styles.active : styles.outline}`}
                        >
                            {t('WRITE A REVIEW')}
                        </button>
                    )}

                    {/* isCanReview */}
                </div>
                {menuActive === 1 ? (
                    <div id="htlfndr-hotel-description-tab-1" className="htlfndr-hotel-description-tab">
                        <div className="row">
                            <div className="col-md-5 htlfndr-description-table">
                                <table>
                                    <tbody>
                                        <tr>
                                            <th scope="row">{t('type')}:</th>
                                            <td>{t('boarding house')}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">{t('rating stars')}:</th>
                                            <td>
                                                {data?.room?.averageStar} {t('stars')}
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">{t('width')}:</th>
                                            <td>{`${data?.room?.width} m2`}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">{t('height')}:</th>
                                            <td>{`${data?.room?.height} m2`}</td>
                                        </tr>

                                        <tr>
                                            <th scope="row">{t('phone')}:</th>
                                            <td>{data?.room?.phone}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">{t('Person')}:</th>
                                            <td>{data?.room?.totalPerson}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">{t('Electricity fee')}:</th>
                                            <td>
                                                {data?.room?.priceElectric}/{t('block')}
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">{t('water fee')}:</th>
                                            <td>
                                                {data?.room?.priceWater}/{t('block')}
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">{t('Price/month')}:</th>
                                            <td>{data?.room?.price}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">{t('address')}:</th>
                                            <td>{data?.room?.address}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="col-md-7 htlfndr-description-right-side">
                                <div className="media">
                                    <div className="media-left">
                                        <Image
                                            className="media-object"
                                            src={data?.room?.ownerAvatarUrl}
                                            alt={data?.room?.ownerName}
                                        />
                                    </div>
                                    <div className="media-body">
                                        <h5>{t('manager')}</h5>
                                        <h4 className="media-heading">{data?.room?.ownerName}</h4>
                                    </div>
                                </div>
                                <blockquote>
                                    <p>
                                        {t(
                                            'Lodging always puts prestige first. Security is always guaranteed and necessary amenities are provided for rooms. If you are interested in us or are looking for a room, please make an appointment with us. Our room always welcomes you to join this shared house. Thanks!',
                                        )}
                                    </p>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                ) : (
                    <></>
                )}
                {menuActive === 2 ? (
                    <div id="htlfndr-hotel-description-tab-2" className="htlfndr-hotel-description-tab">
                        <section className="htlfndr-available-rooms-section">
                            <header>
                                <h3>available rooms</h3>
                            </header>
                            <article className="htlfndr-tab-article htlfndr-second-tab-post">
                                <div>
                                    <div className="htlfndr-post-thumbnail">
                                        <Image
                                            src="images/top-destination-1.jpg"
                                            alt="room pic"
                                            className={styles.image_available_room}
                                        />
                                    </div>
                                    <div className="htlfndr-post-wrapper">
                                        <header>
                                            <h2 className="htlfndr-post-title">King Family Suite</h2>
                                        </header>
                                        <h6 className="htlfndr-post-info">
                                            max Guests:
                                            <span className="htlfndr-guests">7</span> max Kids:
                                            <span className="htlfndr-kids">3</span>
                                        </h6>
                                        <p className="htlfndr-post-excerpt">
                                            Lodging always puts prestige first. Security is always guaranteed and
                                            necessary amenities are provided for rooms. If you are interested in us or
                                            are looking for a room, please make an appointment with us. Our room always
                                            welcomes you to join this shared house. Thanks!
                                        </p>
                                        <p className="htlfndr-button-block">
                                            <a
                                                className="htlfndr-select-hotel-button"
                                                role="button"
                                                href="hotel-room-page.html"
                                            >
                                                select
                                            </a>
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <div className="htlfndr-post-thumbnail">
                                        <Image
                                            src="images/hotel-4-notinclude.jpg"
                                            alt="room pic"
                                            className={styles.image_available_room}
                                        />
                                    </div>
                                    <div className="htlfndr-post-wrapper">
                                        <header>
                                            <h2 className="htlfndr-post-title">Twin Room</h2>
                                        </header>
                                        <h6 className="htlfndr-post-info">
                                            max Guests:
                                            <span className="htlfndr-guests">7</span> max Kids:
                                            <span className="htlfndr-kids">3</span>
                                        </h6>
                                        <p className="htlfndr-post-excerpt">
                                            Lodging always puts prestige first. Security is always guaranteed and
                                            necessary amenities are provided for rooms. If you are interested in us or
                                            are looking for a room, please make an appointment with us. Our room always
                                            welcomes you to join this shared house. Thanks!
                                        </p>
                                        <p className="htlfndr-button-block">
                                            <a
                                                className="htlfndr-select-hotel-button"
                                                role="button"
                                                href="hotel-room-page.html"
                                            >
                                                select
                                            </a>
                                        </p>
                                    </div>
                                </div>
                                <a href="/moreavailableroom">
                                    <i className="fa fa-eye"></i>View all available rooms
                                </a>
                            </article>
                        </section>
                    </div>
                ) : (
                    <></>
                )}
                {menuActive === 3 ? (
                    <div id="htlfndr-hotel-description-tab-3" className="htlfndr-hotel-description-tab">
                        <article className="htlfndr-tab-article htlfndr-third-tab-post">
                            <header>
                                <h3>{t('amenities of room')}</h3>
                            </header>
                            <p className="htlfndr-post-excerpt">
                                {t(
                                    'Lodging always puts prestige first. Security is always guaranteed and necessary amenities are provided for rooms. If you are interested in us or are looking for a room, please make an appointment with us. Our room always welcomes you to join this shared house. Thanks!',
                                )}
                            </p>

                            <footer className="row htlfndr-amenities">
                                <div className="col-md-4 col-sm-6 col-xs-6">
                                    <div className="htlfndr-amenities-icon">
                                        <i className="fa fa-wifi"></i>
                                    </div>
                                    <p>Wi-Fi internet</p>
                                </div>
                                {data?.room?.attic && (
                                    <div className="col-md-4 col-sm-6 col-xs-6">
                                        <div className="htlfndr-amenities-icon">
                                            <i className="fa fa-expand"></i>
                                        </div>
                                        <p>{t('Attic')}</p>
                                    </div>
                                )}
                                {data?.room?.privateToilet && (
                                    <div className="col-md-4 col-sm-6 col-xs-6">
                                        <div className="htlfndr-amenities-icon">
                                            <i className="fa fa-adjust"></i>
                                        </div>
                                        <p>{t('Private Toilet')}</p>
                                    </div>
                                )}
                                {data?.room?.allowedPet && (
                                    <div className="col-md-4 col-sm-6 col-xs-6">
                                        <div className="htlfndr-amenities-icon">
                                            <i className="fa fa-paw"></i>
                                        </div>
                                        <p>{t('Allow Pet')}</p>
                                    </div>
                                )}
                                {data?.room?.furnitureAvailable && (
                                    <div className="col-md-4 col-sm-6 col-xs-6">
                                        <div className="htlfndr-amenities-icon">
                                            <i className="fa fa-plug"></i>
                                        </div>
                                        <p>{t('Furniture Available')}</p>
                                    </div>
                                )}
                                {data?.room?.tvAvailable && (
                                    <div className="col-md-4 col-sm-6 col-xs-6">
                                        <div className="htlfndr-amenities-icon">
                                            <i className="fa fa-cc-amex"></i>
                                        </div>
                                        <p>{t('Television')}</p>
                                    </div>
                                )}
                                {data?.room?.airConditionAvailable && (
                                    <div className="col-md-4 col-sm-6 col-xs-6">
                                        <div className="htlfndr-amenities-icon">
                                            <i className="fa fa-server"></i>
                                        </div>
                                        <p>{t('Air Conditioning')}</p>
                                    </div>
                                )}
                                {data?.room?.isFreeParking && (
                                    <div className="col-md-4 col-sm-6 col-xs-6">
                                        <div className="htlfndr-amenities-icon">
                                            <i className="fa fa-bicycle"></i>
                                        </div>
                                        <p>{t('Free Parking')}</p>
                                    </div>
                                )}
                            </footer>
                        </article>
                    </div>
                ) : (
                    <></>
                )}
                {menuActive === 4 ? (
                    <div id="htlfndr-hotel-description-tab-4" className="htlfndr-hotel-description-tab">
                        {review ? (
                            <>
                                <div className="htlfndr-hotel-marks">
                                    <div className="htlfndr-overview-rating">
                                        <div className="htlfndr-rating-stars">
                                            {renderStars(data?.room?.averageStar)}
                                        </div>
                                        <dl>
                                            <dt>
                                                <span>{data?.room?.averageStar}</span> {t('out of 5')}
                                            </dt>
                                            <dd>
                                                {t('based on')} <span>{data?.room?.totalReview}</span> {t('Reviews')}
                                            </dd>
                                        </dl>
                                    </div>
                                    <div className="htlfndr-detailed-rating">
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <th>{t('Amentinies')}</th>
                                                    <td className="htlfndr-meter-cell">
                                                        <meter className="htlfndr-meter" value="0.75" min="0" max="1">
                                                            <div className="meter-gauge">
                                                                <span style={{ width: '75.00%' }}></span>
                                                            </div>
                                                        </meter>
                                                    </td>
                                                    <td className="htlfndr-rating-cell">4.5</td>
                                                </tr>
                                                <tr>
                                                    <th>{t('room comfort')}</th>
                                                    <td className="htlfndr-meter-cell">
                                                        <meter className="htlfndr-meter" value="0.6" min="0" max="1">
                                                            <div className="meter-gauge">
                                                                <span style={{ width: '60.00%' }}></span>
                                                            </div>
                                                        </meter>
                                                    </td>
                                                    <td className="htlfndr-rating-cell">3</td>
                                                </tr>
                                                <tr>
                                                    <th>{t('Security')}</th>
                                                    <td className="htlfndr-meter-cell">
                                                        <meter className="htlfndr-meter" value="0.9" min="0" max="1">
                                                            <div className="meter-gauge">
                                                                <span style={{ width: '90.00%' }}></span>
                                                            </div>
                                                        </meter>
                                                    </td>
                                                    <td className="htlfndr-rating-cell">4.8</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className="clearfix"></div>
                                <div className="htlfndr-visitor-review">
                                    <div className="htlfndr-review-left-side">
                                        <div className="htlfndr-visitor-avatar">
                                            <Image
                                                src={review?.user.avatar}
                                                alt={review?.user.username}
                                                style={{ height: '118px' }}
                                            />
                                        </div>
                                        <div className="htlfndr-visitor-flag">
                                            <Image src={review?.user.avatar} alt={review?.user.username} />
                                        </div>
                                        <dl>
                                            <dt>{review?.user.username}</dt>
                                        </dl>
                                    </div>
                                    <div className="htlfndr-review-right-side">
                                        <article className="htlfndr-visitor-post">
                                            <header>
                                                <h3>{t('REVIEW ROOM')}</h3>
                                                <h6>{review?.time}</h6>
                                            </header>
                                            <div className="htlfndr-rating-stars">
                                                {renderStars(data?.room?.averageStar)}
                                            </div>
                                            <p>{review?.content}</p>
                                        </article>
                                    </div>
                                </div>
                                <div className="htlfndr-second-tab-post" style={{ marginBottom: '20px' }}>
                                    <Link
                                        to="/allreviews"
                                        state={{
                                            step: 2,
                                            id: id,
                                        }}
                                    >
                                        <i className="fa fa-eye"></i>
                                        {t('View more reviews')}
                                    </Link>
                                </div>
                            </>
                        ) : (
                            <p>{t('Room has no comments yet.')}</p>
                        )}
                    </div>
                ) : (
                    <></>
                )}
                {menuActive === 5 ? (
                    <div id="htlfndr-hotel-description-tab-5" className="htlfndr-hotel-description-tab">
                        <form onSubmit={handleSubmit(submitForm)} className="htlfndr-review-form">
                            <div className="htlfndr-form-left-side">
                                <label htmlFor="review-text">{t('review text')}</label>
                                <textarea
                                    name="review-text"
                                    id="review-text"
                                    className="htlfndr-review-form-input"
                                    {...register('content', { required: true })}
                                ></textarea>
                            </div>
                            <div className="htlfndr-form-right-side">
                                <div className="htlfndr-radio-set">
                                    <h3>{t('Amentinies')}</h3>
                                    <Rating
                                        size="large"
                                        name="Amentinies"
                                        value={rating}
                                        onChange={handleChangeRating}
                                    />
                                </div>
                                <div className="htlfndr-radio-set">
                                    <h3>{t('room comfort')}</h3>
                                    <Rating size="large" name="comfort" value={5} />
                                </div>
                                <div className="htlfndr-radio-set">
                                    <h3>{t('Security')}</h3>
                                    <Rating size="large" name="Security" value={5} />
                                </div>
                            </div>
                            <div className="clearfix"></div>
                            <input type="submit" value={t('Leave a Review')} className="btn-default" />
                        </form>
                    </div>
                ) : (
                    <></>
                )}
            </section>
        </main>
    );
}

export default Infor;
