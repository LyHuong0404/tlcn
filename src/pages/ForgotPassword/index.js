/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
import { getCodeForgotPassword } from '~/actions/authActions';
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
    const [error, setError] = useState('');
    const [username, setUsername] = useState('');
    const [disabled, setDisabled] = useState(true);
    const navigate = useNavigate();

    const changeValue = (e) => {
        if (e.target.value !== '') {
            setDisabled(false);
        } else {
            setDisabled(true);
        }
        setUsername(e.target.value);
    };

    const submitForm = (e) => {
        e.preventDefault();
        try {
            const fetchData = async () => {
                const rs = await getCodeForgotPassword({ username });
                if (rs?.status === 'SUCCESS') {
                    navigate('/auth/forgotpassword/otp', { state: { username: username } });
                } else {
                    setError(t('Username is not exist.'));
                }
            };
            fetchData();
        } catch (e) {
            setError(t('Username is not exist.'));
        }
    };
    return (
        <div className="login-section">
            <div className="container-fluid">
                <div className="row login-box">
                    <div className="col-lg-6 align-self-center pad-0 form-section">
                        <div className="form-inner">
                            <Link to="/" className="logo">
                                <Image src={images.user} alt="logo" />
                            </Link>
                            <h3>{t('Recover your password')}</h3>
                            <form onSubmit={submitForm}>
                                <div className="form-group clearfix">
                                    <input
                                        name="username"
                                        type="text"
                                        className={`form-control ${error ? 'status-error' : ''}`}
                                        placeholder={t('Username')}
                                        aria-label="Email Address"
                                        value={username}
                                        onChange={changeValue}
                                    />
                                    {error && (
                                        <div style={{ textAlign: 'left' }}>
                                            <label className="error-message">{error}</label>
                                        </div>
                                    )}
                                </div>
                                <div className="form-group">
                                    <button type="submit" className="btn-md btn-theme w-100" disabled={disabled}>
                                        {t('Send Me Email')}
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

export default ForgotPassword;
