/* eslint-disable jsx-a11y/anchor-is-valid */
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
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
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { login, claimDailyLogin } from '~/actions/authActions';
import images from '~/assets/images';
import { useTranslation } from 'react-i18next';

function Login() {
    const { t } = useTranslation();
    const { isAuthenticated, error, user } = useSelector((state) => state.auth);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    useEffect(() => {
        if (isAuthenticated && user) {
            const report = async () => {
                await claimDailyLogin();
            };
            report();
            if (user.roles.some((role) => role === 'ROLE_ADMIN')) {
                navigate('/admin/dashboard');
            } else if (user.roles.some((role) => role === 'ROLE_SELLER')) {
                navigate('/seller/dashboard');
            } else {
                navigate('/');
                window.location.reload();
            }
        }
    }, [isAuthenticated, navigate, error, user]);

    const submitForm = (data) => {
        dispatch(login(data));
    };

    return (
        <div className="login-section">
            <div className="container-fluid">
                <div className="row login-box">
                    <div className="col-lg-6 align-self-center form-section">
                        <div className="form-inner">
                            <a href="index.html" className="logo">
                                <Image src={images.user} alt="logo" />
                            </a>
                            <h3>{t('Sign into your account')}</h3>
                            {error && <p style={{ color: '#ed2a2a', fontSize: '17px' }}>{error}</p>}

                            <form onSubmit={handleSubmit(submitForm)}>
                                <div className="form-group clearfix">
                                    <input
                                        name="username"
                                        type="text"
                                        className={`form-control ${errors.username ? 'status-error' : ''}`}
                                        placeholder={t('Username')}
                                        aria-label="Username"
                                        {...register('username', { required: true })}
                                    />
                                    {errors.username && (
                                        <div style={{ textAlign: 'left' }}>
                                            <label className="error-message">{t('Username is required.')}</label>
                                        </div>
                                    )}
                                </div>
                                <div className="form-group clearfix">
                                    <input
                                        name="password"
                                        type="password"
                                        className={`form-control ${errors.password ? 'status-error' : ''}`}
                                        placeholder={t('Password')}
                                        aria-label="Password"
                                        autoComplete="username"
                                        {...register('password', { required: true })}
                                    />
                                    {errors.password && (
                                        <div style={{ textAlign: 'left' }}>
                                            <label className="error-message">{t('Password is required.')}</label>
                                        </div>
                                    )}
                                </div>
                                <div className="form-group checkbox clearfix">
                                    {/* <div className="form-check checkbox-theme float-start">
                                        <input className="form-check-input" type="checkbox" id="rememberMe" />
                                        <label className="form-check-label" for="rememberMe">
                                            RememberMe
                                        </label>
                                    </div> */}
                                    <a href="forgot-password.html" className="forgot-password">
                                        {t('Forgot Password?')}
                                    </a>
                                </div>
                                <div className="form-group clearfix">
                                    <button type="submit" className="btn-md btn-theme w-100">
                                        {t('Login')}
                                    </button>
                                </div>
                                {/* <div className="extra-login clearfix">
                                    <span>Or Login With</span>
                                </div> */}
                            </form>
                            <div className="clearfix"></div>
                            {/* <div className="social-list">
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
                            </div> */}
                            <p className="option">
                                {t('Do not have an account?')}
                                <Link to="/auth/signup" className="thembo">
                                    {t('Register here')}
                                </Link>
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-6 bg-color-15 none-992 bg-img">
                        <div className="info clearfix">
                            <h1>
                                {t('Welcome to')} <br />
                                <span>Room Finder</span>
                            </h1>
                            <p>
                                {t('Incredibly friendly locals will tell you all about Georgia most picturesque, breathtaking, and gastronomic must-visit places. A quick search of our database will show you the best-fitting matches out of 100+ candidates. You can choose photos, or reviews from previous passengers.')}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
