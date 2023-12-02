/* eslint-disable jsx-a11y/anchor-is-valid */
import Image from '~/components/Image';
import Tippy from '@tippyjs/react/headless';
import styles from './Header.module.scss';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faEnvelope, faEnvelopeOpen } from '@fortawesome/free-regular-svg-icons';

function Header() {
    const [menuActive, setMenuActive] = useState(0);

    return (
        <div className="top-bar">
            <nav className="navbar">
                <button className="navbar-toggler d-block sideMenuToggler" type="button">
                    <span className="fa fa-bars"></span>
                </button>
                <ul className="ml-auto list-unstyled nav-list list-inline d-flex my-auto">
                    <li className="nav-item list-inline-item">
                        <form className="form-inline my-2 my-lg-0 d-none d-xl-flex">
                            <input
                                className="form-control mr-sm-2"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                            />
                            <i className="fas fa-search"></i>
                        </form>
                    </li>
                    <li className="nav-item list-inline-item dropdown messages">
                        <a
                            className="nav-link dropdown-toggle"
                            href="#"
                            id="navbarDropdown"
                            role="button"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                        >
                            <FontAwesomeIcon icon={faEnvelope} className="far" />
                        </a>
                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                            <span>Messages (5)</span>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">
                                <FontAwesomeIcon icon={faEnvelope} className="far" />
                                Your Order is Placed
                                <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</span>
                            </a>
                            <a className="dropdown-item" href="#">
                                <FontAwesomeIcon icon={faEnvelopeOpen} className="far" />
                                New Message Received
                                <span>Lorem ipsum dolor sit amet.</span>
                            </a>
                            <a className="dropdown-item bottom-margin" href="#">
                                <FontAwesomeIcon icon={faEnvelopeOpen} className="far" />
                                Your item is Shipped
                                <span>Lorem ipsum dolor sit amet consectetur adipisicing.</span>
                            </a>
                            <div className="dropdown-divider"></div>
                            <a href="#" className="btn mx-auto d-block">
                                View All
                            </a>
                        </div>
                    </li>
                    <li className="nav-item list-inline-item notifications">
                        <a
                            className="nav-link dropdown-toggle"
                            href="#"
                            id="navbarDropdown"
                            role="button"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                        >
                            <FontAwesomeIcon icon={faBell} className="far" />
                        </a>
                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                            <span>Notifications (258)</span>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">
                                <i className="fas fa-cart-plus"></i>Your Order is Placed
                                <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</span>
                            </a>
                            <a className="dropdown-item" href="#">
                                <i className="fas fa-sms"></i>New Message Received
                                <span>Lorem ipsum dolor sit amet.</span>
                            </a>
                            <a className="dropdown-item bottom-margin" href="#">
                                <i className="fas fa-glass-martini"></i>Your item is Shipped
                                <span>Lorem ipsum dolor sit amet consectetur adipisicing.</span>
                            </a>
                            <div className="dropdown-divider"></div>
                            <a href="#" className="btn mx-auto d-block">
                                View All
                            </a>
                        </div>
                    </li>
                    <li className="nav-item list-inline-item dropdown profile">
                        <Tippy
                            interactive
                            offset={[0, -2]}
                            render={(attrs) => (
                                <div className={styles.box} aria-labelledby="navbarDropdown" tabIndex="-1" {...attrs}>
                                    <Link
                                        className={`dropdown-item ${menuActive === 1 ? styles.active : ''}`}
                                        to="/admin/viewprofile"
                                        onClick={() => setMenuActive(1)}
                                    >
                                        <i className="fas fa-user" style={{ marginRight: '15px' }}></i>
                                        <span>View Profile</span>
                                    </Link>

                                    <Link
                                        className={`dropdown-item ${menuActive === 2 ? styles.active : ''}`}
                                        to="/admin/editprofile"
                                        onClick={() => setMenuActive(2)}
                                    >
                                        <i className="fas fa-cog" style={{ marginRight: '15px' }}></i>
                                        <span>Edit Profile</span>
                                    </Link>

                                    <Link
                                        className={`dropdown-item ${menuActive === 3 ? styles.active : ''}`}
                                        to="/admin/changepassword"
                                        onClick={() => setMenuActive(3)}
                                    >
                                        <i className="fas fa-unlock" style={{ marginRight: '15px' }}></i>
                                        <span>Change Password</span>
                                    </Link>

                                    <Link className={`dropdown-item ${menuActive === 4 ? styles.active : ''}`} to="#">
                                        <i className="fas fa-unlock" style={{ marginRight: '15px' }}></i>
                                        <span>Lock Screen</span>
                                    </Link>

                                    <Link to="#" className={`btn d-block text-left ${styles.text_logout}`}>
                                        <i className="fas fa-power-off" style={{ marginRight: '15px' }}></i>Logout
                                    </Link>
                                </div>
                            )}
                        >
                            <a
                                className="nav-link"
                                href="#"
                                id="navbarDropdown"
                                role="button"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                            >
                                <Image
                                    src="images/commenter-1.jpg"
                                    alt="avatar"
                                    className="img-fluid rounded-circle"
                                    width="34px"
                                />
                            </a>
                        </Tippy>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Header;
