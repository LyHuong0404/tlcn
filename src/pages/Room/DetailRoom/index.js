/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-redundant-roles */
import Image from '~/components/Image';
import { Navigation, Pagination, Scrollbar, A11y, Zoom } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './DetailRoom.module.scss';
import 'swiper/swiper-bundle.css';
import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/zoom';

function DetailRoom() {
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
    return (
        <div className="row htlfndr-page-content htlfndr-room-page">
            <main
                id="htlfndr-main-content"
                className="col-sm-12 col-md-8 col-lg-9 htlfndr-hotel-single-content"
                role="main"
            >
                <article className="post htlfndr-room-post">
                    <header>
                        <h1 className="htlfndr-entry-title">Classic Double Room </h1>
                        <a href="hotel-page-v1.html">
                            <span>/ Hilton Hotel</span>
                        </a>
                    </header>
                    <div id="htlfndr-room-slider" className={styles.SliderWrapper}>
                        <Swiper
                            modules={[Zoom, Navigation, Pagination, Scrollbar, A11y]}
                            spaceBetween={50}
                            slidesPerView={1}
                            loop={true}
                            zoom={true}
                            pagination={{ clickable: true }}
                        >
                            {slides.map((slide, index) => (
                                <div className="swiper-zoom-container" key={index}>
                                    <SwiperSlide key={index}>
                                        <Image src={slide.src} alt={slide.title} className={styles.slide_image} />
                                    </SwiperSlide>
                                </div>
                            ))}
                        </Swiper>
                    </div>

                    <div className="htlfndr-entry-content">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis mi at purus
                            consequat tristique vitae vitae nibh. Maecenas lacinia augue ex, volutpat ultricies diam
                            molestie vel. Donec arcu velit, aliquam consectetur sollicitudin sit amet, maximus ac arcu.
                            Proin ut commodo erat. Donec id hendrerit arcu. Fusce sed ornare nulla, sit amet vulputate
                            est. Phasellus aliquet dictum ligula ut efficitur. Vestibulum augue libero, cursus sed
                            volutpat quis, aliquam et mi. Fusce finibus, ligula eu efficitur tempor, magna mi aliquet
                            nisl, eu commodo metus est non eros. Quisque eu magna volutpat, facilisis velit eget, semper
                            libero. Quisque finibus rutrum leo, vel convallis dolor gravida vel. Pellentesque ac odio
                            ex. Praesent ac nunc ante.
                        </p>
                        <p>
                            Curabitur sit amet sem et leo pellentesque maximus sed a ligula. Fusce fermentum justo et
                            arcu elementum, id dapibus urna eleifend. Ut ut libero a augue volutpat tincidunt in id
                            arcu.
                        </p>
                    </div>
                    <footer>
                        <div className="htlfndr-blue-title">more availability rooms</div>
                        <div className="htlfndr-more-avilability-rooms">
                            <div className="htlfndr-available-room htlfndr-table-view">
                                <div className="htlfndr-hotel-thumbnail">
                                    <a href="hotel-room-page.html">
                                        <Image
                                            src="images/29572el_chaise_longue_o_cheslon.jpg"
                                            alt="avilable room"
                                            className={styles.image_available_room}
                                        />
                                    </a>
                                </div>
                                <div className="htlfndr-hotel-info">
                                    <h6 className="htlfndr-post-title">
                                        <a href="hotel-room-page.html"> Classic Room</a>
                                    </h6>
                                    <p>per night</p> <span className="htlfndr-cost-normal">$ 150</span>
                                </div>
                            </div>
                            <hr />
                            <div className="htlfndr-available-room htlfndr-table-view">
                                <div className="htlfndr-hotel-thumbnail">
                                    <a href="hotel-room-page.html">
                                        <Image
                                            src="images/5053563227_ee0db21ca5_b.jpg"
                                            alt="avilable room"
                                            className={styles.image_available_room}
                                        />
                                    </a>
                                </div>
                                <div className="htlfndr-hotel-info">
                                    <h6 className="htlfndr-post-title">
                                        <a href="hotel-room-page.html">Twin Room</a>
                                    </h6>
                                    <p>per night</p> <span className="htlfndr-cost-normal">$ 200</span>
                                </div>
                            </div>
                            <hr />
                            <div className="htlfndr-available-room htlfndr-table-view">
                                <div className="htlfndr-hotel-thumbnail">
                                    <a href="hotel-room-page.html">
                                        <Image
                                            src="images/5690083711_44634c54f8_b.jpg"
                                            alt="avilable room"
                                            className={styles.image_available_room}
                                        />
                                    </a>
                                </div>
                                <div className="htlfndr-hotel-info">
                                    <h6 className="htlfndr-post-title">
                                        <a href="hotel-room-page.html">Family Suite</a>
                                    </h6>
                                    <p>per night</p> <span className="htlfndr-cost-normal">$ 400</span>
                                </div>
                            </div>
                        </div>
                    </footer>
                </article>
            </main>
            <aside
                id="htlfndr-right-sidebar"
                className="col-sm-12 col-md-4 col-lg-3 htlfndr-sidebar htlfndr-sidebar-in-right"
                role="complementary"
            >
                <p className="htlfndr-add-to-wishlist">
                    <a href="#">
                        <i className="fa fa-plus"></i> Add to Wishlist
                    </a>
                </p>
                <div className="widget htlfndr-hotel-visit-card">
                    <div className="htlfndr-widget-main-content htlfndr-widget-padding">
                        <div className="htlfndr-hotel-logo">
                            <Image src="images/hotel-logo.jpg" alt="Hotel logo" />
                        </div>
                        <div className="htlfndr-hotel-price">
                            <span>price</span> <span> for 1 night</span> <span className="htlfndr-cost">$ 100</span>
                        </div>
                    </div>
                </div>
                <form action="https://bestwebsoft.com/demo_theme/hotel-finder/payment.html" method="post">
                    <input className="htlfndr-book-now-button" type="submit" value="book now" />
                </form>
                <div className="widget htlfndr-room-details">
                    <div id="htlfndr-accordion-1" className="htlfndr-widget-main-content htlfndr-widget-padding">
                        <h2 className="widget-title htlfndr-accordion-title">room details</h2>
                        <div className="htlfndr-accordion-inner">
                            <p className="htlfndr-details">
                                <span>beds:</span>
                                <span>1 double or 2 twin</span>
                            </p>
                            <p className="htlfndr-details">
                                <span>floor area:</span>
                                <span>
                                    19m<sup>2</sup>
                                </span>
                            </p>
                            <p className="htlfndr-details">
                                <span>max guests:</span> <span>7</span>
                            </p>
                            <p className="htlfndr-details">
                                <span>max kids:</span> <span>3</span>
                            </p>
                            <ul className="htlfndr-details-list">
                                <li>Free wired Internet</li>
                                <li>Coffee/tea maker</li>
                                <li>Air conditioning</li>
                                <li>Cable TV service</li>
                                <li>Free newspaper</li>
                                <li>Hair dryer</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="widget htlfndr-room-details">
                    <form action="https://bestwebsoft.com/demo_theme/hotel-finder/payment.html" method="post">
                        <div id="htlfndr-accordion-2" className="htlfndr-widget-main-content htlfndr-widget-padding">
                            <h2 className="widget-title htlfndr-accordion-title">extra service</h2>
                            <div className="htlfndr-accordion-inner">
                                <div className="col-xs-6 col-sm-6 col-md-12 htlfndr-check-row">
                                    <p>
                                        <input
                                            type="checkbox"
                                            id="htlfndr-check-airport"
                                            name="htlfndr-check-airport"
                                        />
                                        <label htmlFor="htlfndr-check-airport">Airport pickup</label>
                                    </p>
                                    <p>
                                        <input
                                            type="checkbox"
                                            id="htlfndr-check-extra-bed"
                                            name="htlfndr-check-extra-bed"
                                        />
                                        <label htmlFor="htlfndr-check-extra-bed">Extra bed</label>
                                    </p>
                                </div>
                                <div className="col-xs-6 col-sm-6 col-md-12 htlfndr-check-row">
                                    <p>
                                        <input
                                            type="checkbox"
                                            id="htlfndr-check-breakfast"
                                            name="htlfndr-check-breakfast"
                                            defaultChecked
                                        />
                                        <label htmlFor="htlfndr-check-breakfast">Breakfast</label>
                                    </p>
                                    <p>
                                        <input
                                            type="checkbox"
                                            id="htlfndr-check-flowers"
                                            name="htlfndr-check-flowers"
                                            defaultChecked
                                        />
                                        <label htmlFor="htlfndr-check-flowers">Flowers</label>
                                    </p>
                                </div>
                                <div className="clearfix"></div>
                                <p className="htlfndr-info">
                                    Hotel Info:
                                    <span>
                                        <i className="fa fa-phone"></i> (000)-000-000-000
                                    </span>
                                </p>
                            </div>
                        </div>
                    </form>
                </div>
            </aside>
        </div>
    );
}

export default DetailRoom;
