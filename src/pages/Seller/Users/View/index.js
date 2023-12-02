import { Link } from 'react-router-dom';

/* eslint-disable jsx-a11y/anchor-is-valid */
function View() {
    return (
        <div className="sb2-2">
            <div className="sb2-2-2">
                <ul>
                    <li>
                        <a href="#">
                            <i className="fa fa-home" aria-hidden="true"></i> Home
                        </a>
                    </li>
                    <li className="active-bre">
                        <Link to="/seller/allcustomers"> Customers</Link>
                    </li>
                    <li className="active-bre">
                        <a className='txt-none'> View Customer Detail</a>
                    </li>
                    <li className="page-back">
                        <Link to="/seller/allcustomers">
                            <i className="fa fa-backward" aria-hidden="true"></i> Back
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="sb2-2-3">
                <div className="row">
                    <div className="col-md-12">
                        <div className="box-inn-sp">
                            <div className="inn-title">
                                <h4>View Customer Detail</h4>
                            </div>
                            <div className="tab-inn">
                                <form>
                                    <div className="row">
                                        <div className="input-field col s6">
                                            <br />
                                            <input id="first_name" type="text" value="Marsha" className="validate" />
                                            <label htmlFor="first_name">First Name</label>
                                        </div>
                                        <div className="input-field col s6">
                                            <br />
                                            <input id="last_name" type="text" value="Hogen" className="validate" />
                                            <label htmlFor="last_name">Last Name</label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="input-field col s6">
                                            <br />

                                            <input id="phone" type="text" value="+01 1234 4654" className="validate" />
                                            <label htmlFor="phone">Mobile</label>
                                        </div>
                                        <div className="input-field col s6">
                                            <br />
                                            <input
                                                id="cphone"
                                                type="text"
                                                value="+01 6541 32145"
                                                className="validate"
                                            />
                                            <label htmlFor="cphone">Phone</label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="input-field col s6">
                                            <br />
                                            <input id="city" type="text" value="Illunois" className="validate" />
                                            <label htmlFor="city">City</label>
                                        </div>
                                        <div className="input-field col s6">
                                            <br />
                                           <input
                                                id="country"
                                                type="text"
                                                value="United States"
                                                className="validate"
                                            />
                                            <label htmlFor="country">Country</label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="input-field col s6">
                                            <br />
                                            <input
                                                id="password"
                                                type="password"
                                                value="aksdjfhasdf"
                                                className="validate"
                                            />
                                            <label htmlFor="password">Password</label>
                                        </div>
                                        <div className="input-field col s6">
                                            <br />
                                            <input
                                                id="password1"
                                                type="password"
                                                value="asdfaefrerfg"
                                                className="validate"
                                            />
                                            <label htmlFor="password1">Confirm Password</label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="input-field col s12">
                                            <br />
                                            <input
                                                id="email"
                                                type="email"
                                                value="marshahi@mail.com"
                                                className="validate"
                                            />
                                            <label htmlFor="email">Email</label>
                                        </div>

                                        <div className="input-field col s12">
                                            <br />
                                            <input
                                                id="email1"
                                                type="email"
                                                value="marshahi@mail.com"
                                                className="validate"
                                            />
                                            <label htmlFor="email1">Alternate Email</label>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default View;
