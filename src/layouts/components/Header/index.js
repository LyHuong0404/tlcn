/* eslint-disable jsx-a11y/anchor-is-valid */
import 'classnames/bind';
// import '~/components/GlobalStyles/GlobalStyles.module.scss';
import '~/assets/css/bootstrap.min.css';
import '~/assets/css/jquery-ui.css';
import '~/assets/css/ie.css';
import '~/assets/css/style.css';
import '~/assets/css/owl.carousel.css';
import '~/assets/css/select-style.css';
import '~/assets/css/font-awesome.min.css';
import '~/assets/js/jquery-1.11.3.min.js';
import images from '~/assets/images';
import Image from '~/components/Image';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { useState } from 'react';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Tippy from '@tippyjs/react/headless';

function Header() {
    const { user } = useSelector((state) => state.auth);
    const [active, setActive] = useState(1);

    const [language, setLanguage] = useState('en');
    const [menuActive, setMenuActive] = useState(1);

    const handleChangeLang = (event) => {
        setLanguage(event.target.value);
    };
    return (
        <>
            <div className="htlfndr-loader-overlay"></div>
            <div className="htlfndr-wrapper">
                <header>
                    <div className="htlfndr-top-header">
                        <div className="navbar navbar-default htlfndr-blue-hover-nav">
                            <div className="container">
                                <div className="navbar-header">
                                    <button
                                        type="button"
                                        className="navbar-toggle collapsed"
                                        data-toggle="collapse"
                                        data-target="#htlfndr-first-nav"
                                    >
                                        <span className="sr-only">Toggle navigation</span>
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                    </button>
                                    <a className="htlfndr-logo navbar-brand" href="index-2.html">
                                        <Image src={images.logo} alt="Logo" />
                                        <p className="htlfndr-logo-text">
                                            hotel <span>finder</span>
                                        </p>
                                    </a>
                                </div>
                                {user ? (
                                    <Tippy
                                        interactive
                                        // visible
                                        // offset={[0, -10]} //lệch ngang, cao
                                        render={(attrs) => (
                                            <div className={styles.box} tabIndex="-1" {...attrs}>
                                                <ul style={{ listStyle: 'none' }} className={styles.private}>
                                                    <li
                                                        className={`${styles.menu} ${
                                                            active === 1 ? styles.active : ''
                                                        }`}
                                                        onClick={() => setActive(1)}
                                                    >
                                                        <Link to="">
                                                            <i className="fa fa-user"></i>
                                                            Personal Info
                                                        </Link>
                                                    </li>
                                                    <li
                                                        className={` ${active === 2 ? styles.active : ''}`}
                                                        onClick={() => setActive(2)}
                                                    >
                                                        <Link to="/user/allappointments">
                                                            <i className="fa fa-clock-o"></i> Appointment
                                                        </Link>
                                                    </li>

                                                    <li
                                                        className={` ${active === 3 ? styles.active : ''}`}
                                                        onClick={() => setActive(3)}
                                                    >
                                                        <Link to="">
                                                            <i className="fa fa-heart-o"></i> Wishlist
                                                        </Link>
                                                    </li>
                                                    <li
                                                        className={` ${active === 4 ? styles.active : ''}`}
                                                        onClick={() => setActive(4)}
                                                    >
                                                        <Link to="">
                                                            <i className="fa fa-wrench"></i> Settings
                                                        </Link>
                                                    </li>
                                                    <li
                                                        className={` ${active === 5 ? styles.active : ''}`}
                                                        onClick={() => setActive(5)}
                                                    >
                                                        <Link to="">
                                                            <i className="fa fa-credit-card"></i>
                                                            Register Seller
                                                        </Link>
                                                    </li>
                                                    {user ? (
                                                        <li
                                                            className={` ${active === 6 ? styles.active : ''}`}
                                                            onClick={() => setActive(6)}
                                                        >
                                                            <a>
                                                                <i className="fa fa-sign-out"></i>
                                                                Logout
                                                            </a>
                                                        </li>
                                                    ) : (
                                                        <li
                                                            className={` ${active === 6 ? styles.active : ''}`}
                                                            onClick={() => setActive(6)}
                                                        >
                                                            <a>
                                                                <i className="fa fa-sign-in"></i>
                                                                Login
                                                            </a>
                                                        </li>
                                                    )}
                                                </ul>
                                            </div>
                                        )}
                                    >
                                        <div className="htlfndr-user-signed-in">
                                            <a href="/" className="htlfndr-user-avatar">
                                                <Image
                                                    src="https://th.bing.com/th/id/OIP.AbyqDkpwVGUclMtO1kqv0QHaEV?w=271&h=191&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                                                    alt="user avatar"
                                                />
                                            </a>
                                            <h5 className="htlfndr-user-greeting">Hi, John!</h5>
                                        </div>
                                    </Tippy>
                                ) : (
                                    <div className="collapse navbar-collapse navbar-right" id="htlfndr-first-nav">
                                        <ul className="nav navbar-nav htlfndr-singup-block">
                                            <li id="htlfndr-singup-link">
                                                <a href="/signup" data-toggle="modal" data-target="#htlfndr-sing-up">
                                                    <span>sign up</span>
                                                </a>
                                            </li>
                                            <li id="htlfndr-singin-link">
                                                <a href="/login" data-toggle="modal" data-target="#htlfndr-sing-in">
                                                    <span>sign in</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                )}
                                <div className="collapse navbar-collapse navbar-right" id="htlfndr-first-nav">
                                    <ul className="nav navbar-nav htlfndr-language">
                                        <li id="htlfndr-dropdown-language">
                                            <div className="htlfndr-dropdown-container aaa">
                                                <FormControl
                                                    sx={{ m: 0, minWidth: 100 }}
                                                    size="small"
                                                    style={{ color: '#fff', fontWeight: 'bold' }}
                                                >
                                                    <Select
                                                        data-toggle="dropdown"
                                                        role="button"
                                                        value={language}
                                                        onChange={handleChangeLang}
                                                        style={{ color: '#fff', fontWeight: 'bold' }}
                                                    >
                                                        <MenuItem value="en" className={styles.aaa}>
                                                            <Image className={styles.custom_image_eng} />
                                                            <span className={styles.name_language}>EN</span>
                                                        </MenuItem>
                                                        <MenuItem value="vn" className={styles.aaa}>
                                                            <Image className={styles.custom_image_vn} />
                                                            <span className={styles.name_language}>VN</span>
                                                        </MenuItem>
                                                    </Select>
                                                </FormControl>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="htlfndr-under-header">
                        <nav className="navbar navbar-default">
                            <div className="container">
                                <div className="navbar-header">
                                    <button
                                        type="button"
                                        className="navbar-toggle collapsed"
                                        data-toggle="collapse"
                                        data-target="#htlfndr-main-nav"
                                    >
                                        <span className="sr-only">Toggle navigation</span>
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span> <span className="icon-bar"></span>
                                    </button>
                                </div>
                                <div className="collapse navbar-collapse" id="htlfndr-main-nav">
                                    <ul className="nav navbar-nav">
                                        <li
                                            className={menuActive === 1 ? 'active' : ''}
                                            onClick={() => setMenuActive(1)}
                                        >
                                            <Link to="/">home</Link>
                                        </li>
                                        <li
                                            className={menuActive === 2 ? 'active' : ''}
                                            onClick={() => setMenuActive(2)}
                                        >
                                            <Link to="blog-index.html">blog</Link>
                                        </li>
                                        <li
                                            className={menuActive === 3 ? 'active' : ''}
                                            onClick={() => setMenuActive(3)}
                                        >
                                            <Link to="about-us.html">about</Link>
                                        </li>
                                        <li
                                            className={menuActive === 4 ? 'active' : ''}
                                            onClick={() => setMenuActive(4)}
                                        >
                                            <Link to="/profile">user profile</Link>
                                        </li>
                                        <li className="dropdown">
                                            <a href="/">Pages</a>
                                            <ul className="dropdown-menu">
                                                <li
                                                    className={menuActive === 5 ? styles.active : ''}
                                                    onClick={() => {
                                                        setMenuActive(5);
                                                    }}
                                                >
                                                    <Link to="/search">Search Rooms</Link>
                                                </li>
                                                <li
                                                    className={menuActive === 6 ? styles.active : ''}
                                                    onClick={() => setMenuActive(6)}
                                                >
                                                    <Link to="contact-us.html">Contact Us</Link>
                                                </li>
                                                <li
                                                    className={menuActive === 7 ? styles.active : ''}
                                                    onClick={() => setMenuActive(7)}
                                                >
                                                    <Link to="thanks-page.html">Thanks Page</Link>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </header>
            </div>
        </>
    );
}

export default Header;
