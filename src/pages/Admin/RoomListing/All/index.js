/* eslint-disable jsx-a11y/anchor-is-valid */
import Image from '~/components/Image';
import Switch from 'react-switch';
import { useState } from 'react';
import styles from './All.module.scss';

function All() {
    const [status, setStatus] = useState(false);

    const handleChangeStatus = () => {
        setStatus(!status);
    };
    return (
        <section>
            <div className="content listing-content">
                <div className="in-content-wrapper">
                    <div className="row no-gutters">
                        <div className="col display-header">
                            <div className="heading-messages">
                                <h1>Hotel Listing</h1>
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
                                    <a href="listing-hotel-create.html">
                                        Add New<i className="fas fa-plus"></i>
                                    </a>
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
                                            <th>Type</th>
                                            <th>AC/Non AC</th>
                                            <th>Meal</th>
                                            <th>Capacity</th>
                                            <th>Status</th>
                                            <th>Phone</th>
                                            <th>Rent</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody style={{ backgroundColor: '#f9f9f9' }}>
                                        <tr>
                                            <td>
                                                <Image
                                                    src="images/hotel3.jpg"
                                                    alt="table-img"
                                                    className="img-fluid rounded-circle"
                                                    width="40px"
                                                />
                                            </td>
                                            <td>209</td>
                                            <td>
                                                <a href="#">Single</a>
                                            </td>
                                            <td>
                                                <a href="#">AC</a>
                                            </td>
                                            <td>Free Dinner</td>
                                            <td>1</td>
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
                                            <td>12312335</td>
                                            <td>30$</td>
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
                                                    src="images/hotel2.jpg"
                                                    alt="table-img"
                                                    className="img-fluid rounded-circle"
                                                    width="40px"
                                                />
                                            </td>
                                            <td>209</td>
                                            <td>
                                                <a href="#">Double</a>
                                            </td>
                                            <td>
                                                <a href="#">AC</a>
                                            </td>
                                            <td>Free Lunch</td>
                                            <td>4</td>
                                            <td className="expired">
                                                <a href="#">Expired</a>
                                            </td>
                                            <td>12312335</td>
                                            <td>45$</td>
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
                                                    src="images/hotel1.jpg"
                                                    alt="table-img"
                                                    className="img-fluid rounded-circle"
                                                />
                                            </td>
                                            <td>212</td>
                                            <td>
                                                <a href="#">Double</a>
                                            </td>
                                            <td>
                                                <a href="#">Non-AC</a>
                                            </td>
                                            <td>Free Lunch</td>
                                            <td>4</td>
                                            <td className="draft">
                                                <a href="#">Draft</a>
                                            </td>
                                            <td>12312335</td>
                                            <td>25$</td>
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
                                                    src="images/hotel4.jpg"
                                                    alt="table-img"
                                                    className="img-fluid rounded-circle"
                                                />
                                            </td>
                                            <td>214</td>
                                            <td>
                                                <a href="#">Single</a>
                                            </td>
                                            <td>
                                                <a href="#">AC</a>
                                            </td>
                                            <td>Free Dinner</td>
                                            <td>1</td>
                                            <td className="featured">
                                                <a href="#">Featured</a>
                                            </td>
                                            <td>12312335</td>
                                            <td>50$</td>
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
                                                    src="images/hotel4.jpg"
                                                    alt="table-img"
                                                    className="img-fluid rounded-circle"
                                                    width="40px"
                                                />
                                            </td>
                                            <td>214</td>
                                            <td>
                                                <a href="#">Double</a>
                                            </td>
                                            <td>
                                                <a href="#">Non-AC</a>
                                            </td>
                                            <td>Free Lunch</td>
                                            <td>2</td>
                                            <td className="featured">
                                                <a href="#">Featured</a>
                                            </td>
                                            <td>12312335</td>
                                            <td>40$</td>
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
                                                    src="images/hotel3.jpg"
                                                    alt="table-img"
                                                    className="img-fluid rounded-circle"
                                                    width="40px"
                                                />
                                            </td>
                                            <td>214</td>
                                            <td>
                                                <a href="#">Single</a>
                                            </td>
                                            <td>
                                                <a href="#">AC</a>
                                            </td>
                                            <td>Free Dinner</td>
                                            <td>2</td>
                                            <td className="active">
                                                <a href="#">Active</a>
                                            </td>
                                            <td>12312335</td>
                                            <td>25$</td>
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
                                                    src="images/hotel3.jpg"
                                                    alt="table-img"
                                                    className="img-fluid rounded-circle"
                                                    width="40px"
                                                />
                                            </td>
                                            <td>209</td>
                                            <td>
                                                <a href="#">Single</a>
                                            </td>
                                            <td>
                                                <a href="#">AC</a>
                                            </td>
                                            <td>Free Dinner</td>
                                            <td>1</td>
                                            <td className="active">
                                                <a href="#">Active</a>
                                            </td>
                                            <td>12312335</td>
                                            <td>30$</td>
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
                                                    src="images/hotel2.jpg"
                                                    alt="table-img"
                                                    className="img-fluid rounded-circle"
                                                    width="40px"
                                                />
                                            </td>
                                            <td>209</td>
                                            <td>
                                                <a href="#">Double</a>
                                            </td>
                                            <td>
                                                <a href="#">AC</a>
                                            </td>
                                            <td>Free Lunch</td>
                                            <td>4</td>
                                            <td className="expired">
                                                <a href="#">Expired</a>
                                            </td>
                                            <td>12312335</td>
                                            <td>45$</td>
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
                                                    src="images/hotel1.jpg"
                                                    alt="table-img"
                                                    className="img-fluid rounded-circle"
                                                />
                                            </td>
                                            <td>212</td>
                                            <td>
                                                <a href="#">Double</a>
                                            </td>
                                            <td>
                                                <a href="#">Non-AC</a>
                                            </td>
                                            <td>Free Lunch</td>
                                            <td>4</td>
                                            <td className="draft">
                                                <a href="#">Draft</a>
                                            </td>
                                            <td>12312335</td>
                                            <td>25$</td>
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
                                                    src="images/hotel4.jpg"
                                                    alt="table-img"
                                                    className="img-fluid rounded-circle"
                                                />
                                            </td>
                                            <td>214</td>
                                            <td>
                                                <a href="#">Single</a>
                                            </td>
                                            <td>
                                                <a href="#">AC</a>
                                            </td>
                                            <td>Free Dinner</td>
                                            <td>1</td>
                                            <td className="featured">
                                                <a href="#">Featured</a>
                                            </td>
                                            <td>12312335</td>
                                            <td>50$</td>
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
                                                    src="images/hotel4.jpg"
                                                    alt="table-img"
                                                    className="img-fluid rounded-circle"
                                                    width="40px"
                                                />
                                            </td>
                                            <td>214</td>
                                            <td>
                                                <a href="#">Double</a>
                                            </td>
                                            <td>
                                                <a href="#">Non-AC</a>
                                            </td>
                                            <td>Free Lunch</td>
                                            <td>2</td>
                                            <td className="featured">
                                                <a href="#">Featured</a>
                                            </td>
                                            <td>12312335</td>
                                            <td>40$</td>
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
                                                    src="images/hotel3.jpg"
                                                    alt="table-img"
                                                    className="img-fluid rounded-circle"
                                                    width="40px"
                                                />
                                            </td>
                                            <td>214</td>
                                            <td>
                                                <a href="#">Single</a>
                                            </td>
                                            <td>
                                                <a href="#">AC</a>
                                            </td>
                                            <td>Free Dinner</td>
                                            <td>2</td>
                                            <td className="active">
                                                <a href="#">Active</a>
                                            </td>
                                            <td>12312335</td>
                                            <td>25$</td>
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
                                                    src="images/hotel3.jpg"
                                                    alt="table-img"
                                                    className="img-fluid rounded-circle"
                                                    width="40px"
                                                />
                                            </td>
                                            <td>209</td>
                                            <td>
                                                <a href="#">Single</a>
                                            </td>
                                            <td>
                                                <a href="#">AC</a>
                                            </td>
                                            <td>Free Dinner</td>
                                            <td>1</td>
                                            <td className="active">
                                                <a href="#">Active</a>
                                            </td>
                                            <td>12312335</td>
                                            <td>30$</td>
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
                                                    src="images/hotel2.jpg"
                                                    alt="table-img"
                                                    className="img-fluid rounded-circle"
                                                    width="40px"
                                                />
                                            </td>
                                            <td>209</td>
                                            <td>
                                                <a href="#">Double</a>
                                            </td>
                                            <td>
                                                <a href="#">AC</a>
                                            </td>
                                            <td>Free Lunch</td>
                                            <td>4</td>
                                            <td className="expired">
                                                <a href="#">Expired</a>
                                            </td>
                                            <td>12312335</td>
                                            <td>45$</td>
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
                                                    src="images/hotel1.jpg"
                                                    alt="table-img"
                                                    className="img-fluid rounded-circle"
                                                />
                                            </td>
                                            <td>212</td>
                                            <td>
                                                <a href="#">Double</a>
                                            </td>
                                            <td>
                                                <a href="#">Non-AC</a>
                                            </td>
                                            <td>Free Lunch</td>
                                            <td>4</td>
                                            <td className="draft">
                                                <a href="#">Draft</a>
                                            </td>
                                            <td>12312335</td>
                                            <td>25$</td>
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
                                                    src="images/hotel4.jpg"
                                                    alt="table-img"
                                                    className="img-fluid rounded-circle"
                                                />
                                            </td>
                                            <td>214</td>
                                            <td>
                                                <a href="#">Single</a>
                                            </td>
                                            <td>
                                                <a href="#">AC</a>
                                            </td>
                                            <td>Free Dinner</td>
                                            <td>1</td>
                                            <td className="featured">
                                                <a href="#">Featured</a>
                                            </td>
                                            <td>12312335</td>
                                            <td>50$</td>
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
                                                    src="images/hotel4.jpg"
                                                    alt="table-img"
                                                    className="img-fluid rounded-circle"
                                                    width="40px"
                                                />
                                            </td>
                                            <td>214</td>
                                            <td>
                                                <a href="#">Double</a>
                                            </td>
                                            <td>
                                                <a href="#">Non-AC</a>
                                            </td>
                                            <td>Free Lunch</td>
                                            <td>2</td>
                                            <td className="featured">
                                                <a href="#">Featured</a>
                                            </td>
                                            <td>12312335</td>
                                            <td>40$</td>
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
                                                    src="images/hotel3.jpg"
                                                    alt="table-img"
                                                    className="img-fluid rounded-circle"
                                                    width="40px"
                                                />
                                            </td>
                                            <td>214</td>
                                            <td>
                                                <a href="#">Single</a>
                                            </td>
                                            <td>
                                                <a href="#">AC</a>
                                            </td>
                                            <td>Free Dinner</td>
                                            <td>2</td>
                                            <td className="active">
                                                <a href="#">Active</a>
                                            </td>
                                            <td>12312335</td>
                                            <td>25$</td>
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
                                                    src="images/hotel3.jpg"
                                                    alt="table-img"
                                                    className="img-fluid rounded-circle"
                                                    width="40px"
                                                />
                                            </td>
                                            <td>209</td>
                                            <td>
                                                <a href="#">Single</a>
                                            </td>
                                            <td>
                                                <a href="#">AC</a>
                                            </td>
                                            <td>Free Dinner</td>
                                            <td>1</td>
                                            <td className="active">
                                                <a href="#">Active</a>
                                            </td>
                                            <td>12312335</td>
                                            <td>30$</td>
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
                                                    src="images/hotel2.jpg"
                                                    alt="table-img"
                                                    className="img-fluid rounded-circle"
                                                    width="40px"
                                                />
                                            </td>
                                            <td>209</td>
                                            <td>
                                                <a href="#">Double</a>
                                            </td>
                                            <td>
                                                <a href="#">AC</a>
                                            </td>
                                            <td>Free Lunch</td>
                                            <td>4</td>
                                            <td className="expired">
                                                <a href="#">Expired</a>
                                            </td>
                                            <td>12312335</td>
                                            <td>45$</td>
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
                                                    src="images/hotel1.jpg"
                                                    alt="table-img"
                                                    className="img-fluid rounded-circle"
                                                />
                                            </td>
                                            <td>212</td>
                                            <td>
                                                <a href="#">Double</a>
                                            </td>
                                            <td>
                                                <a href="#">Non-AC</a>
                                            </td>
                                            <td>Free Lunch</td>
                                            <td>4</td>
                                            <td className="draft">
                                                <a href="#">Draft</a>
                                            </td>
                                            <td>12312335</td>
                                            <td>25$</td>
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
                                                    src="images/hotel4.jpg"
                                                    alt="table-img"
                                                    className="img-fluid rounded-circle"
                                                />
                                            </td>
                                            <td>214</td>
                                            <td>
                                                <a href="#">Single</a>
                                            </td>
                                            <td>
                                                <a href="#">AC</a>
                                            </td>
                                            <td>Free Dinner</td>
                                            <td>1</td>
                                            <td className="featured">
                                                <a href="#">Featured</a>
                                            </td>
                                            <td>12312335</td>
                                            <td>50$</td>
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
                                                    src="images/hotel4.jpg"
                                                    alt="table-img"
                                                    className="img-fluid rounded-circle"
                                                    width="40px"
                                                />
                                            </td>
                                            <td>214</td>
                                            <td>
                                                <a href="#">Double</a>
                                            </td>
                                            <td>
                                                <a href="#">Non-AC</a>
                                            </td>
                                            <td>Free Lunch</td>
                                            <td>2</td>
                                            <td className="featured">
                                                <a href="#">Featured</a>
                                            </td>
                                            <td>12312335</td>
                                            <td>40$</td>
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
                                                    src="images/hotel3.jpg"
                                                    alt="table-img"
                                                    className="img-fluid rounded-circle"
                                                    width="40px"
                                                />
                                            </td>
                                            <td>214</td>
                                            <td>
                                                <a href="#">Single</a>
                                            </td>
                                            <td>
                                                <a href="#">AC</a>
                                            </td>
                                            <td>Free Dinner</td>
                                            <td>2</td>
                                            <td className="active">
                                                <a href="#">Active</a>
                                            </td>
                                            <td>12312335</td>
                                            <td>25$</td>
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
                                                    src="images/hotel3.jpg"
                                                    alt="table-img"
                                                    className="img-fluid rounded-circle"
                                                    width="40px"
                                                />
                                            </td>
                                            <td>209</td>
                                            <td>
                                                <a href="#">Single</a>
                                            </td>
                                            <td>
                                                <a href="#">AC</a>
                                            </td>
                                            <td>Free Dinner</td>
                                            <td>1</td>
                                            <td className="active">
                                                <a href="#">Active</a>
                                            </td>
                                            <td>12312335</td>
                                            <td>30$</td>
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
                                                    src="images/hotel2.jpg"
                                                    alt="table-img"
                                                    className="img-fluid rounded-circle"
                                                    width="40px"
                                                />
                                            </td>
                                            <td>209</td>
                                            <td>
                                                <a href="#">Double</a>
                                            </td>
                                            <td>
                                                <a href="#">AC</a>
                                            </td>
                                            <td>Free Lunch</td>
                                            <td>4</td>
                                            <td className="expired">
                                                <a href="#">Expired</a>
                                            </td>
                                            <td>12312335</td>
                                            <td>45$</td>
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
                                                    src="images/hotel1.jpg"
                                                    alt="table-img"
                                                    className="img-fluid rounded-circle"
                                                />
                                            </td>
                                            <td>212</td>
                                            <td>
                                                <a href="#">Double</a>
                                            </td>
                                            <td>
                                                <a href="#">Non-AC</a>
                                            </td>
                                            <td>Free Lunch</td>
                                            <td>4</td>
                                            <td className="draft">
                                                <a href="#">Draft</a>
                                            </td>
                                            <td>12312335</td>
                                            <td>25$</td>
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
                                                    src="images/hotel4.jpg"
                                                    alt="table-img"
                                                    className="img-fluid rounded-circle"
                                                />
                                            </td>
                                            <td>214</td>
                                            <td>
                                                <a href="#">Single</a>
                                            </td>
                                            <td>
                                                <a href="#">AC</a>
                                            </td>
                                            <td>Free Dinner</td>
                                            <td>1</td>
                                            <td className="featured">
                                                <a href="#">Featured</a>
                                            </td>
                                            <td>12312335</td>
                                            <td>50$</td>
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
                                                    src="images/hotel4.jpg"
                                                    alt="table-img"
                                                    className="img-fluid rounded-circle"
                                                    width="40px"
                                                />
                                            </td>
                                            <td>214</td>
                                            <td>
                                                <a href="#">Double</a>
                                            </td>
                                            <td>
                                                <a href="#">Non-AC</a>
                                            </td>
                                            <td>Free Lunch</td>
                                            <td>2</td>
                                            <td className="featured">
                                                <a href="#">Featured</a>
                                            </td>
                                            <td>12312335</td>
                                            <td>40$</td>
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
                                                    src="images/hotel3.jpg"
                                                    alt="table-img"
                                                    className="img-fluid rounded-circle"
                                                    width="40px"
                                                />
                                            </td>
                                            <td>214</td>
                                            <td>
                                                <a href="#">Single</a>
                                            </td>
                                            <td>
                                                <a href="#">AC</a>
                                            </td>
                                            <td>Free Dinner</td>
                                            <td>2</td>
                                            <td className="active">
                                                <a href="#">Active</a>
                                            </td>
                                            <td>12312335</td>
                                            <td>25$</td>
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
                                                    src="images/hotel3.jpg"
                                                    alt="table-img"
                                                    className="img-fluid rounded-circle"
                                                    width="40px"
                                                />
                                            </td>
                                            <td>209</td>
                                            <td>
                                                <a href="#">Single</a>
                                            </td>
                                            <td>
                                                <a href="#">AC</a>
                                            </td>
                                            <td>Free Dinner</td>
                                            <td>1</td>
                                            <td className="active">
                                                <a href="#">Active</a>
                                            </td>
                                            <td>12312335</td>
                                            <td>30$</td>
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
                                                    src="images/hotel2.jpg"
                                                    alt="table-img"
                                                    className="img-fluid rounded-circle"
                                                    width="40px"
                                                />
                                            </td>
                                            <td>209</td>
                                            <td>
                                                <a href="#">Double</a>
                                            </td>
                                            <td>
                                                <a href="#">AC</a>
                                            </td>
                                            <td>Free Lunch</td>
                                            <td>4</td>
                                            <td className="expired">
                                                <a href="#">Expired</a>
                                            </td>
                                            <td>12312335</td>
                                            <td>45$</td>
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
                                                    src="images/hotel1.jpg"
                                                    alt="table-img"
                                                    className="img-fluid rounded-circle"
                                                />
                                            </td>
                                            <td>212</td>
                                            <td>
                                                <a href="#">Double</a>
                                            </td>
                                            <td>
                                                <a href="#">Non-AC</a>
                                            </td>
                                            <td>Free Lunch</td>
                                            <td>4</td>
                                            <td className="draft">
                                                <a href="#">Draft</a>
                                            </td>
                                            <td>12312335</td>
                                            <td>25$</td>
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
                                                    src="images/hotel4.jpg"
                                                    alt="table-img"
                                                    className="img-fluid rounded-circle"
                                                />
                                            </td>
                                            <td>214</td>
                                            <td>
                                                <a href="#">Single</a>
                                            </td>
                                            <td>
                                                <a href="#">AC</a>
                                            </td>
                                            <td>Free Dinner</td>
                                            <td>1</td>
                                            <td className="featured">
                                                <a href="#">Featured</a>
                                            </td>
                                            <td>12312335</td>
                                            <td>50$</td>
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
                                                    src="images/hotel4.jpg"
                                                    alt="table-img"
                                                    className="img-fluid rounded-circle"
                                                    width="40px"
                                                />
                                            </td>
                                            <td>214</td>
                                            <td>
                                                <a href="#">Double</a>
                                            </td>
                                            <td>
                                                <a href="#">Non-AC</a>
                                            </td>
                                            <td>Free Lunch</td>
                                            <td>2</td>
                                            <td className="featured">
                                                <a href="#">Featured</a>
                                            </td>
                                            <td>12312335</td>
                                            <td>40$</td>
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
                                                    src="images/hotel3.jpg"
                                                    alt="table-img"
                                                    className="img-fluid rounded-circle"
                                                    width="40px"
                                                />
                                            </td>
                                            <td>214</td>
                                            <td>
                                                <a href="#">Single</a>
                                            </td>
                                            <td>
                                                <a href="#">AC</a>
                                            </td>
                                            <td>Free Dinner</td>
                                            <td>2</td>
                                            <td className="active">
                                                <a href="#">Active</a>
                                            </td>
                                            <td>12312335</td>
                                            <td>25$</td>
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

export default All;
