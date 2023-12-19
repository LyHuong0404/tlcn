/* eslint-disable jsx-a11y/anchor-is-valid */
import Image from '~/components/Image';
import { useState, useEffect } from 'react';
import styles from './ViewProfile.module.scss';
import { getProfile } from '~/actions/userActions';
import { useTranslation } from 'react-i18next';

function ViewProfile() {
    const { t } = useTranslation();
    const [user, setUser] = useState({});
    const [filePreview, setFilePreview] = useState('');
    const [avatar, setAvatar] = useState('');

    useEffect(() => {
        return () => {
            avatar && URL.revokeObjectURL(avatar);
        };
    }, [avatar]);

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

    const handleAvatar = (e) => {
        const src = URL.createObjectURL(e.target.files[0]);
        setFilePreview(src);
        setAvatar(e.target.files[0]);
    };
    return (
        <section>
            <div className="content profile view-profile">
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
                                <a>{t('Profile')}</a>
                            </div>
                            <div className="breadcrumb-item active">
                                <i className="fas fa-angle-right"></i>{t('View Profile')}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="box" style={{ fontSize: '16px' }}>
                    <div className="row">
                        <div className="col">
                            <div className="details-text">
                                <h1>{t('Profile Details')}</h1>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-8">
                            <div className="profile-padding">
                                <div className="row">
                                    <div className="col-sm-6 col-5">
                                        <div className="heading-part">
                                            <p htmlFor="Id">ID #:</p>

                                            <p htmlFor="Name">{t('User Name')}:</p>

                                            <p htmlFor="LastName">{t('Full Name')}:</p>

                                            <p htmlFor="inputPassword4">{t('Phone')}:</p>

                                            <p htmlFor="inputEmail4">Email:</p>
                                            <p htmlFor="Role">{t('Role')}:</p>
                                        </div>
                                    </div>

                                    <div className="col-sm-6 col-7">
                                        <div className="details-part">
                                            <p>{user.id}</p>

                                            <p>{user.username}</p>

                                            <p>{user.fullname}</p>
                                            <p>{user.phone}</p>
                                            <p>{user.email}</p>
                                            <p>{t('ADMIN, SELLER, USER')}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="personal-info" style={{ fontSize: '16px' }}></div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="upload-photo-wrapper">
                                <div className="upload-heading">
                                    <h5>{t('Avatar')}</h5>
                                </div>

                                <div className={`${avatar ? 'dropzone background_avatar' : ''}`} id="demo-upload">
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
                                                <h1>
                                                    <i className="fas fa-camera"></i>
                                                </h1>
                                            </label>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ViewProfile;
