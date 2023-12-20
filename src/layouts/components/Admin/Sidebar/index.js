/* eslint-disable jsx-a11y/anchor-is-valid */
import Image from '~/components/Image';
import styles from './Sidebar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding, faHome, faSuitcaseRolling, faSyncAlt, faUserTie } from '@fortawesome/free-solid-svg-icons';
import { faBell, faBookmark, faEnvelope, faStar } from '@fortawesome/free-regular-svg-icons';
import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { userLogout } from '~/actions/authActions';
import { useTranslation } from 'react-i18next';

function Sidebar({ user }) {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const location = useLocation();
    const activeTab = location?.state?.activeTab;
    const [menuActive, setMenuActive] = useState(activeTab || 1);

    const handleLogout = async () => {
        await userLogout();
        navigate('/auth/login');
    };

    return (
        <div className="sidebar-left">
            <div className="sidebar-topbar text-center">
                <i className="fa fa-star"></i>
                <span className="text">Smart Admin</span>
            </div>

            <div className="side-menu">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <div className="sidebar-header">
                            <Image
                                src={user.avatar}
                                alt={user.username}
                                className="img-fluid rounded-circle"
                                style={{ padding: '0', height: '80px' }}
                            />
                            <h2>{user.username}</h2>
                            <small>
                                <h5>{t('Admin')}</h5>
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
                                    <a className="sidebar-header-icons" style={{ fontSize: '14px' }} >
                                        <FontAwesomeIcon icon={faBell} className="far" />
                                    </a>
                                </li>
                                <li className="list-inline-item" data-toggle="tooltip" data-html="true" title="Reviews">
                                    <a
                                        className="sidebar-header-icons"
                                        style={{ fontSize: '14px' }}
                                       
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
                                       
                                    >
                                        <FontAwesomeIcon icon={faBookmark} className="far" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className={`nav-item ${styles.sidebar}`} onClick={() => setMenuActive(1)}>
                        <Link to="/admin/dashboard" className={`items-list first ${menuActive === 1 ? 'active' : ''}`}>
                            <span>
                                <FontAwesomeIcon icon={faHome} className="icon-font" />
                            </span>
                            <span className="items-list-text">{t('Dashboard')}</span>
                        </Link>
                    </li>
                    <li className={`nav-item ${styles.sidebar}`} onClick={() => setMenuActive(2)}>
                        <Link to="/admin/users" className={`items-list first ${menuActive === 2 ? 'active' : ''}`}>
                            <span>
                                <FontAwesomeIcon icon={faUserTie} className="icon-font" />
                            </span>
                            <span className="items-list-text">{t('Users')}</span>
                        </Link>
                    </li>
                    <li className={`nav-item ${styles.sidebar}`} onClick={() => setMenuActive(5)}>
                        <Link
                            to="/admin/appointments"
                            className={`items-list first ${menuActive === 5 ? 'active' : ''}`}
                        >
                            <span>
                                <FontAwesomeIcon icon={faSuitcaseRolling} className="icon-font" />
                            </span>
                            <span className="items-list-text">{t('Appointments')}</span>
                        </Link>
                    </li>
                    <li className={`nav-item ${styles.sidebar}`} onClick={() => setMenuActive(6)}>
                        <Link to="/admin/payments" className={`items-list first ${menuActive === 6 ? 'active' : ''}`}>
                            <span>
                                <FontAwesomeIcon icon={faSyncAlt} className="icon-font" />
                            </span>
                            <span className="items-list-text">{t('Payments')}</span>
                        </Link>
                    </li>
                    {/* <li className={`nav-item ${styles.sidebar}`} onClick={() => setMenuActive(7)}>
                        <Link to="#" className={`items-list first ${menuActive === 7 ? 'active' : ''}`}>
                            <span>
                                <FontAwesomeIcon icon={faEnvelope} className="icon-font" />
                            </span>
                            <span className="items-list-text">Messages</span>
                        </Link>
                    </li> */}
                    <li className={`nav-item ${styles.sidebar}`} onClick={() => setMenuActive(8)}>
                        <Link
                            to="/admin/viewprofile"
                            className={`items-list first ${menuActive === 8 ? 'active' : ''}`}
                        >
                            <span>
                                <FontAwesomeIcon icon={faBuilding} className="icon-font" />
                            </span>
                            <span className="items-list-text">{t('Profile')}</span>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="side-bar-bottom">
                <ul className="list-unstyled">
                    <li className="list-inline-item" data-toggle="tooltip" data-html="true" title="Edit Profile">
                        <Link to="/admin/editprofile">
                            <i className="fas fa-cog"></i>
                        </Link>
                    </li>
                    <li className="list-inline-item" data-toggle="tooltip" data-html="true" title="Change Password">
                        <Link to="/admin/changepassword">
                            <i className="fas fa-key"></i>
                        </Link>
                    </li>
                    <li className="list-inline-item" data-toggle="tooltip" data-html="true" title="Lockscreen">
                        <a>
                            <i className="fas fa-unlock"></i>
                        </a>
                    </li>
                    <li
                        onClick={handleLogout}
                        className="list-inline-item"
                        data-toggle="tooltip"
                        data-html="true"
                        title="Logout"
                    >
                        <a>
                            <i className="fas fa-power-off"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;
