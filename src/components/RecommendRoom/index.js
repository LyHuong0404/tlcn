import { Link, useLocation } from 'react-router-dom';
import config from '~/config';
import Image from '../Image';
import styles from './RecommendRoom.module.scss';
import { useTranslation } from 'react-i18next';
function RecommendRoom({ data }) {
    const { t } = useTranslation();

    const renderStars = (averageStar) => {
        const stars = Array.from({ length: 5 }, (_, index) => (
            <i key={index} className={`fa fa-star ${index < averageStar ? 'htlfndr-star-color' : ''}`}></i>
        ));

        return <>{stars}</>;
    };
    return (
        <div className="row">
            {data?.map((room) => (
                <div key={room.id} className="col-xs-12 col-sm-4 col-md-4">
                    <Link
                        to={config.routes.detailRoomLink(room.id)}
                        state={{
                            step: 2,
                        }}
                    >
                        <article className="htlfndr-top-destination-block">
                            <div className="htlfndr-content-block">
                                <Image className={styles.top_recommands} src={room.avatarUrl} alt={room.subject} />
                                <div className="htlfndr-post-content">
                                    <div className="htlfndr-the-excerpt">
                                        {room.address}
                                        <p className="htlfndr-read-more-arrow">
                                            <i className="fa fa-angle-right"></i>
                                        </p>
                                    </div>
                                    <div className="htlfndr-services">
                                        <div className="row">
                                            {room.attic && (
                                                <div className="col-sm-6 col-xs-6 htlfndr-service">Attic</div>
                                            )}
                                            {room.privateToilet && (
                                                <div className="col-sm-6 col-xs-6 htlfndr-service">Private Toilet</div>
                                            )}
                                            {room.allowedPet && (
                                                <div className="col-sm-6 col-xs-6 htlfndr-service">Allow Pet</div>
                                            )}
                                            {room.furnitureAvailable && (
                                                <div className="col-sm-6 col-xs-6 htlfndr-service">
                                                    Furniture Available
                                                </div>
                                            )}
                                            {room.tvAvailable && (
                                                <div className="col-sm-6 col-xs-6 htlfndr-service">Television</div>
                                            )}
                                            {room.airConditionAvailable && (
                                                <div className="col-sm-6 col-xs-6 htlfndr-service">
                                                    Air Conditioning
                                                </div>
                                            )}
                                            {room.isFreeParking && (
                                                <div className="col-sm-6 col-xs-6 htlfndr-service">{t('Free Parking')}</div>
                                            )}
                                            <div className="col-sm-6 col-xs-6 htlfndr-service">{t('Free Wi-Fi')}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <footer className="entry-footer">
                                <div className="htlfndr-left-side-footer">
                                    <h5 className="entry-title">{room.subject}</h5>
                                    <div className="htlfndr-entry-rating-stars">
                                    {renderStars(room.averageStar)}

                                    </div>
                                </div>
                                <div className="htlfndr-right-side-footer">
                                    <span className="htlfndr-cost">{room.price}</span>
                                    <span className="htlfndr-per-night">/ {t('month')}</span>
                                </div>
                            </footer>
                        </article>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default RecommendRoom;
