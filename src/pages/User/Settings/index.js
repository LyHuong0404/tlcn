function Settings() {
    return (
        <div className="htlfndr-user-panel col-md-9 col-sm-8 htlfndr-setting-page" id="htlfndr-user-tab-5">
            <div className="htlfndr-setting">
                <h2>
                    Change <b>Personal Infomation</b>
                </h2>
                <form className="htlfndr-form-setting" id="htlfndr-settings-form" method="post">
                    <div className="row">
                        <div className="col-md-5 htlfndr-form-setting-cols">
                            <label htmlFor="settings-name class">Name</label>
                            <br />
                            <input
                                id="settings-name"
                                className="htlfndr-input"
                                type="text"
                                name="settings-name"
                                placeholder="John Brown"
                            />
                            <br />
                            <label htmlFor="settings-phone class">Phone number</label>
                            <br />
                            <input
                                id="settings-phone"
                                className="htlfndr-input"
                                type="text"
                                name="settings-phone"
                                placeholder="+0 000-000-000"
                            />
                            <br />
                            <label htmlFor="settings-adress class">Street Adress</label>
                            <br />
                            <input
                                id="settings-adress"
                                className="htlfndr-input"
                                type="text"
                                name="settings-adress"
                                placeholder="46 Gray Inn Rd, London, WCIX"
                            />
                            <br />
                            <label htmlFor="settings-state class">State/Province/Region</label>
                            <br />
                            <input
                                id="settings-state"
                                className="htlfndr-input"
                                type="text"
                                name="settings-state"
                                placeholder="London"
                            />
                            <br />
                            <label htmlFor="settings-country class">Country</label>
                            <br />
                            <input
                                id="settings-country"
                                className="htlfndr-input"
                                type="text"
                                name="settings-country"
                                placeholder="United Kingdom"
                            />
                            <br />
                        </div>
                        <div className="col-md-5 htlfndr-form-setting-cols">
                            <label htmlFor="settings-email class">E-mail</label>
                            <br />
                            <input
                                id="settings-email"
                                className="htlfndr-input"
                                type="text"
                                name="settings-email"
                                placeholder="johnbrown@mail.com"
                            />
                            <br />
                            <label htmlFor="settings-subject class">Home airport</label>
                            <br />
                            <input
                                id="settings-subject"
                                className="htlfndr-input"
                                type="text"
                                name="settings-home-airport"
                                placeholder="London Heathrow Airport (LHR)"
                            />
                            <br />
                            <label htmlFor="settings-city class">City</label>
                            <br />
                            <input
                                id="settings-city"
                                className="htlfndr-input"
                                type="text"
                                name="settings-city"
                                placeholder="London"
                            />
                            <br />
                            <label htmlFor="settings-code class">Postal Code</label>
                            <br />
                            <input
                                id="settings-code"
                                className="htlfndr-input"
                                type="text"
                                name="settings-code"
                                placeholder="69106"
                            />
                            <br />
                        </div>
                    </div>
                    <input type="submit" value="Save changes" className="btn-primary" />
                </form>
                <h2>
                    Change <b>Password</b>
                </h2>
                <form className="htlfndr-change-setting" id="htlfndr-settings-pass" method="post">
                    <div className="row">
                        <div className="col-md-5 htlfndr-form-setting-cols">
                            <label htmlFor="settings-cur-pass class">Current Password</label>
                            <br />
                            <input
                                id="settings-cur-pass"
                                className="htlfndr-input"
                                type="text"
                                name="settings-cur-pass"
                            />
                            <br />
                            <label htmlFor="settings-new-pass class">New Password</label>
                            <br />
                            <input
                                id="settings-new-pass"
                                className="htlfndr-input"
                                type="text"
                                name="settings-new-pass"
                            />
                            <br />
                            <label htmlFor="settings-new-pass-again class">New Password Again</label>
                            <br />
                            <input
                                id="settings-new-pass-again"
                                className="htlfndr-input"
                                type="text"
                                name="settings-new-pass-again"
                            />
                            <br />
                        </div>
                        <div className="col-md-5 htlfndr-form-setting-cols"> </div>
                    </div>
                    <input type="submit" value="Save password" className="btn-primary" />
                </form>
            </div>
        </div>
    );
}

export default Settings;
