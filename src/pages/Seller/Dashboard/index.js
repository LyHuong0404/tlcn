/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { getAllRooms } from '~/actions/sellerActions';
import Image from '~/components/Image';
import { format } from 'date-fns';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

function DashBoard() {
    const { t } = useTranslation();
    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await getAllRooms(10, 0, null, null);
            result?.content?.map((element) => (element.dayPublic = format(new Date(element.dayPublic), 'dd-MM-yyyy')));
            setRooms(result?.content);
        };
        fetchData();
    }, []);

    return (
        <div className="sb2-2">
            <div className="sb2-2-2">
                <ul>
                    <li>
                        <a className="txt-none">
                            <i className="fa fa-home" aria-hidden="true"></i> {t('Home')}
                        </a>
                    </li>
                    <li className="active-bre">
                        <a className="txt-none">{t('Dashboard')}</a>
                    </li>
                </ul>
            </div>

            <div className="ad-v2-hom-info">
                <div className="ad-v2-hom-info-inn">
                    {/* <ul>
                        <li>
                            <div className="ad-hom-box ad-hom-box-1">
                                <span className="ad-hom-col-com ad-hom-col-1">
                                    <i className="fa fa-bar-chart"></i>
                                </span>
                                <div className="ad-hom-view-com">
                                    <p>
                                        <i className="fa  fa-arrow-up up"></i> Today Views
                                    </p>
                                    <h3>22</h3>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="ad-hom-box ad-hom-box-2">
                                <span className="ad-hom-col-com ad-hom-col-2">
                                    <i className="fa fa-usd"></i>
                                </span>
                                <div className="ad-hom-view-com">
                                    <p>
                                        <i className="fa  fa-arrow-up up"></i> Today Reviews
                                    </p>
                                    <h3>7</h3>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="ad-hom-box ad-hom-box-3">
                                <span className="ad-hom-col-com ad-hom-col-3">
                                    <i className="fa fa-address-card-o"></i>
                                </span>
                                <div className="ad-hom-view-com">
                                    <p>
                                        <i className="fa  fa-arrow-up up"></i> Today Appointments
                                    </p>
                                    <h3>5</h3>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="ad-hom-box ad-hom-box-4">
                                <span className="ad-hom-col-com ad-hom-col-4">
                                    <i className="fa fa-envelope-open-o"></i>
                                </span>
                                <div className="ad-hom-view-com">
                                    <p>
                                        <i className="fa  fa-arrow-up up"></i> Enquiry
                                    </p>
                                    <h3>22,520</h3>
                                </div>
                            </div>
                        </li> 
                    </ul> */}
                </div>
            </div>
            {/* <div className="sb2-2-3">
                <div className="row">
                    <div className="col-md-6">
                        <div className="box-inn-sp">
                            <div className="inn-title">
                                <h4>Country Campaigns</h4>
                                <p>Airtport Hotels The Right Way To Start A Short Break Holiday</p>
                                <a className="dropdown-button drop-down-meta" href="#" data-activates="dropdown1">
                                    <i className="material-icons">more_vert</i>
                                </a>

                                <ul id="dropdown1" className="dropdown-content">
                                    <li>
                                        <a href="#!">Add New</a>
                                    </li>
                                    <li>
                                        <a href="#!">Edit</a>
                                    </li>
                                    <li>
                                        <a href="#!">Update</a>
                                    </li>
                                    <li className="divider"></li>
                                    <li>
                                        <a href="#!">
                                            <i className="material-icons">delete</i>Delete
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#!">
                                            <i className="material-icons">subject</i>View All
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#!">
                                            <i className="material-icons">play_for_work</i>Download
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="tab-inn">
                                <div className="table-responsive table-desi">
                                    <table className="table table-hover">
                                        <thead>
                                            <tr>
                                                <th>Country</th>
                                                <th>Client</th>
                                                <th>Changes</th>
                                                <th>Budget</th>
                                                <th>Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <span className="txt-dark weight-500">Australia</span>
                                                </td>
                                                <td>Beavis</td>
                                                <td>
                                                    <span className="txt-success">
                                                        <i className="fa fa-angle-up" aria-hidden="true"></i>
                                                        <span>2.43%</span>
                                                    </span>
                                                </td>
                                                <td>
                                                    <span className="txt-dark weight-500">$1478</span>
                                                </td>
                                                <td>
                                                    <span className="label label-success">Active</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <span className="txt-dark weight-500">Cuba</span>
                                                </td>
                                                <td>Felix</td>
                                                <td>
                                                    <span className="txt-success">
                                                        <i className="fa fa-angle-up" aria-hidden="true"></i>
                                                        <span>1.43%</span>
                                                    </span>
                                                </td>
                                                <td>
                                                    <span className="txt-dark weight-500">$951</span>
                                                </td>
                                                <td>
                                                    <span className="label label-danger">Closed</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <span className="txt-dark weight-500">France</span>
                                                </td>
                                                <td>Cannibus</td>
                                                <td>
                                                    <span className="txt-danger">
                                                        <i className="fa fa-angle-up" aria-hidden="true"></i>
                                                        <span>-8.43%</span>
                                                    </span>
                                                </td>
                                                <td>
                                                    <span className="txt-dark weight-500">$632</span>
                                                </td>
                                                <td>
                                                    <span className="label label-default">Hold</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <span className="txt-dark weight-500">Norway</span>
                                                </td>
                                                <td>Neosoft</td>
                                                <td>
                                                    <span className="txt-success">
                                                        <i className="fa fa-angle-up" aria-hidden="true"></i>
                                                        <span>7.43%</span>
                                                    </span>
                                                </td>
                                                <td>
                                                    <span className="txt-dark weight-500">$325</span>
                                                </td>
                                                <td>
                                                    <span className="label label-default">Hold</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <span className="txt-dark weight-500">South Africa</span>
                                                </td>
                                                <td>Hencework</td>
                                                <td>
                                                    <span className="txt-success">
                                                        <i className="fa fa-angle-up" aria-hidden="true"></i>
                                                        <span>9.43%</span>
                                                    </span>
                                                </td>
                                                <td>
                                                    <span>$258</span>
                                                </td>
                                                <td>
                                                    <span className="label label-success">Active</span>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="box-inn-sp">
                            <div className="inn-title">
                                <h4>Country Campaigns</h4>
                                <p>Airtport Hotels The Right Way To Start A Short Break Holiday</p>
                                <a className="dropdown-button drop-down-meta" href="#" data-activates="dropdown2">
                                    <i className="material-icons">more_vert</i>
                                </a>

                                <ul id="dropdown2" className="dropdown-content">
                                    <li>
                                        <a href="#!">Add New</a>
                                    </li>
                                    <li>
                                        <a href="#!">Edit</a>
                                    </li>
                                    <li>
                                        <a href="#!">Update</a>
                                    </li>
                                    <li className="divider"></li>
                                    <li>
                                        <a href="#!">
                                            <i className="material-icons">delete</i>Delete
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#!">
                                            <i className="material-icons">subject</i>View All
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#!">
                                            <i className="material-icons">play_for_work</i>Download
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="tab-inn">
                                <div className="table-responsive table-desi">
                                    <table className="table table-hover">
                                        <thead>
                                            <tr>
                                                <th>State</th>
                                                <th>Client</th>
                                                <th>Changes</th>
                                                <th>Budget</th>
                                                <th>Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <span className="txt-dark weight-500">California</span>
                                                </td>
                                                <td>Beavis</td>
                                                <td>
                                                    <span className="txt-success">
                                                        <i className="fa fa-angle-up" aria-hidden="true"></i>
                                                        <span>2.43%</span>
                                                    </span>
                                                </td>
                                                <td>
                                                    <span className="txt-dark weight-500">$1478</span>
                                                </td>
                                                <td>
                                                    <span className="label label-success">Active</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <span className="txt-dark weight-500">Florida</span>
                                                </td>
                                                <td>Felix</td>
                                                <td>
                                                    <span className="txt-success">
                                                        <i className="fa fa-angle-up" aria-hidden="true"></i>
                                                        <span>1.43%</span>
                                                    </span>
                                                </td>
                                                <td>
                                                    <span className="txt-dark weight-500">$951</span>
                                                </td>
                                                <td>
                                                    <span className="label label-danger">Closed</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <span className="txt-dark weight-500">Hawaii</span>
                                                </td>
                                                <td>Cannibus</td>
                                                <td>
                                                    <span className="txt-danger">
                                                        <i className="fa fa-angle-up" aria-hidden="true"></i>
                                                        <span>-8.43%</span>
                                                    </span>
                                                </td>
                                                <td>
                                                    <span className="txt-dark weight-500">$632</span>
                                                </td>
                                                <td>
                                                    <span className="label label-default">Hold</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <span className="txt-dark weight-500">Alaska</span>
                                                </td>
                                                <td>Neosoft</td>
                                                <td>
                                                    <span className="txt-success">
                                                        <i className="fa fa-angle-up" aria-hidden="true"></i>
                                                        <span>7.43%</span>
                                                    </span>
                                                </td>
                                                <td>
                                                    <span className="txt-dark weight-500">$325</span>
                                                </td>
                                                <td>
                                                    <span className="label label-default">Hold</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <span className="txt-dark weight-500">New Jersey</span>
                                                </td>
                                                <td>Hencework</td>
                                                <td>
                                                    <span className="txt-success">
                                                        <i className="fa fa-angle-up" aria-hidden="true"></i>
                                                        <span>9.43%</span>
                                                    </span>
                                                </td>
                                                <td>
                                                    <span>$258</span>
                                                </td>
                                                <td>
                                                    <span className="label label-success">Active</span>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

            <div className="sb2-2-3">
                <div className="row">
                    <div className="col-md-12">
                        <div className="box-inn-sp">
                            <div className="inn-title">
                                <h4>{t('List New Rooms')}</h4>
                                {/* <p>Airtport Hotels The Right Way To Start A Short Break Holiday</p> */}
                            </div>
                            <div className="tab-inn">
                                <div className="table-responsive table-desi">
                                    <table className="table table-hover">
                                        <thead>
                                            <tr>
                                                <th>{t('Avatar')}</th>
                                                <th>{t('Name')}</th>
                                                <th>{t('Address')}</th>
                                                <th>{t('Price')}</th>
                                                {/* <th>{t('Bookings')}</th>
                                                <th>{t('Reviews')}</th> */}
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {rooms?.map((room, index) => (
                                                <tr key={index}>
                                                    <td>
                                                        <span className="list-img">
                                                            <Image src={room.avatarUrl} alt={room.subject} />
                                                        </span>
                                                    </td>
                                                    <td style={{ width: '150px' }}>
                                                        <span className="list-enq-name">{room.subject}</span>
                                                    </td>
                                                    <td style={{ width: '480px' }}>{room.address}</td>
                                                    <td style={{ width: '180px' }}>{room.price}</td>

                                                    {/* <td>
                                                        <span className="label label-success">5</span>
                                                    </td>
                                                    <td>
                                                        <span className="label label-info">7</span>
                                                    </td> */}
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className="sb2-2-3">
                <div className="row">
                    <div className="col-md-6">
                        <div className="box-inn-sp">
                            <div className="inn-title">
                                <h4>Listing Enquiry</h4>
                                <p>Airtport Hotels The Right Way To Start A Short Break Holiday</p>
                                <a className="dropdown-button drop-down-meta" href="#" data-activates="dr-listings">
                                    <i className="material-icons">more_vert</i>
                                </a>
                                <ul id="dr-listings" className="dropdown-content">
                                    <li>
                                        <a href="#!">Add New</a>
                                    </li>
                                    <li>
                                        <a href="#!">Edit</a>
                                    </li>
                                    <li>
                                        <a href="#!">Update</a>
                                    </li>
                                    <li className="divider"></li>
                                    <li>
                                        <a href="#!">
                                            <i className="material-icons">delete</i>Delete
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#!">
                                            <i className="material-icons">subject</i>View All
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#!">
                                            <i className="material-icons">play_for_work</i>Download
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="tab-inn">
                                <div className="table-responsive table-desi">
                                    <table className="table table-hover">
                                        <thead>
                                            <tr>
                                                <th>Select</th>
                                                <th>Listing</th>
                                                <th>Name</th>
                                                <th>Date</th>
                                                <th>City</th>
                                                <th>Enquiry</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <input
                                                        type="checkbox"
                                                        className="filled-in"
                                                        id="filled-in-box-1"
                                                        defaultChecked
                                                    />
                                                    <label htmlFor="filled-in-box-1"></label>
                                                </td>
                                                <td>
                                                    <span className="list-img">
                                                        <Image src="images/listing/1.jpg" alt="" />
                                                    </span>
                                                </td>
                                                <td>
                                                    <span className="list-enq-name">Taaj Club House</span>
                                                    <span className="list-enq-city">Illunois, United States</span>
                                                </td>
                                                <td>12 may</td>
                                                <td>Hawaii</td>
                                                <td>
                                                    <span className="label label-success">15</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <input
                                                        type="checkbox"
                                                        className="filled-in"
                                                        id="filled-in-box-2"
                                                        defaultChecked
                                                    />
                                                    <label htmlFor="filled-in-box-2"></label>
                                                </td>
                                                <td>
                                                    <span className="list-img">
                                                        <Image src="images/listing/2.jpg" alt="" />
                                                    </span>
                                                </td>
                                                <td>
                                                    <span className="list-enq-name">Grand Hotel</span>
                                                    <span className="list-enq-city">Rio,Brazil</span>
                                                </td>
                                                <td>07 aug</td>
                                                <td>Hawaii</td>
                                                <td>
                                                    <span className="label label-success">05</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <input
                                                        type="checkbox"
                                                        className="filled-in"
                                                        id="filled-in-box-3"
                                                        defaultChecked
                                                    />
                                                    <label htmlFor="filled-in-box-3"></label>
                                                </td>
                                                <td>
                                                    <span className="list-img">
                                                        <Image src="images/listing/3.jpg" alt="" />
                                                    </span>
                                                </td>
                                                <td>
                                                    <span className="list-enq-name">Grand Pales</span>
                                                    <span className="list-enq-city">Chennai,India</span>
                                                </td>
                                                <td>18 jun</td>
                                                <td>Hawaii</td>
                                                <td>
                                                    <span className="label label-success">35</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <input type="checkbox" className="filled-in" id="filled-in-box-4" />
                                                    <label htmlFor="filled-in-box-4"></label>
                                                </td>
                                                <td>
                                                    <span className="list-img">
                                                        <Image src="images/listing/4.jpg" alt="" />
                                                    </span>
                                                </td>
                                                <td>
                                                    <span className="list-enq-name">Lake Palace Hotel</span>
                                                    <span className="list-enq-city">Beijing,China</span>
                                                </td>
                                                <td>09 apr</td>
                                                <td>Hawaii</td>
                                                <td>
                                                    <span className="label label-success">24</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <input type="checkbox" className="filled-in" id="filled-in-box-5" />
                                                    <label htmlFor="filled-in-box-5"></label>
                                                </td>
                                                <td>
                                                    <span className="list-img">
                                                        <Image src="images/listing/5.jpg" alt="" />
                                                    </span>
                                                </td>
                                                <td>
                                                    <span className="list-enq-name">First Class Hotel</span>
                                                    <span className="list-enq-city">Berlin,Germany</span>
                                                </td>
                                                <td>21 jun</td>
                                                <td>Hawaii</td>
                                                <td>
                                                    <span className="label label-success">18</span>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="box-inn-sp">
                            <div className="inn-title">
                                <h4>Hotel Bookings</h4>
                                <p>Airtport Hotels The Right Way To Start A Short Break Holiday</p>
                                <a className="dropdown-button drop-down-meta" href="#" data-activates="dr-hotel">
                                    <i className="material-icons">more_vert</i>
                                </a>
                                <ul id="dr-hotel" className="dropdown-content">
                                    <li>
                                        <a href="#!">Add New</a>
                                    </li>
                                    <li>
                                        <a href="#!">Edit</a>
                                    </li>
                                    <li>
                                        <a href="#!">Update</a>
                                    </li>
                                    <li className="divider"></li>
                                    <li>
                                        <a href="#!">
                                            <i className="material-icons">delete</i>Delete
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#!">
                                            <i className="material-icons">subject</i>View All
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#!">
                                            <i className="material-icons">play_for_work</i>Download
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="tab-inn">
                                <div className="table-responsive table-desi">
                                    <table className="table table-hover">
                                        <thead>
                                            <tr>
                                                <th>Select</th>
                                                <th>Listing</th>
                                                <th>Name</th>
                                                <th>Date</th>
                                                <th>City</th>
                                                <th>Enquiry</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <input type="checkbox" id="ch2-1" />
                                                    <label htmlFor="ch2-1"></label>
                                                </td>
                                                <td>
                                                    <span className="list-img">
                                                        <Image src="images/listing/1.jpg" alt="" />
                                                    </span>
                                                </td>
                                                <td>
                                                    <span className="list-enq-name">Taaj Club House</span>
                                                    <span className="list-enq-city">Illunois, United States</span>
                                                </td>
                                                <td>12 may</td>
                                                <td>Hawaii</td>
                                                <td>
                                                    <span className="label label-success">15</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <input type="checkbox" id="ch2-2" />
                                                    <label htmlFor="ch2-2"></label>
                                                </td>
                                                <td>
                                                    <span className="list-img">
                                                        <Image src="images/listing/2.jpg" alt="" />
                                                    </span>
                                                </td>
                                                <td>
                                                    <span className="list-enq-name">Grand Hotel</span>
                                                    <span className="list-enq-city">Rio,Brazil</span>
                                                </td>
                                                <td>07 aug</td>
                                                <td>Hawaii</td>
                                                <td>
                                                    <span className="label label-success">05</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <input type="checkbox" id="ch2-3" />
                                                    <label htmlFor="ch2-3"></label>
                                                </td>
                                                <td>
                                                    <span className="list-img">
                                                        <Image src="images/listing/3.jpg" alt="" />
                                                    </span>
                                                </td>
                                                <td>
                                                    <span className="list-enq-name">Grand Pales</span>
                                                    <span className="list-enq-city">Chennai,India</span>
                                                </td>
                                                <td>18 jun</td>
                                                <td>Hawaii</td>
                                                <td>
                                                    <span className="label label-success">35</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <input type="checkbox" id="ch2-4" />
                                                    <label htmlFor="ch2-4"></label>
                                                </td>
                                                <td>
                                                    <span className="list-img">
                                                        <Image src="images/listing/4.jpg" alt="" />
                                                    </span>
                                                </td>
                                                <td>
                                                    <span className="list-enq-name">Lake Palace Hotel</span>
                                                    <span className="list-enq-city">Beijing,China</span>
                                                </td>
                                                <td>09 apr</td>
                                                <td>Hawaii</td>
                                                <td>
                                                    <span className="label label-success">24</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <input type="checkbox" id="ch2-5" />
                                                    <label htmlFor="ch2-5"></label>
                                                </td>
                                                <td>
                                                    <span className="list-img">
                                                        <Image src="images/listing/5.jpg" alt="" />
                                                    </span>
                                                </td>
                                                <td>
                                                    <span className="list-enq-name">First Class Hotel</span>
                                                    <span className="list-enq-city">Berlin,Germany</span>
                                                </td>
                                                <td>21 jun</td>
                                                <td>Hawaii</td>
                                                <td>
                                                    <span className="label label-success">18</span>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

            {/* <div className="sb2-2-3">
                <div className="row">
                    <div className="col-md-6">
                        <div className="box-inn-sp">
                            <div className="inn-title">
                                <h4>Latest Activity</h4>
                                <p>Airtport Hotels The Right Way To Start A Short Break Holiday</p>
                                <a className="dropdown-button drop-down-meta" href="#" data-activates="dr-activ">
                                    <i className="material-icons">more_vert</i>
                                </a>
                                <ul id="dr-activ" className="dropdown-content">
                                    <li>
                                        <a href="#!">Add New</a>
                                    </li>
                                    <li>
                                        <a href="#!">Edit</a>
                                    </li>
                                    <li>
                                        <a href="#!">Update</a>
                                    </li>
                                    <li className="divider"></li>
                                    <li>
                                        <a href="#!">
                                            <i className="material-icons">delete</i>Delete
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#!">
                                            <i className="material-icons">subject</i>View All
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#!">
                                            <i className="material-icons">play_for_work</i>Download
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="tab-inn list-act-hom">
                                <ul>
                                    <li className="list-act-hom-con">
                                        <i className="fa fa-clock-o" aria-hidden="true"></i>
                                        <h4>
                                            <span>12 may, 2017</span> Arrival and Evening Dhow Cruise
                                        </h4>
                                        <p>
                                            There are many variations of passages of Lorem Ipsum available, but the
                                            majority have suffered alteration in some form, by injected humour.
                                        </p>
                                    </li>
                                    <li className="list-act-hom-con">
                                        <i className="fa fa-clock-o" aria-hidden="true"></i>
                                        <h4>
                                            <span>08 Jun, 2017</span> City Tour and Evening Free
                                        </h4>
                                        <p>
                                            There are many variations of passages of Lorem Ipsum available, but the
                                            majority have suffered alteration in some form, by injected humour.
                                        </p>
                                    </li>
                                    <li className="list-act-hom-con">
                                        <i className="fa fa-clock-o" aria-hidden="true"></i>
                                        <h4>
                                            <span>27 July, 2017</span> Desert Safari with Dinner
                                        </h4>
                                        <p>
                                            There are many variations of passages of Lorem Ipsum available, but the
                                            majority have suffered alteration in some form, by injected humour.
                                        </p>
                                    </li>
                                    <li className="list-act-hom-con">
                                        <i className="fa fa-clock-o" aria-hidden="true"></i>
                                        <h4>
                                            <span>14 Aug, 2017</span> Day at leisure
                                        </h4>
                                        <p>
                                            There are many variations of passages of Lorem Ipsum available, but the
                                            majority have suffered alteration in some form, by injected humour.
                                        </p>
                                    </li>
                                    <li className="list-act-hom-con">
                                        <i className="fa fa-clock-o" aria-hidden="true"></i>
                                        <h4>
                                            <span>24 Sep, 2017</span> Departure
                                        </h4>
                                        <p>
                                            There are many variations of passages of Lorem Ipsum available, but the
                                            majority have suffered alteration in some form, by injected humour.
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="box-inn-sp">
                            <div className="inn-title">
                                <h4>Social Media</h4>
                                <p>Airtport Hotels The Right Way To Start A Short Break Holiday</p>
                                <a className="dropdown-button drop-down-meta" href="#" data-activates="dr-social">
                                    <i className="material-icons">more_vert</i>
                                </a>
                                <ul id="dr-social" className="dropdown-content">
                                    <li>
                                        <a href="#!">Add New</a>
                                    </li>
                                    <li>
                                        <a href="#!">Edit</a>
                                    </li>
                                    <li>
                                        <a href="#!">Update</a>
                                    </li>
                                    <li className="divider"></li>
                                    <li>
                                        <a href="#!">
                                            <i className="material-icons">delete</i>Delete
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#!">
                                            <i className="material-icons">subject</i>View All
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#!">
                                            <i className="material-icons">play_for_work</i>Download
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="tab-inn">
                                <div className="table-responsive table-desi">
                                    <table className="table table-hover">
                                        <thead>
                                            <tr>
                                                <th>Media</th>
                                                <th>Name</th>
                                                <th>Share</th>
                                                <th>Like</th>
                                                <th>Members</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <span className="list-img">
                                                        <Image src="images/sm/1.png" alt="" />
                                                    </span>
                                                </td>
                                                <td>
                                                    <span className="list-enq-name">Linked In</span>
                                                    <span className="list-enq-city">Illunois, United States</span>
                                                </td>
                                                <td>15K</td>
                                                <td>18K</td>
                                                <td>
                                                    <span className="label label-success">263</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <span className="list-img">
                                                        <Image src="images/sm/2.png" alt="" />
                                                    </span>
                                                </td>
                                                <td>
                                                    <span className="list-enq-name">Twitter</span>
                                                    <span className="list-enq-city">Illunois, United States</span>
                                                </td>
                                                <td>15K</td>
                                                <td>18K</td>
                                                <td>
                                                    <span className="label label-success">263</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <span className="list-img">
                                                        <Image src="images/sm/3.png" alt="" />
                                                    </span>
                                                </td>
                                                <td>
                                                    <span className="list-enq-name">Facebook</span>
                                                    <span className="list-enq-city">Illunois, United States</span>
                                                </td>
                                                <td>15K</td>
                                                <td>18K</td>
                                                <td>
                                                    <span className="label label-success">263</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <span className="list-img">
                                                        <Image src="images/sm/4.png" alt="" />
                                                    </span>
                                                </td>
                                                <td>
                                                    <span className="list-enq-name">Google Plus</span>
                                                    <span className="list-enq-city">Illunois, United States</span>
                                                </td>
                                                <td>15K</td>
                                                <td>18K</td>
                                                <td>
                                                    <span className="label label-success">263</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <span className="list-img">
                                                        <Image src="images/sm/5.png" alt="" />
                                                    </span>
                                                </td>
                                                <td>
                                                    <span className="list-enq-name">YouTube</span>
                                                    <span className="list-enq-city">Illunois, United States</span>
                                                </td>
                                                <td>15K</td>
                                                <td>18K</td>
                                                <td>
                                                    <span className="label label-success">263</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <span className="list-img">
                                                        <Image src="" alt="" />
                                                    </span>
                                                </td>
                                                <td>
                                                    <span className="list-enq-name">WhatsApp</span>
                                                    <span className="list-enq-city">Illunois, United States</span>
                                                </td>
                                                <td>15K</td>
                                                <td>18K</td>
                                                <td>
                                                    <span className="label label-success">263</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <span className="list-img">
                                                        <Image src="images/sm/7.png" alt="" />
                                                    </span>
                                                </td>
                                                <td>
                                                    <span className="list-enq-name">VK</span>
                                                    <span className="list-enq-city">Illunois, United States</span>
                                                </td>
                                                <td>15K</td>
                                                <td>18K</td>
                                                <td>
                                                    <span className="label label-success">263</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <span className="list-img">
                                                        <Image src="images/sm/2.png" alt="" />
                                                    </span>
                                                </td>
                                                <td>
                                                    <span className="list-enq-name">Twitter</span>
                                                    <span className="list-enq-city">Illunois, United States</span>
                                                </td>
                                                <td>15K</td>
                                                <td>18K</td>
                                                <td>
                                                    <span className="label label-success">263</span>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

            {/* <div className="sb2-2-3">
                <div className="row">
                    <div className="col-md-12">
                        <div className="box-inn-sp">
                            <div className="inn-title">
                                <h4>Google Map</h4>
                                <p>Airtport Hotels The Right Way To Start A Short Break Holiday</p>
                                <a className="dropdown-button drop-down-meta" href="#" data-activates="dr-map">
                                    <i className="material-icons">more_vert</i>
                                </a>
                                <ul id="dr-map" className="dropdown-content">
                                    <li>
                                        <a href="#!">Add New</a>
                                    </li>
                                    <li>
                                        <a href="#!">Edit</a>
                                    </li>
                                    <li>
                                        <a href="#!">Update</a>
                                    </li>
                                    <li className="divider"></li>
                                    <li>
                                        <a href="#!">
                                            <i className="material-icons">delete</i>Delete
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#!">
                                            <i className="material-icons">subject</i>View All
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#!">
                                            <i className="material-icons">play_for_work</i>Download
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="tab-inn">
                                <div className="table-responsive table-desi tab-map">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6290413.804893654!2d-93.99620524741552!3d39.66116578737809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880b2d386f6e2619%3A0x7f15825064115956!2sIllinois%2C+USA!5e0!3m2!1sen!2sin!4v1469954001005"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    );
}

export default DashBoard;
