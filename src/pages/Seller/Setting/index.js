/* eslint-disable jsx-a11y/anchor-is-valid */
function Setting() {
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
                        <a href="#"> Ui Form</a>
                    </li>
                </ul>
            </div>
            <div className="sb2-2-3">
                <div className="row">
                    <div className="col-md-12">
                        <div className="box-inn-sp">
                            <div className="inn-title">
                                <h4>Setting</h4>
                                <p>Airtport Hotels The Right Way To Start A Short Break Holiday</p>
                            </div>
                            <div className="tab-inn">
                                <form>
                                    <div className="row">
                                        <div className="input-field col s6">
                                            <br />
                                            <input
                                                id="website"
                                                type="text"
                                                value="www.websitename.com"
                                                className="validate"
                                            />
                                            <label htmlFor="website">Website</label>
                                        </div>
                                        <div className="input-field col s6">
                                            <br />
                                            <input
                                                id="blog_name"
                                                type="text"
                                                value="www.websitename.com/blog"
                                                className="validate"
                                            />
                                            <label htmlFor="blog_name">Blog</label>
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
                                        <div className="input-field col s6">
                                            <br />
                                            <input
                                                id="f_name"
                                                type="text"
                                                value="www.websitename.com/facebook"
                                                className="validate"
                                            />
                                            <label htmlFor="f_name">Facebook</label>
                                        </div>
                                        <div className="input-field col s6">
                                            <br />
                                            <input
                                                id="g_name"
                                                type="text"
                                                value="www.websitename.com/google plus"
                                                className="validate"
                                            />
                                            <label htmlFor="g_name">Google plus</label>
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
                                    <div className="row">
                                        <div className="input-field col s12">
                                            <input type="submit" className="waves-effect waves-light btn-large" />
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

export default Setting;
