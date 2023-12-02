import { Navigation, Pagination, Scrollbar, A11y, Zoom } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './Infor.module.scss';
import { useState } from 'react';
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
import { Link } from 'react-router-dom';

function Infor({ data }) {
    const slides = [
        {
            src: 'https://th.bing.com/th/id/OIP.AbyqDkpwVGUclMtO1kqv0QHaEV?w=271&h=191&c=7&r=0&o=5&dpr=1.3&pid=1.7',
            title: 'image',
        },
        {
            src: 'https://th.bing.com/th/id/OIP.IzjaEZKws0XXBiPhjUV22wHaNK?w=115&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
            title: 'image',
        },
        {
            src: 'https://th.bing.com/th/id/OIP.uXLLU88V0TEjbvPPIBchmQHaJQ?w=154&h=194&c=7&r=0&o=5&dpr=1.3&pid=1.7',
            title: 'image',
        },
        {
            src: 'https://th.bing.com/th/id/OIP.kbRzX1sx3MgH1iA-iJQXxQHaJq?w=147&h=194&c=7&r=0&o=5&dpr=1.3&pid=1.7',
            title: 'image',
        },
        {
            src: 'https://th.bing.com/th/id/OIP.vrbopt9dj0VSm784eXvGzAHaHa?w=194&h=194&c=7&r=0&o=5&dpr=1.3&pid=1.7',
            title: 'image',
        },
    ];
    const [photoActive, setPhotoActive] = useState(true);
    const [mapActive, setMapActive] = useState(false);
    const [menuActive, setMenuActive] = useState(1);
    const [rating, setRating] = useState(5);

    const handleActive = () => {
        setPhotoActive(!photoActive);
        setMapActive(!mapActive);
    };

    const handleChangeRating = (event, newValue) => {
        setRating(newValue);
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
                    PHOTO
                </button>
                <button
                    onClick={handleActive}
                    style={{ padding: '11px' }}
                    className={mapActive ? styles.outline_active : styles.outline}
                >
                    MAP
                </button>
                {/* images */}
                {mapActive ? (
                    <div id="htlfndr-gallery-tab-2">
                        <div className="htlfndr-iframe-wrapper">
                            <iframe
                                title="ggmap"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4461.6570805764695!2d-122.42764988684334!3d37.74624140010288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2z0KHQsNC9LdCk0YDQsNC90YbQuNGB0LrQviwg0JrQsNC70LjRhNC-0YDQvdC40Y8sINCh0KjQkA!5e0!3m2!1sru!2sua!4v1438339854639"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                ) : (
                    <div id="htlfndr-gallery-tab-1" className="htlfndr-hotel-gallery">
                        <div id="htlfndr-gallery-synced-1" className="htlfndr-gallery-carousel">
                            <div id="htlfndr-room-slider" className={styles.SliderWrapper}>
                                <Swiper
                                    modules={[Zoom, Navigation, Pagination, Scrollbar, A11y]}
                                    spaceBetween={50}
                                    slidesPerView={1}
                                    loop={true}
                                    zoom={true}
                                    // navigation={true}
                                    grabCursor={true}
                                    pagination={{ clickable: true }}
                                >
                                    {slides.map((slide, index) => (
                                        <div className="htlfndr-gallery-item swiper-zoom-container" key={index}>
                                            <SwiperSlide key={index}>
                                                <Image src={slide.src} alt={slide.title} className={styles.slide} />
                                            </SwiperSlide>
                                        </div>
                                    ))}
                                </Swiper>
                            </div>

                            <br />
                            {/* <Swiper
                                modules={[Zoom, Navigation, Pagination, Scrollbar, A11y]}
                                spaceBetween={10}
                                slidesPerView={4}
                                scrollbar={{ draggable: true }}
                                className={styles.slides_loop}
                            >
                                {slides.map((slide, index) => (
                                    <div className="htlfndr-gallery-item swiper-zoom-container" key={index}>
                                        <SwiperSlide key={index}>
                                            <Image src={slide.src} alt={slide.title} className={styles.small_slide} />
                                        </SwiperSlide>
                                    </div>
                                ))}
                            </Swiper> */}
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
                        DESCRIPTION
                    </button>
                    <button
                        onClick={() => setMenuActive(2)}
                        className={`group-button ${menuActive === 2 ? styles.active : styles.outline}`}
                    >
                        AVAILABILITY
                    </button>
                    <button
                        onClick={() => setMenuActive(3)}
                        className={`group-button ${menuActive === 3 ? styles.active : styles.outline}`}
                    >
                        AMENITIES
                    </button>

                    <button
                        onClick={() => setMenuActive(4)}
                        className={`group-button ${menuActive === 4 ? styles.active : styles.outline}`}
                    >
                        REVIEWS
                    </button>
                    <button
                        onClick={() => setMenuActive(5)}
                        className={`group-button ${menuActive === 5 ? styles.active : styles.outline}`}
                    >
                        WRITE A REVIEW
                    </button>
                </div>
                {menuActive === 1 ? (
                    <div id="htlfndr-hotel-description-tab-1" className="htlfndr-hotel-description-tab">
                        <div className="row">
                            <div className="col-md-5 htlfndr-description-table">
                                <table>
                                    <tbody>
                                        <tr>
                                            <th scope="row">type:</th>
                                            <td>hotel</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">rating stars:</th>
                                            <td>4 stars</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">country:</th>
                                            <td>usa</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">city:</th>
                                            <td>san francisco</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">address:</th>
                                            <td>Giudeca 810 st.</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">phone no:</th>
                                            <td>1-800-123-0000</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">check in:</th>
                                            <td>12-00 pm</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">check out:</th>
                                            <td>12-00 am</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">minimum stay:</th>
                                            <td>2 days</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="col-md-7 htlfndr-description-right-side">
                                <div className="media">
                                    <div className="media-left">
                                        <Image
                                            className="media-object"
                                            src="images/visitor-avatar-1.jpg"
                                            alt="client"
                                        />
                                    </div>
                                    <div className="media-body">
                                        <h5>hotel manager</h5>
                                        <h4 className="media-heading">jessica brown</h4>
                                    </div>
                                </div>
                                <blockquote>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, dolores
                                        eveniet laboriosam maxime molestias nulla quidem similique. Amet asperiores at
                                        esse expedita iusto magni, nam perferendis sequi? Molestias possimus, quasi.
                                        Amet asperiores at esse expedita iusto magni, nam perferendis sequi? Molestias
                                        possimus, quasi.
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
                        {/* <aside className="htlfndr-sidebar-in-top htlfndr-short-form">
                            <form name="search-hotel" id="search-hotel" className="htlfndr-search-form">
                                <div id="htlfndr-input-date-in" className="htlfndr-input-wrapper">
                                    <label htmlFor="htlfndr-date-in" className="sr-only">
                                        Date in
                                    </label>
                                    <input
                                        type="text"
                                        name="htlfndr-date-in"
                                        id="htlfndr-date-in"
                                        className="search-hotel-input"
                                    />
                                    <button type="button" className="htlfndr-clear-datepicker"></button>
                                </div>
                                <div id="htlfndr-input-date-out" className="htlfndr-input-wrapper">
                                    <label htmlFor="htlfndr-date-out" className="sr-only">
                                        Date out
                                    </label>
                                    <input
                                        type="text"
                                        name="htlfndr-date-out"
                                        id="htlfndr-date-out"
                                        className="search-hotel-input"
                                    />
                                    <button type="button" className="htlfndr-clear-datepicker"></button>
                                </div>
                                <div id="htlfndr-input-4" className="htlfndr-input-wrapper">
                                    <label htmlFor="htlfndr-dropdown" className="sr-only">
                                        Number person in room
                                    </label>
                                    <select name="htlfndr-dropdown" id="htlfndr-dropdown" className="htlfndr-dropdown">
                                        <option value="1 adult">1 adult</option>
                                        <option value="2 adults in 1 room">2 adults in 1 room</option>
                                        <option value="3 adults in 1 room">3 adults in 1 room</option>
                                        <option value="4 adults in 1 room">4 adults in 1 room</option>
                                        <option value="2 adults in 2 room">2 adults in 2 room</option>
                                        <option value="need more">Need more?</option>
                                    </select>
                                </div>
                                <div id="htlfndr-input-5" className="htlfndr-input-wrapper">
                                    <input type="submit" value="update" className="btn-default" />
                                </div>
                                <div className="clearfix"></div>
                            </form>
                        </aside> */}
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
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus alias
                                            beatae debitis deserunt eius esse, explicabo facilis hic!
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
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus alias
                                            beatae debitis deserunt eius esse, explicabo facilis hic!
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
                                <h3>amenities of hilton</h3>
                            </header>
                            <p className="htlfndr-post-excerpt">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium amet, animi
                                consequatur deleniti dignissimos eligendi error esse ex illum iusto officia quos unde!
                                Dolore illum iusto optio, porro rerum voluptates! Lorem ipsum dolor sit amet,
                                consectetur adipisicing elit. Debitis dolorem expedita impedit laboriosam minus nemo
                                nulla numquam similique voluptatem! Distinctio magnam nesciunt sequi. Error eum
                                molestias neque sunt veritatis voluptates!
                            </p>

                            <footer className="row htlfndr-amenities">
                                <div className="col-md-4 col-sm-6 col-xs-6">
                                    <div className="htlfndr-amenities-icon">
                                        <i className="fa fa-wifi"></i>
                                    </div>
                                    <p>Wi-Fi internet</p>
                                </div>
                                <div className="col-md-4 col-sm-6 col-xs-6">
                                    <div className="htlfndr-amenities-icon">
                                        <i className="fa fa-gamepad"></i>
                                    </div>
                                    <p>game zone</p>
                                </div>
                                <div className="col-md-4 col-sm-6 col-xs-6">
                                    <div className="htlfndr-amenities-icon">
                                        <i className="fa fa-life-ring"></i>
                                    </div>
                                    <p>pool</p>
                                </div>
                                <div className="col-md-4 col-sm-6 col-xs-6">
                                    <div className="htlfndr-amenities-icon">
                                        <i className="fa fa-cutlery"></i>
                                    </div>
                                    <p>room service</p>
                                </div>
                                <div className="col-md-4 col-sm-6 col-xs-6">
                                    <div className="htlfndr-amenities-icon">
                                        <i className="fa fa-wheelchair"></i>
                                    </div>
                                    <p>wheelchair access</p>
                                </div>
                                <div className="col-md-4 col-sm-6 col-xs-6">
                                    <div className="htlfndr-amenities-icon">
                                        <i className="fa fa-spoon"></i>
                                    </div>
                                    <p>kitchen</p>
                                </div>
                            </footer>
                        </article>
                    </div>
                ) : (
                    <></>
                )}
                {menuActive === 4 ? (
                    <div id="htlfndr-hotel-description-tab-4" className="htlfndr-hotel-description-tab">
                        <div className="htlfndr-hotel-marks">
                            <div className="htlfndr-overview-rating">
                                <div className="htlfndr-rating-stars">
                                    <i className="fa fa-star htlfndr-star-color"></i>
                                    <i className="fa fa-star htlfndr-star-color"></i>
                                    <i className="fa fa-star htlfndr-star-color"></i>
                                    <i className="fa fa-star htlfndr-star-color"></i>
                                    <i className="fa fa-star htlfndr-star-color"></i>
                                </div>
                                <dl>
                                    <dt>
                                        <span>4.8</span> out of 5
                                    </dt>
                                    <dd>
                                        based on <span>123</span> Reviews
                                    </dd>
                                </dl>
                            </div>
                            <div className="htlfndr-detailed-rating">
                                <table>
                                    <tbody>
                                        <tr>
                                            <th>room cleanliness</th>
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
                                            <th>service & staff</th>
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
                                            <th>room comfort</th>
                                            <td className="htlfndr-meter-cell">
                                                <meter className="htlfndr-meter" value="0.9" min="0" max="1">
                                                    <div className="meter-gauge">
                                                        <span style={{ width: '90.00%' }}></span>
                                                    </div>
                                                </meter>
                                            </td>
                                            <td className="htlfndr-rating-cell">4.8</td>
                                        </tr>
                                        <tr>
                                            <th>hotel condition</th>
                                            <td className="htlfndr-meter-cell">
                                                <meter className="htlfndr-meter" value="0.75" min="0" max="1">
                                                    <div className="meter-gauge">
                                                        <span style={{ width: '75.00%' }}></span>
                                                    </div>
                                                </meter>
                                            </td>
                                            <td className="htlfndr-rating-cell">4.5</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="clearfix"></div>
                        <div className="htlfndr-visitor-review">
                            <div className="htlfndr-review-left-side">
                                <div className="htlfndr-visitor-avatar">
                                    <Image src="images/visitor-avatar-1-1.jpg" alt="visitor photo" />
                                </div>
                                <div className="htlfndr-visitor-flag">
                                    <Image src="images/icon-flag-ukraine.png" alt="visitor flag" />
                                </div>
                                <dl>
                                    <dt>john doe</dt>
                                    <dd>kiev, ukraine</dd>
                                </dl>
                            </div>
                            <div className="htlfndr-review-right-side">
                                <article className="htlfndr-visitor-post">
                                    <header>
                                        <h3>Tempus vestibulum mus imperdiet nibh sem</h3>
                                        <h6>posted 12 May 2015 </h6>
                                    </header>
                                    <div className="htlfndr-rating-stars">
                                        <i className="fa fa-star htlfndr-star-color"></i>
                                        <i className="fa fa-star htlfndr-star-color"></i>
                                        <i className="fa fa-star htlfndr-star-color"></i>
                                        <i className="fa fa-star htlfndr-star-color"></i>
                                        <i className="fa fa-star htlfndr-star-color"></i>
                                    </div>
                                    <p>
                                        Pharetra quis netus vel vehicula class vestibulum nisl donec hendrerit fermentum
                                        magna sed amet purus sit nec class sit fringilla tellus volutpat per eget
                                        molestie Platea suspendisse eget tortor pharetra magna nam senectus tristique
                                        cursus ut odio sollicitudin venenatis natoque dis maecenas magna dignissim
                                        sociosqu et sociis accumsan interdum dictum netus quis enim phasellus suscipit
                                        nunc donec purus dui himenaeos nulla sociosqu rhoncus dictumst fusce ultricies
                                        congue sapien porttitor maecenas fringilla ipsum nam lorem aliquam rhoncus elit
                                        himenaeos
                                    </p>
                                    <footer>
                                        <div className="row">
                                            <div className="col-xs-6 col-sm-6 col-md-5 htlfndr-review-footer-marks">
                                                <h3>room cleanliness</h3>
                                                <p>
                                                    <span className="htlfndr-round-mark">4</span>&emsp;out of 5
                                                </p>
                                            </div>
                                            <div className="col-xs-6 col-sm-6 col-md-7 htlfndr-review-footer-marks">
                                                <h3>room comfort</h3>
                                                <p>
                                                    <span className="htlfndr-round-mark">3</span>&emsp;out of 5
                                                </p>
                                            </div>
                                            <div className="clearfix"></div>
                                            <div className="col-xs-6 col-sm-6 col-md-5 htlfndr-review-footer-marks">
                                                <h3>service & staff</h3>
                                                <p>
                                                    <span className="htlfndr-round-mark">2</span>&emsp;out of 5
                                                </p>
                                            </div>
                                            <div className="col-xs-6 col-sm-6 col-md-7 htlfndr-review-footer-marks">
                                                <h3>hotel condition</h3>
                                                <p>
                                                    <span className="htlfndr-round-mark">4</span>&emsp;out of 5
                                                </p>
                                            </div>
                                        </div>
                                    </footer>
                                </article>
                            </div>
                            <div className="htlfndr-second-tab-post" style={{ marginBottom: '0' }}>
                                <Link
                                    to="/allreviews"
                                    state={{
                                        step: 2,
                                    }}
                                >
                                    <i className="fa fa-eye"></i>View more reviews
                                </Link>
                            </div>
                        </div>
                    </div>
                ) : (
                    <></>
                )}
                {menuActive === 5 ? (
                    <div id="htlfndr-hotel-description-tab-5" className="htlfndr-hotel-description-tab">
                        <form method="get" className="htlfndr-review-form">
                            <div className="htlfndr-form-left-side">
                                <label htmlFor="review-title">review title</label>
                                <input
                                    type="text"
                                    name="review-title"
                                    id="review-title"
                                    className="htlfndr-review-form-input"
                                />
                                <label htmlFor="review-text">review text</label>
                                <textarea
                                    name="review-text"
                                    id="review-text"
                                    className="htlfndr-review-form-input"
                                ></textarea>
                            </div>
                            <div className="htlfndr-form-right-side">
                                <div className="htlfndr-radio-set">
                                    <h3>room cleanliness</h3>
                                    <Rating
                                        size="large"
                                        name="my-rating"
                                        value={rating}
                                        // precision={0.5} // Specify half-star increments (optional)
                                        onChange={handleChangeRating}
                                    />
                                </div>
                                <div className="htlfndr-radio-set">
                                    <h3>service & staff</h3>
                                    <Rating
                                        size="large"
                                        name="my-rating"
                                        value={rating}
                                        // precision={0.5} // Specify half-star increments (optional)
                                        onChange={handleChangeRating}
                                    />
                                </div>
                                <div className="htlfndr-radio-set">
                                    <h3>room comfort</h3>
                                    <Rating
                                        size="large"
                                        name="my-rating"
                                        value={rating}
                                        // precision={0.5} // Specify half-star increments (optional)
                                        onChange={handleChangeRating}
                                    />
                                </div>
                                <div className="htlfndr-radio-set">
                                    <h3>hotel condition</h3>
                                    <Rating
                                        size="large"
                                        name="my-rating"
                                        value={rating}
                                        // precision={0.5} // Specify half-star increments (optional)
                                        onChange={handleChangeRating}
                                    />
                                </div>
                            </div>
                            <div className="clearfix"></div>
                            <input type="submit" value="Leave a Review" className="btn-default" />
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
