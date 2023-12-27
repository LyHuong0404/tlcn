import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { forgotPassword } from '~/actions/authActions';
import images from '~/assets/images';
import Image from '~/components/Image';
import './AuthoForgotPassword.module.scss';
import { useState } from 'react';

function AuthoForgotPassword() {
    const { t } = useTranslation();
    const location = useLocation();
    const username = location?.state?.username;
    const [code, setCode] = useState('');
    const [errorCode, setErrorCode] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [errorNewPassword, setErrorNewPassword] = useState('');
    const navigate = useNavigate();

    const handleCheckValidNewPw = (e) => {
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

        if (newPassword === '') {
            setErrorNewPassword(t('New Password is required.'));
        } else {
            setErrorNewPassword('');
        }

        if (newPassword.trim() !== '') {
            if (!hasSpecialCharacter) {
                setErrorNewPassword(t('Password must have at least 1 special character.'));
            } else if (!hasDigit) {
                setErrorNewPassword(t('Password must have at least 1 digit character.'));
            } else if (!hasUppercase) {
                setErrorNewPassword(t('Password must have at least 1 uppercase character.'));
            } else if (!hasLowercase) {
                setErrorNewPassword(t('Password must have at least 1 lowercase character.'));
            } else if (!isLengthValid) {
                setErrorNewPassword(t('Password must have at least 8 characters'));
            } else {
                setErrorNewPassword('');
            }
        }
        setNewPassword(newPassword);
    };

    const submitForm = (e) => {
        e.preventDefault();
        if (code !== '' && newPassword !== '' && errorCode === '' && errorNewPassword === '') {
            try {
                const fetchData = async () => {
                    const rs = await forgotPassword({ username, code, newPassword });
                    if (rs?.success) {
                        toast.success(t('Recover Password successfully.'), {
                            style: {
                                fontSize: '15px',
                            },
                        });
                        navigate('/auth/login');
                    } else {
                        setErrorCode(t('Wrong Code.'));
                    }
                };
                fetchData();
            } catch (e) {
                toast.error(t('Recover Password unsuccessfully.'));
            }
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
                                        name="code"
                                        type="text"
                                        className={`form-control ${errorCode ? 'status-error' : ''}`}
                                        placeholder={t('Enter Code')}
                                        aria-label="Code"
                                        value={code}
                                        onChange={(e) => setCode(e.target.value)}
                                    />
                                    {errorCode && (
                                        <div style={{ textAlign: 'left' }}>
                                            <label className="error-message">{errorCode}</label>
                                        </div>
                                    )}
                                    <br />
                                    <input
                                        name="newPassword"
                                        type="text"
                                        className={`form-control ${errorNewPassword ? 'status-error' : ''}`}
                                        placeholder={t('New Password')}
                                        aria-label="Password"
                                        value={newPassword}
                                        onChange={handleCheckValidNewPw}
                                    />
                                    {errorNewPassword && (
                                        <div style={{ textAlign: 'left' }}>
                                            <label className="error-message">{errorNewPassword}</label>
                                        </div>
                                    )}
                                </div>
                                <div className="form-group">
                                    <button type="submit" className="btn-md btn-theme w-100">
                                        {t('Recover Password')}
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

export default AuthoForgotPassword;
