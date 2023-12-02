/* eslint-disable jsx-a11y/anchor-is-valid */
import Image from '~/components/Image';
import styles from './UserList.module.scss';
import Pagination from '@mui/material/Pagination';
import Switch from 'react-switch';
import { useState } from 'react';

function UserList() {
    const [status, setStatus] = useState(false);

    const handleChangeStatus = () => {
        setStatus(!status);
    };
    return (
        <section>
            <div className="content listing-content users-list">
                <div className="in-content-wrapper">
                    <div className="row no-gutters">
                        <div className="col display-header">
                            <div className="heading-messages">
                                <h1>Users</h1>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="breadcrumb" >
                                <div className="breadcrumb-item">
                                    <i className="fas fa-angle-right"></i>
                                    <a href="#">Users</a>
                                </div>
                                <div className="breadcrumb-item active">
                                    <i className="fas fa-angle-right"></i>Users List
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="box">
                        <div className="row no-gutters">
                            <div className="col text-left">
                                <div className="add-new">
                                    <a href="/admin/adduser" >
                                        Add New<i className="fas fa-plus"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="col text-right">
                                <div className="tools-btns">
                                    <a href="#" >
                                        <i
                                            className="fas fa-print"
                                            data-toggle="tooltip"
                                            data-html="true"
                                            title="Print"
                                        ></i>
                                    </a>
                                    <a href="#" >
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
                                <div className="custom-display">
                                    <div className="dataTables_length" id="example_length">
                                        <label style={{ marginRight: '10px' }}>
                                            Show
                                            <select
                                                name="example_length"
                                                aria-controls="example"
                                                className={styles.custom_select}
                                            >
                                                <option value="10">10</option>
                                                <option value="25">25</option>
                                                <option value="50">50</option>
                                                <option value="100">100</option>
                                            </select>
                                            entries
                                        </label>
                                    </div>
                                    <div id="example_filter" className="dataTables_filter">
                                        <label>
                                            Status:
                                            <select
                                                name="example_length"
                                                aria-controls="example"
                                                className={styles.custom_status}
                                            >
                                                <option value="10">Active</option>
                                                <option value="25">Non</option>
                                            </select>
                                            Search:
                                            <input
                                                type="search"
                                                className={styles.custom_search}
                                                placeholder=""
                                                aria-controls="example"
                                            />
                                        </label>
                                    </div>
                                </div>
                                <table id="example" className="display table-hover table-responsive-xl listing">
                                    <thead>
                                        <tr>
                                            <th>Img</th>
                                            <th>#</th>
                                            <th>First Name</th>
                                            <th>Last Name</th>
                                            <th>User Name</th>
                                            <th>Email</th>
                                            <th>Phone #</th>
                                            <th>Status</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody style={{ backgroundColor: '#f9f9f9' }}>
                                        <tr>
                                            <td>
                                                <Image
                                                    src="images/car1.jpg"
                                                    alt="table-img"
                                                    className="img-fluid rounded-circle"
                                                    width="40px"
                                                />
                                            </td>
                                            <td>110</td>
                                            <td>
                                                <a href="#">John</a>
                                            </td>
                                            <td>
                                                <a href="#">Doe</a>
                                            </td>
                                            <td>Doe22145</td>
                                            <td>Doe22145@yahoo.com</td>
                                            <td>923312440</td>
                                            <td>
                                                <Switch
                                                    onChange={handleChangeStatus}
                                                    checked={status}
                                                    checkedIcon={false}
                                                    uncheckedIcon={false}
                                                    height={22}
                                                    width={50}
                                                />
                                            </td>
                                            <td>
                                                <a href="#">
                                                    <i className="fas fa-trash"></i>
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <Image
                                                    src="images/car2.jpg"
                                                    alt="table-img"
                                                    className="img-fluid rounded-circle"
                                                    width="40px"
                                                />
                                            </td>
                                            <td>120</td>
                                            <td>
                                                <a href="#">Maria</a>
                                            </td>
                                            <td>
                                                <a href="#">Ben</a>
                                            </td>
                                            <td>maria22145</td>
                                            <td>maria22145@yahoo.com</td>
                                            <td>923312440</td>
                                            <td className="expired">
                                                <a href="#">Expired</a>
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
                                            <td>
                                                <Image
                                                    src="images/car3.jpg"
                                                    alt="table-img"
                                                    className="img-fluid rounded-circle"
                                                />
                                            </td>
                                            <td>212</td>
                                            <td>
                                                <a href="#">Vensel</a>
                                            </td>
                                            <td>
                                                <a href="#">Den</a>
                                            </td>
                                            <td>vensel22145</td>
                                            <td>vensel22145@yahoo.com</td>
                                            <td>923312440</td>
                                            <td className="draft">
                                                <a href="#">Draft</a>
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
                                            <td>
                                                <Image
                                                    src="images/car1.jpg"
                                                    alt="table-img"
                                                    className="img-fluid rounded-circle"
                                                />
                                            </td>
                                            <td>214</td>
                                            <td>
                                                <a href="#">Habbil</a>
                                            </td>
                                            <td>
                                                <a href="#">Nave</a>
                                            </td>
                                            <td>habbil22145</td>
                                            <td>habbil22145@gmail.com</td>
                                            <td>923312440</td>
                                            <td className="featured">
                                                <a href="#">Featured</a>
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
                                            <td>
                                                <Image
                                                    src="images/car2.jpg"
                                                    alt="table-img"
                                                    className="img-fluid rounded-circle"
                                                    width="40px"
                                                />
                                            </td>
                                            <td>214</td>
                                            <td>
                                                <a href="#">Numan</a>
                                            </td>
                                            <td>
                                                <a href="#">Foog</a>
                                            </td>
                                            <td>foog22145</td>
                                            <td>foog22145@yahoo.com</td>
                                            <td>923312440</td>
                                            <td className="featured">
                                                <a href="#">Featured</a>
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
                                            <td>
                                                <Image
                                                    src="images/car1.jpg"
                                                    alt="table-img"
                                                    className="img-fluid rounded-circle"
                                                    width="40px"
                                                />
                                            </td>
                                            <td>110</td>
                                            <td>
                                                <a href="#">John</a>
                                            </td>
                                            <td>
                                                <a href="#">Doe</a>
                                            </td>
                                            <td>Doe22145</td>
                                            <td>Doe22145@yahoo.com</td>
                                            <td>923312440</td>
                                            <td className="active">
                                                <a href="#">Active</a>
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
                                            <td>
                                                <Image
                                                    src="images/car2.jpg"
                                                    alt="table-img"
                                                    className="img-fluid rounded-circle"
                                                    width="40px"
                                                />
                                            </td>
                                            <td>120</td>
                                            <td>
                                                <a href="#">Maria</a>
                                            </td>
                                            <td>
                                                <a href="#">Ben</a>
                                            </td>
                                            <td>maria22145</td>
                                            <td>maria22145@yahoo.com</td>
                                            <td>923312440</td>
                                            <td className="expired">
                                                <a href="#">Expired</a>
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
                                            <td>
                                                <Image
                                                    src="images/car3.jpg"
                                                    alt="table-img"
                                                    className="img-fluid rounded-circle"
                                                />
                                            </td>
                                            <td>212</td>
                                            <td>
                                                <a href="#">Vensel</a>
                                            </td>
                                            <td>
                                                <a href="#">Den</a>
                                            </td>
                                            <td>vensel22145</td>
                                            <td>vensel22145@yahoo.com</td>
                                            <td>923312440</td>
                                            <td className="draft">
                                                <a href="#">Draft</a>
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
                                            <td>
                                                <Image
                                                    src="images/car1.jpg"
                                                    alt="table-img"
                                                    className="img-fluid rounded-circle"
                                                />
                                            </td>
                                            <td>214</td>
                                            <td>
                                                <a href="#">Habbil</a>
                                            </td>
                                            <td>
                                                <a href="#">Nave</a>
                                            </td>
                                            <td>habbil22145</td>
                                            <td>habbil22145@gmail.com</td>
                                            <td>923312440</td>
                                            <td className="featured">
                                                <a href="#">Featured</a>
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
                                            <td>
                                                <Image
                                                    src="images/car2.jpg"
                                                    alt="table-img"
                                                    className="img-fluid rounded-circle"
                                                    width="40px"
                                                />
                                            </td>
                                            <td>214</td>
                                            <td>
                                                <a href="#">Numan</a>
                                            </td>
                                            <td>
                                                <a href="#">Foog</a>
                                            </td>
                                            <td>foog22145</td>
                                            <td>foog22145@yahoo.com</td>
                                            <td>923312440</td>
                                            <td className="featured">
                                                <a href="#">Featured</a>
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
                                            <td>
                                                <Image
                                                    src="images/car1.jpg"
                                                    alt="table-img"
                                                    className="img-fluid rounded-circle"
                                                    width="40px"
                                                />
                                            </td>
                                            <td>110</td>
                                            <td>
                                                <a href="#">John</a>
                                            </td>
                                            <td>
                                                <a href="#">Doe</a>
                                            </td>
                                            <td>Doe22145</td>
                                            <td>Doe22145@yahoo.com</td>
                                            <td>923312440</td>
                                            <td className="active">
                                                <a href="#">Active</a>
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
                                            <td>
                                                <Image
                                                    src="images/car2.jpg"
                                                    alt="table-img"
                                                    className="img-fluid rounded-circle"
                                                    width="40px"
                                                />
                                            </td>
                                            <td>120</td>
                                            <td>
                                                <a href="#">Maria</a>
                                            </td>
                                            <td>
                                                <a href="#">Ben</a>
                                            </td>
                                            <td>maria22145</td>
                                            <td>maria22145@yahoo.com</td>
                                            <td>923312440</td>
                                            <td className="expired">
                                                <a href="#">Expired</a>
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
                                            <td>
                                                <Image
                                                    src="images/car3.jpg"
                                                    alt="table-img"
                                                    className="img-fluid rounded-circle"
                                                />
                                            </td>
                                            <td>212</td>
                                            <td>
                                                <a href="#">Vensel</a>
                                            </td>
                                            <td>
                                                <a href="#">Den</a>
                                            </td>
                                            <td>vensel22145</td>
                                            <td>vensel22145@yahoo.com</td>
                                            <td>923312440</td>
                                            <td className="draft">
                                                <a href="#">Draft</a>
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
                                            <td>
                                                <Image
                                                    src="images/car1.jpg"
                                                    alt="table-img"
                                                    className="img-fluid rounded-circle"
                                                />
                                            </td>
                                            <td>214</td>
                                            <td>
                                                <a href="#">Habbil</a>
                                            </td>
                                            <td>
                                                <a href="#">Nave</a>
                                            </td>
                                            <td>habbil22145</td>
                                            <td>habbil22145@gmail.com</td>
                                            <td>923312440</td>
                                            <td className="featured">
                                                <a href="#">Featured</a>
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
                                            <td>
                                                <Image
                                                    src="images/car2.jpg"
                                                    alt="table-img"
                                                    className="img-fluid rounded-circle"
                                                    width="40px"
                                                />
                                            </td>
                                            <td>214</td>
                                            <td>
                                                <a href="#">Numan</a>
                                            </td>
                                            <td>
                                                <a href="#">Foog</a>
                                            </td>
                                            <td>foog22145</td>
                                            <td>foog22145@yahoo.com</td>
                                            <td>923312440</td>
                                            <td className="featured">
                                                <a href="#">Featured</a>
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
                                            <td>
                                                <Image
                                                    src="images/car1.jpg"
                                                    alt="table-img"
                                                    className="img-fluid rounded-circle"
                                                    width="40px"
                                                />
                                            </td>
                                            <td>110</td>
                                            <td>
                                                <a href="#">John</a>
                                            </td>
                                            <td>
                                                <a href="#">Doe</a>
                                            </td>
                                            <td>Doe22145</td>
                                            <td>Doe22145@yahoo.com</td>
                                            <td>923312440</td>
                                            <td className="active">
                                                <a href="#">Active</a>
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
                                            <td>
                                                <Image
                                                    src="images/car2.jpg"
                                                    alt="table-img"
                                                    className="img-fluid rounded-circle"
                                                    width="40px"
                                                />
                                            </td>
                                            <td>120</td>
                                            <td>
                                                <a href="#">Maria</a>
                                            </td>
                                            <td>
                                                <a href="#">Ben</a>
                                            </td>
                                            <td>maria22145</td>
                                            <td>maria22145@yahoo.com</td>
                                            <td>923312440</td>
                                            <td className="expired">
                                                <a href="#">Expired</a>
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
                                            <td>
                                                <Image
                                                    src="images/car3.jpg"
                                                    alt="table-img"
                                                    className="img-fluid rounded-circle"
                                                />
                                            </td>
                                            <td>212</td>
                                            <td>
                                                <a href="#">Vensel</a>
                                            </td>
                                            <td>
                                                <a href="#">Den</a>
                                            </td>
                                            <td>vensel22145</td>
                                            <td>vensel22145@yahoo.com</td>
                                            <td>923312440</td>
                                            <td className="draft">
                                                <a href="#">Draft</a>
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
                                            <td>
                                                <Image
                                                    src="images/car1.jpg"
                                                    alt="table-img"
                                                    className="img-fluid rounded-circle"
                                                />
                                            </td>
                                            <td>214</td>
                                            <td>
                                                <a href="#">Habbil</a>
                                            </td>
                                            <td>
                                                <a href="#">Nave</a>
                                            </td>
                                            <td>habbil22145</td>
                                            <td>habbil22145@gmail.com</td>
                                            <td>923312440</td>
                                            <td className="featured">
                                                <a href="#">Featured</a>
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
                                            <td>
                                                <Image
                                                    src="images/car2.jpg"
                                                    alt="table-img"
                                                    className="img-fluid rounded-circle"
                                                    width="40px"
                                                />
                                            </td>
                                            <td>214</td>
                                            <td>
                                                <a href="#">Numan</a>
                                            </td>
                                            <td>
                                                <a href="#">Foog</a>
                                            </td>
                                            <td>foog22145</td>
                                            <td>foog22145@yahoo.com</td>
                                            <td>923312440</td>
                                            <td className="featured">
                                                <a href="#">Featured</a>
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
                                            <td>
                                                <Image
                                                    src="images/car1.jpg"
                                                    alt="table-img"
                                                    className="img-fluid rounded-circle"
                                                    width="40px"
                                                />
                                            </td>
                                            <td>110</td>
                                            <td>
                                                <a href="#">John</a>
                                            </td>
                                            <td>
                                                <a href="#">Doe</a>
                                            </td>
                                            <td>Doe22145</td>
                                            <td>Doe22145@yahoo.com</td>
                                            <td>923312440</td>
                                            <td className="active">
                                                <a href="#">Active</a>
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
                                            <td>
                                                <Image
                                                    src="images/car2.jpg"
                                                    alt="table-img"
                                                    className="img-fluid rounded-circle"
                                                    width="40px"
                                                />
                                            </td>
                                            <td>120</td>
                                            <td>
                                                <a href="#">Maria</a>
                                            </td>
                                            <td>
                                                <a href="#">Ben</a>
                                            </td>
                                            <td>maria22145</td>
                                            <td>maria22145@yahoo.com</td>
                                            <td>923312440</td>
                                            <td className="expired">
                                                <a href="#">Expired</a>
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
                                            <td>
                                                <Image
                                                    src="images/car3.jpg"
                                                    alt="table-img"
                                                    className="img-fluid rounded-circle"
                                                />
                                            </td>
                                            <td>212</td>
                                            <td>
                                                <a href="#">Vensel</a>
                                            </td>
                                            <td>
                                                <a href="#">Den</a>
                                            </td>
                                            <td>vensel22145</td>
                                            <td>vensel22145@yahoo.com</td>
                                            <td>923312440</td>
                                            <td className="draft">
                                                <a href="#">Draft</a>
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
                                            <td>
                                                <Image
                                                    src="images/car1.jpg"
                                                    alt="table-img"
                                                    className="img-fluid rounded-circle"
                                                />
                                            </td>
                                            <td>214</td>
                                            <td>
                                                <a href="#">Habbil</a>
                                            </td>
                                            <td>
                                                <a href="#">Nave</a>
                                            </td>
                                            <td>habbil22145</td>
                                            <td>habbil22145@gmail.com</td>
                                            <td>923312440</td>
                                            <td className="featured">
                                                <a href="#">Featured</a>
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
                                            <td>
                                                <Image
                                                    src="images/car2.jpg"
                                                    alt="table-img"
                                                    className="img-fluid rounded-circle"
                                                    width="40px"
                                                />
                                            </td>
                                            <td>214</td>
                                            <td>
                                                <a href="#">Numan</a>
                                            </td>
                                            <td>
                                                <a href="#">Foog</a>
                                            </td>
                                            <td>foog22145</td>
                                            <td>foog22145@yahoo.com</td>
                                            <td>923312440</td>
                                            <td className="featured">
                                                <a href="#">Featured</a>
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
                                <div
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        margin: '25px 40px 40px 40px',
                                    }}
                                >
                                    <div
                                        className="dataTables_info"
                                        id="example_info"
                                        role="status"
                                        aria-live="polite"
                                        style={{ fontSize: '16px', color: '#333' }}
                                    >
                                        Showing 1 to 10 of 25 entries
                                    </div>
                                    <div className="dataTables_paginate paging_simple_numbers" id="example_paginate">
                                        <Pagination
                                            count={5}
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
                </div>
            </div>
        </section>
    );
}

export default UserList;
