/* eslint-disable jsx-a11y/anchor-is-valid */
import styles from './RoomType.module.scss';
import { Link } from 'react-router-dom';

function RoomType() {

    return (
        <section>
            <div className="content listing-content">
                <div className="in-content-wrapper">
                    <div className="row no-gutters">
                        <div className="col display-header">
                            <div className="heading-messages">
                                <h1>Room Types</h1>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="breadcrumb">
                                <div className="breadcrumb-item">
                                    <i className="fas fa-angle-right"></i>
                                    <a href="#">Listing</a>
                                </div>
                                <div className="breadcrumb-item active">
                                    <i className="fas fa-angle-right"></i>All
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="box">
                        <div className="row no-gutters">
                            <div className="col text-left">
                                <div className="add-new">
                                    <Link to="/admin/addroomtype">
                                        Add New<i className="fas fa-plus"></i>
                                    </Link>
                                </div>
                            </div>
                            <div className="col text-right">
                                <div className="tools-btns">
                                    <a href="#">
                                        <i
                                            className="fas fa-print"
                                            data-toggle="tooltip"
                                            data-html="true"
                                            title="Print"
                                        ></i>
                                    </a>
                                    <a href="#">
                                        <i
                                            className="fas fa-file-pdf"
                                            data-toggle="tooltip"
                                            data-html="true"
                                            title="Pdf"
                                        ></i>
                                    </a>
                                    <a href="#">
                                        <i
                                            className="fas fa-file-excel"
                                            data-toggle="tooltip"
                                            data-html="true"
                                            title="Excel"
                                        ></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="row no-gutters">
                            <div className="col">
                                <div
                                    id="example_filter"
                                    className="dataTables_filter"
                                    style={{ float: 'right', marginRight: '17px', marginBottom: '20px' }}
                                >
                                    <label>
                                        Search:
                                        <input type="search" className={styles.custom_search} aria-controls="example" />
                                    </label>
                                </div>

                                <table id="example" className="display table-hover table-responsive-xl listing">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Type</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody style={{ backgroundColor: '#f9f9f9' }}>
                                        <tr>
                                            <td>209</td>
                                            <td>
                                                <a href="#">Single</a>
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
                                        <tr>
                                            <td>209</td>
                                            <td>
                                                <a href="#">Single</a>
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
                                        <tr>
                                            <td>209</td>
                                            <td>
                                                <a href="#">Single</a>
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
                                        <tr>
                                            <td>209</td>
                                            <td>
                                                <a href="#">Single</a>
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
                                        <tr>
                                            <td>209</td>
                                            <td>
                                                <a href="#">Single</a>
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
        </section>
    );
}

export default RoomType;
