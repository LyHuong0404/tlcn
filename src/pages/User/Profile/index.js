/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import '~/assets/css/bootstrap.min.css';
import '~/assets/css/jquery-ui.css';
import '~/assets/css/ie.css';
import '~/assets/css/style.css';
import '~/assets/css/owl.carousel.css';
import '~/assets/css/select-style.css';
import '~/assets/css/font-awesome.min.css';
import '~/assets/js/jquery-1.11.3.min.js';
import styles from './Profile.module.scss';
import Image from '~/components/Image';
import { useEffect, useState } from 'react';
import PersonalInfo from '../PersonalInfo';
import AllAppointments from '../Appointment/AllAppointments';
import Wishlists from '../Wishlist';
import Settings from '../Settings';
import RegisterSeller from '../RegisterSeller';
import { Link, useLocation } from 'react-router-dom';
import EditProfileDialog from '~/components/EditProfileDialog';
import { getProfile } from '~/actions/userActions';
import { useTranslation } from 'react-i18next';

function Profile() {
    const { t } = useTranslation();
    const [user, setUser] = useState({});
    const location = useLocation();
    const [active, setActive] = useState(location?.state?.activeTab || 1);
    const [openDialog, setOpenDialog] = useState(false);

    const renderTabContent = () => {
        switch (active) {
            case 1:
                return <PersonalInfo />;
            case 2:
                return <AllAppointments />;
            case 3:
                return <Wishlists />;
            case 4:
                return <Settings />;
            case 5:
                return <RegisterSeller />;
            default:
                return null;
        }
    };

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
    return (
        <div className="container">
            <main id="htlfndr-main-content" role="main">
                <div className="row htlfndr-user-tabs htlfndr-credit-card-page">
                    <div className="htlfndr-user-person-navigation-wrapper col-sm-4 col-md-3">
                        <div className="htlfndr-user-person-navigation">
                            <a className="htlfndr-user-avatar">
                                <Image src={user.avatar} alt={user.username} className={styles.avatar} />
                                <div className={styles.icon_upload_avatar}>
                                    <i className="fa fa-camera"></i>
                                </div>
                            </a>
                            <h4 className="htlfndr-user-name">{user.username}</h4>
                            <h6 className="htlfndr-user-membership">{t('member since dec 2023')}</h6>
                            <p className="htlfndr-user-edit" onClick={() => setOpenDialog(!openDialog)}>
                                <i
                                    className="fa fa-pencil-square-o"
                                    aria-hidden="true"
                                    style={{ marginRight: '5px' }}
                                ></i>
                                {t('Edit Profile')}
                            </p>
                            {/* sidebar */}
                            <ul role="tablist" style={{ listStyle: 'none' }} className={styles.private}>
                                <li
                                    className={`${styles.menu} ${active === 1 ? styles.active : ''}`}
                                    onClick={() => setActive(1)}
                                >
                                    <a>
                                        <i className="fa fa-user"></i>
                                        {t('Personal Info')}
                                    </a>
                                </li>
                                <li
                                    className={`${styles.menu} ${active === 2 ? styles.active : ''}`}
                                    onClick={() => setActive(2)}
                                >
                                    <a>
                                        <i className="fa fa-clock-o"></i> {t('Appointments')}
                                    </a>
                                </li>

                                <li
                                    className={`${styles.menu} ${active === 3 ? styles.active : ''}`}
                                    onClick={() => setActive(3)}
                                >
                                    <a>
                                        <i className="fa fa-heart-o"></i> {t('Wishlist')}
                                    </a>
                                </li>
                                <li
                                    className={`${styles.menu} ${active === 4 ? styles.active : ''}`}
                                    onClick={() => setActive(4)}
                                >
                                    <a>
                                        <i className="fa fa-wrench"></i> {t('Settings')}
                                    </a>
                                </li>
                                {!user?.roles?.includes('ROLE_SELLER') && (
                                    <li
                                        className={`${styles.menu} ${active === 5 ? styles.active : ''}`}
                                        onClick={() => setActive(5)}
                                    >
                                        <a>
                                            <i className="fa fa-credit-card"></i>
                                            {t('Register Seller')}
                                        </a>
                                    </li>
                                )}
                                {user?.roles?.includes('ROLE_SELLER') && (
                                    <li className={styles.menu}>
                                        <Link to="/seller/dashboard">
                                            <i className="fa fa-home"></i>
                                            {t('Seller Home')}
                                        </Link>
                                    </li>
                                )}
                                {user?.roles?.includes('ROLE_ADMIN') && (
                                    <li className={styles.menu}>
                                        <a>
                                            <i className="fa fa-unlock"></i>
                                            {t('Admin Home')}
                                        </a>
                                    </li>
                                )}
                            </ul>
                        </div>
                    </div>
                    {renderTabContent()}
                </div>
            </main>
            {openDialog && <EditProfileDialog onClose={() => setOpenDialog(!openDialog)} />}
        </div>
    );
}

export default Profile;
