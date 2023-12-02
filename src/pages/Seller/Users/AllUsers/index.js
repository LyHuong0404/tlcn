/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import { Link } from 'react-router-dom';
import Image from '~/components/Image';
import Pagination from '@mui/material/Pagination';

function AllUsers() {
    return (
        <div className="sb2-2">
            <div className="sb2-2-2">
                <ul>
                    <li>
                        <Link to="/seller/dashboard">
                            <i className="fa fa-home" aria-hidden="true"></i> Home
                        </Link>
                    </li>
                    <li className="active-bre">
                        <a className="txt-none">Customers</a>
                    </li>
                    <li className="page-back">
                        <Link to="/seller/dashboard">
                            <i className="fa fa-backward" aria-hidden="true"></i> Back
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="sb2-2-3">
                <div className="row">
                    <div className="col-md-12">
                        <div className="box-inn-sp">
                            <div className="inn-title display-app-small-search">
                                <h4>Customers Listing</h4>
                                {/* <a className="dropdown-button drop-down-meta" href="#" data-activates="dr-users">
                                    <i className="material-icons">more_vert</i>
                                </a>
                                <ul id="dr-users" className="dropdown-content">
                                    <li>
                                        <a href="user-add.html">Add New</a>
                                    </li>
                                    <li>
                                        <a href="user-edit.html">Edit</a>
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
                                        <a href="user-view.html">
                                            <i className="material-icons">subject</i>View All
                                        </a>
                                    </li>
                                </ul> */}
                                {/* <div className="col-md-6 col-sm-6 mob-hide"> */}
                                <form className="app-small-search">
                                    <input type="text" placeholder="Search..." className="form-control" />
                                    <a href="#">
                                        <i className="fa fa-search"></i>
                                    </a>
                                </form>
                                {/* </div> */}
                            </div>
                            <div className="tab-inn">
                                <div className="table-responsive table-desi">
                                    <table className="table table-hover custom">
                                        <thead>
                                            <tr>
                                                <th>User</th>
                                                <th>Name</th>
                                                <th>Phone</th>
                                                <th>Email</th>
                                                <th>Country</th>
                                                <th>Listings</th>
                                                <th>View</th>
                                                <th>Edit</th>
                                                <th>Delete</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <span className="list-img">
                                                        <Image src="images/user/1.png" alt="" />
                                                    </span>
                                                </td>
                                                <td>
                                                    <a href="#">
                                                        <span className="list-enq-name">Marsha Hogan</span>
                                                        <span className="list-enq-city">Illunois, United States</span>
                                                    </a>
                                                </td>
                                                <td>+01 3214 6522</td>
                                                <td>chadengle@dummy.com</td>
                                                <td>Australia</td>
                                                <td>
                                                    <span className="label label-primary">02</span>
                                                </td>
                                                <td>
                                                    <Link to="/seller/viewcustomer">
                                                        <i className="fa fa-eye" aria-hidden="true"></i>
                                                    </Link>
                                                </td>
                                                <td>
                                                    <a href="user-edit.html">
                                                        <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                                                    </a>
                                                </td>
                                                <td>
                                                    <a href="#">
                                                        <i className="fa fa-trash-o" aria-hidden="true"></i>
                                                    </a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <span className="list-img">
                                                        <Image src="images/user/2.png" alt="" />
                                                    </span>
                                                </td>
                                                <td>
                                                    <a href="#">
                                                        <span className="list-enq-name">Marsha Hogan</span>
                                                        <span className="list-enq-city">Illunois, United States</span>
                                                    </a>
                                                </td>
                                                <td>+01 3214 6522</td>
                                                <td>chadengle@dummy.com</td>
                                                <td>Australia</td>
                                                <td>
                                                    <span className="label label-primary">02</span>
                                                </td>
                                                <td>
                                                    <a href="user-view.html">
                                                        <i className="fa fa-eye" aria-hidden="true"></i>
                                                    </a>
                                                </td>
                                                <td>
                                                    <a href="user-edit.html">
                                                        <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                                                    </a>
                                                </td>
                                                <td>
                                                    <a href="#">
                                                        <i className="fa fa-trash-o" aria-hidden="true"></i>
                                                    </a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <span className="list-img">
                                                        <Image src="images/user/3.png" alt="" />
                                                    </span>
                                                </td>
                                                <td>
                                                    <a href="#">
                                                        <span className="list-enq-name">Marsha Hogan</span>
                                                        <span className="list-enq-city">Illunois, United States</span>
                                                    </a>
                                                </td>
                                                <td>+01 3214 6522</td>
                                                <td>chadengle@dummy.com</td>
                                                <td>Australia</td>
                                                <td>
                                                    <span className="label label-primary">02</span>
                                                </td>
                                                <td>
                                                    <a href="user-view.html">
                                                        <i className="fa fa-eye" aria-hidden="true"></i>
                                                    </a>
                                                </td>
                                                <td>
                                                    <a href="user-edit.html">
                                                        <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                                                    </a>
                                                </td>
                                                <td>
                                                    <a href="#">
                                                        <i className="fa fa-trash-o" aria-hidden="true"></i>
                                                    </a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <span className="list-img">
                                                        <Image src="images/user/4.png" alt="" />
                                                    </span>
                                                </td>
                                                <td>
                                                    <a href="#">
                                                        <span className="list-enq-name">Marsha Hogan</span>
                                                        <span className="list-enq-city">Illunois, United States</span>
                                                    </a>
                                                </td>
                                                <td>+01 3214 6522</td>
                                                <td>chadengle@dummy.com</td>
                                                <td>Australia</td>
                                                <td>
                                                    <span className="label label-primary">02</span>
                                                </td>
                                                <td>
                                                    <a href="user-view.html">
                                                        <i className="fa fa-eye" aria-hidden="true"></i>
                                                    </a>
                                                </td>
                                                <td>
                                                    <a href="user-edit.html">
                                                        <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                                                    </a>
                                                </td>
                                                <td>
                                                    <a href="#">
                                                        <i className="fa fa-trash-o" aria-hidden="true"></i>
                                                    </a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <span className="list-img">
                                                        <Image src="images/user/5.png" alt="" />
                                                    </span>
                                                </td>
                                                <td>
                                                    <a href="#">
                                                        <span className="list-enq-name">Marsha Hogan</span>
                                                        <span className="list-enq-city">Illunois, United States</span>
                                                    </a>
                                                </td>
                                                <td>+01 3214 6522</td>
                                                <td>chadengle@dummy.com</td>
                                                <td>Australia</td>
                                                <td>
                                                    <span className="label label-primary">02</span>
                                                </td>
                                                <td>
                                                    <a href="user-view.html">
                                                        <i className="fa fa-eye" aria-hidden="true"></i>
                                                    </a>
                                                </td>
                                                <td>
                                                    <a href="user-edit.html">
                                                        <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                                                    </a>
                                                </td>
                                                <td>
                                                    <a href="#">
                                                        <i className="fa fa-trash-o" aria-hidden="true"></i>
                                                    </a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <span className="list-img">
                                                        <Image src="" alt="" />
                                                    </span>
                                                </td>
                                                <td>
                                                    <a href="#">
                                                        <span className="list-enq-name">Marsha Hogan</span>
                                                        <span className="list-enq-city">Illunois, United States</span>
                                                    </a>
                                                </td>
                                                <td>+01 3214 6522</td>
                                                <td>chadengle@dummy.com</td>
                                                <td>Australia</td>
                                                <td>
                                                    <span className="label label-primary">02</span>
                                                </td>
                                                <td>
                                                    <a href="user-view.html">
                                                        <i className="fa fa-eye" aria-hidden="true"></i>
                                                    </a>
                                                </td>
                                                <td>
                                                    <a href="user-edit.html">
                                                        <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                                                    </a>
                                                </td>
                                                <td>
                                                    <a href="#">
                                                        <i className="fa fa-trash-o" aria-hidden="true"></i>
                                                    </a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <span className="list-img">
                                                        <Image src="images/user/1.png" alt="" />
                                                    </span>
                                                </td>
                                                <td>
                                                    <a href="#">
                                                        <span className="list-enq-name">Marsha Hogan</span>
                                                        <span className="list-enq-city">Illunois, United States</span>
                                                    </a>
                                                </td>
                                                <td>+01 3214 6522</td>
                                                <td>chadengle@dummy.com</td>
                                                <td>Australia</td>
                                                <td>
                                                    <span className="label label-primary">02</span>
                                                </td>
                                                <td>
                                                    <a href="user-view.html">
                                                        <i className="fa fa-eye" aria-hidden="true"></i>
                                                    </a>
                                                </td>
                                                <td>
                                                    <a href="user-edit.html">
                                                        <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                                                    </a>
                                                </td>
                                                <td>
                                                    <a href="#">
                                                        <i className="fa fa-trash-o" aria-hidden="true"></i>
                                                    </a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <span className="list-img">
                                                        <Image src="images/user/2.png" alt="" />
                                                    </span>
                                                </td>
                                                <td>
                                                    <a href="#">
                                                        <span className="list-enq-name">Marsha Hogan</span>
                                                        <span className="list-enq-city">Illunois, United States</span>
                                                    </a>
                                                </td>
                                                <td>+01 3214 6522</td>
                                                <td>chadengle@dummy.com</td>
                                                <td>Australia</td>
                                                <td>
                                                    <span className="label label-primary">02</span>
                                                </td>
                                                <td>
                                                    <a href="user-view.html">
                                                        <i className="fa fa-eye" aria-hidden="true"></i>
                                                    </a>
                                                </td>
                                                <td>
                                                    <a href="user-edit.html">
                                                        <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                                                    </a>
                                                </td>
                                                <td>
                                                    <a href="#">
                                                        <i className="fa fa-trash-o" aria-hidden="true"></i>
                                                    </a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <span className="list-img">
                                                        <Image src="images/user/1.png" alt="" />
                                                    </span>
                                                </td>
                                                <td>
                                                    <a href="#">
                                                        <span className="list-enq-name">Marsha Hogan</span>
                                                        <span className="list-enq-city">Illunois, United States</span>
                                                    </a>
                                                </td>
                                                <td>+01 3214 6522</td>
                                                <td>chadengle@dummy.com</td>
                                                <td>Australia</td>
                                                <td>
                                                    <span className="label label-primary">02</span>
                                                </td>
                                                <td>
                                                    <a href="user-view.html">
                                                        <i className="fa fa-eye" aria-hidden="true"></i>
                                                    </a>
                                                </td>
                                                <td>
                                                    <a href="user-edit.html">
                                                        <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                                                    </a>
                                                </td>
                                                <td>
                                                    <a href="#">
                                                        <i className="fa fa-trash-o" aria-hidden="true"></i>
                                                    </a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <span className="list-img">
                                                        <Image src="images/user/3.png" alt="" />
                                                    </span>
                                                </td>
                                                <td>
                                                    <a href="#">
                                                        <span className="list-enq-name">Marsha Hogan</span>
                                                        <span className="list-enq-city">Illunois, United States</span>
                                                    </a>
                                                </td>
                                                <td>+01 3214 6522</td>
                                                <td>chadengle@dummy.com</td>
                                                <td>Australia</td>
                                                <td>
                                                    <span className="label label-primary">02</span>
                                                </td>
                                                <td>
                                                    <a href="user-view.html">
                                                        <i className="fa fa-eye" aria-hidden="true"></i>
                                                    </a>
                                                </td>
                                                <td>
                                                    <a href="user-edit.html">
                                                        <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                                                    </a>
                                                </td>
                                                <td>
                                                    <a href="#">
                                                        <i className="fa fa-trash-o" aria-hidden="true"></i>
                                                    </a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <span className="list-img">
                                                        <Image src="images/user/4.png" alt="" />
                                                    </span>
                                                </td>
                                                <td>
                                                    <a href="#">
                                                        <span className="list-enq-name">Marsha Hogan</span>
                                                        <span className="list-enq-city">Illunois, United States</span>
                                                    </a>
                                                </td>
                                                <td>+01 3214 6522</td>
                                                <td>chadengle@dummy.com</td>
                                                <td>Australia</td>
                                                <td>
                                                    <span className="label label-primary">02</span>
                                                </td>
                                                <td>
                                                    <a href="user-view.html">
                                                        <i className="fa fa-eye" aria-hidden="true"></i>
                                                    </a>
                                                </td>
                                                <td>
                                                    <a href="user-edit.html">
                                                        <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                                                    </a>
                                                </td>
                                                <td>
                                                    <a href="#">
                                                        <i className="fa fa-trash-o" aria-hidden="true"></i>
                                                    </a>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <Pagination
                                count={5}
                                variant="outlined"
                                color="primary"
                                sx={{
                                    '& .MuiPaginationItem-page': {
                                        fontSize: '14px',
                                    },
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AllUsers;
