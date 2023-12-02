/* eslint-disable jsx-a11y/anchor-is-valid */
import Image from '~/components/Image';
import styles from './Sidebar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBuilding,
    faHome,
    faHotel,
    faSuitcaseRolling,
    faSyncAlt,
    faUserTie,
} from '@fortawesome/free-solid-svg-icons';
import { faBell, faBookmark, faEnvelope, faStar } from '@fortawesome/free-regular-svg-icons';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { faStackOverflow } from '@fortawesome/free-brands-svg-icons';

function Sidebar() {
    const [menuActive, setMenuActive] = useState(1);
    return (
        <div className="sidebar-left">
            <div className="sidebar-topbar text-center">
                <i className="fas fa-hotel"></i>
                <span className="text">Star Hotel</span>
            </div>

            <div className="side-menu">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <div className="sidebar-header">
                            <Image
                                src="images/commenter-1.jpg"
                                alt="sidebar-header-img"
                                className="img-fluid rounded-circle"
                            />
                            <h2>John Doe</h2>
                            <small>
                                <h5>Incharge</h5>
                            </small>
                            <br />
                            <ul className="list-unstyled custom">
                                <li
                                    className="list-inline-item"
                                    data-toggle="tooltip"
                                    data-html="true"
                                    title="Messages"
                                >
                                    <a
                                        className="sidebar-header-icons"
                                        style={{ fontSize: '14px' }}
                                        href="messages-inbox.html"
                                    >
                                        <FontAwesomeIcon icon={faEnvelope} className="far" />
                                    </a>
                                </li>
                                <li
                                    className="list-inline-item"
                                    data-toggle="tooltip"
                                    data-html="true"
                                    title="Notifications"
                                >
                                    <a className="sidebar-header-icons" style={{ fontSize: '14px' }} href="#">
                                        <FontAwesomeIcon icon={faBell} className="far" />
                                    </a>
                                </li>
                                <li className="list-inline-item" data-toggle="tooltip" data-html="true" title="Reviews">
                                    <a
                                        className="sidebar-header-icons"
                                        style={{ fontSize: '14px' }}
                                        href="reviews.html"
                                    >
                                        <FontAwesomeIcon icon={faStar} className="far" />
                                    </a>
                                </li>
                                <li
                                    className="list-inline-item"
                                    data-toggle="tooltip"
                                    data-html="true"
                                    title="Bookmarks"
                                >
                                    <a
                                        className="sidebar-header-icons"
                                        style={{ fontSize: '14px' }}
                                        href="bookmarks.html"
                                    >
                                        <FontAwesomeIcon icon={faBookmark} className="far" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className={`nav-item ${styles.sidebar}`} onClick={() => setMenuActive(1)}>
                        <Link to="/admin/dashboards" className={`items-list first ${menuActive === 1 ? 'active' : ''}`}>
                            <span>
                                <FontAwesomeIcon icon={faHome} className="icon-font" />
                            </span>
                            <span className="items-list-text">Dashboard</span>
                        </Link>
                    </li>
                    <li className={`nav-item ${styles.sidebar}`} onClick={() => setMenuActive(2)}>
                        <Link to="/admin/users" className={`items-list first ${menuActive === 2 ? 'active' : ''}`}>
                            <span>
                                <FontAwesomeIcon icon={faUserTie} className="icon-font" />
                            </span>
                            <span className="items-list-text">Users</span>
                        </Link>
                    </li>
                    <li className={`nav-item ${styles.sidebar}`} onClick={() => setMenuActive(3)}>
                        <Link to="/admin/listrooms" className={`items-list first ${menuActive === 3 ? 'active' : ''}`}>
                            <span>
                                <FontAwesomeIcon icon={faHotel} className="icon-font" />
                            </span>
                            <span className="items-list-text">Room Listing</span>
                        </Link>
                    </li>
                    <li className={`nav-item ${styles.sidebar}`} onClick={() => setMenuActive(4)}>
                        <Link to="/admin/roomtypes" className={`items-list first ${menuActive === 4 ? 'active' : ''}`}>
                            <span>
                                <FontAwesomeIcon icon={faStackOverflow} className="icon-font" />
                            </span>
                            <span className="items-list-text">Room Types</span>
                        </Link>
                    </li>
                    <li className={`nav-item ${styles.sidebar}`} onClick={() => setMenuActive(5)}>
                        <Link to="#" className={`items-list first ${menuActive === 5 ? 'active' : ''}`}>
                            <span>
                                <FontAwesomeIcon icon={faSuitcaseRolling} className="icon-font" />
                            </span>
                            <span className="items-list-text">Bookings</span>
                        </Link>
                    </li>
                    <li className={`nav-item ${styles.sidebar}`} onClick={() => setMenuActive(6)}>
                        <Link to="#" className={`items-list first ${menuActive === 6 ? 'active' : ''}`}>
                            <span>
                                <FontAwesomeIcon icon={faSyncAlt} className="icon-font" />
                            </span>
                            <span className="items-list-text">Reviews</span>
                        </Link>
                    </li>
                    <li className={`nav-item ${styles.sidebar}`} onClick={() => setMenuActive(7)}>
                        <Link to="#" className={`items-list first ${menuActive === 7 ? 'active' : ''}`}>
                            <span>
                                <FontAwesomeIcon icon={faEnvelope} className="icon-font" />
                            </span>
                            <span className="items-list-text">Messages</span>
                        </Link>
                    </li>
                    <li className={`nav-item ${styles.sidebar}`} onClick={() => setMenuActive(8)}>
                        <Link to="#" className={`items-list first ${menuActive === 8 ? 'active' : ''}`}>
                            <span>
                                <FontAwesomeIcon icon={faBuilding} className="icon-font" />
                            </span>
                            <span className="items-list-text">Profile</span>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="side-bar-bottom">
                <ul className="list-unstyled">
                    <li className="list-inline-item" data-toggle="tooltip" data-html="true" title="Edit Profile">
                        <a href="profile-edit-profile.html">
                            <i className="fas fa-cog"></i>
                        </a>
                    </li>
                    <li className="list-inline-item" data-toggle="tooltip" data-html="true" title="Change Password">
                        <a href="profile-change-password.html">
                            <i className="fas fa-key"></i>
                        </a>
                    </li>
                    <li className="list-inline-item" data-toggle="tooltip" data-html="true" title="Lockscreen">
                        <a href="#">
                            <i className="fas fa-unlock"></i>
                        </a>
                    </li>
                    <li className="list-inline-item" data-toggle="tooltip" data-html="true" title="Logout">
                        <a href="#">
                            <i className="fas fa-power-off"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;
