/* eslint-disable jsx-a11y/anchor-is-valid */
import { Container, Row, Col } from 'react-grid-system';
import images from '~/assets/images';
import Image from '~/components/Image';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import { Link } from 'react-router-dom';
import config from '~/config';
import styles from './Room.module.scss';

function Room({ data, gridColumn }) {
    return (
        <div className="row">
            {data?.map((room, index) => (
                <div key={index} className="col-md-4 htlfndr-hotel-post-wrapper">
                    <Link to={config.routes.detailRoomLink(room.id)} state={{ step: 2 }}>
                        <div className="htlfndr-hotel-post">
                            <a className="htlfndr-hotel-thumbnail">
                                <Image src={room.avatarUrl} alt={room.subject} className="as" />
                            </a>
                            <div className="htlfndr-hotel-description">
                                <div className="htlfndr-description-content">
                                    <h2 className="htlfndr-entry-title">
                                        <a>{room.subject}</a>
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
                                        <a data-tooltip-id="my-tooltip" data-tooltip-content={room.address}>
                                            <i
                                                className="fa fa-map-marker"
                                                title={room.address}
                                                data-toggle="tooltip"
                                            ></i>
                                            {room.address}
                                        </a>
                                    </h5>
                                    <Tooltip id="my-tooltip" />
                                </div>
                                <a href="/detailroom" role="button" className="htlfndr-select-hotel-button">
                                    select
                                </a>
                                <div className="htlfndr-hotel-price">
                                    <span className="htlfndr-from">from</span>
                                    <span className="htlfndr-cost">{room.price}</span>
                                    <span className="htlfndr-per-night">per month</span>
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
