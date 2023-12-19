/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-redundant-roles */
import Image from '~/components/Image';
import styles from './Sidebar.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import { addToWishlist } from '~/actions/userActions';
import { toast } from 'react-toastify';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

function Sidebar({ data }) {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const { user } = useSelector((state) => state.auth);
    const [isFollowed, setIsFollowed] = useState(data?.isFollowed || false);

    const handleAddToWishList = async (roomID) => {
        if (user) {
            try {
                const result = await addToWishlist(roomID);
                if (result.success) {
                    setIsFollowed(!isFollowed);
                    toast.success('Wishlist added successfully');
                }
            } catch (error) {
                console.log(error);
            }
        } else {
            navigate('/auth/login');
        }
    };

    const handleBook = () => {
        if (user) {
            navigate('/user/appointment', { state: { room: data?.room, step: 3 } });
        } else {
            navigate('/auth/login');
        }
    };

    return (
        <aside
            id="htlfndr-right-sidebar"
            className="col-sm-12 col-md-4 col-lg-3 htlfndr-sidebar htlfndr-sidebar-in-right"
            role="complementary"
        >
            {!isFollowed ? (
                <p className="htlfndr-add-to-wishlist">
                    <a onClick={() => handleAddToWishList(data?.room?.id)}>
                        <i className="fa fa-plus"></i> {t('Add To Wishlist')}
                    </a>
                </p>
            ) : (
                <p className="htlfndr-add-to-wishlist">
                    <a onClick={() => handleAddToWishList(data?.room?.id)}>
                        <i className="fa fa-plus"></i> {t('Remove To Wishlist')}
                    </a>
                </p>
            )}

            <div className="widget htlfndr-hotel-visit-card">
                <div className="htlfndr-widget-main-content htlfndr-widget-padding">
                    <div className="htlfndr-hotel-logo">
                        <Image src={data?.room?.avatarUrl} alt={data?.room?.subject} className={styles.logo} />
                    </div>
                    <div className="htlfndr-hotel-description">
                        <h2>{data?.room?.subject}</h2>
                        <div className="htlfndr-rating-stars">
                            <i className="fa fa-star htlfndr-star-color"></i>
                            <i className="fa fa-star htlfndr-star-color"></i>
                            <i className="fa fa-star htlfndr-star-color"></i>
                            <i className="fa fa-star htlfndr-star-color"></i>
                            <i className="fa fa-star htlfndr-star-color"></i>
                        </div>
                        <h5 className="htlfndr-hotel-location">
                            <a data-tooltip-id="my-tooltip" data-tooltip-content={data?.room?.address}>
                                <i className="fa fa-map-marker"></i>
                                {data?.room?.address}
                            </a>
                        </h5>
                        <Tooltip id="my-tooltip" />
                    </div>
                    <div className="htlfndr-hotel-price">
                        <span className="htlfndr-cost">{data?.room?.price}</span>
                        <span className="htlfndr-per-night">/ {t('month')}</span>
                    </div>
                </div>
                <button onClick={handleBook} className="htlfndr-book-now-button" role="button">
                    <i className="fa fa-bookmark" style={{ marginRight: '10px' }} aria-hidden="true"></i>{t('Make appointment')}
                </button>

                {!isFollowed ? (
                    <button
                        className="htlfndr-book-now-button"
                        role="button"
                        onClick={() => handleAddToWishList(data?.room?.id)}
                    >
                        <i className="fa fa-heart" aria-hidden="true"></i> {t('Add To Wishlist')}
                    </button>
                ) : (
                    <button
                        className="htlfndr-book-now-button"
                        role="button"
                        onClick={() => handleAddToWishList(data?.room?.id)}
                    >
                        <i className="fa fa-heart" aria-hidden="true"></i> {t('Unfollow')}
                    </button>
                )}

                <div className="htlfndr-widget-padding">
                    <div className="htlfndr-hotel-contacts">
                        <p className="htlfndr-mail">
                            <a>{data?.owner?.email}</a>
                        </p>
                        <p className="htlfndr-phone">
                            <a>{data?.owner?.phone}</a>
                        </p>
                        <p className="htlfndr-reviews">{data?.room?.totalReview} ({t('Reviews')})</p>
                    </div>
                </div>
            </div>
            {/* <div className="widget htlfndr-near-properties">
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
            </div> */}
        </aside>
    );
}

export default Sidebar;
