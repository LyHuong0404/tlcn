/* eslint-disable jsx-a11y/anchor-is-valid */
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import '~/assets/css/cssAuth/animate.min.css';
import '~/assets/css/cssAuth/bootstrap-select.min.css';
import '~/assets/css/cssAuth/bootstrap-submenu.css';
import '~/assets/css/cssAuth/bootstrap.min.css';
import '~/assets/css/cssAuth/dropzone.css';
import '~/assets/css/cssAuth/ie10-viewport-bug-workaround.css';
import '~/assets/css/cssAuth/initial.css';
import '~/assets/css/cssAuth/jquery.mCustomScrollbar.css';
import '~/assets/css/cssAuth/leaflet.css';
import '~/assets/css/cssAuth/slick.css';
import '~/assets/css/cssAuth/style.css';
import images from '~/assets/images';

import Image from '~/components/Image';

function ForgotPassword() {
    const { t } = useTranslation();

    return (
        <div className="login-section">
            <div className="container-fluid">
                <div className="row login-box">
                    <div className="col-lg-6 align-self-center pad-0 form-section">
                        <div className="form-inner">
                            <a href="" className="logo">
                                <Image src={images.logo1} alt="logo" />
                            </a>
                            <h3>{t('Recover your password')}</h3>
                            <form>
                                <div className="form-group clearfix">
                                    <input
                                        name="email"
                                        type="email"
                                        className="form-control"
                                        placeholder={t('Email Address')}
                                        aria-label="Email Address"
                                    />
                                </div>
                                <div className="form-group">
                                    <button type="submit" className="btn-md btn-theme w-100">
                                        Send Me Email
                                    </button>
                                </div>
                                <div className="extra-login clearfix">
                                    <span>Or Login With</span>
                                </div>
                            </form>
                            <div className="clearfix"></div>
                            <div className="social-list">
                                <a href="#" className="facebook-bg">
                                    <i className="fa fa-facebook"></i>
                                </a>
                                <a href="#" className="twitter-bg">
                                    <i className="fa fa-twitter"></i>
                                </a>
                                <a href="#" className="google-bg">
                                    <i className="fa fa-google"></i>
                                </a>
                                <a href="#" className="linkedin-bg">
                                    <i className="fa fa-linkedin"></i>
                                </a>
                            </div>
                            <p className="option">
                                Already a member? <Link href="/auth/login">Login here</Link>
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-6 bg-color-15 none-992 bg-img">
                        <div className="info clearfix">
                            <h1>
                                Welcome to <br />
                                <span>Room Finder</span>
                            </h1>
                            <p>
                                Incredibly friendly locals will tell you all about Georgia's most picturesque,
                                breathtaking, and gastronomic must-visit places. A quick search of our database will
                                show you the best-fitting matches out of 100+ candidates. You can choose photos, or
                                reviews from previous passengers.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ForgotPassword;
