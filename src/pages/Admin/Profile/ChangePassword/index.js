import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import { changePassword } from '~/actions/userActions';
import Loading from '~/components/Loading';

/* eslint-disable jsx-a11y/anchor-is-valid */
function ChangePassword() {
    const { t } = useTranslation();
    const [oldPassword, setOldPassword] = useState('');
    const [errorOldPassword, setErrorOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [errorNewPassword, setErrorNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorConfirmPassword, setErrorConfirmPassword] = useState('');
    const [loading, setLoading] = useState('');

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

    const handleCheckMatchPw = (e) => {
        if (e.target.value !== newPassword) {
            setErrorConfirmPassword(t('Confirm Password does not match!'));
        } else {
            setErrorConfirmPassword('');
        }
        setConfirmPassword(e.target.value);
    };

    const submitForm = (e) => {
        e.preventDefault();

        try {
            if (errorOldPassword !== '' && errorNewPassword !== '' && errorConfirmPassword !== '') {
                const fetchData = async () => {
                    setLoading(true);
                    const rs = await changePassword({ oldPassword, newPassword });
                    if (rs?.success) {
                        setOldPassword('');
                        setNewPassword('');
                        setConfirmPassword('');
                        toast.success(t('Change Password successfully!'), {
                            style: {
                                fontSize: '14px',
                            },
                        });
                    } else {
                        setErrorOldPassword(t('Your current password is incorrect!'));
                        toast.error(t('Change Password unsuccessfully!'), {
                            style: {
                                fontSize: '14px',
                            },
                        });
                    }
                    setLoading(false);
                };
                fetchData();
            }
        } catch (error) {
            setErrorOldPassword(t('Your current password is incorrect!'));
            toast.error(t('Change Password unsuccessfully!'), {
                style: {
                    fontSize: '14px',
                },
            });
        }
    };
    return (
        <section>
            <div className="content add-details change-password">
                <div className="in-content-wrapper">
                    <div className="row no-gutters">
                        <div className="col" style={{ display: 'flex', alignItems: 'center' }}>
                            <div className="heading-messages">
                                <h1>{t('Profile')}</h1>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="breadcrumb" style={{ fontSize: '16px' }}>
                                <div className="breadcrumb-item">
                                    <i className="fas fa-angle-right"></i>
                                    <abbr>{t('Profile')}</abbr>
                                </div>
                                <div className="breadcrumb-item active">
                                    <i className="fas fa-angle-right"></i>
                                    {t('Change Password')}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="box" style={{ fontSize: '16px' }}>
                        <div className="row">
                            <div className="col">
                                <div className="details-text">
                                    <h1>{t('Change Password')}</h1>
                                </div>
                            </div>
                        </div>
                        {loading && <Loading />}
                        <div className="hotel-listing-form">
                            <form onSubmit={submitForm} className="text-center">
                                <div className="row">
                                    <div className="col">
                                        <div className="form-row">
                                            <div className="col-md">
                                                <div className="form-group">
                                                    <label htmlFor="to">{t('Old Password')}:</label>
                                                    <input
                                                        type="password"
                                                        required
                                                        id="to"
                                                        style={{ padding: ' 0 0 0 175px' }}
                                                        defaultValue={oldPassword}
                                                        className={`form-control ${
                                                            errorOldPassword ? 'status-error' : ''
                                                        }`}
                                                        onChange={(e) => {
                                                            setOldPassword(e.target.value);
                                                            setErrorOldPassword('');
                                                        }}
                                                    />
                                                    {errorOldPassword && (
                                                        <div style={{ textAlign: 'left' }}>
                                                            <label className="error-message">
                                                                {errorOldPassword}
                                                            </label>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="col-md">
                                                <div className="form-group">
                                                    <label htmlFor="to1">{t('New Password')}:</label>
                                                    <input
                                                        type="password"
                                                        required
                                                        id="to1"
                                                        style={{ padding: ' 0 0 0 175px' }}
                                                        defaultValue={newPassword}
                                                        className={`form-control ${
                                                            errorNewPassword ? 'status-error' : ''
                                                        }`}
                                                        onChange={handleCheckValidNewPw}
                                                    />
                                                    {errorNewPassword && (
                                                        <div style={{ textAlign: 'left' }}>
                                                            <label className="error-message">
                                                                {errorNewPassword}
                                                            </label>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="col-md">
                                                <div className="form-group">
                                                    <label htmlFor="to2">{t('Repeat Password')}:</label>
                                                    <input
                                                        type="password"
                                                        required
                                                        id="to2"
                                                        style={{ padding: ' 0 0 0 175px' }}
                                                        defaultValue={confirmPassword}
                                                        className={`form-control ${
                                                            errorConfirmPassword ? 'status-error' : ''
                                                        }`}
                                                        onChange={handleCheckMatchPw}
                                                    />
                                                    {errorConfirmPassword && (
                                                        <div style={{ textAlign: 'left' }}>
                                                            <label className="error-message">
                                                                {errorConfirmPassword}
                                                            </label>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>

                                        <ul className="list-inline">
                                            <li className="list-inline-item">
                                                <button type="submit" className="btn">
                                                    {t('Update')}
                                                </button>
                                            </li>
                                            <li className="list-inline-item">
                                                <button type="submit" className="btn">
                                                    {t('Cancel')}
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ChangePassword;
