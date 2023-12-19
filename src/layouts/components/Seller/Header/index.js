/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import Image from '~/components/Image';
import images from '~/assets/images';
import Tippy from '@tippyjs/react/headless';
import styles from './Header.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { userLogout } from '~/actions/authActions';
import { useTranslation } from 'react-i18next';

function Header() {
    const { t } = useTranslation();
    const { user } = useSelector((state) => state.auth);
    const navigate = useNavigate();

    const handleLogout = async () => {
        await userLogout();
        navigate('/auth/login');
    };
    return (
        <div className="container-fluid sb1">
            <div className="row">
                <div className="col-md-2 col-sm-3 col-xs-6 sb1-1">
                    <a href="/seller/dashboard" className="logo">
                        <Image src={images.logo1} alt="logo" />
                    </a>
                </div>
                <div className="col-md-6 col-sm-6 mob-hide"></div>
                <div className="col-md-2 tab-hide">
                    <div className="top-not-cen">
                        <a className="waves-effect btn-noti">
                            <i className="fa fa-commenting-o" aria-hidden="true"></i>
                            <span>5</span>
                        </a>
                        <a className="waves-effect btn-noti" href="#">
                            <i className="fa fa-envelope-o" aria-hidden="true"></i>
                            <span>5</span>
                        </a>
                        <a className="waves-effect btn-noti" href="#">
                            <i className="fa fa-tag" aria-hidden="true"></i>
                            <span>5</span>
                        </a>
                    </div>
                </div>
                <div className="col-md-2 col-sm-3 col-xs-6">
                    <Tippy
                        interactive
                        offset={[0, -10]} //lệch ngang, cao
                        render={(attrs) => (
                            <div className={styles.box} tabIndex="-1" {...attrs}>
                                <ul id="top-menu" className="top-menu-sty">
                                    <li>
                                        <Link to="/seller/setting" className={styles.waves_effect}>
                                            <i
                                                className="fa fa-cogs"
                                                aria-hidden="true"
                                                style={{ marginRight: '20px' }}
                                            ></i>
                                            {t('Seller Setting')}
                                        </Link>
                                    </li>
                                    {user?.roles?.length > 2 && (
                                        <>
                                            <li onClick={() => window.location.reload()}>
                                                <Link to="/admin/dashboard" className={styles.waves_effect}>
                                                    <i
                                                        className="fa fa-unlock"
                                                        aria-hidden="true"
                                                        style={{ marginRight: '20px' }}
                                                    ></i>
                                                    {t('Admin Home')}
                                                </Link>
                                            </li>
                                            <li onClick={() => window.location.reload()}>
                                                <Link to="/" className={styles.waves_effect}>
                                                    <i
                                                        className="fa fa-home"
                                                        aria-hidden="true"
                                                        style={{ marginRight: '20px' }}
                                                    ></i>
                                                    {t('Web home')}
                                                </Link>
                                            </li>
                                        </>
                                    )}
                                    <li className="divider"></li>
                                    <li onClick={handleLogout}>
                                        <Link className={styles.waves_effect}>
                                            <i
                                                className="fa fa-sign-in"
                                                aria-hidden="true"
                                                style={{ marginRight: '20px' }}
                                            ></i>
                                            {t('Logout')}
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        )}
                    >
                        <p className="waves-effect dropdown-button top-user-pro" data-activates="top-menu">
                            <Image src={user.avatar} alt="avatar" />
                            {t('My Account')} <i className="fa fa-angle-down" aria-hidden="true"></i>
                        </p>
                    </Tippy>
                </div>
            </div>
        </div>
    );
}

export default Header;
