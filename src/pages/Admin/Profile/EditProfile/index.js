/* eslint-disable jsx-a11y/anchor-is-valid */
import Image from '~/components/Image';
import { useState, useEffect } from 'react';
import styles from './EditProfile.module.scss';
import { Link, useParams } from 'react-router-dom';
import { getUser } from '~/actions/adminActions';
import config from '~/config';
import { useTranslation } from 'react-i18next';

function EditProfile() {
    const { t } = useTranslation();
    const params = useParams();
    const id = params.id;
    const [user, setUser] = useState({});
    const [filePreview, setFilePreview] = useState('');
    const [avatar, setAvatar] = useState('');

    useEffect(() => {
        try {
            const fetchData = async () => {
                const rs = await getUser(id);
                setUser(rs);
            };
            fetchData();
        } catch (error) {
            console.log(error);
        }
    }, []);

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
                                    <a>{t('Profile')}</a>
                                </div>
                                <div className="breadcrumb-item active">
                                    <i className="fas fa-angle-right"></i>
                                    {t('Edit Profile')}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="box">
                        <div className="row">
                            <div
                                className="col"
                                style={{ margin: '20px 34px 5px 34px', borderBottom: '1px solid #cccccc' }}
                            >
                                <div className="details-text" style={{ marginBottom: '18px' }}>
                                    <a style={{ backgroundColor: '#cccccc' }}>{t('Profile')}</a>
                                    <Link
                                        to={config.authRoutes.getUserpaymentLink(user.id)}
                                        state={{
                                            activeTab: 2,
                                        }}
                                    >
                                        {t('Payment')}
                                    </Link>
                                    <Link
                                        to={config.authRoutes.getUserAppointmentsLink(user.id)}
                                        state={{
                                            activeTab: 2,
                                        }}
                                    >
                                        {t('Appointments')}
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="hotel-listing-form">
                            <form className="text-center">
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
                                                <div id="demo-upload">
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

export default EditProfile;
