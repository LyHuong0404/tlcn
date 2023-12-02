/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-redundant-roles */
import Room from '~/pages/Room/SearchResult/Room';
import Image from '~/components/Image';
import styles from './MoreAvailableRoom.module.scss';
import Sort from '../SearchResult/Sort';

function MoreAvailableRoom() {
    return (
        <div className="row htlfndr-room-page htlfndr-search-rooms">
            <main
                id="htlfndr-main-content"
                className="col-sm-12 col-md-9 col-lg-9 htlfndr-search-result htlfndr-grid-view"
                role="main"
            >
                <h2 className="htlfndr-search-result-title">
                    <span>125</span> available rooms found
                </h2>
                <h4 className="htlfndr-hotel-title">
                    <a href="hotel-page-v1.html">/Hilton Hotel</a>
                </h4>
                <Sort></Sort>
                <Room></Room>
            </main>
            <aside
                id="htlfndr-right-sidebar"
                className="col-sm-12 col-md-3 col-lg-3 htlfndr-sidebar htlfndr-sidebar-in-right"
                role="complementary"
            >
                <div className="widget htlfndr-hotel-visit-card htlfndr-modify-search-aside">
                    <div className="htlfndr-widget-main-content htlfndr-widget-padding">
                        <div className="htlfndr-hotel-logo">
                            <Image src="images/hotel-logo.jpg" alt="Hotel logo" className={styles.image_logo} />
                        </div>
                        <div className="htlfndr-hotel-description">
                            <h2>hilton hotel</h2>
                            <div className="htlfndr-rating-stars">
                                <i className="fa fa-star htlfndr-star-color"></i>
                                <i className="fa fa-star htlfndr-star-color"></i>
                                <i className="fa fa-star htlfndr-star-color"></i>
                                <i className="fa fa-star htlfndr-star-color"></i>
                                <i className="fa fa-star htlfndr-star-color"></i>
                            </div>
                            <h5 className="htlfndr-hotel-location">
                                <a href="/">
                                    <i className="fa fa-map-marker"></i>
                                    san francisco united states
                                </a>
                            </h5>
                        </div>
                        <form name="search-hotel" id="search-hotel">
                            <div className="htlfndr-float-input first-float">
                                <label htmlFor="htlfndr-date-in" className="htlfndr-input-label">
                                    Check in
                                </label>
                                <div id="htlfndr-input-date-in" className="htlfndr-input-wrapper">
                                    <input
                                        type="text"
                                        name="htlfndr-date-in"
                                        id="htlfndr-date-in"
                                        className="search-hotel-input"
                                    />
                                    <button type="button" className="htlfndr-clear-datepicker"></button>
                                </div>
                            </div>
                            <div className="htlfndr-float-input">
                                <label htmlFor="htlfndr-date-out" className="htlfndr-input-label">
                                    Check out
                                </label>
                                <div id="htlfndr-input-date-out" className="htlfndr-input-wrapper">
                                    <input
                                        type="text"
                                        name="htlfndr-date-out"
                                        id="htlfndr-date-out"
                                        className="search-hotel-input"
                                    />
                                    <button type="button" className="htlfndr-clear-datepicker"></button>
                                </div>
                            </div>
                            <section className="htlfndr-select-block">
                                <div className="htlfndr-input-wrapper htlfndr-small-select">
                                    <label htmlFor="htlfndr-room" className="htlfndr-input-label">
                                        Room
                                    </label>
                                    <select name="htlfndr-room" id="htlfndr-room" className="htlfndr-dropdown">
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                    </select>
                                </div>
                                <div className="htlfndr-input-wrapper htlfndr-small-select">
                                    <label htmlFor="htlfndr-adult" className="htlfndr-input-label">
                                        Adult
                                    </label>
                                    <select name="htlfndr-adult" id="htlfndr-adult" className="htlfndr-dropdown">
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                    </select>
                                </div>
                                <div className="htlfndr-input-wrapper htlfndr-small-select">
                                    <label htmlFor="htlfndr-kids" className="htlfndr-input-label">
                                        Kids
                                    </label>
                                    <select name="htlfndr-kids" id="htlfndr-kids" className="htlfndr-dropdown">
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                    </select>
                                </div>
                            </section>
                            <div className="clearfix"></div>
                            <input type="submit" value="search" />
                        </form>
                    </div>
                </div>
                <div className="widget htlfndr-widget-help">
                    <div className="htlfndr-widget-main-content htlfndr-widget-padding">
                        <h3 className="widget-title">need our help</h3>
                        <span>24/7 dedicated customer support</span>
                        <p className="htlfndr-phone">+(000) 000-000-000</p>
                        <p className="htlfndr-mail">support@bestwebsoft.zendesk.com</p>
                    </div>
                </div>
            </aside>
        </div>
    );
}

export default MoreAvailableRoom;
