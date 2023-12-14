/* eslint-disable jsx-a11y/anchor-is-valid */
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

import Image from '~/components/Image';

function ForgotPassword() {
    return (
        <div className="login-section">
            <div className="container-fluid">
                <div className="row login-box">
                    <div className="col-lg-6 align-self-center pad-0 form-section">
                        <div className="form-inner">
                            <a href="index.html" className="logo">
                                <Image src="img/logos/logo.png" alt="logo" />
                            </a>
                            <h3>Recover your password</h3>
                            <form action="#" method="GET">
                                <div className="form-group clearfix">
                                    <input
                                        name="email"
                                        type="email"
                                        className="form-control"
                                        placeholder="Email Address"
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
                            <p className='option'>
                                Already a member? <Link href="/auth/login">Login here</Link>
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-6 bg-color-15 none-992 bg-img">
                        <div className="info clearfix">
                            <h1>
                                Welcome to <span>Hotel Alpha</span>
                            </h1>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                has been the industry's standard dummy text ever since the 1500s, when an unknown
                                printer took a galley of type and scrambled it to make a type unknown printer took a
                                galley of type and scrambled{' '}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ForgotPassword;
