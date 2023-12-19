import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import { changePassword } from '~/actions/userActions';

function Settings() {
    const { t } = useTranslation();
    const [oldPassword, setOldPassword] = useState('');
    const [errorOldPassword, setErrorOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [errorNewPassword, setErrorNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorConfirmPassword, setErrorConfirmPassword] = useState('');

    const handleCheckOldPassword = (e) => {
        if (e.target.value === '') {
            setErrorOldPassword('Old Password is required.');
        } else {
            setErrorOldPassword('');
        }
        setOldPassword(e.target.value);
    };

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
            setErrorNewPassword('New Password is required.');
        } else {
            setErrorNewPassword('');
        }

        if (newPassword.trim() !== '') {
            if (!hasSpecialCharacter) {
                setErrorNewPassword('Password must have at least 1 special character.');
            } else if (!hasDigit) {
                setErrorNewPassword('Password must have at least 1 digit character.');
            } else if (!hasUppercase) {
                setErrorNewPassword('Password must have at least 1 uppercase character.');
            } else if (!hasLowercase) {
                setErrorNewPassword('Password must have at least 1 lowercase character.');
            } else if (!isLengthValid) {
                setErrorNewPassword('Password must have at least 8 characters');
            } else {
                setErrorNewPassword('');
            }
        }
        setNewPassword(newPassword);
    };

    const handleCheckMatchPw = (e) => {
        if (e.target.value === '') {
            setErrorConfirmPassword('New Password is required.');
        } else {
            setErrorConfirmPassword('');
        }
        if (e.target.value !== newPassword) {
            setErrorConfirmPassword('Confirm Password does not match.');
        } else {
            setErrorConfirmPassword('');
        }
        setConfirmPassword(e.target.value);
    };

    const submitForm = (e) => {
        e.preventDefault();
        if (oldPassword === '' || newPassword === '' || confirmPassword === '') {
            if (oldPassword === '') {
                setErrorOldPassword('Old Password is required.');
            }
            if (newPassword === '') {
                setErrorNewPassword('New Password is required.');
            }
            if (confirmPassword === '') {
                setErrorConfirmPassword('Confirm Password is required.');
            }
            return;
        }

        try {
            const fetchData = async () => {
                const rs = await changePassword({ oldPassword, newPassword });
                if (rs?.success) {
                    setOldPassword('');
                    setNewPassword('');
                    setConfirmPassword('');
                    toast.success('Password changed successfully!');
                } else {
                    setErrorOldPassword('Your current password is incorrect.');
                    toast.error('Password change unsuccessfully!');
                }
            };
            fetchData();
        } catch (error) {
            toast.error('Password change unsuccessfully!');
        }
    };
    return (
        <div className="htlfndr-user-panel col-md-9 col-sm-8 htlfndr-setting-page" id="htlfndr-user-tab-5">
            <div className="htlfndr-setting">
                <h2>
                    {t('Change')} <b>{t('Password')}</b>
                </h2>
                <form onSubmit={submitForm} className="htlfndr-change-setting" id="htlfndr-settings-pass">
                    <div className="row">
                        <div className="col-md-5 htlfndr-form-setting-cols">
                            <label htmlFor="settings-cur-pass class">{t('Current Password')}</label>
                            <br />
                            <input
                                id="settings-cur-pass"
                                className={`htlfndr-input ${errorOldPassword ? 'status-error' : ''}`}
                                type="password"
                                style={{ marginBottom: '0' }}
                                name="settings-cur-pass"
                                value={oldPassword}
                                onChange={handleCheckOldPassword}
                            />
                            {errorOldPassword && (
                                <div style={{ textAlign: 'left' }}>
                                    <label className="error-message">{t(errorOldPassword)}</label>
                                </div>
                            )}
                            <br />
                            <label htmlFor="settings-new-pass class" style={{ marginTop: '25px' }}>
                                {t('New Password')}
                            </label>
                            <br />
                            <input
                                id="settings-new-pass"
                                className={`htlfndr-input ${errorNewPassword ? 'status-error' : ''}`}
                                type="password"
                                style={{ marginBottom: '0' }}
                                name="settings-new-pass"
                                value={newPassword}
                                onChange={handleCheckValidNewPw}
                            />
                            {errorNewPassword && (
                                <div style={{ textAlign: 'left' }}>
                                    <label className="error-message">{t(errorNewPassword)}</label>
                                </div>
                            )}
                            <br />
                            <label htmlFor="settings-new-pass-again class" style={{ marginTop: '25px' }}>
                                {t('New Password Again')}
                            </label>
                            <br />
                            <input
                                id="settings-new-pass-again"
                                className={`htlfndr-input ${errorConfirmPassword ? 'status-error' : ''}`}
                                type="password"
                                style={{ marginBottom: '0' }}
                                name="settings-new-pass-again"
                                value={confirmPassword}
                                onChange={handleCheckMatchPw}
                            />
                            {errorConfirmPassword && (
                                <div style={{ textAlign: 'left' }}>
                                    <label className="error-message">{t(errorConfirmPassword)}</label>
                                </div>
                            )}
                            <br />
                        </div>
                        <div className="col-md-5 htlfndr-form-setting-cols"> </div>
                    </div>
                    <input type="submit" value={t('Save password')} className="btn-primary" />
                </form>
            </div>
        </div>
    );
}

export default Settings;
