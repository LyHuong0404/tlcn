/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import { Pagination } from '@mui/material';
import { useState, useEffect, useCallback } from 'react';
import { userWishlist } from '~/actions/userActions';
import Image from '~/components/Image';
import styles from './Wishlist.module.scss';

function Wishlist() {
    const [wishlist, setWishlist] = useState([]);
    const [totalPage, setTotalPage] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);

    const getWishlist = useCallback(() => {
        try {
            const fetchData = async () => {
                const result = await userWishlist(currentPage);
                setWishlist(result?.content);
                setTotalPage(result?.totalPage);
            };
            fetchData();
        } catch (error) {
            console.log(error);
        }
    }, [currentPage]);

    useEffect(() => {
        getWishlist(currentPage);
    }, [currentPage, getWishlist]);

    const handleSetPage = (event, page) => {
        setCurrentPage(page - 1);
    };

    return (
        <div className="htlfndr-wishlist-page" id="htlfndr-user-tab-4">
            <div className="htlfndr-user-panel col-md-9 col-sm-8 htlfndr-search-result htlfndr-grid-view">
                <div className="htlfndr-hotel-post-wrapper">
                    {wishlist?.map((room, index) => (
                        <div key={index} className="htlfndr-hotel-post clearfix">
                            <a
                                className="glyphicon glyphicon-remove"
                                href="#"
                                data-toggle="modal"
                                data-target="#remove-page"
                            ></a>
                            <a href="hotel-page-v3.html" className="htlfndr-hotel-thumbnail pull-left">
                                <Image src={room.avatarUrl} alt={room.subject} className={styles.image_room} />
                            </a>
                            <div className="htlfndr-hotel-description">
                                <div className="htlfndr-description-content">
                                    <div className="htlfndr-rating-stars" data-rating="3">
                                        <i className="fa fa-star htlfndr-star-color"></i>&nbsp;
                                        <i className="fa fa-star htlfndr-star-color"></i>&nbsp;
                                        <i className="fa fa-star htlfndr-star-color"></i>&nbsp;
                                        <i className="fa fa-star"></i>&nbsp; <i className="fa fa-star"></i>
                                        &nbsp;
                                        <p className="htlfndr-hotel-reviews">
                                            (<span>188</span> reviews)
                                        </p>
                                    </div>
                                    <h2 className="htlfndr-entry-title">
                                        <a href="hotel-page-v3.html">{room.subject}</a>
                                    </h2>
                                    <h5 className="htlfndr-hotel-location">
                                        <a href="/">
                                            <i className="fa fa-map-marker"></i>
                                            {room.address}
                                        </a>
                                    </h5>
                                </div>
                                <div className="htlfndr-hotel-price">
                                    <span className="htlfndr-cost">{room.price}</span>
                                </div>
                                <span className="htlfndr-per-night">per month</span>
                            </div>
                            <a href="hotel-page-v3.html" role="button" className="htlfndr-select-hotel-button">
                                select
                            </a>
                        </div>
                    ))}
                </div>
                <p className="htlfndr-load_more text-right">
                    {totalPage > 1 ? (
                        <Pagination
                            count={totalPage}
                            variant="outlined"
                            color="primary"
                            sx={{
                                '& .MuiPaginationItem-page': {
                                    fontSize: '14px',
                                },
                            }}
                            style={{ float: 'inline-end', padding: '10px 0' }}
                            onChange={handleSetPage}
                        />
                    ) : (
                        <></>
                    )}
                </p>
            </div>
        </div>
    );
}

export default Wishlist;
