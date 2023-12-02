/* eslint-disable jsx-a11y/anchor-is-valid */
function ChangePassword() {
    return (
        <section>
            <div className="content add-details change-password">
                <div className="in-content-wrapper">
                    <div className="row no-gutters">
                        <div className="col" style={{ display: 'flex', alignItems: 'center' }}>
                            <div className="heading-messages">
                                <h1>Profile</h1>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="breadcrumb" style={{ fontSize: '16px' }}>
                                <div className="breadcrumb-item">
                                    <i className="fas fa-angle-right"></i>
                                    <a href="#">Profile</a>
                                </div>
                                <div className="breadcrumb-item active">
                                    <i className="fas fa-angle-right"></i>Edit Profile
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="box" style={{ fontSize: '16px' }}>
                        <div className="row">
                            <div className="col">
                                <div className="details-text">
                                    <h1>Change Password</h1>
                                </div>
                            </div>
                        </div>
                        <div className="hotel-listing-form">
                            <form className="text-center">
                                <div className="row">
                                    <div className="col">
                                        <div className="form-row">
                                            <div className="col-md">
                                                <div className="form-group">
                                                    <label htmlFor="to" className="">
                                                        Old Password:
                                                    </label>
                                                    <input type="password" className="form-control" required id="to" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="col-md">
                                                <div className="form-group">
                                                    <label htmlFor="to1" className="">
                                                        New Password:
                                                    </label>
                                                    <input type="password" className="form-control" required id="to1" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="col-md">
                                                <div className="form-group">
                                                    <label htmlFor="to2" className="">
                                                        Repeat Password:
                                                    </label>
                                                    <input type="password" className="form-control" required id="to2" />
                                                </div>
                                            </div>
                                        </div>

                                        <ul className="list-inline">
                                            <li className="list-inline-item">
                                                <button type="submit" className="btn">
                                                    Update
                                                </button>
                                            </li>
                                            <li className="list-inline-item">
                                                <button type="submit" className="btn">
                                                    Cancel
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ChangePassword;
