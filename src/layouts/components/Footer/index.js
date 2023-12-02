/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable react/jsx-no-target-blank */
import 'classnames/bind';
// import '~/components/GlobalStyles/GlobalStyles.module.scss';
import '~/assets/css/bootstrap.min.css';
import '~/assets/css/style.css';
import '~/assets/css/ie.css';
import '~/assets/css/font-awesome.min.css';
import '~/assets/css/owl.carousel.css';
import '~/assets/css/jquery-ui.css';
import '~/assets/js/jquery-1.11.3.min.js';
import 'jquery-ui-dist/jquery-ui';
import images from '~/assets/images';
import { Link } from 'react-router-dom';

function Footer() {
    const handleBackToTopClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            <footer className="htlfndr-footer">
                <button className="htlfndr-button-to-top" onClick={handleBackToTopClick}>
                    <span> Back to top</span>
                </button>
                <div className="widget-wrapper">
                    <div className="container">
                        <div className="row">
                            <aside className="col-xs-12 col-sm-6 col-md-3 htlfndr-widget-column">
                                <div className="widget">
                                    <a className="htlfndr-logo navbar-brand" href="/">
                                        <img src={images.logo} height="20" width="30" alt="Logo" />
                                        <p className="htlfndr-logo-text">
                                            hotel <span> finder</span>
                                        </p>
                                    </a>
                                    <hr />
                                    <p>
                                        Incredibly friendly locals will tell you all about Georgia's most picturesque,
                                        breathtaking, and gastronomic must-visit places.
                                    </p>
                                    <br />
                                    <p>
                                        A quick search of our database will show you the best-fitting matches out of
                                        100+ candidates. You can choose photos, or reviews from previous passengers.
                                    </p>
                                </div>
                            </aside>
                            <aside className="col-xs-12 col-sm-6 col-md-3 htlfndr-widget-column">
                                <div className="widget">
                                    <h3 className="widget-title">contact info</h3>

                                    <h5>address</h5>
                                    <p>
                                        Room Finder <br />
                                        120 CA 15th Avenue-Suite 214, VN
                                    </p>
                                    <hr />
                                    <h5>phone number</h5>
                                    <p>1-555-5555-5555</p>
                                    <hr />
                                    <h5>email address</h5>
                                    <p>suppor@tlcn.com</p>
                                </div>
                            </aside>

                            <aside className="col-xs-12 col-sm-6 col-md-3 htlfndr-widget-column">
                                <div className="widget">
                                    <h3 className="widget-title">pages</h3>

                                    <ul className="menu">
                                        <li className="menu-item active">
                                            <Link to="index-2.html"> home</Link>
                                        </li>

                                        <li className="menu-item">
                                            <Link to="blog-index.html"> blog</Link>
                                        </li>

                                        <li className="menu-item">
                                            <Link to="about-us.html"> about</Link>
                                        </li>

                                        <li className="menu-item">
                                            <Link to="user-page.html"> user profile</Link>
                                        </li>
                                    </ul>
                                </div>
                            </aside>

                            <aside className="col-xs-12 col-sm-6 col-md-3 htlfndr-widget-column">
                                <div className="widget">
                                    <h3 className="widget-title">follow us</h3>

                                    <div className="htlfndr-follow-plugin">
                                        <a
                                            href="https://www.facebook.com/bestwebsoft/"
                                            target="_blank"
                                            className="htlfndr-follow-button button-facebook"
                                        ></a>

                                        <a
                                            href="https://twitter.com/bestwebsoft"
                                            target="_blank"
                                            className="htlfndr-follow-button button-twitter"
                                        ></a>

                                        <a
                                            href="https://plus.google.com/+Bestwebsoft"
                                            target="_blank"
                                            className="htlfndr-follow-button button-google-plus"
                                        ></a>

                                        <a
                                            href="https://www.linkedin.com/company/bestwebsoft/"
                                            target="_blank"
                                            className="htlfndr-follow-button button-linkedin"
                                        ></a>

                                        <a href="/" className="htlfndr-follow-button button-pinterest"></a>

                                        <a
                                            href="https://www.youtube.com/bestwebsoft"
                                            target="_blank"
                                            className="htlfndr-follow-button button-youtube"
                                        ></a>
                                    </div>

                                    <hr />

                                    <h3 className="widget-title">mailing list</h3>
                                    <p>Sign up for our mailing list to get latest updates and offers</p>
                                </div>
                            </aside>
                        </div>
                    </div>
                </div>
            </footer>
            <div id="htlfndr-sing-up">
                <div className="htlfndr-content-card">
                    <div className="htlfndr-card-title clearfix">
                        <h2 className="pull-left">Sing up</h2>
                    </div>
                    <form id="htlfndr-sing-up-form" method="post">
                        <div className="row">
                            <div className="col-md-6">
                                <h4>first name</h4>
                                <input
                                    id="htlfndr-sing-up-name"
                                    className="htlfndr-input"
                                    type="text"
                                    name="htlfndr-sing-up-name"
                                />
                            </div>
                            <div className="col-md-6">
                                <h4>last name</h4>
                                <input
                                    id="htlfndr-sing-up-last-name"
                                    className="htlfndr-input"
                                    type="text"
                                    name="htlfndr-sing-up-last-name"
                                />
                            </div>
                        </div>

                        <h4>E-mail adress</h4>
                        <input
                            id="htlfndr-sing-up-email"
                            className="htlfndr-input"
                            type="text"
                            name="htlfndr-sing-up-email"
                        />
                        <h4>Password</h4>
                        <input
                            id="htlfndr-sing-up-pass"
                            className="htlfndr-input"
                            type="text"
                            name="htlfndr-sing-up-pass"
                        />
                        <h4>Confirm Password</h4>
                        <input
                            id="htlfndr-sing-up-pass-conf"
                            className="htlfndr-input"
                            type="text"
                            name="htlfndr-sing-up-pass-conf"
                        />

                        <div className="clearfix">
                            <span>
                                Have an Account?
                                <a data-target="#htlfndr-sing-in" data-toggle="modal" href="#">
                                    <span> Sing in</span>
                                </a>
                            </span>
                            <input type="submit" value="Sing up" className="pull-right" />
                        </div>
                    </form>
                </div>
            </div>
            <div id="htlfndr-sing-in">
                <div className="htlfndr-content-card">
                    <div className="htlfndr-card-title clearfix">
                        <h2 className="pull-left">Sing in</h2>
                    </div>

                    <form id="htlfndr-sing-in-form" method="post">
                        <h4>E-mail adress</h4>
                        <input
                            id="htlfndr-sing-in-email"
                            className="htlfndr-input"
                            type="text"
                            name="htlfndr-sing-in-emal"
                        />
                        <h4>Password</h4>
                        <input
                            id="htlfndr-sing-in-pass"
                            className="htlfndr-input"
                            type="text"
                            name="htlfndr-sing-in-pass"
                        />
                        <div className="clearfix">
                            <span>
                                Don't Have an Account?
                                <a data-target="#htlfndr-sing-up" data-toggle="modal" href="#">
                                    <span> Sing up</span>
                                </a>
                            </span>

                            <input type="submit" value="Sing in" className="pull-right" />
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Footer;
