/* eslint-disable jsx-a11y/anchor-is-valid */
function EditRoomType() {
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
                        <a href="#"> Edit Room Type</a>
                    </li>
                </ul>
            </div>
            <div className="sb2-2-add-blog sb2-2-1">
                <h2>Edit Room Type</h2>
                <p>The .table class adds basic styling (light padding and only horizontal dividers) to a table:</p>
                <form>
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="list-title" type="text" value="" className="validate" />
                            <label htmlFor="list-title">Enter Room Type</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input type="submit" className="waves-effect waves-light btn-large" value="Submit" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default EditRoomType;
