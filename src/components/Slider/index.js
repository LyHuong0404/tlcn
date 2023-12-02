import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from '~/components/Image';
import styles from './Slider.module.scss';
import images from '~/assets/images';
import 'swiper/swiper-bundle.css';
import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { searchRooms } from '~/actions/userActions';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const slides = [
    {
        src: images.slider1,
        title: 'image',
    },
    {
        src: images.slider2,
        title: 'image',
    },
    {
        src: images.slider3,
        title: 'image',
    },
];

function Slider() {
    const navigate = useNavigate();

    const handleSearch = () => {
        navigate('/search', { state: { searchText: '', step: 1 } });
    };

    return (
        <section className="htlfndr-slider-section">
            <div>
                <Swiper
                    modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    spaceBetween={10}
                    slidesPerView={1}
                    loop={true}
                >
                    {slides.map((slide, index) => (
                        <SwiperSlide key={index}>
                            <div className="htlfndr-slide-wrapper" key={index}>
                                <Image src={slide.src} alt={slide.title} className={styles.slider} />
                                <div className="htlfndr-slide-data container">
                                    <div className="htlfndr-slide-rating-stars">
                                        <i className="fa fa-star-o htlfndr-star-color"></i>
                                        <i className="fa fa-star-o htlfndr-star-color"></i>
                                        <i className="fa fa-star-o htlfndr-star-color"></i>
                                        <i className="fa fa-star-o"></i>
                                        <i className="fa fa-star-o"></i>
                                    </div>
                                    <h1 className="htlfndr-slider-title">find your perfect room</h1>
                                    <div className="htlfndr-slider-under-title-line"></div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <aside className="htlfndr-form-in-slider htlfndr-search-form-inline">
                <div className="container">
                    <h5>Where are you going?</h5>

                    <div id="htlfndr-input-1" className="htlfndr-input-wrapper">
                        <input
                            type="text"
                            name="htlfndr-city"
                            id="htlfndr-city"
                            className="search-hotel-input"
                            placeholder="Enter city, region or district"
                        />
                        <p className="htlfndr-search-checkbox">
                            <input type="checkbox" id="htlfndr-checkbox" name="htlfndr-checkbox" value="no-dates" />
                            <label htmlFor="htlfndr-checkbox">I don't have specific dates yet</label>
                        </p>
                    </div>
                    <div id="htlfndr-input-date-in" className="htlfndr-input-wrapper">
                        <label htmlFor="htlfndr-date-in" className="sr-only">
                            Date in
                        </label>
                        <input type="text" name="htlfndr-date-in" id="htlfndr-date-in" className="search-hotel-input" />
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
                    <div id="htlfndr-input-5">
                        <input type="submit" value="search" onClick={handleSearch} />
                    </div>
                </div>
            </aside>
        </section>
    );
}

export default Slider;
