/* eslint-disable jsx-a11y/anchor-is-valid */
import { Container, Row, Col } from 'react-grid-system';
import images from '~/assets/images';
import Image from '~/components/Image';
import Pagination from '@mui/material/Pagination';
import { useState } from 'react';

function Room({ data, gridColumn }) {
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPage, setTotalPage] = useState(0);
    
    const handleSetPage = (event, page) => {
        setCurrentPage(page - 1);
    };
    return (
        <>
            <div className="row">
                {data?.map((room) => (
                    <div className="col-md-4 htlfndr-hotel-post-wrapper">
                        <div className="htlfndr-hotel-post">
                            <a href="hotel-page-v1.html" className="htlfndr-hotel-thumbnail">
                                <Image src={images.noimage} alt={room.subject} />
                            </a>
                            <div className="htlfndr-hotel-description">
                                <div className="htlfndr-description-content">
                                    <h2 className="htlfndr-entry-title">
                                        <a href="hotel-page-v1.html">{room.subject}</a>
                                    </h2>
                                    <div className="htlfndr-rating-stars" data-rating="5">
                                        <i className="fa fa-star htlfndr-star-color"></i>&nbsp;
                                        <i className="fa fa-star htlfndr-star-color"></i>&nbsp;
                                        <i className="fa fa-star htlfndr-star-color"></i>&nbsp;
                                        <i className="fa fa-star htlfndr-star-color"></i>&nbsp;
                                        <i className="fa fa-star htlfndr-star-color"></i>&nbsp;
                                        <p className="htlfndr-hotel-reviews">
                                            (<span>188</span> reviews)
                                        </p>
                                    </div>
                                    <h5 className="htlfndr-hotel-location">
                                        <a href="#">
                                            <i className="fa fa-map-marker"></i>
                                            san francisco united states
                                        </a>
                                    </h5>
                                    <p className="htlfndr-last-booking">
                                        Last booking:
                                        <span>14</span> hours ago
                                    </p>
                                </div>
                                <a href="/detailroom" role="button" className="htlfndr-select-hotel-button">
                                    select
                                </a>
                                <div className="htlfndr-hotel-price">
                                    <span className="htlfndr-from">from</span>
                                    <span className="htlfndr-cost">$ 100</span>
                                    <span className="htlfndr-per-night">per night</span>
                                    <span className="cost">100</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                {/* <div className="col-md-4 htlfndr-hotel-post-wrapper">
                    <div className="htlfndr-hotel-post special-offer">
                        <a href="hotel-page-v4.html" className="htlfndr-hotel-thumbnail">
                            <Image src={images.doremon} alt="pic" />
                        </a>
                        <div className="htlfndr-hotel-description">
                            <div className="htlfndr-description-content">
                                <h2 className="htlfndr-entry-title">
                                    <a href="hotel-page-v4.html">Ruzzini Palace Hotel</a>
                                </h2>
                                <div className="htlfndr-rating-stars" data-rating="3">
                                    <i className="fa fa-star htlfndr-star-color"></i>
                                    <i className="fa fa-star htlfndr-star-color"></i>
                                    <i className="fa fa-star htlfndr-star-color"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <p className="htlfndr-hotel-reviews">
                                        (<span>118</span> reviews)
                                    </p>
                                </div>
                                <h5 className="htlfndr-hotel-location">
                                    <a href="#">
                                        <i className="fa fa-map-marker"></i>san francisco united states
                                    </a>
                                </h5>
                                <p className="htlfndr-last-booking">
                                    Last booking:
                                    <span>14</span> hours ago
                                </p>
                            </div>
                            <a href="hotel-page-v4.html" role="button" className="htlfndr-select-hotel-button">
                                select
                            </a>
                            <div className="htlfndr-hotel-price">
                                <span className="htlfndr-from">from</span>
                                <span className="htlfndr-cost">$ 280</span>
                                <span className="htlfndr-per-night">per night</span>
                                <span className="cost">280</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 htlfndr-hotel-post-wrapper">
                    <div className="htlfndr-hotel-post special-offer">
                        <a href="hotel-page-v4.html" className="htlfndr-hotel-thumbnail">
                            <Image src={images.doremon} alt="pic" />
                        </a>
                        <div className="htlfndr-hotel-description">
                            <div className="htlfndr-description-content">
                                <h2 className="htlfndr-entry-title">
                                    <a href="hotel-page-v4.html">Ruzzini Palace Hotel</a>
                                </h2>
                                <div className="htlfndr-rating-stars" data-rating="3">
                                    <i className="fa fa-star htlfndr-star-color"></i>
                                    <i className="fa fa-star htlfndr-star-color"></i>
                                    <i className="fa fa-star htlfndr-star-color"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <p className="htlfndr-hotel-reviews">
                                        (<span>118</span> reviews)
                                    </p>
                                </div>
                                <h5 className="htlfndr-hotel-location">
                                    <a href="#">
                                        <i className="fa fa-map-marker"></i>san francisco united states
                                    </a>
                                </h5>
                                <p className="htlfndr-last-booking">
                                    Last booking:
                                    <span>14</span> hours ago
                                </p>
                            </div>
                            <a href="hotel-page-v4.html" role="button" className="htlfndr-select-hotel-button">
                                select
                            </a>
                            <div className="htlfndr-hotel-price">
                                <span className="htlfndr-from">from</span>
                                <span className="htlfndr-cost">$ 280</span>
                                <span className="htlfndr-per-night">per night</span>
                                <span className="cost">280</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 htlfndr-hotel-post-wrapper">
                    <div className="htlfndr-hotel-post special-offer">
                        <a href="hotel-page-v4.html" className="htlfndr-hotel-thumbnail">
                            <Image src={images.doremon} alt="pic" />
                        </a>
                        <div className="htlfndr-hotel-description">
                            <div className="htlfndr-description-content">
                                <h2 className="htlfndr-entry-title">
                                    <a href="hotel-page-v4.html">Ruzzini Palace Hotel</a>
                                </h2>
                                <div className="htlfndr-rating-stars" data-rating="3">
                                    <i className="fa fa-star htlfndr-star-color"></i>
                                    <i className="fa fa-star htlfndr-star-color"></i>
                                    <i className="fa fa-star htlfndr-star-color"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <p className="htlfndr-hotel-reviews">
                                        (<span>118</span> reviews)
                                    </p>
                                </div>
                                <h5 className="htlfndr-hotel-location">
                                    <a href="#">
                                        <i className="fa fa-map-marker"></i>san francisco united states
                                    </a>
                                </h5>
                                <p className="htlfndr-last-booking">
                                    Last booking:
                                    <span>14</span> hours ago
                                </p>
                            </div>
                            <a href="hotel-page-v4.html" role="button" className="htlfndr-select-hotel-button">
                                select
                            </a>
                            <div className="htlfndr-hotel-price">
                                <span className="htlfndr-from">from</span>
                                <span className="htlfndr-cost">$ 280</span>
                                <span className="htlfndr-per-night">per night</span>
                                <span className="cost">280</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 htlfndr-hotel-post-wrapper">
                    <div className="htlfndr-hotel-post special-offer">
                        <a href="hotel-page-v4.html" className="htlfndr-hotel-thumbnail">
                            <Image src={images.doremon} alt="pic" />
                        </a>
                        <div className="htlfndr-hotel-description">
                            <div className="htlfndr-description-content">
                                <h2 className="htlfndr-entry-title">
                                    <a href="hotel-page-v4.html">Ruzzini Palace Hotel</a>
                                </h2>
                                <div className="htlfndr-rating-stars" data-rating="3">
                                    <i className="fa fa-star htlfndr-star-color"></i>
                                    <i className="fa fa-star htlfndr-star-color"></i>
                                    <i className="fa fa-star htlfndr-star-color"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <p className="htlfndr-hotel-reviews">
                                        (<span>118</span> reviews)
                                    </p>
                                </div>
                                <h5 className="htlfndr-hotel-location">
                                    <a href="#">
                                        <i className="fa fa-map-marker"></i>san francisco united states
                                    </a>
                                </h5>
                                <p className="htlfndr-last-booking">
                                    Last booking:
                                    <span>14</span> hours ago
                                </p>
                            </div>
                            <a href="hotel-page-v4.html" role="button" className="htlfndr-select-hotel-button">
                                select
                            </a>
                            <div className="htlfndr-hotel-price">
                                <span className="htlfndr-from">from</span>
                                <span className="htlfndr-cost">$ 280</span>
                                <span className="htlfndr-per-night">per night</span>
                                <span className="cost">280</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 htlfndr-hotel-post-wrapper">
                    <div className="htlfndr-hotel-post special-offer">
                        <a href="hotel-page-v4.html" className="htlfndr-hotel-thumbnail">
                            <Image src={images.doremon} alt="pic" />
                        </a>
                        <div className="htlfndr-hotel-description">
                            <div className="htlfndr-description-content">
                                <h2 className="htlfndr-entry-title">
                                    <a href="hotel-page-v4.html">Ruzzini Palace Hotel</a>
                                </h2>
                                <div className="htlfndr-rating-stars" data-rating="3">
                                    <i className="fa fa-star htlfndr-star-color"></i>
                                    <i className="fa fa-star htlfndr-star-color"></i>
                                    <i className="fa fa-star htlfndr-star-color"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <p className="htlfndr-hotel-reviews">
                                        (<span>118</span> reviews)
                                    </p>
                                </div>
                                <h5 className="htlfndr-hotel-location">
                                    <a href="#">
                                        <i className="fa fa-map-marker"></i>san francisco united states
                                    </a>
                                </h5>
                                <p className="htlfndr-last-booking">
                                    Last booking:
                                    <span>14</span> hours ago
                                </p>
                            </div>
                            <a href="hotel-page-v4.html" role="button" className="htlfndr-select-hotel-button">
                                select
                            </a>
                            <div className="htlfndr-hotel-price">
                                <span className="htlfndr-from">from</span>
                                <span className="htlfndr-cost">$ 280</span>
                                <span className="htlfndr-per-night">per night</span>
                                <span className="cost">280</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 htlfndr-hotel-post-wrapper">
                    <div className="htlfndr-hotel-post special-offer">
                        <a href="hotel-page-v4.html" className="htlfndr-hotel-thumbnail">
                            <Image src={images.doremon} alt="pic" />
                        </a>
                        <div className="htlfndr-hotel-description">
                            <div className="htlfndr-description-content">
                                <h2 className="htlfndr-entry-title">
                                    <a href="hotel-page-v4.html">Ruzzini Palace Hotel</a>
                                </h2>
                                <div className="htlfndr-rating-stars" data-rating="3">
                                    <i className="fa fa-star htlfndr-star-color"></i>
                                    <i className="fa fa-star htlfndr-star-color"></i>
                                    <i className="fa fa-star htlfndr-star-color"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <p className="htlfndr-hotel-reviews">
                                        (<span>118</span> reviews)
                                    </p>
                                </div>
                                <h5 className="htlfndr-hotel-location">
                                    <a href="#">
                                        <i className="fa fa-map-marker"></i>san francisco united states
                                    </a>
                                </h5>
                                <p className="htlfndr-last-booking">
                                    Last booking:
                                    <span>14</span> hours ago
                                </p>
                            </div>
                            <a href="hotel-page-v4.html" role="button" className="htlfndr-select-hotel-button">
                                select
                            </a>
                            <div className="htlfndr-hotel-price">
                                <span className="htlfndr-from">from</span>
                                <span className="htlfndr-cost">$ 280</span>
                                <span className="htlfndr-per-night">per night</span>
                                <span className="cost">280</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 htlfndr-hotel-post-wrapper">
                    <div className="htlfndr-hotel-post special-offer">
                        <a href="hotel-page-v4.html" className="htlfndr-hotel-thumbnail">
                            <Image src={images.doremon} alt="pic" />
                        </a>
                        <div className="htlfndr-hotel-description">
                            <div className="htlfndr-description-content">
                                <h2 className="htlfndr-entry-title">
                                    <a href="hotel-page-v4.html">Ruzzini Palace Hotel</a>
                                </h2>
                                <div className="htlfndr-rating-stars" data-rating="3">
                                    <i className="fa fa-star htlfndr-star-color"></i>
                                    <i className="fa fa-star htlfndr-star-color"></i>
                                    <i className="fa fa-star htlfndr-star-color"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <p className="htlfndr-hotel-reviews">
                                        (<span>118</span> reviews)
                                    </p>
                                </div>
                                <h5 className="htlfndr-hotel-location">
                                    <a href="#">
                                        <i className="fa fa-map-marker"></i>san francisco united states
                                    </a>
                                </h5>
                                <p className="htlfndr-last-booking">
                                    Last booking:
                                    <span>14</span> hours ago
                                </p>
                            </div>
                            <a href="hotel-page-v4.html" role="button" className="htlfndr-select-hotel-button">
                                select
                            </a>
                            <div className="htlfndr-hotel-price">
                                <span className="htlfndr-from">from</span>
                                <span className="htlfndr-cost">$ 280</span>
                                <span className="htlfndr-per-night">per night</span>
                                <span className="cost">280</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 htlfndr-hotel-post-wrapper">
                    <div className="htlfndr-hotel-post special-offer">
                        <a href="hotel-page-v4.html" className="htlfndr-hotel-thumbnail">
                            <Image src={images.doremon} alt="pic" />
                        </a>
                        <div className="htlfndr-hotel-description">
                            <div className="htlfndr-description-content">
                                <h2 className="htlfndr-entry-title">
                                    <a href="hotel-page-v4.html">Ruzzini Palace Hotel</a>
                                </h2>
                                <div className="htlfndr-rating-stars" data-rating="3">
                                    <i className="fa fa-star htlfndr-star-color"></i>
                                    <i className="fa fa-star htlfndr-star-color"></i>
                                    <i className="fa fa-star htlfndr-star-color"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <p className="htlfndr-hotel-reviews">
                                        (<span>118</span> reviews)
                                    </p>
                                </div>
                                <h5 className="htlfndr-hotel-location">
                                    <a href="#">
                                        <i className="fa fa-map-marker"></i>san francisco united states
                                    </a>
                                </h5>
                                <p className="htlfndr-last-booking">
                                    Last booking:
                                    <span>14</span> hours ago
                                </p>
                            </div>
                            <a href="hotel-page-v4.html" role="button" className="htlfndr-select-hotel-button">
                                select
                            </a>
                            <div className="htlfndr-hotel-price">
                                <span className="htlfndr-from">from</span>
                                <span className="htlfndr-cost">$ 280</span>
                                <span className="htlfndr-per-night">per night</span>
                                <span className="cost">280</span>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
            <Pagination
                count={5}
                variant="outlined"
                shape="rounded"
                color="primary"
                sx={{
                    '& .MuiPaginationItem-page': {
                        fontSize: '14px',
                    },
                }}
                style={{ margin: '15px 0' }}
            />
        </>
    );
}

export default Room;
