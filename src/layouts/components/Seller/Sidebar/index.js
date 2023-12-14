/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Image from '~/components/Image';
import './Sidebar.module.scss';
import { getProfile } from '~/actions/userActions';

function Sidebar() {
    const [menuActive, setMenuActive] = useState(1);
    const [user, setUser] = useState({});

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
        <div className="sb2-1">
            <div className="sb2-12">
                <ul>
                    <li>
                        <Image src={user?.avatar} alt={user.username} className="custom" />
                    </li>
                    <li>
                        <h5>
                            {user.username} <span> Member Seller Since 2023</span>
                        </h5>
                    </li>
                    <li></li>
                </ul>
            </div>
            <div className="sb2-13">
                <ul className="collapsible" data-collapsible="accordion">
                    <li onClick={() => setMenuActive(1)}>
                        <Link to="/seller/dashboard" className={menuActive === 1 ? 'menu-active' : ''}>
                            <i className="fa fa-bar-chart" aria-hidden="true"></i> Dashboard
                        </Link>
                    </li>
                    <li onClick={() => setMenuActive(3)}>
                        <Link to="/seller/allrooms" className={menuActive === 3 ? 'menu-active' : ''}>
                            <i className="fa fa-h-square" aria-hidden="true"></i> Rooms
                        </Link>
                    </li>
                    <li onClick={() => setMenuActive(4)}>
                        <Link to="/seller/addroom" className={menuActive === 4 ? 'menu-active' : ''}>
                            <i className="fa fa-plus-square-o" aria-hidden="true"></i> New Room
                        </Link>
                    </li>
                    <li onClick={() => setMenuActive(6)}>
                        <Link to="/seller/allappointments" className={menuActive === 6 ? 'menu-active' : ''}>
                            <i className="fa fa-ticket" aria-hidden="true"></i> Appointments
                        </Link>
                    </li>
                    <li onClick={() => setMenuActive(7)}>
                        <Link to="/seller/setting" className={menuActive === 7 ? 'menu-active' : ''}>
                            <i className="fa fa-cogs" aria-hidden="true"></i> Seller Setting
                        </Link>
                    </li>
                </ul>
                <ul className="collapsible custom-login">
                    <li>
                        <Link to="/">
                            <i className="fa fa-sign-in" aria-hidden="true"></i> Logout
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;
