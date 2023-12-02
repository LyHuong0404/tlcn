/* eslint-disable jsx-a11y/anchor-is-valid */

function AddRoomType() {
    return (
        <section>
            <div className="content add-details profile User">
                <div className="in-content-wrapper">
                    <div className="row no-gutters">
                        <div className="col" style={{ display: 'flex', alignItems: 'center' }}>
                            <div className="heading-messages">
                                <h1>Room Type</h1>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="breadcrumb" style={{ fontSize: '16px' }}>
                                <div className="breadcrumb-item">
                                    <i className="fas fa-angle-right"></i>
                                    <a href="#">Listing</a>
                                </div>
                                <div className="breadcrumb-item">
                                    <i className="fas fa-angle-right"></i>
                                    <a href="#">All</a>
                                </div>
                                <div className="breadcrumb-item active">
                                    <i className="fas fa-angle-right"></i>Create
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="box">
                        <div className="row">
                            <div className="col">
                                <div className="details-text">
                                    <h1>Create Room Type</h1>
                                </div>
                            </div>
                        </div>
                        <div className="hotel-listing-form">
                            <form className="text-center">
                                <div className="row">
                                    <div className="col-sm-8">
                                        <div className="form-row">
                                            <div className="col-md">
                                                <div className="form-group">
                                                    <label for="to" className="">
                                                        Type Name:
                                                    </label>
                                                    <input type="text" className="form-control" required id="to" />
                                                </div>
                                            </div>
                                         
                                        </div>

                                        <ul className="list-inline" style={{ float: 'left'}}>
                                            <li className="list-inline-item" style={{paddingLeft: '0' }}>
                                                <button type="submit" className="btn" >
                                                    Create
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

export default AddRoomType;
