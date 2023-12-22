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
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

function Footer() {
    const { t } = useTranslation();
    const [showBackToTop, setShowBackToTop] = useState(false);

    const handleBackToTopClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const threshold = 200;

            if (scrollY > threshold) {
                setShowBackToTop(true);
            } else {
                setShowBackToTop(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <footer className="htlfndr-footer" style={{ marginTop: '80px' }}>
                {showBackToTop && (
                    <button className="htlfndr-button-to-top" onClick={handleBackToTopClick}>
                        <span> {t('Back to top')}</span>
                    </button>
                )}
                <div className="widget-wrapper">
                    <div className="container">
                        <div className="row">
                            <aside className="col-xs-12 col-sm-6 col-md-3 htlfndr-widget-column">
                                <div className="widget">
                                    <a className="htlfndr-logo navbar-brand" href="/">
                                        <img src={images.logo} height="20" width="30" alt="Logo" />
                                        <p className="htlfndr-logo-text">
                                            room <span> finder</span>
                                        </p>
                                    </a>
                                    <hr />
                                    <p>
                                        {t(
                                            'Incredibly friendly locals will tell you all about Georgia most picturesque, breathtaking, and gastronomic must visit places.',
                                        )}
                                    </p>
                                    <br />
                                    <p>
                                        {t(
                                            'A quick search of our database will show you the best-fitting matches out of 100+ candidates. You can choose photos, or reviews from previous passengers.',
                                        )}
                                    </p>
                                </div>
                            </aside>
                            <aside className="col-xs-12 col-sm-6 col-md-3 htlfndr-widget-column">
                                <div className="widget">
                                    <h3 className="widget-title">{t('contact info')}</h3>

                                    <h5>{t('address')}</h5>
                                    <p>
                                        Room Finder <br />
                                    </p>
                                    <hr />
                                    <h5>{t('phone number')}</h5>
                                    <p>1-555-5555-5555</p>
                                    <hr />
                                    <h5>{t('email address')}</h5>
                                    <p>suppor@tlcn.com</p>
                                </div>
                            </aside>

                            <aside className="col-xs-12 col-sm-6 col-md-3 htlfndr-widget-column">
                                <div className="widget">
                                    <h3 className="widget-title">{t('pages')}</h3>

                                    <ul className="menu">
                                        <li className="menu-item active">
                                            <Link to="/"> {t('home')}</Link>
                                        </li>

                                        <li className="menu-item">
                                            <Link > blog</Link>
                                        </li>

                                        <li className="menu-item">
                                            <Link> {t('about')}</Link>
                                        </li>

                                        <li className="menu-item">
                                            <Link> {t('user profile')}</Link>
                                        </li>
                                    </ul>
                                </div>
                            </aside>

                            <aside className="col-xs-12 col-sm-6 col-md-3 htlfndr-widget-column">
                                <div className="widget">
                                    <h3 className="widget-title">{t('follow us')}</h3>

                                    {/* <div className="htlfndr-follow-plugin">
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
                                    </div> */}
                                    <hr />

                                    <h3 className="widget-title">{t('mailing list')}</h3>
                                    <p>{t('Sign up for our mailing list to get latest updates and offers')}</p>
                                </div>
                            </aside>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;
