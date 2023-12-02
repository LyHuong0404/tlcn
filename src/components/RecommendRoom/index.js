import { Link, useLocation } from 'react-router-dom';
import config from '~/config';
import Image from '../Image';
import styles from './RecommendRoom.module.scss';
function RecommendRoom({ data }) {
    return (
        <div className="row">
            {data?.map((room) => (
                <div key={room.id} className="col-xs-12 col-sm-4 col-md-4">
                    <Link
                        to={config.routes.detailRoomLink(room.id)}
                        state={{
                            room: room,
                            step: 2
                        }}
                    >
                        <article className="htlfndr-top-destination-block">
                            <div className="htlfndr-content-block">
                                <Image className={styles.top_recommands} src={room.avatarUrl} alt={room.subject} />
                                <div className="htlfndr-post-content">
                                    <p className="htlfndr-the-excerpt">
                                        {room.address}
                                        <p className="htlfndr-read-more-arrow">
                                            <i className="fa fa-angle-right"></i>
                                        </p>
                                    </p>
                                    <div className="htlfndr-services">
                                        <div className="row">
                                            {room.attic && (
                                                <div className="col-sm-6 col-xs-6 htlfndr-service">Attic</div>
                                            )}
                                            {room.privateToilet && (
                                                <div className="col-sm-6 col-xs-6 htlfndr-service">Private Toilet</div>
                                            )}
                                        </div>
                                        <div className="row">
                                            {room.allowedPet && (
                                                <div className="col-sm-6 col-xs-6 htlfndr-service">Allow Pet</div>
                                            )}
                                            <div className="col-sm-6 col-xs-6 htlfndr-service">Free Wi-Fi</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <footer className="entry-footer">
                                <div className="htlfndr-left-side-footer">
                                    <h5 className="entry-title">{room.subject}</h5>
                                    <div className="htlfndr-entry-rating-stars">
                                        <i className="fa fa-star htlfndr-star-color"></i>
                                        <i className="fa fa-star htlfndr-star-color"></i>
                                        <i className="fa fa-star htlfndr-star-color"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                    </div>
                                </div>
                                <div className="htlfndr-right-side-footer">
                                    <span className="htlfndr-cost">{room.price}</span>
                                    <span className="htlfndr-per-night">per month</span>
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
