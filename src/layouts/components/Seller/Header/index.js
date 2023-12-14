/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import Image from '~/components/Image';
import images from '~/assets/images';
import Tippy from '@tippyjs/react/headless';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
function Header() {
    const { user } = useSelector((state) => state.auth)
    return (
        <div className="container-fluid sb1">
            <div className="row">
                <div className="col-md-2 col-sm-3 col-xs-6 sb1-1">
                    <a href="/seller/dashboard" className="logo">
                        <Image src={images.logo1} alt="logo" />
                    </a>
                </div>
                <div className="col-md-6 col-sm-6 mob-hide">
                    {/* <form className="app-search">
                        <input type="text" placeholder="Search..." className="form-control" />
                        <a href="#">
                            <i className="fa fa-search"></i>
                        </a>
                    </form> */}
                </div>
                <div className="col-md-2 tab-hide">
                    <div className="top-not-cen">
                        <a className="waves-effect btn-noti" href="#">
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
                                            Seller Setting
                                        </Link>
                                    </li>                                   
                                    <li className="divider"></li>
                                    <li>
                                        <Link to="#" className={styles.waves_effect}>
                                            <i
                                                className="fa fa-sign-in"
                                                aria-hidden="true"
                                                style={{ marginRight: '20px' }}
                                            ></i>
                                            Logout
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        )}
                        // onHide={() => setHistory((prev) => prev.slice(0, 1))}
                    >
                        <p className="waves-effect dropdown-button top-user-pro" data-activates="top-menu">
                            <Image src={user.avatar} alt="" />
                            My Account <i className="fa fa-angle-down" aria-hidden="true"></i>
                        </p>
                    </Tippy>
                </div>
            </div>
        </div>
    );
}

export default Header;
