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
import { Link, useNavigate } from 'react-router-dom';
import Tippy from '@tippyjs/react/headless';
import Survey from '~/components/Survey';
import PaymentDialog from '~/components/PaymentDialog';
import { useSelector } from 'react-redux';
import { userLogout } from '~/actions/authActions';
import { useTranslation } from 'react-i18next';

function Header() {
    const { t, i18n } = useTranslation();
    const navigate = useNavigate();
    const { user } = useSelector((state) => state.auth);
    const [active, setActive] = useState(1);

    const [language, setLanguage] = useState(localStorage.getItem('language') || 'en');
    const [menuActive, setMenuActive] = useState(1);
    const [openSurvey, setOpenSurvey] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const handleChangeLang = (e) => {
        const selectedLanguage = e.target.value;
        setLanguage(selectedLanguage);
        i18n.changeLanguage(selectedLanguage);
        localStorage.setItem('language', selectedLanguage);
    };

    const handleLogout = async () => {
        await userLogout();
        navigate('/auth/login');
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
                                    <a className="htlfndr-logo navbar-brand" href="/">
                                        <Image src={images.logo} alt="Logo" />
                                        <p className="htlfndr-logo-text">
                                            Room <span>finder</span>
                                        </p>
                                    </a>
                                </div>
                                {user && (
                                    <div className="htlfndr-user-signed-in" style={{ right: '68px' }}>
                                        <Link className="htlfndr-user-avatar" onClick={() => setIsOpen(!isOpen)}>
                                            <Image
                                                src={images.card}
                                                alt="card"
                                                style={{ width: '35px', height: '35px' }}
                                            />
                                        </Link>
                                    </div>
                                )}
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
                                                                {t('Personal Info')}
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
                                                                {t('Survey')}
                                                            </Link>
                                                        </li>
                                                        {user?.roles?.length > 2 && (
                                                            <>
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
                                                                <li
                                                                    className={`${styles.menu} ${
                                                                        active === 3 ? styles.active : ''
                                                                    }`}
                                                                >
                                                                    <Link to="/admin/dashboard">
                                                                        <i className="fa fa-unlock"></i>
                                                                        {t('Admin Home')}
                                                                    </Link>
                                                                </li>
                                                            </>
                                                        )}
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

                                                        <li onClick={handleLogout}>
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
                                                    <Image src={user.avatar} alt="user avatar" />
                                                </Link>
                                                <h5 className="htlfndr-user-greeting">
                                                    {t('Hi')}, {user.username}!
                                                </h5>
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
                                                    <span>{t('sign up')}</span>
                                                </a>
                                            </li>
                                            <li id="htlfndr-singin-link">
                                                <a
                                                    href="/auth/login"
                                                    data-toggle="modal"
                                                    data-target="#htlfndr-sing-in"
                                                >
                                                    <span>{t('sign in')}</span>
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
                                                        <MenuItem value="vi" className={styles.aaa}>
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
                                            <Link to="/">{t('home')}</Link>
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
                                            <Link>about</Link>
                                        </li>
                                        <li
                                            className={menuActive === 4 ? 'active' : ''}
                                            onClick={() => setMenuActive(4)}
                                        >
                                            <Link to="/profile">{t('user profile')}</Link>
                                        </li>
                                        <li
                                            className={menuActive === 5 ? 'active' : ''}
                                            onClick={() => setMenuActive(5)}
                                        >
                                            <Link to="/search" state={{ activeTab: 1 }}>
                                                {t('Search Rooms')}
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </header>
            </div>
            {openSurvey && <Survey onClose={() => setOpenSurvey(!openSurvey)} />}
            {isOpen && <PaymentDialog onClose={() => setIsOpen(!isOpen)} title="" />}
        </>
    );
}

export default Header;
