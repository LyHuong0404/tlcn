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
import { useState } from 'react';
import PersonalInfo from '../PersonalInfo';
import AllAppointments from '../Appointment/AllAppointments';
import Wishlists from '../Wishlists';
import Settings from '../Settings';
import RegisterSeller from '../RegisterSeller';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

function Profile() {
    const { user } = useSelector((state) => state.auth);
    const location = useLocation();
    const [active, setActive] = useState(location?.state?.activeTab || 1);

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
                            <h6 className="htlfndr-user-membership">member since may 2012</h6>
                            <p className="htlfndr-user-edit"><i className="fa fa-pencil-square-o" aria-hidden="true" style={{marginRight: '5px'}}></i>Edit Profile</p>
                            {/* sidebar */}
                            <ul role="tablist" style={{ listStyle: 'none' }} className={styles.private}>
                                <li
                                    className={`${styles.menu} ${active === 1 ? styles.active : ''}`}
                                    onClick={() => setActive(1)}
                                >
                                    <a>
                                        <i className="fa fa-user"></i>
                                        Personal Info
                                    </a>
                                </li>
                                <li
                                    className={`${styles.menu} ${active === 2 ? styles.active : ''}`}
                                    onClick={() => setActive(2)}
                                >
                                    <a>
                                        <i className="fa fa-clock-o"></i> Appointments
                                    </a>
                                </li>

                                <li
                                    className={`${styles.menu} ${active === 3 ? styles.active : ''}`}
                                    onClick={() => setActive(3)}
                                >
                                    <a>
                                        <i className="fa fa-heart-o"></i> Wishlist
                                    </a>
                                </li>
                                <li
                                    className={`${styles.menu} ${active === 4 ? styles.active : ''}`}
                                    onClick={() => setActive(4)}
                                >
                                    <a>
                                        <i className="fa fa-wrench"></i> Settings
                                    </a>
                                </li>
                                <li
                                    className={`${styles.menu} ${active === 5 ? styles.active : ''}`}
                                    onClick={() => setActive(5)}
                                >
                                    <a>
                                        <i className="fa fa-credit-card"></i>
                                        Register Seller
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {renderTabContent()}
                </div>
            </main>
        </div>
    );
}

export default Profile;
