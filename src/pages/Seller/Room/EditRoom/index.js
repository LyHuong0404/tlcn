/* eslint-disable jsx-a11y/anchor-is-valid */
function EditRoom() {
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
                        <a href="#"> Edit Hotel</a>
                    </li>
                </ul>
            </div>
            <div className="sb2-2-add-blog sb2-2-1">
                <h2>Edit Hotel Details</h2>
                <p>The .table class adds basic styling (light padding and only horizontal dividers) to a table:</p>

                <ul className="nav nav-tabs tab-list">
                    <li className="active">
                        <a data-toggle="tab" href="#home">
                            <i className="fa fa-info" aria-hidden="true"></i> <span>Detail</span>
                        </a>
                    </li>
                    <li>
                        <a data-toggle="tab" href="#menu1">
                            <i className="fa fa-bed" aria-hidden="true"></i> <span>Room Type</span>
                        </a>
                    </li>
                    <li>
                        <a data-toggle="tab" href="#menu2">
                            <i className="fa fa-picture-o" aria-hidden="true"></i> <span>Photo Gallery</span>
                        </a>
                    </li>
                    <li>
                        <a data-toggle="tab" href="#menu3">
                            <i className="fa fa-facebook" aria-hidden="true"></i> <span>Social Media</span>
                        </a>
                    </li>
                    <li>
                        <a data-toggle="tab" href="#menu4">
                            <i className="fa fa-phone" aria-hidden="true"></i> <span>Contact Info</span>
                        </a>
                    </li>
                </ul>

                <div className="tab-content">
                    <div id="home" className="tab-pane fade in active">
                        <div className="box-inn-sp">
                            <div className="inn-title">
                                <h4>Listing Information</h4>
                                <p>Airtport Hotels The Right Way To Start A Short Break Holiday</p>
                            </div>
                            <div className="bor">
                                <form>
                                    <div className="row">
                                        <div className="input-field col s12">
                                            <input id="list-title" type="text" className="validate" />
                                            <label htmlFor="list-title">Listing Name</label>
                                        </div>
                                        <div className="input-field col s12">
                                            <input id="list-name" type="text" className="validate" />
                                            <label htmlFor="list-name">Contact Person</label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="input-field col s12">
                                            <div className="chips chips-placeholder"></div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="input-field col s12">
                                            <textarea id="textarea1" className="materialize-textarea"></textarea>
                                            <label htmlFor="textarea1">Listing Descriptions:</label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="input-field col s6">
                                            <select multiple>
                                                <option value="" disabled selected>
                                                    Choose Category
                                                </option>
                                                <option value="1">Hotels</option>
                                                <option value="2">Educations</option>
                                                <option value="3">Medical</option>
                                                <option value="3">Health</option>
                                                <option value="3">Fitness</option>
                                                <option value="3">Tution</option>
                                                <option value="3">Software</option>
                                                <option value="3">Wedding</option>
                                                <option value="3">Party</option>
                                                <option value="3">Spa/Club</option>
                                            </select>
                                            <label>Select Category</label>
                                        </div>
                                        <div className="input-field col s6">
                                            <select multiple>
                                                <option value="" disabled selected>
                                                    Choose Category
                                                </option>
                                                <option value="1">Hotels</option>
                                                <option value="2">Educations</option>
                                                <option value="3">Medical</option>
                                                <option value="3">Health</option>
                                                <option value="3">Fitness</option>
                                                <option value="3">Tution</option>
                                                <option value="3">Software</option>
                                                <option value="3">Wedding</option>
                                                <option value="3">Party</option>
                                                <option value="3">Spa/Club</option>
                                            </select>
                                            <label>Select Sub Category</label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="input-field col s12">
                                            <input
                                                type="submit"
                                                className="waves-effect waves-light btn-large"
                                                value="Submit"
                                            />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div id="menu1" className="tab-pane fade">
                        <div className="inn-title">
                            <h4>Hotel Room Details</h4>
                            <p>Airtport Hotels The Right Way To Start A Short Break Holiday</p>
                        </div>
                        <div className="bor">
                            <form>
                                <div className="row">
                                    <div className="input-field col s12">
                                        <select multiple>
                                            <option value="" disabled selected>
                                                Room Type
                                            </option>
                                            <option value="1">Deluxe</option>
                                            <option value="2">Premium</option>
                                            <option value="3">Premium Plus</option>
                                            <option value="3">Non-Deluxe</option>
                                            <option value="3">Normal</option>
                                        </select>
                                        <label>Select Category</label>
                                    </div>
                                    <div className="input-field col s12">
                                        <input id="t2-price" type="number" className="validate" />
                                        <label htmlFor="t2-price">Price</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s12">
                                        <div className="chips chips-placeholder"></div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s12">
                                        <textarea id="textarea4" className="materialize-textarea"></textarea>
                                        <label htmlFor="textarea4">Listing Descriptions:</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s12">
                                        <div className="file-field input-field">
                                            <div className="btn">
                                                <span>File</span>
                                                <input type="file" />
                                            </div>
                                            <div className="file-path-wrapper">
                                                <input
                                                    className="file-path validate"
                                                    type="text"
                                                    placeholder="Upload room image"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s12">
                                        <input
                                            type="submit"
                                            className="waves-effect waves-light btn-large"
                                            value="Submit"
                                        />
                                    </div>
                                </div>
                            </form>
                        </div>

                        <div className="bor">
                            <form>
                                <div className="row">
                                    <div className="input-field col s12">
                                        <select multiple>
                                            <option value="" disabled selected>
                                                Room Type
                                            </option>
                                            <option value="1">Deluxe</option>
                                            <option value="2">Premium</option>
                                            <option value="3">Premium Plus</option>
                                            <option value="3">Non-Deluxe</option>
                                            <option value="3">Normal</option>
                                        </select>
                                        <label>Select Category</label>
                                    </div>
                                    <div className="input-field col s12">
                                        <input id="t2-price1" type="number" className="validate" />
                                        <label htmlFor="t2-price1">Price</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s12">
                                        <div className="chips chips-placeholder"></div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s12">
                                        <textarea id="textarea2" className="materialize-textarea"></textarea>
                                        <label htmlFor="textarea2">Listing Descriptions:</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s12">
                                        <div className="file-field input-field">
                                            <div className="btn">
                                                <span>File</span>
                                                <input type="file" />
                                            </div>
                                            <div className="file-path-wrapper">
                                                <input
                                                    className="file-path validate"
                                                    type="text"
                                                    placeholder="Upload room image"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s12">
                                        <input
                                            type="submit"
                                            className="waves-effect waves-light btn-large"
                                            value="Submit"
                                        />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div id="menu2" className="tab-pane fade">
                        <div className="inn-title">
                            <h4>Photo Gallery</h4>
                            <p>Airtport Hotels The Right Way To Start A Short Break Holiday</p>
                        </div>
                        <div className="bor">
                            <form action="#">
                                <div className="file-field input-field">
                                    <div className="btn">
                                        <span>File</span>
                                        <input type="file" multiple />
                                    </div>
                                    <div className="file-path-wrapper">
                                        <input
                                            className="file-path validate"
                                            type="text"
                                            placeholder="Upload one or more files"
                                        />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s12">
                                        <input
                                            type="submit"
                                            className="waves-effect waves-light btn-large"
                                            value="Upload"
                                        />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div id="menu3" className="tab-pane fade">
                        <div className="inn-title">
                            <h4>Social Media</h4>
                            <p>Airtport Hotels The Right Way To Start A Short Break Holiday</p>
                        </div>
                        <div className="bor">
                            <form>
                                <div className="row">
                                    <div className="input-field col s12">
                                        <input
                                            id="t4-soc1"
                                            type="text"
                                            value="http://facebook.com/"
                                            className="validate"
                                        />
                                        <label htmlFor="t4-soc1">Facebook Url</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s12">
                                        <input
                                            id="t4-soc2"
                                            type="text"
                                            value="http://google.com/gplus"
                                            className="validate"
                                        />
                                        <label htmlFor="t4-soc2">Google Plus Url</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s12">
                                        <input
                                            id="t4-soc3"
                                            type="text"
                                            value="http://twitter.com/"
                                            className="validate"
                                        />
                                        <label htmlFor="t4-soc3">Twitter Url</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s12">
                                        <input
                                            id="t4-soc4"
                                            type="text"
                                            value="http://Linkedin.com/"
                                            className="validate"
                                        />
                                        <label htmlFor="t4-soc4">Linkedin Url</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s12">
                                        <input id="t4-soc5" type="text" className="validate" />
                                        <label htmlFor="t4-soc5">WhatsApp Number</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s12">
                                        <input id="t4-soc6" type="text" value="http://vk.com/" className="validate" />
                                        <label htmlFor="t4-soc6">Vk Url</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s12">
                                        <input
                                            type="submit"
                                            className="waves-effect waves-light btn-large"
                                            value="Upload"
                                        />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div id="menu4" className="tab-pane fade">
                        <div className="inn-title">
                            <h4>Contact Info</h4>
                            <p>Airtport Hotels The Right Way To Start A Short Break Holiday</p>
                        </div>
                        <div className="bor">
                            <form>
                                <div className="row">
                                    <div className="input-field col s6">
                                        <input id="t5-n1" type="text" className="validate" />
                                        <label htmlFor="t5-n1">Contact Name</label>
                                    </div>
                                    <div className="input-field col s6">
                                        <input id="t5-n2" type="text" className="validate" />
                                        <label htmlFor="t5-n2">Alter Contact Name</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s6">
                                        <input id="t5-n3" type="number" className="validate" />
                                        <label htmlFor="t5-n3">Phone</label>
                                    </div>
                                    <div className="input-field col s6">
                                        <input id="t5-n4" type="number" className="validate" />
                                        <label htmlFor="t5-n4">Mobile</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s12">
                                        <input id="t5-n5" type="email" className="validate" />
                                        <label htmlFor="t5-n5">Email</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s12">
                                        <textarea id="t5-n6" className="materialize-textarea"></textarea>
                                        <label htmlFor="t5-n6">Listing Descriptions:</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s12">
                                        <input
                                            type="submit"
                                            className="waves-effect waves-light btn-large"
                                            value="Upload"
                                        />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EditRoom;
