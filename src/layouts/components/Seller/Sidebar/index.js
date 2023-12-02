/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Image from '~/components/Image';
import './Sidebar.module.scss';

function Sidebar() {
    const [menuActive, setMenuActive] = useState(1);

    return (
        <div className="sb2-1">
            <div className="sb2-12">
                <ul>
                    <li>
                        <Image src="" alt="" />
                    </li>
                    <li>
                        <h5>
                            Victoria Baker <span> Santa Ana, CA</span>
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
                    <li onClick={() => setMenuActive(2)}>
                        <Link to="/seller/allcustomers" className={menuActive === 2 ? 'menu-active' : ''}>
                            <i className="fa fa-user" aria-hidden="true"></i> Customers
                        </Link>
                    </li>
                    {/* <li>
                        <a href="" className="collapsible-header">
                            <i className="fa fa-umbrella" aria-hidden="true"></i> Tour Packages
                        </a>
                        
                    </li> */}
                    <li onClick={() => setMenuActive(3)}>
                        <Link to="/seller/allrooms" className={menuActive === 3 ? 'menu-active' : ''}>
                            <i className="fa fa-h-square" aria-hidden="true"></i> Rooms
                        </Link>
                    </li>
                    <li onClick={() => setMenuActive(4)}>
                        <Link to="/seller/addroom" className={menuActive === 4 ? 'menu-active' : ''}>
                            <i className="fa fa-h-square" aria-hidden="true"></i> New Room
                        </Link>
                    </li>
                    {/* <li>
                        <a href="" className="collapsible-header">
                            <i className="fa fa-picture-o" aria-hidden="true"></i> Sight Seeings
                        </a>
                        
                    </li> */}
                    {/* <li>
                        <a href="" className="collapsible-header">
                            <i className="fa fa-calendar-o" aria-hidden="true"></i> Events
                        </a>
                        
                    </li> */}
                    {/* <li>
                        <a href="" className="collapsible-header">
                            <i className="fa fa-braille" aria-hidden="true"></i> Ui-Kits
                        </a>
                        <div className="collapsible-body left-sub-menu">
                            <ul>
                                <li>
                                    <a href="ui-form.html">ui-form</a>
                                </li>
                                <li>
                                    <a href="ui-kit.html">ui-kit</a>
                                </li>
                                <li>
                                    <a href="ui-table.html">ui-table</a>
                                </li>
                                <li>
                                    <a href="ui-pre-load.html">ui-pre-load</a>
                                </li>
                                <li>
                                    <a href="ui-tab.html">ui-tab</a>
                                </li>
                                <li>
                                    <a href="ui-icons.html">ui-icons</a>
                                </li>
                                <li>
                                    <a href="ui-collapsible.html">ui-collapsible</a>
                                </li>
                            </ul>
                        </div>
                    </li> */}
                    {/* <li>
                        <Link to="" className="collapsible-header">
                            <i className="fa fa-usd" aria-hidden="true"></i> Discounts
                        </Link>
                        
                    </li> */}
                    <li onClick={() => setMenuActive(5)}>
                        <Link to="" className={menuActive === 5 ? 'menu-active' : ''}>
                            <i className="fa fa-tags" aria-hidden="true"></i> Offers
                        </Link>
                    </li>
                    <li onClick={() => setMenuActive(6)}>
                        <Link to="/seller/allappointments" className={menuActive === 6 ? 'menu-active' : ''}>
                            <i className="fa fa-ticket" aria-hidden="true"></i> Appointments
                        </Link>
                    </li>
                    {/* <li>
                        <Link href="" className="collapsible-header">
                            <i className="fa fa-rss" aria-hidden="true"></i> Blog & Articals
                        </Link>
                        
                    </li> */}
                    <li onClick={() => setMenuActive(7)}>
                        <Link to="social-media.html" className={menuActive === 7 ? 'menu-active' : ''}>
                            <i className="fa fa-plus-square-o" aria-hidden="true"></i> Social Media
                        </Link>
                    </li>
                </ul>
                <ul className="collapsible custom-login">
                    <li>
                        <Link to="login.html" target="_blank">
                            <i className="fa fa-sign-in" aria-hidden="true"></i> Login
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;
