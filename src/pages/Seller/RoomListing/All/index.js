/* eslint-disable jsx-a11y/anchor-is-valid */
import Image from '~/components/Image';

function All() {
    return (
        <section>
            <div className="content listing-content">
                <div className="in-content-wrapper">
                    <div className="row no-gutters">
                        <div className="col">
                            <div className="heading-messages">
                                <h3>Room Listing</h3>
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
                                    <tbody>
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
                                                    <i className="fas fa-trash-alt"></i>
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
                                                    <i className="fas fa-trash-alt"></i>
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
                                                    <i className="fas fa-trash-alt"></i>
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
                                                    <i className="fas fa-trash-alt"></i>
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
                                                    <i className="fas fa-trash-alt"></i>
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
                                                    <i className="fas fa-trash-alt"></i>
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
                                                    <i className="fas fa-trash-alt"></i>
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
                                                    <i className="fas fa-trash-alt"></i>
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
                                                    <i className="fas fa-trash-alt"></i>
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
                                                    <i className="fas fa-trash-alt"></i>
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
                                                    <i className="fas fa-trash-alt"></i>
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
                                                    <i className="fas fa-trash-alt"></i>
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
                                                    <i className="fas fa-trash-alt"></i>
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
                                                    <i className="fas fa-trash-alt"></i>
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
                                                    <i className="fas fa-trash-alt"></i>
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
                                                    <i className="fas fa-trash-alt"></i>
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
                                                    <i className="fas fa-trash-alt"></i>
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
                                                    <i className="fas fa-trash-alt"></i>
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
                                                    <i className="fas fa-trash-alt"></i>
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
                                                    <i className="fas fa-trash-alt"></i>
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
                                                    <i className="fas fa-trash-alt"></i>
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
                                                    <i className="fas fa-trash-alt"></i>
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
                                                    <i className="fas fa-trash-alt"></i>
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
                                                    <i className="fas fa-trash-alt"></i>
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
                                                    <i className="fas fa-trash-alt"></i>
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
                                                    <i className="fas fa-trash-alt"></i>
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
                                                    <i className="fas fa-trash-alt"></i>
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
                                                    <i className="fas fa-trash-alt"></i>
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
                                                    <i className="fas fa-trash-alt"></i>
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
                                                    <i className="fas fa-trash-alt"></i>
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
                                                    <i className="fas fa-trash-alt"></i>
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
                                                    <i className="fas fa-trash-alt"></i>
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
                                                    <i className="fas fa-trash-alt"></i>
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
                                                    <i className="fas fa-trash-alt"></i>
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
                                                    <i className="fas fa-trash-alt"></i>
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
                                                    <i className="fas fa-trash-alt"></i>
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
