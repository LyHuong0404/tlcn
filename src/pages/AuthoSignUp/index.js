/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
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
import { AuthoSignup } from '~/actions/authActions';
import images from '~/assets/images';
import Loading from '~/components/Loading';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';
import CountdownTimer from '../CountdownTimer';

function AuthoSignUp() {
    const { t } = useTranslation();
    const { error, success, loading } = useSelector((state) => state.auth);
    const location = useLocation();
    const [data, setData] = useState(location?.state?.data);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [code, setCode] = useState('');

    useEffect(() => {
        if (success) {
            navigate('/auth/login');
            toast.success(t('Create Account successfully!'), {
                style: {
                    fontSize: '15px', 
                },
            });
        }
    }, [navigate, success]);

    const submitForm = (e) => {
        e.preventDefault();
        const username = data.username;
        const password = data.password;
        const email = data.email;

        dispatch(AuthoSignup({ username, password, email, code }));
    };
    return (
        <div className="login-section">
            {loading && <Loading />}
            <div className="container-fluid">
                <div className="row login-box">
                    <div className="col-lg-6 align-self-center form-section">
                        <div className="form-inner">
                            <Link to="/" className="logo">
                                <Image src={images.user} alt="logo" />
                            </Link>
                            <h3>{t('Create an account')}</h3>
                            <form onSubmit={submitForm}>
                                <div className="form-group clearfix">
                                    <p style={{ color: '#1c82ca', marginBottom: '10px' }}>
                                        {t('We have sent the verification code to your email.')} <br />
                                        {t('Please check and fill in to log in.')}
                                    </p>
                                    <CountdownTimer />
                                    <input
                                        name="code"
                                        type="code"
                                        className={`form-control ${error ? 'status-error' : ''}`}
                                        placeholder={t('Enter the code')}
                                        aria-label="Code"
                                        value={code}
                                        onChange={(e) => setCode(e.target.value)}
                                    />
                                    {error && (
                                        <div style={{ textAlign: 'left' }}>
                                            <label className="error-message">{error}</label>
                                        </div>
                                    )}
                                </div>
                                <div className="form-group clearfix">
                                    <button type="submit" className="btn-md btn-theme w-100">
                                        {t('SEND')}
                                    </button>
                                </div>
                            </form>
                            <div className="clearfix"></div>

                            <p className="option">
                                {t('Already a member?')} <Link to="/auth/login">{t('Login here')}</Link>
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
                                {t(
                                    'Incredibly friendly locals will tell you all about Georgia most picturesque, breathtaking, and gastronomic must-visit places. A quick search of our database will show you the best-fitting matches out of 100+ candidates. You can choose photos, or reviews from previous passengers.',
                                )}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AuthoSignUp;
