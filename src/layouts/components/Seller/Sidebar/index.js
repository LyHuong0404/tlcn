/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Image from '~/components/Image';
import './Sidebar.module.scss';
import { getProfile } from '~/actions/userActions';
import { userLogout } from '~/actions/authActions';
import { useTranslation } from 'react-i18next';

function Sidebar() {
    const { t } = useTranslation();
    const [menuActive, setMenuActive] = useState(1);
    const [user, setUser] = useState({});
    const navigate = useNavigate();

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

    const handleLogout = async () => {
        await userLogout();
        navigate('/auth/login');
    };

    return (
        <div className="sb2-1">
            <div className="sb2-12">
                <ul>
                    <li>
                        <Image src={user?.avatar} alt={user.username} className="custom" />
                    </li>
                    <li>
                        <h5>
                            {user.username} <span> {t('Member Seller Since 2023')}</span>
                        </h5>
                    </li>
                    <li></li>
                </ul>
            </div>
            <div className="sb2-13">
                <ul className="collapsible" data-collapsible="accordion">
                    <li onClick={() => setMenuActive(1)}>
                        <Link to="/seller/dashboard" className={menuActive === 1 ? 'menu-active' : ''}>
                            <i className="fa fa-bar-chart" aria-hidden="true"></i> {t('Dashboard')}
                        </Link>
                    </li>
                    <li onClick={() => setMenuActive(3)}>
                        <Link to="/seller/allrooms" className={menuActive === 3 ? 'menu-active' : ''}>
                            <i className="fa fa-h-square" aria-hidden="true"></i> {t('Rooms')}
                        </Link>
                    </li>
                    <li onClick={() => setMenuActive(4)}>
                        <Link to="/seller/addroom" className={menuActive === 4 ? 'menu-active' : ''}>
                            <i className="fa fa-plus-square-o" aria-hidden="true"></i> {t('New Room')}
                        </Link>
                    </li>
                    <li onClick={() => setMenuActive(6)}>
                        <Link to="/seller/allappointments" className={menuActive === 6 ? 'menu-active' : ''}>
                            <i className="fa fa-ticket" aria-hidden="true"></i> {t('Appointments')}
                        </Link>
                    </li>
                    <li onClick={() => setMenuActive(7)}>
                        <Link to="/seller/setting" className={menuActive === 7 ? 'menu-active' : ''}>
                            <i className="fa fa-cogs" aria-hidden="true"></i> {t('Seller Setting')}
                        </Link>
                    </li>
                </ul>
                <ul className="collapsible custom-login">
                    {user?.roles?.length > 2 && (
                        <li>
                            <Link to="/admin/dashboard">
                                <i className="fa fa-unlock" aria-hidden="true"></i> {t('Admin Home')}
                            </Link>
                        </li>
                    )}
                    <li onClick={handleLogout}>
                        <a>
                            <i className="fa fa-sign-in" aria-hidden="true"></i> {t('Logout')}
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;
