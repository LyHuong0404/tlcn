/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable jsx-a11y/anchor-is-valid */

import { useEffect, useState } from 'react';
import { AllPayments, getReport } from '~/actions/adminActions';
import { format } from 'date-fns';
import ChartComponent from '../ChartComponent';
import { useTranslation } from 'react-i18next';

function DashBoard() {
    const { t } = useTranslation();
    const [data, setData] = useState({});
    const [payments, setPayments] = useState([]);

    useEffect(() => {
        try {
            const fetchData = async () => {
                const rs = await getReport();
                setData(rs);
            };
            fetchData();
        } catch (error) {
            console.log(error);
        }

        try {
            const fetchData = async () => {
                const rs = await AllPayments(0, 15, undefined, undefined);
                rs?.content?.map((element) => {
                    element.payDate = format(new Date(element.payDate), 'dd-MM-yyyy');
                    element.payTime = format(new Date(`2000-01-01T${element.payTime}`), 'HH:mm');
                });
                setPayments(rs?.content);
            };
            fetchData();
        } catch (error) {
            console.log(error);
        }
    }, []);

    return (
        <section>
            <div className="content dashbaord">
                <div className="in-content-wrapper">
                    <div className="row no-gutters">
                        <div className="col" style={{ display: 'flex', alignItems: 'center' }}>
                            <div className="heading-messages">
                                <h1>{t('Dashboard')}</h1>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="breadcrumb">
                                <div className="breadcrumb-item">
                                    <i className="fas fa-angle-right"></i>
                                    <a style={{ fontSize: '16px' }}>{t('Dashboard')}</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="box">
                        <div className="dashboard-wrapper">
                            <div className="row">
                                <div className="col-xl">
                                    <div className="dashboard-box">
                                        <h4>{t('Total Accounts')}</h4>
                                        <h1 className="pbh1">
                                            <i className="fas fa-briefcase pb1i" style={{fontStyle: 'normal'}}></i>
                                            {data.totalUser}
                                        </h1>
                                        <div className="progress">
                                            <div
                                                className="progress-bar pb1"
                                                role="progressbar"
                                                aria-valuenow="25"
                                                aria-valuemin="0"
                                                aria-valuemax="100"
                                            ></div>
                                        </div>
                                        {/* <p>60% Increase From Last Year</p> */}
                                    </div>
                                </div>

                                <div className="col-md">
                                    <div className="dashboard-box">
                                        <h4>{t('Total Rooms')}</h4>
                                        <h1 className="pbh3">
                                            <i className="fas fa-briefcase pb3i" style={{fontStyle: 'normal'}}></i>
                                            {data.totalRoom}
                                        </h1>
                                        <div className="progress">
                                            <div
                                                className="progress-bar pb3"
                                                role="progressbar"
                                                aria-valuenow="25"
                                                aria-valuemin="0"
                                                aria-valuemax="100"
                                            ></div>
                                        </div>
                                        {/* <p>20% Increase From Last Year</p> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br />
                        <div className="dashboard-wrapper">
                            <div className="row">
                                <div className="col-md">
                                    <div className="dashboard-box">
                                        <h4>{t('Total Payments')}</h4>
                                        <h1 className="pbh2">
                                            <i className="fas fa-briefcase pb2i" style={{fontStyle: 'normal'}}></i>
                                            {data.totalPayment}
                                        </h1>
                                        <div className="progress">
                                            <div
                                                className="progress-bar pb2"
                                                role="progressbar"
                                                aria-valuenow="25"
                                                aria-valuemin="0"
                                                aria-valuemax="100"
                                            ></div>
                                        </div>
                                        {/* <p>80% Increase From Last Year</p> */}
                                    </div>
                                </div>
                                <div className="col-xl">
                                    <div className="dashboard-box">
                                        <h4>{t('Total Appointments')}</h4>
                                        <h1 className="pbh1">
                                            <i className="fas fa-briefcase pb1i" style={{fontStyle: 'normal'}}></i>
                                            {data.totalAppointment}
                                        </h1>
                                        <div className="progress">
                                            <div
                                                className="progress-bar pb1"
                                                role="progressbar"
                                                aria-valuenow="25"
                                                aria-valuemin="0"
                                                aria-valuemax="100"
                                            ></div>
                                        </div>
                                        {/* <p>60% Increase From Last Year</p> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="charts-section box">
                            <h4>{t('Report Payments')}</h4>
                            <ChartComponent payments={payments} />
                        </div>
                        <div className="content booking-content dashboard-bookings m-0">
                            <div className="in-content-wrapper">
                                <div className="row no-gutters">
                                    <div className="col">
                                        <div className="heading-messages">
                                            <h3>{t('Payments')}</h3>
                                        </div>
                                    </div>
                                </div>

                                <div className="box">
                                    <div className="row no-gutters">
                                        <div className="col">
                                            <table
                                                id="example"
                                                className="display table-hover table-responsive-xl"
                                                style={{ width: '100%' }}
                                            >
                                                <thead style={{ height: '42px' }}>
                                                    <tr style={{ height: '51px' }}>
                                                        <th>#ID</th>
                                                        <th>Bank Code</th>
                                                        <th>TranNo</th>
                                                        <th>TransactionNo</th>
                                                        <th>{t('Date')}</th>
                                                        <th>{t('Time')}</th>
                                                        <th>{t('Amount')}</th>
                                                        <th>UserId</th>
                                                        <th>Username</th>
                                                    </tr>
                                                </thead>
                                                <tbody style={{ backgroundColor: '#f9f9f9' }}>
                                                    {payments?.map((payment, index) => (
                                                        <tr key={index} style={{ height: '51px' }}>
                                                            <td>{payment.id}</td>
                                                            <td>{payment.bankCode}</td>
                                                            <td>{payment.bankTranNo}</td>
                                                            <td>{payment.transactionNo}</td>
                                                            <td>{payment.payDate}</td>
                                                            <td>{payment.payTime}</td>
                                                            <td>{payment.amount}</td>
                                                            <td>{payment.userId}</td>
                                                            <td>{payment.username}</td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div className="box dashbaord-reviews">
                            <div className="row">
                                <div className="col">
                                    <div className="details-text">
                                        <h4>Reviews</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="reviews-body">
                                <ul>
                                    <li>
                                        <div className="media">
                                            <Image
                                                src="images/commenter-2.jpg"
                                                className="mr-1 mr-sm-3 rounded-circle"
                                                alt="..."
                                            />
                                            <div className="media-body">
                                                <h5>
                                                    Mary Luise <small>By Ms. Sara hann</small>
                                                </h5>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas null fa-star"></i>
                                                <span className="text-sm-right mb-3 float-sm-right">
                                                    January 18, 2019
                                                </span>
                                                <p>
                                                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                                                    scelerisque ante sollicitudin. Cras purus odio, vestibulum in
                                                    vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi
                                                    vulputate fringilla. Donec lacinia congue felis in faucibus.
                                                </p>

                                                <div className="media">
                                                    <a href="#">
                                                        <Image
                                                            src="images/commenter-3.jpg"
                                                            className="mr-1 mr-sm-3 rounded-circle"
                                                            alt="..."
                                                        />
                                                    </a>
                                                    <div className="media-body">
                                                        <h5>
                                                            Author <small>By R.Hujo Kelvin</small>
                                                        </h5>
                                                        <p className="text-sm-right mb-3">January 17, 2019</p>
                                                        <p>Thank you for your Support.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default DashBoard;
