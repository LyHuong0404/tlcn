/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-redundant-roles */
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Image from '~/components/Image';
import Pagination from '@mui/material/Pagination';
import { useEffect, useState } from 'react';
import { getListReviews } from '~/actions/otherActions';
import { detailRoom } from '~/actions/userActions';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

function AllReviews() {
    const { t } = useTranslation();
    const { user } = useSelector((state) => state.auth);
    const navigate = useNavigate();
    const location = useLocation();
    const id = location?.state?.id;
    const [reviews, setReviews] = useState([]);
    const [totalPage, setTotalPage] = useState(0);
    const [pageIndex, setPageIndex] = useState(0);
    const [room, setRoom] = useState({});

    useEffect(() => {
        try {
            const fetchData = async () => {
                const listReviews = await getListReviews(id, pageIndex);
                setReviews(listReviews?.content);
                setTotalPage(listReviews?.totalPage);

                const rs = await detailRoom(id);
                setRoom(rs);
            };
            fetchData();
        } catch (error) {
            console.log(error);
        }
    }, [id, pageIndex]);

    const handleSetPage = (event, page) => {
        setPageIndex(page - 1);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const renderStars = (averageStar) => {
        const stars = Array.from({ length: 5 }, (_, index) => (
            <i key={index} className={`fa fa-star ${index < averageStar ? 'htlfndr-star-color' : ''}`}></i>
        ));

        return <>{stars}</>;
    };

    const handleBook = () => {
        if (user) {
            navigate('/user/appointment', { state: { room: room?.room, step: 3 } });
        } else {
            navigate('/auth/login');
        }
    };
    return (
        <>
            <div style={{ display: 'flex' }}>
                <div style={{ display: 'flex', flexDirection: 'column', width: '1000px' }}>
                    {reviews?.map((review, index) => (
                        <div key={index} className="htlfndr-visitor-review" style={{ borderBottom: '1px solid #eee' }}>
                            <div className="htlfndr-review-left-side">
                                <div className="htlfndr-visitor-avatar">
                                    <Image
                                        src={review.user.avatar}
                                        alt={review.user.username}
                                        style={{ height: '118px' }}
                                    />
                                </div>
                                <div className="htlfndr-visitor-flag">
                                    <Image src={review.user.avatar} alt={review.user.username} />
                                </div>
                                <dl>
                                    <dt>{review.user.username}</dt>
                                    {/* <dd>kiev, ukraine</dd> */}
                                </dl>
                            </div>
                            <div className="htlfndr-review-right-side">
                                <article className="htlfndr-visitor-post">
                                    <header>
                                        <h3>{t('REVIEW ROOM')}</h3>
                                        <h6>{review.time}</h6>
                                    </header>
                                    <div className="htlfndr-rating-stars">{renderStars(review.star)}</div>
                                    <p>{review.content}</p>
                                </article>
                            </div>
                        </div>
                    ))}
                </div>
                <aside
                    id="htlfndr-right-sidebar"
                    className="col-sm-12 col-md-4 col-lg-3 htlfndr-sidebar htlfndr-sidebar-in-right"
                    role="complementary"
                >
                    <div className="widget htlfndr-hotel-visit-card">
                        <div className="htlfndr-widget-main-content htlfndr-widget-padding">
                            <div className="htlfndr-hotel-logo">
                                <Image
                                    src={room?.room?.avatarUrl}
                                    alt={room?.room?.subject}
                                    style={{ width: '176px', height: '154px' }}
                                />
                            </div>
                            <div className="htlfndr-hotel-description">
                                <h2>{room?.room?.subject}</h2>
                                <div className="htlfndr-rating-stars">{renderStars(room?.room?.averageStar)}</div>
                                <h5 className="htlfndr-hotel-location">
                                    <a>
                                        <i className="fa fa-map-marker"></i>
                                        {room?.room?.address}
                                    </a>
                                </h5>
                            </div>
                            <div className="htlfndr-hotel-price">
                                <span className="htlfndr-cost">{room?.room?.price}</span>
                                <span className="htlfndr-per-night">/ {t('month')}</span>
                            </div>
                        </div>
                        <button onClick={handleBook} className="htlfndr-book-now-button" role="button">
                            {t('Make appointment')}
                        </button>
                        <div className="htlfndr-widget-padding">
                            <div className="htlfndr-hotel-contacts">
                                <p className="htlfndr-mail">
                                    <a>{room?.owner?.email}</a>
                                </p>

                                <p className="htlfndr-phone">
                                    <a>{room?.owner?.phone}</a>
                                </p>
                                <p className="htlfndr-reviews">{room?.room?.totalReview} ({t('Reviews')})</p>
                            </div>
                        </div>
                    </div>
                </aside>
            </div>
            <div className="dataTables_paginate paging_simple_numbers" id="example_paginate">
                {totalPage > 1 && (
                    <Pagination
                        count={totalPage}
                        color="primary"
                        sx={{
                            '& .MuiPaginationItem-page': {
                                fontSize: '14px',
                            },
                        }}
                        style={{ padding: '25px' }}
                        onChange={handleSetPage}
                    />
                )}
            </div>
        </>
    );
}

export default AllReviews;
