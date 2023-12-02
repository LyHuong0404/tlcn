/* eslint-disable jsx-a11y/anchor-is-valid */
function CreateRoom() {
    return (
        <section>
            <div className="content add-details">
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
                                    <i className="fas fa-angle-right"></i>Create
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="box">
                        <div className="row">
                            <div className="col">
                                <div className="details-text">
                                    <h4>Add Details</h4>
                                </div>
                            </div>
                        </div>
                        <div className="hotel-listing-form">
                            <form className="text-center">
                                <div className="form-row">
                                    <div className="col-md">
                                        <div className="form-group">
                                            <label htmlFor="inputGroupSelect07" className="">
                                                Room Number:
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                required
                                                id="inputGroupSelect07"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md">
                                        <div className="form-group">
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <label className="input-group-text" for="inputGroupSelect00">
                                                        Room Type:
                                                    </label>
                                                </div>
                                                <select className="custom-select" id="inputGroupSelect00">
                                                    <option selected>Choose...</option>
                                                    <option value="1">Single</option>
                                                    <option value="2">Double</option>
                                                    <option value="3">Quad</option>
                                                    <option value="3">King</option>
                                                    <option value="3">Appartments</option>
                                                    <option value="3">Villa</option>
                                                </select>
                                                <i className="fas fa-angle-down"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="col-md">
                                        <div className="form-group">
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <label className="input-group-text" for="inputGroupSelect01">
                                                        AC/Non Ac:
                                                    </label>
                                                </div>
                                                <select className="custom-select" id="inputGroupSelect01">
                                                    <option selected>Choose...</option>
                                                    <option value="1">AC</option>
                                                    <option value="2" selected>
                                                        Non Ac
                                                    </option>
                                                </select>
                                                <i className="fas fa-angle-down"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md">
                                        <div className="form-group">
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <label className="input-group-text" for="inputGroupSelect02">
                                                        Meal:
                                                    </label>
                                                </div>
                                                <select className="custom-select" id="inputGroupSelect02">
                                                    <option selected>Choose...</option>
                                                    <option value="1">Free Breakfast</option>
                                                    <option value="2">Free Dinner</option>
                                                    <option value="3">Free Breakfast & dinner</option>
                                                    <option value="3">Free Welcome Drink</option>
                                                    <option value="3">No Food</option>
                                                </select>
                                                <i className="fas fa-angle-down"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="col-md">
                                        <div className="form-group">
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <label className="input-group-text" for="inputGroupSelect03">
                                                        Cancellation Charges:
                                                    </label>
                                                </div>
                                                <select className="custom-select" id="inputGroupSelect03">
                                                    <option selected>Choose...</option>
                                                    <option value="1" selected>
                                                        Free Cancellation
                                                    </option>
                                                    <option value="2">15% before 24 hours</option>
                                                    <option value="2">Not Allowed</option>
                                                </select>
                                                <i className="fas fa-angle-down"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md">
                                        <div className="form-group">
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <label className="input-group-text" for="inputGroupSelect04">
                                                        Bed Capacity:
                                                    </label>
                                                </div>
                                                <select className="custom-select" id="inputGroupSelect04">
                                                    <option selected>Choose...</option>
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="3">4</option>
                                                    <option value="3">5</option>
                                                    <option value="3">6</option>
                                                    <option value="3">7</option>
                                                    <option value="3">8</option>
                                                    <option value="3">9</option>
                                                </select>
                                                <i className="fas fa-angle-down"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="col-md">
                                        <div className="form-group">
                                            <label htmlFor="inputGroupSelect05" className="">
                                                Telephone # :
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                required
                                                id="inputGroupSelect05"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md">
                                        <div className="form-group">
                                            <div className="form-group">
                                                <label htmlFor="inputGroupSelect06" className="">
                                                    Rent Per Night:
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    required
                                                    id="inputGroupSelect06"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div
                                    action="https://kiswa.net/upload"
                                    className="dropzone needsclick dz-clickable"
                                    id="demo-upload"
                                >
                                    <i className="fas fa-cloud-upload-alt"></i>
                                    <div className="dz-message needsclick">
                                        <p>Drop files here or click to upload.</p>
                                        <span className="note needsclick">
                                            (This is just a demo dropzone. Selected files are
                                            <strong>not</strong> actually uploaded.)
                                        </span>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <textarea
                                        className="form-control textarea text-left p-3 h-100"
                                        id="exampleFormControlTextarea1"
                                        rows="5"
                                        placeholder="Room Details"
                                    ></textarea>
                                </div>
                                <ul className="list-inline">
                                    <li className="list-inline-item">
                                        <button type="submit" className="btn">
                                            Submit
                                        </button>
                                    </li>
                                    <li className="list-inline-item">
                                        <button type="submit" className="btn">
                                            Cancel
                                        </button>
                                    </li>
                                </ul>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CreateRoom;
