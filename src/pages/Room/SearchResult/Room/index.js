/* eslint-disable jsx-a11y/anchor-is-valid */
import Image from '~/components/Image';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import { Link } from 'react-router-dom';
import config from '~/config';
import { useTranslation } from 'react-i18next';
import styles from './Room.module.scss';
import './Room.module.scss'

function Room({ data, gridColumn }) {
    const { t } = useTranslation();

    const renderStars = (averageStar) => {
        const stars = Array.from(
            { length: 5 },
            (_, index) => (
                <i
                    key={index}
                    style={{ marginRight: '5px' }}
                    className={`fa fa-star ${index < averageStar ? 'htlfndr-star-color' : ''}`}
                ></i>
            ), //&nbsp
        );

        return <>{stars}</>;
    };
    return (
        <div className={`row ${styles.cus}`}>
            {data?.map((room, index) => (
                <div key={index} className="col-md-4 htlfndr-hotel-post-wrapper">
                    <Link to={config.routes.detailRoomLink(room.id)} state={{ step: 2 }}>
                        <div className="htlfndr-hotel-post">
                            <div className="htlfndr-hotel-thumbnail">
                                <Image src={room.avatarUrl} alt={room.subject} className="as" />
                            </div>
                            <div className="htlfndr-hotel-description">
                                <div className="htlfndr-description-content">
                                    <h2 className="htlfndr-entry-title">
                                        <p>{room.subject}</p>
                                    </h2>
                                    <div className="htlfndr-rating-stars" data-rating="5">
                                        {renderStars(room?.averageStar)}
                                        <p className="htlfndr-hotel-reviews">
                                            (<span>{room.totalReview}</span> {t('reviews')})
                                        </p>
                                    </div>
                                    <h5 className="htlfndr-hotel-location" style={{color: "#000"}}>
                                        <div data-tooltip-id="my-tooltip" data-tooltip-content={room.address}>
                                            <i
                                                className="fa fa-map-marker"
                                                title={room.address}
                                                data-toggle="tooltip"
                                                style={{ color: '#08c1da', marginRight: '5px' }}
                                            ></i>
                                            {room.address}
                                        </div>
                                    </h5>
                                    <Tooltip id="my-tooltip" />
                                </div>
                                <div className="htlfndr-select-hotel-button">{t('select')}</div>
                                <div className="htlfndr-hotel-price">
                                    <span className="htlfndr-from">{t('from')}</span>
                                    <span className="htlfndr-cost">{room.price}</span>
                                    <span className="htlfndr-per-night">/ {t('month')}</span>
                                    <span className="cost">100</span>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default Room;
