/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
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
import { signup } from '~/actions/authActions';
import images from '~/assets/images';
import Loading from '~/components/Loading';
import { useTranslation } from 'react-i18next';

function Signup() {
    const { t } = useTranslation();
    const [password, setPassword] = useState('');
    const [errorPassword, setErrorPassword] = useState('');
    const [email, setEmail] = useState('');
    const [errorEmail, setErrorEmail] = useState('');
    const [username, setUsername] = useState('');
    const [errorUsername, setErrorUsername] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const submitForm = (e) => {
        e.preventDefault();
        if (username === '' || email === '' || password === '') {
            if (username === '') {
                setErrorUsername('Username is required.');
            }
            if (email === '') {
                setErrorEmail('Email is required.');
            }
            if (password === '') {
                setErrorPassword('Password is required.');
            }
            return;
        }
        try {
            const callAPI = async () => {
                setLoading(true);
                const result = await signup({ email, username, password });
                if (result?.status === 'SUCCESS') {
                    navigate('/auth/signup/otp', { state: { data: { email, username, password } } });
                } else {
                    setErrorUsername(result?.message);
                }
                setLoading(false);
            };
            callAPI();
        } catch (error) {
            console.log(error);
        }
    };

    const handleCheckValidpw = (e) => {
        const newPassword = e.target.value;

        // check special
        const specialCharacterRegex = /[!@#\$%\^&\*\(\)_\+\-=\[\]\{\};':"\\|,.<>\/?]+/;
        const hasSpecialCharacter = specialCharacterRegex.test(newPassword);

        // check number
        const digitRegex = /\d/;
        const hasDigit = digitRegex.test(newPassword);

        // check upper character
        const uppercaseRegex = /[A-Z]/;
        const hasUppercase = uppercaseRegex.test(newPassword);

        // check lower character
        const lowercaseRegex = /[a-z]/;
        const hasLowercase = lowercaseRegex.test(newPassword);

        // check length
        const isLengthValid = newPassword.length >= 8;

        if (newPassword.trim() !== '') {
            if (!hasSpecialCharacter) {
                setErrorPassword('Password must have at least 1 special character.');
            } else if (!hasDigit) {
                setErrorPassword('Password must have at least 1 digit character.');
            } else if (!hasUppercase) {
                setErrorPassword('Password must have at least 1 uppercase character.');
            } else if (!hasLowercase) {
                setErrorPassword('Password must have at least 1 lowercase character.');
            } else if (!isLengthValid) {
                setErrorPassword('Password must have at least 8 characters');
            } else {
                setErrorPassword('');
            }
        }
        setPassword(newPassword);
    };

    const handleCheckValidEmail = (e) => {
        const enteredEmail = e.target.value;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const isValid = emailRegex.test(enteredEmail);

        if (!isValid) {
            setErrorEmail('Email is invalid.');
        } else {
            setErrorEmail('');
        }
        setEmail(enteredEmail);
    };

    const handleCheckValidUsername = (e) => {
        if (e.target.value === '') {
            setErrorUsername('Username is required.');
        } else {
            setErrorUsername('');
        }
        setUsername(e.target.value);
    };

    return (
        <>
            {loading && <Loading />}
            <div className="login-section">
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
                                        <input
                                            name="email"
                                            type="email"
                                            className={`form-control ${errorEmail ? 'status-error' : ''}`}
                                            placeholder="Email"
                                            aria-label="Email"
                                            value={email}
                                            onChange={handleCheckValidEmail}
                                        />
                                        {errorEmail && (
                                            <div style={{ textAlign: 'left' }}>
                                                <label className="error-message">{errorEmail}</label>
                                            </div>
                                        )}
                                    </div>

                                    <div className="form-group clearfix">
                                        <input
                                            name="name"
                                            type="text"
                                            className={`form-control ${errorUsername ? 'status-error' : ''}`}
                                            placeholder={t('Username')}
                                            aria-label="Username"
                                            value={username}
                                            onChange={handleCheckValidUsername}
                                        />
                                        {errorUsername && (
                                            <div style={{ textAlign: 'left' }}>
                                                <label className="error-message">{errorUsername}</label>
                                            </div>
                                        )}
                                    </div>

                                    <div className="form-group clearfix">
                                        <input
                                            name="password"
                                            type="password"
                                            className={`form-control ${errorPassword ? 'status-error' : ''}`}
                                            placeholder={t('Password')}
                                            autoComplete="username"
                                            value={password}
                                            onChange={handleCheckValidpw}
                                        />
                                        {errorPassword && (
                                            <div style={{ textAlign: 'left' }}>
                                                <label className="error-message">{errorPassword}</label>
                                            </div>
                                        )}
                                    </div>

                                    <div className="form-group clearfix">
                                        <button type="submit" className="btn-auth">
                                            {t('SIGN UP')}
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
        </>
    );
}

export default Signup;
