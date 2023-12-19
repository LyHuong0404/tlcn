import { useSelector } from "react-redux";

function PersonalInfo() {
    const { user } = useSelector((state) => state.auth);

    return (
        <div className="htlfndr-user-panel col-sm-8 col-md-9 htlfndr-info-page">
            <div id="htlfndr-user-tab-1" className="htlfndr-description-table">
                <div className="row htlfndr-counters">
                    <div className="col-md-3 col-sm-6">
                        <div className="htlfndr-counter-block">
                            <div className="htlfndr-icon-holder">
                                <i className="fa fa-plane"></i>
                            </div>
                            <dl className="htlfndr-counter-numbers">
                                <dt className="htlfndr-count">12467</dt>
                                <dd>miles</dd>
                            </dl>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className="htlfndr-counter-block">
                            <div className="htlfndr-icon-holder">
                                <i className="fa fa-building-o"></i>
                            </div>
                            <dl className="htlfndr-counter-numbers">
                                <dt className="htlfndr-count">12</dt>
                                <dd>cities</dd>
                            </dl>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className="htlfndr-counter-block">
                            <div className="htlfndr-icon-holder">
                                <i className="fa fa-globe"></i>
                            </div>
                            <dl className="htlfndr-counter-numbers">
                                <dt className="htlfndr-count">4%</dt>
                                <dd>world</dd>
                            </dl>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className="htlfndr-counter-block">
                            <div className="htlfndr-icon-holder">
                                <i className="fa fa-map-marker"></i>
                            </div>
                            <dl className="htlfndr-counter-numbers">
                                <dt className="htlfndr-count">7</dt>
                                <dd>countries</dd>
                            </dl>
                        </div>
                    </div>
                </div>
                <table className="htlfndr-personal-info-table">
                    <tbody>
                        <tr>
                            <th className="htlfndr-scope-row">username:</th>
                            <td>{user.username}</td>
                        </tr>
                        <tr>
                            <th className="htlfndr-scope-row">fullname:</th>
                            <td>{user.fullname}</td>
                        </tr>
                        <tr>
                            <th className="htlfndr-scope-row">e-mail:</th>
                            <td>{user.email}</td>
                        </tr>
                        <tr>
                            <th className="htlfndr-scope-row">phone number:</th>
                            <td>{user.phone}</td>
                        </tr>
                        <tr>
                            <th className="htlfndr-scope-row">country:</th>
                            <td>Việt Nam</td>
                        </tr>
                        <tr>
                            <th className="htlfndr-scope-row">role:</th>
                            <td>{user.roles[0]}</td>
                        </tr>                                                
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default PersonalInfo;