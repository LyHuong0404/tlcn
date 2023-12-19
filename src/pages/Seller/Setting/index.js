/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import { updateProfile, getProfile, changePassword } from '~/actions/userActions';
import Loading from '~/components/Loading';

function Setting() {
    const { t } = useTranslation();
    const [user, setUser] = useState({});
    const { register, handleSubmit } = useForm();
    const [loading, setLoading] = useState(false);
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await getProfile();
                setUser(result);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, []);

    const submitForm = async (data) => {
        const avatarBlob = await fetch(user['avatar']).then((r) => r.blob());
        let fullData = { ...data, avatarFile: avatarBlob };

        const formData = new FormData();
        for (const key in fullData) {
            if (fullData[key] === '') {
                fullData[key] = user[key];
            }
            formData.append(key, fullData[key]);
        }

        try {
            const updateInfo = async () => {
                setLoading(true);
                const result = await updateProfile(formData);
                if (result?.success) {
                    toast.success('Profile updated successfully.');
                } else {
                    setError('Current password is incorrect.');
                    toast.error('Profile updated unsuccessfully.');
                }
                setLoading(false);
            };
            updateInfo();
        } catch (error) {
            console.log(error);
        }
    };

    const handleChangePass = () => {
        try {
            const fetchData = async () => {
                setLoading(true);
                const rs = await changePassword({ oldPassword, newPassword });
                if (rs?.success) {
                    setOldPassword('');
                    setNewPassword('');
                    toast.success('Password changed successfully!');
                } else {
                    setError('Current password is incorrect.');

                    toast.error('Password change unsuccessfully!');
                }
                setLoading(false);
            };
            fetchData();
        } catch (error) {
            setError('Current password is incorrect.');

            toast.error('Password change unsuccessfully!');
        }
    };

    return (
        <div className="sb2-2">
            {loading && <Loading />}
            <div className="sb2-2-2">
                <ul>
                    <li>
                        <a>
                            <i className="fa fa-home" aria-hidden="true"></i> {t('Home')}
                        </a>
                    </li>
                    <li className="active-bre">
                        <a> {t('Profile')}</a>
                    </li>
                </ul>
            </div>
            <div className="sb2-2-3">
                <div className="row">
                    <div className="col-md-12">
                        <div className="box-inn-sp">
                            <div className="inn-title">
                                <h4>{t('Setting')}</h4>
                            </div>
                            <div className="tab-inn">
                                <div className="row">
                                    <div className="input-field col s6">
                                        <br />
                                        <input
                                            id="password"
                                            type="password"
                                            value={oldPassword}
                                            onChange={(e) => setOldPassword(e.target.value)}
                                            style={{ height: '3rem' }}
                                            className="validate"
                                        />
                                        <label htmlFor="password">{t('Password')}</label>
                                    </div>
                                    <div className="input-field col s6">
                                        <br />
                                        <input
                                            id="password1"
                                            type="password"
                                            value={newPassword}
                                            onChange={(e) => setNewPassword(e.target.value)}
                                            style={{ height: '3rem' }}
                                            className="validate"
                                        />
                                        <label htmlFor="password1">{t('Confirm Password')}</label>
                                    </div>
                                </div>
                                {error && (
                                    <div style={{ textAlign: 'left' }}>
                                        <label className="error-message">{t(error)}</label>
                                    </div>
                                )}
                                <div className="row">
                                    <div className="input-field col s12">
                                        <button
                                            className="waves-effect waves-light btn-large"
                                            onClick={handleChangePass}
                                        >
                                            {t('Change Pass')}
                                        </button>
                                    </div>
                                </div>
                                <br />
                                <br />
                                <form onSubmit={handleSubmit(submitForm)}>
                                    <div className="row">
                                        <div className="input-field col s6">
                                            <br />
                                            <input
                                                id="username"
                                                type="text"
                                                defaultValue={user?.username}
                                                style={{ height: '3rem' }}
                                                className="validate"
                                                {...register('username')}
                                            />
                                            <label htmlFor="username">{t('Username')}</label>
                                        </div>
                                        <div className="input-field col s6">
                                            <br />
                                            <input
                                                id="email"
                                                type="text"
                                                defaultValue={user?.email}
                                                style={{ height: '3rem' }}
                                                className="validate"
                                                {...register('email')}
                                            />
                                            <label htmlFor="email">Email</label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="input-field col s6">
                                            <br />
                                            <input
                                                id="fullname"
                                                type="text"
                                                defaultValue={user?.fullname}
                                                style={{ height: '3rem' }}
                                                className="validate"
                                                {...register('fullname')}
                                            />
                                            <label htmlFor="fullname">{t('Fullname')}</label>
                                        </div>
                                        <div className="input-field col s6">
                                            <br />
                                            <input
                                                id="phone"
                                                type="text"
                                                defaultValue={user?.phone}
                                                style={{ height: '3rem' }}
                                                className="validate"
                                                {...register('phone')}
                                            />
                                            <label htmlFor="phone">{t('Phone')}</label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="input-field col s12">
                                            <input
                                                type="submit"
                                                value={t('Save Profile')}
                                                className="waves-effect waves-light btn-large"
                                            />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Setting;
