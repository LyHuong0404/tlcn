/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable jsx-a11y/anchor-is-valid */

import Image from '~/components/Image';

function DashBoard() {
    return (
        <section>
            <div className="content dashbaord">
                <div className="in-content-wrapper">
                    <div className="row no-gutters">
                        <div className="col" style={{ display: 'flex', alignItems: 'center' }}>
                            <div className="heading-messages">
                                <h1>Dashboard</h1>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="breadcrumb">
                                <div className="breadcrumb-item">
                                    <i className="fas fa-angle-right"></i>
                                    <a href="#" style={{ fontSize: '16px' }}>
                                        Dashboard
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="box">
                        <div className="dashboard-wrapper">
                            <div className="row">
                                <div className="col-xl">
                                    <div className="dashboard-box">
                                        <h4>Projects Completed</h4>
                                        <h1 className="pbh1">
                                            <i className="fas fa-briefcase pb1i"></i>2400
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
                                        <p>60% Increase From Last Year</p>
                                    </div>
                                </div>
                                <div className="col-md">
                                    <div className="dashboard-box">
                                        <h4>New Bookings</h4>
                                        <h1 className="pbh2">
                                            <i className="fas fa-briefcase pb2i"></i>1010
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
                                        <p>80% Increase From Last Year</p>
                                    </div>
                                </div>
                                <div className="col-md">
                                    <div className="dashboard-box">
                                        <h4>New Orders</h4>
                                        <h1 className="pbh3">
                                            <i className="fas fa-briefcase pb3i"></i>400
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
                                        <p>20% Increase From Last Year</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="charts-section box">
                            <div className="row">
                                <div className="col-xl-6">
                                    <h4>Monthly Porgress</h4>
                                    <canvas id="myChart2" height="260"></canvas>
                                </div>
                                <div className="col-xl-6">
                                    <h4>Monthly Sales</h4>
                                    <canvas id="myChart3" height="260"></canvas>
                                </div>
                            </div>
                        </div>
                        <div className="content booking-content dashboard-bookings m-0">
                            <div className="in-content-wrapper">
                                <div className="row no-gutters">
                                    <div className="col">
                                        <div className="heading-messages">
                                            <h3>Bookings</h3>
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
                                                        <th></th>
                                                        <th>Name</th>
                                                        <th>Mobile</th>
                                                        <th>Email</th>
                                                        <th>Arrive</th>
                                                        <th>Depart</th>
                                                        <th>Booking Type</th>
                                                        <th>Status</th>
                                                        <th>Payment</th>
                                                        <th>Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody style={{ backgroundColor: '#f9f9f9' }}>
                                                    <tr style={{ height: '51px' }}>
                                                        <td>
                                                            <Image
                                                                src="images/commenter-1.jpg"
                                                                alt="table-img"
                                                                className="img-fluid rounded-circle"
                                                                width="40px"
                                                            />
                                                        </td>
                                                        <td>Shaheel</td>
                                                        <td>
                                                            <a href="#">933322221</a>
                                                        </td>
                                                        <td>
                                                            <a href="#">Shaheel@gmail.com</a>
                                                        </td>
                                                        <td>11/06/2019</td>
                                                        <td>15/06/2019</td>
                                                        <td>Hotel</td>
                                                        <td className="pending">
                                                            <a href="#">Pending</a>
                                                        </td>
                                                        <td className="unpaid">
                                                            <a href="#">UnPaid</a>
                                                        </td>
                                                        <td>
                                                            <a href="#">
                                                                <i className="fas fa-edit"></i>
                                                            </a>
                                                            <a href="#">
                                                                <i className="fas fa-trash"></i>
                                                            </a>
                                                        </td>
                                                    </tr>
                                                    <tr style={{ height: '51px' }}>
                                                        <td>
                                                            <Image
                                                                src="images/commenter-2.jpg"
                                                                alt="table-img"
                                                                className="img-fluid rounded-circle"
                                                                width="40px"
                                                            />
                                                        </td>
                                                        <td>Hunn dan</td>
                                                        <td>
                                                            <a href="#">933334442</a>
                                                        </td>
                                                        <td>
                                                            <a href="#">dan@gmail.com</a>
                                                        </td>
                                                        <td>4/06/2019</td>
                                                        <td>7/06/2019</td>
                                                        <td>Tour</td>
                                                        <td className="approved">
                                                            <a href="#">Approved</a>
                                                        </td>
                                                        <td className="paid">
                                                            <a href="#">paid</a>
                                                        </td>
                                                        <td>
                                                            <a href="#">
                                                                <i className="fas fa-edit"></i>
                                                            </a>
                                                            <a href="#">
                                                                <i className="fas fa-trash"></i>
                                                            </a>
                                                        </td>
                                                    </tr>
                                                    <tr style={{ height: '51px' }}>
                                                        <td>
                                                            <Image
                                                                src="images/commenter-3.jpg"
                                                                alt="table-img"
                                                                className="img-fluid rounded-circle"
                                                            />
                                                        </td>
                                                        <td>Mary Jane</td>
                                                        <td>
                                                            <a href="#">967835542</a>
                                                        </td>
                                                        <td>
                                                            <a href="#">Jane@gmail.com</a>
                                                        </td>
                                                        <td>8/06/2019</td>
                                                        <td>12/06/2019</td>
                                                        <td>Cruise</td>
                                                        <td className="cancelled">
                                                            <a href="#">Cancelled</a>
                                                        </td>
                                                        <td className="unpaid">
                                                            <a href="#">Unpaid</a>
                                                        </td>
                                                        <td>
                                                            <a href="#">
                                                                <i className="fas fa-edit"></i>
                                                            </a>
                                                            <a href="#">
                                                                <i className="fas fa-trash"></i>
                                                            </a>
                                                        </td>
                                                    </tr>
                                                    <tr style={{ height: '51px' }}>
                                                        <td>
                                                            <Image
                                                                src="images/commenter-3.jpg"
                                                                alt="table-img"
                                                                className="img-fluid rounded-circle"
                                                            />
                                                        </td>
                                                        <td>Foo mann</td>
                                                        <td>
                                                            <a href="#">944334442</a>
                                                        </td>
                                                        <td>
                                                            <a href="#">mann@gmail.com</a>
                                                        </td>
                                                        <td>12/06/2019</td>
                                                        <td>15/06/2019</td>
                                                        <td>Flight</td>
                                                        <td className="approved">
                                                            <a href="#">Approved</a>
                                                        </td>
                                                        <td className="paid">
                                                            <a href="#">Paid</a>
                                                        </td>
                                                        <td>
                                                            <a href="#">
                                                                <i className="fas fa-edit"></i>
                                                            </a>
                                                            <a href="#">
                                                                <i className="fas fa-trash"></i>
                                                            </a>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="box dashbaord-reviews">
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
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default DashBoard;
