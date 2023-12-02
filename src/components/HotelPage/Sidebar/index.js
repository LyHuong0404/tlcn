/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-redundant-roles */
import Image from '~/components/Image';
import styles from './Sidebar.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import { addToWishlist } from '~/actions/userActions';
import { toast } from 'react-toastify';

function Sidebar({ data }) {
    const navigate = useNavigate();
    const handleAddToWishList = async(roomID) => {
        try{
            const result = await addToWishlist(roomID);
            if (result.success) {
                toast.success("Wishlist added successfully");
                navigate('/profile', { state: { activeTab: 3 } })
            }
        } catch(error) {
            console.log(error)
        }
    }

    return (
        <aside
            id="htlfndr-right-sidebar"
            className="col-sm-12 col-md-4 col-lg-3 htlfndr-sidebar htlfndr-sidebar-in-right"
            role="complementary"
        >
            <p className="htlfndr-add-to-wishlist">
                <a onClick={() => handleAddToWishList(data.id)}>
                    <i className="fa fa-plus"></i> Add to Wishlist
                </a>
            </p>
            <div className="widget htlfndr-hotel-visit-card">
                <div className="htlfndr-widget-main-content htlfndr-widget-padding">
                    <div className="htlfndr-hotel-logo">
                        <Image src={data.avatarUrl} alt={data.subject} className={styles.logo} />
                    </div>
                    <div className="htlfndr-hotel-description">
                        <h2>{data.subject}</h2>
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
                                {data.address}
                            </a>
                        </h5>
                    </div>
                    <div className="htlfndr-hotel-price">
                        {/* <span className="htlfndr-from">from</span> */}
                        <span className="htlfndr-cost">{data.price}</span>
                        <span className="htlfndr-per-night">/ month</span>
                    </div>
                </div>
                <Link
                    to="/user/appointment"
                    state={{
                        room: data,
                        step: 3,
                    }}
                    className="htlfndr-book-now-button"
                    role="button"
                >
                    <i className="fa fa-bookmark" style={{ marginRight: '10px' }} aria-hidden="true"></i>Book
                </Link>
                <button className="htlfndr-book-now-button" role="button" onClick={() => handleAddToWishList(data.id)}>
                    <i class="fa fa-heart" aria-hidden="true"></i> Add To Wishlist
                </button>

                <div className="htlfndr-widget-padding">
                    <div className="htlfndr-hotel-contacts">
                        <p className="htlfndr-mail">
                            <a href="mailto:exemple@mail.com">exemple@mail.com</a>
                        </p>
                        <p className="htlfndr-url">
                            <a href="/">exemple.com</a>
                        </p>
                        <p className="htlfndr-phone">
                            <a href="/">000-000-000-000</a>
                        </p>
                        <p className="htlfndr-reviews">123 (Reviews)</p>
                    </div>
                </div>
            </div>
            <div className="widget htlfndr-near-properties">
                <div className="htlfndr-widget-main-content">
                    <h3 className="widget-title">properties near</h3>
                    <div className="htlfdr-hotel-post">
                        <div className="htlfndr-post-inner htlfndr-table-view">
                            <div className="htlfndr-hotel-thumbnail">
                                <a href="hotel-page-v1.html">
                                    <Image
                                        src="images/83890-Web1.jpg"
                                        alt="hotel pic"
                                        className={styles.image_properties_near}
                                    />
                                </a>
                            </div>
                            <div className="htlfndr-hotel-info">
                                <a href="hotel-page-v1.html">
                                    <h6>Ruzzini Palace Hotel</h6>
                                </a>
                                <div className="htlfndr-rating-stars">
                                    <i className="fa fa-star htlfndr-star-color"></i>
                                    <i className="fa fa-star htlfndr-star-color"></i>
                                    <i className="fa fa-star htlfndr-star-color"></i>
                                    <i className="fa fa-star htlfndr-star-color"></i>
                                    <i className="fa fa-star htlfndr-star-color"></i>
                                </div>
                                <p className="htlfndr-hotel-price">
                                    <span>per night</span>
                                    <span className="htlfndr-cost-normal">$150</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="htlfdr-hotel-post">
                        <div className="htlfndr-post-inner htlfndr-table-view">
                            <div className="htlfndr-hotel-thumbnail">
                                <a href="hotel-page-v2.html">
                                    <Image
                                        src="images/5053563227_ee0db21ca5_b.jpg"
                                        alt="hotel pic"
                                        className={styles.image_properties_near}
                                    />
                                </a>
                            </div>
                            <div className="htlfndr-hotel-info">
                                <a href="hotel-page-v2.html">
                                    <h6>Foscari Palace</h6>
                                </a>
                                <div className="htlfndr-rating-stars">
                                    <i className="fa fa-star htlfndr-star-color"></i>
                                    <i className="fa fa-star htlfndr-star-color"></i>
                                    <i className="fa fa-star htlfndr-star-color"></i>
                                    <i className="fa fa-star"></i> <i className="fa fa-star"></i>
                                </div>
                                <p className="htlfndr-hotel-price">
                                    <span>per night</span>
                                    <span className="htlfndr-cost-normal">$150</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="htlfdr-hotel-post">
                        <div className="htlfndr-post-inner htlfndr-table-view">
                            <div className="htlfndr-hotel-thumbnail">
                                <a href="hotel-page-v3.html">
                                    <Image
                                        src="images/5690083711_44634c54f8_b.jpg"
                                        alt="hotel pic"
                                        className={styles.image_properties_near}
                                    />
                                </a>
                            </div>
                            <div className="htlfndr-hotel-info">
                                <a href="hotel-page-v3.html">
                                    <h6>Carnival Hotel</h6>
                                </a>
                                <div className="htlfndr-rating-stars">
                                    <i className="fa fa-star htlfndr-star-color"></i>
                                    <i className="fa fa-star htlfndr-star-color"></i>
                                    <i className="fa fa-star htlfndr-star-color"></i>
                                    <i className="fa fa-star htlfndr-star-color"></i>
                                    <i className="fa fa-star"></i>
                                </div>
                                <p className="htlfndr-hotel-price">
                                    <span>per night</span>
                                    <span className="htlfndr-cost-normal">$400</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="htlfdr-hotel-post">
                        <div className="htlfndr-post-inner htlfndr-table-view">
                            <div className="htlfndr-hotel-thumbnail">
                                <a href="hotel-page-v4.html">
                                    <Image
                                        src="images/top-destination-2.jpg"
                                        alt="hotel pic"
                                        className={styles.image_properties_near}
                                    />
                                </a>
                            </div>
                            <div className="htlfndr-hotel-info">
                                <a href="hotel-page-v4.html">
                                    <h6>Hilton Molino</h6>
                                </a>
                                <div className="htlfndr-rating-stars">
                                    <i className="fa fa-star htlfndr-star-color"></i>
                                    <i className="fa fa-star htlfndr-star-color"></i>
                                    <i className="fa fa-star htlfndr-star-color"></i>
                                    <i className="fa fa-star"></i> <i className="fa fa-star"></i>
                                </div>
                                <p className="htlfndr-hotel-price">
                                    <span>per night</span>
                                    <span className="htlfndr-cost-normal">$350</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    );
}

export default Sidebar;
