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
import { useEffect, useState } from 'react';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
import Tippy from '@tippyjs/react/headless';
import { getProfile } from '~/actions/userActions';
import Survey from '~/components/Survey';

function Header() {
    const [user, setUser] = useState({});
    const [active, setActive] = useState(1);

    const [language, setLanguage] = useState('en');
    const [menuActive, setMenuActive] = useState(1);
    const [openSurvey, setOpenSurvey] = useState(false);

    const handleChangeLang = (event) => {
        setLanguage(event.target.value);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await getProfile();
                setUser(result);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);

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
                                    <a className="htlfndr-logo navbar-brand" href="/">
                                        <Image src={images.logo} alt="Logo" />
                                        <p className="htlfndr-logo-text">
                                            Room <span>finder</span>
                                        </p>
                                    </a>
                                </div>
                                {/* <div className="htlfndr-user-signed-in" style={{ right: '68px' }}>
                                    <Link className="htlfndr-user-avatar" >
                                        <Image src={images.bellring} alt="user avatar" style={{width: '35px', height: '35px'}}/>
                                    </Link>
                                    <Link className="htlfndr-user-avatar" >
                                        <Image src={images.bell} alt="bell" style={{width: '35px', height: '35px'}}/>
                                    </Link>
                                </div> */}
                                {user ? (
                                    <div>
                                        <Tippy
                                            interactive
                                            // visible
                                            offset={[-25, 10]} //lệch ngang, cao
                                            render={(attrs) => (
                                                <div className={styles.box} tabIndex="-1" {...attrs}>
                                                    <ul style={{ listStyle: 'none' }} className={styles.private}>
                                                        <li
                                                            className={`${styles.menu} ${
                                                                active === 1 ? styles.active : ''
                                                            }`}
                                                            onClick={() => setActive(1)}
                                                        >
                                                            <Link to="/profile">
                                                                <i className="fa fa-user"></i>
                                                                Personal Info
                                                            </Link>
                                                        </li>
                                                        <li
                                                            className={`${styles.menu} ${
                                                                active === 2 ? styles.active : ''
                                                            }`}
                                                            onClick={() => {
                                                                setActive(2);
                                                                setOpenSurvey(!openSurvey);
                                                            }}
                                                        >
                                                            <Link>
                                                                <i className="fa fa-pencil-square-o"></i>
                                                                Survey
                                                            </Link>
                                                        </li>
                                                        {user?.roles?.length === 2 && (
                                                            <li
                                                                className={`${styles.menu} ${
                                                                    active === 3 ? styles.active : ''
                                                                }`}
                                                            >
                                                                <Link to="/seller/dashboard">
                                                                    <i className="fa fa-home"></i>
                                                                    Seller Home
                                                                </Link>
                                                            </li>
                                                        )}
                                                        {user?.roles?.length === 3 && (
                                                            <li
                                                                className={`${styles.menu} ${
                                                                    active === 3 ? styles.active : ''
                                                                }`}
                                                            >
                                                                <Link to="/seller/dashboard">
                                                                    <i className="fa fa-home"></i>
                                                                    Admin Home
                                                                </Link>
                                                            </li>
                                                        )}

                                                        <li>
                                                            <a>
                                                                <i className="fa fa-sign-out"></i>
                                                                Logout
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            )}
                                        >
                                            <div className="htlfndr-user-signed-in">
                                                <Link to="/profile" className="htlfndr-user-avatar">
                                                    <Image
                                                        src={user.avatar}
                                                        alt="user avatar"
                                                        // className="avatar-header"
                                                    />
                                                </Link>
                                                <h5 className="htlfndr-user-greeting">Hi, {user.username}!</h5>
                                            </div>
                                        </Tippy>
                                    </div>
                                ) : (
                                    <div className="collapse navbar-collapse navbar-right" id="htlfndr-first-nav">
                                        <ul className="nav navbar-nav htlfndr-singup-block">
                                            <li id="htlfndr-singup-link">
                                                <a
                                                    href="/auth/signup"
                                                    data-toggle="modal"
                                                    data-target="#htlfndr-sing-up"
                                                >
                                                    <span>sign up</span>
                                                </a>
                                            </li>
                                            <li id="htlfndr-singin-link">
                                                <a
                                                    href="/auth/login"
                                                    data-toggle="modal"
                                                    data-target="#htlfndr-sing-in"
                                                >
                                                    <span>sign in</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                )}
                                <div className="collapse navbar-collapse navbar-right" id="htlfndr-first-nav">
                                    <ul className="nav navbar-nav htlfndr-language">
                                        <li id="htlfndr-dropdown-language" style={{top: '-4px'}}>
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
                                                            <span className={styles.name_language}>ENG</span>
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
                                            <Link to="/auth/login">blog</Link>
                                        </li>
                                        <li
                                            className={menuActive === 3 ? 'active' : ''}
                                            onClick={() => setMenuActive(3)}
                                        >
                                            <Link >about</Link>
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
            {openSurvey && <Survey onClose={() => setOpenSurvey(!openSurvey)} />}
        </>
    );
}

export default Header;
