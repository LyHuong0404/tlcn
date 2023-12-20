/* eslint-disable jsx-a11y/anchor-is-valid */
import Image from '~/components/Image';
import { useState, useEffect } from 'react';
import styles from './EditAdminProfile.module.scss';
import { useForm } from 'react-hook-form';
import { getProfile, updateProfile } from '~/actions/userActions';
import { toast } from 'react-toastify';
import Loading from '~/components/Loading';
import { useTranslation } from 'react-i18next';

function EditAdminProfile() {
    const { t } = useTranslation();
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(false);
    const [filePreview, setFilePreview] = useState('');
    const [avatar, setAvatar] = useState('');
    const { register, handleSubmit } = useForm();

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

    useEffect(() => {
        return () => {
            avatar && URL.revokeObjectURL(avatar);
        };
    }, [avatar]);

    const submitForm = async (data) => {
        let fullData;
        if (avatar !== '') {
            fullData = { ...data, avatarFile: avatar };
        } else {
            const avatarBlob = await fetch(user['avatar']).then((r) => r.blob());
            fullData = { ...data, avatarFile: avatarBlob };
        }

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
                    // window.location.reload();
                    toast.success(t('Update Profile successfully!'), {
                        style: {
                            fontSize: '14px',
                        },
                    });
                } else {
                    toast.error(t('Update Profile unsuccessfully!'), {
                        style: {
                            fontSize: '14px',
                        },
                    });
                }
                setLoading(false);
            };
            updateInfo();
        } catch (error) {
            toast.error(t('Update Profile unsuccessfully!'), {
                style: {
                    fontSize: '14px',
                },
            });
        }
    };

    useEffect(() => {
        return () => {
            avatar && URL.revokeObjectURL(avatar);
        };
    }, [avatar]);

    const handleAvatar = (e) => {
        const src = URL.createObjectURL(e.target.files[0]);
        setFilePreview(src);
        setAvatar(e.target.files[0]);
    };
    return (
        <section>
            <div className="content add-details profile">
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
                                    <a >{t('Profile')}</a>
                                </div>
                                <div className="breadcrumb-item active">
                                    <i className="fas fa-angle-right"></i>{t('Edit Profile')}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="box">
                        <div className="row">
                            <div className="col">
                                <div className="details-text">
                                    <h1>{t('Edit Profile Details')}</h1>
                                </div>
                            </div>
                        </div>
                        <div className="hotel-listing-form">
                            {loading && <Loading />}
                            <form onSubmit={handleSubmit(submitForm)} className="text-center">
                                <div className="row">
                                    <div className="col-sm-8">
                                        <div className="form-row">
                                            <div className="col-md">
                                                <div className="form-group">
                                                    <label htmlFor="to0">ID #:</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        required
                                                        id="to0"
                                                        defaultValue={user.id || ''}
                                                        readOnly
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md">
                                                <div className="form-group">
                                                    <label htmlFor="username">{t('User Name')}</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        required
                                                        id="username"
                                                        defaultValue={user.username || ''}
                                                        readOnly
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="form-row">
                                            <div className="col-md">
                                                <div className="form-group">
                                                    <label htmlFor="balance">{t('Balance')} #:</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        required
                                                        id="balance"
                                                        defaultValue={user.balance || ''}
                                                        readOnly
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md">
                                                <div className="form-group">
                                                    <label htmlFor="fullname">{t('Full Name')}:</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        required
                                                        id="fullname"
                                                        defaultValue={user.fullname || ''}
                                                        {...register('fullname')}
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="form-row">
                                            <div className="col-md">
                                                <div className="form-group">
                                                    <label htmlFor="phone">{t('Phone')} # :</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        required
                                                        id="phone"
                                                        defaultValue={user.phone || ''}
                                                        {...register('phone')}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md">
                                                <div className="form-group">
                                                    <label htmlFor="email">Email:</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        required
                                                        id="email"
                                                        defaultValue={user.email || ''}
                                                        {...register('email')}
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        {/* <div className="form-group">
                                            <textarea
                                                className="form-control textarea text-left p-3 h-100"
                                                id="exampleFormControlTextarea1"
                                                rows="5"
                                                placeholder="Room Details"
                                            ></textarea>
                                        </div> */}
                                        <ul className="list-inline">
                                            <li className="list-inline-item">
                                                <button type="submit" className="btn">
                                                    {t('Submit')}
                                                </button>
                                            </li>
                                            <li className="list-inline-item">
                                                <button type="submit" className="btn">
                                                    {t('Cancel')}
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col">
                                        <div className="upload-photo-wrapper">
                                            <div className="upload-heading">
                                                <h5>{t('Avatar')}</h5>
                                            </div>

                                            <div className="dz-message">
                                                <div
                                                 
                                                    id="demo-upload"
                                                >
                                                    <div className="dz-message">
                                                        {user ? (
                                                            <label>
                                                                <Image
                                                                    className={styles.image}
                                                                    src={avatar ? filePreview : user.avatar}
                                                                    alt="avatar"
                                                                />
                                                                <input
                                                                    type="file"
                                                                    style={{ display: 'none' }}
                                                                    onChange={handleAvatar}
                                                                />
                                                            </label>
                                                        ) : (
                                                            <label>
                                                                <input
                                                                    type="file"
                                                                    style={{ display: 'none' }}
                                                                    onChange={handleAvatar}
                                                                />
                                                                <p>{t('Drop files here or click to upload.')} </p>
                                                            </label>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
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

export default EditAdminProfile;
