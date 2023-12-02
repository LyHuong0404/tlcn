/* eslint-disable jsx-a11y/no-redundant-roles */
import { Link } from 'react-router-dom';
import Image from '~/components/Image';
import Pagination from '@mui/material/Pagination';

function AllReviews() {
    return (
        <>
            <div style={{ display: 'flex' }}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <div className="htlfndr-visitor-review" style={{ borderBottom: '1px solid #eee' }}>
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
                                    magna sed amet purus sit nec class sit fringilla tellus volutpat per eget molestie
                                    Platea suspendisse eget tortor pharetra magna nam senectus tristique cursus ut odio
                                    sollicitudin venenatis natoque dis maecenas magna dignissim sociosqu et sociis
                                    accumsan interdum dictum netus quis enim phasellus suscipit nunc donec purus dui
                                    himenaeos nulla sociosqu rhoncus dictumst fusce ultricies congue sapien porttitor
                                    maecenas fringilla ipsum nam lorem aliquam rhoncus elit himenaeos
                                </p>
                            </article>
                        </div>
                    </div>
                    <div className="htlfndr-visitor-review" style={{ borderBottom: '1px solid #eee' }}>
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
                                    magna sed amet purus sit nec class sit fringilla tellus volutpat per eget molestie
                                    Platea suspendisse eget tortor pharetra magna nam senectus tristique cursus ut odio
                                    sollicitudin venenatis natoque dis maecenas magna dignissim sociosqu et sociis
                                    accumsan interdum dictum netus quis enim phasellus suscipit nunc donec purus dui
                                    himenaeos nulla sociosqu rhoncus dictumst fusce ultricies congue sapien porttitor
                                    maecenas fringilla ipsum nam lorem aliquam rhoncus elit himenaeos
                                </p>
                            </article>
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
                                    magna sed amet purus sit nec class sit fringilla tellus volutpat per eget molestie
                                    Platea suspendisse eget tortor pharetra magna nam senectus tristique cursus ut odio
                                    sollicitudin venenatis natoque dis maecenas magna dignissim sociosqu et sociis
                                    accumsan interdum dictum netus quis enim phasellus suscipit nunc donec purus dui
                                    himenaeos nulla sociosqu rhoncus dictumst fusce ultricies congue sapien porttitor
                                    maecenas fringilla ipsum nam lorem aliquam rhoncus elit himenaeos
                                </p>
                            </article>
                        </div>
                    </div>
                </div>
                <aside
                    id="htlfndr-right-sidebar"
                    className="col-sm-12 col-md-4 col-lg-3 htlfndr-sidebar htlfndr-sidebar-in-right"
                    role="complementary"
                >
                    <div className="widget htlfndr-hotel-visit-card">
                        <div className="htlfndr-widget-main-content htlfndr-widget-padding">
                            <div className="htlfndr-hotel-logo">
                                <Image src="images/hotel-logo.jpg" alt="Hotel logo" />
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
                            <div className="htlfndr-hotel-price">
                                <span className="htlfndr-from">from</span>
                                <span className="htlfndr-cost">$ 100</span>
                                <span className="htlfndr-per-night">/ night</span>
                            </div>
                        </div>
                        <Link to="payment.html" className="htlfndr-book-now-button" role="button">
                            view room
                        </Link>
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
                </aside>
            </div>
            <div className="dataTables_paginate paging_simple_numbers" id="example_paginate">
                <Pagination
                    count={5}
                    color="primary"
                    sx={{
                        '& .MuiPaginationItem-page': {
                            fontSize: '14px',
                        },
                    }}
                    style={{ padding: '25px' }}
                />
            </div>
        </>
    );
}

export default AllReviews;
