/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-has-content */
import 'classnames/bind';
import '~/assets/css/bootstrap.min.css';
import '~/assets/css/jquery-ui.css';
import '~/assets/css/ie.css';
import '~/assets/css/style.css';
import '~/assets/css/owl.carousel.css';
import '~/assets/css/select-style.css';
import '~/assets/css/font-awesome.min.css';
// import '~/assets/js/jquery-1.11.3.min.js';
import images from '~/assets/images';
import Image from '~/components/Image';
import Slider from '~/components/Slider';
import { topRecommends } from '~/actions/otherActions';
import { useEffect, useState } from 'react';
import RecommendRoom from '~/components/RecommendRoom';

function Home() {
    const [recommendRooms, setRecommendRooms] = useState([]);

    useEffect(() => {
        try {
            const fetchData = async () => {
                const result = await topRecommends(0, 6);
                setRecommendRooms(result.content);
            };
            fetchData();
        } catch (error) {
            console.log(error);
        }
    });

    return (
        <>
            <Slider></Slider>
            <main role="main">
                <section className="container htlfndr-top-destinations">
                    <h2 className="htlfndr-section-title">top recommends</h2>
                    <div className="htlfndr-section-under-title-line"></div>
                    <RecommendRoom data={recommendRooms}/>
                </section>
                <section className="container-fluid htlfndr-usp-section">
                    <h2 className="htlfndr-section-title htlfndr-lined-title">
                        <span>USP section</span>
                    </h2>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-4 htlfndr-icon-box">
                                <Image
                                    className="htlfndr-icon icon-drinks"
                                    src={images.iconupdrink}
                                    height="100"
                                    width="100"
                                    alt="icon"
                                />
                                <h5 className="htlfndr-section-subtitle">beverages included</h5>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse interdum
                                    eleifend augue, quis rhoncus purus fermentum.
                                </p>
                                <a href="/" className="htlfndr-read-more-button">
                                    read more
                                </a>
                            </div>
                            <div className="col-sm-4 htlfndr-icon-box">
                                <Image
                                    className="htlfndr-icon icon-drinks"
                                    src={images.iconupcard}
                                    height="100"
                                    width="100"
                                    alt="icon"
                                />
                                <h5 className="htlfndr-section-subtitle">best deals</h5>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse interdum
                                    eleifend augue, quis rhoncus purus fermentum.
                                </p>
                                <a href="/" className="htlfndr-read-more-button">
                                    read more
                                </a>
                            </div>
                            <div className="col-sm-4 htlfndr-icon-box">
                                <Image
                                    className="htlfndr-icon icon-drinks"
                                    src={images.iconupcheck}
                                    height="100"
                                    width="100"
                                    alt="icon"
                                />
                                <h5 className="htlfndr-section-subtitle">guarantee</h5>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse interdum
                                    eleifend augue, quis rhoncus purus fermentum.
                                </p>
                                <a href="/" className="htlfndr-read-more-button">
                                    read more
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="container-fluid htlfndr-categories-portfolio">
                    <h2 className="htlfndr-section-title bigger-title">discover the world</h2>
                    <div className="htlfndr-section-under-title-line"></div>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-4 col-xs-6">
                                <div className="htlfndr-category-box">
                                    <Image
                                        src="https://th.bing.com/th/id/OIP.ESJ_lUju-X5N6DgEXjLXOAHaEo?w=316&h=197&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                                        height="311"
                                        width="370"
                                        alt="category-Image"
                                    />
                                    <div className="category-description">
                                        <div className="htlfndr-icon-flag-border">
                                            <i className="htlfndr-icon-flag flag-germany"></i>
                                        </div>
                                        <h2 className="subcategory-name">berlin</h2>
                                        <a href="/" className="htlfndr-category-permalink"></a>
                                        <h5 className="category-name">germany</h5>
                                        <p className="category-properties">
                                            <span>374</span> properties
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4 col-xs-6">
                                <div className="htlfndr-category-box">
                                    <Image
                                        src="https://th.bing.com/th/id/OIP.ESJ_lUju-X5N6DgEXjLXOAHaEo?w=316&h=197&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                                        height="311"
                                        width="370"
                                        alt="category-Image"
                                    />
                                    <div className="category-description">
                                        <div className="htlfndr-icon-flag-border">
                                            <i className="htlfndr-icon-flag flag-britain"></i>
                                        </div>
                                        <h2 className="subcategory-name">london</h2>
                                        <a href="/" className="htlfndr-category-permalink"></a>
                                        <h5 className="category-name">britain</h5>
                                        <p className="category-properties">
                                            <span>185</span> properties
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4 col-xs-6">
                                <div className="htlfndr-category-box">
                                    <Image
                                        src="https://th.bing.com/th/id/OIP.ESJ_lUju-X5N6DgEXjLXOAHaEo?w=316&h=197&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                                        height="311"
                                        width="370"
                                        alt="category-Image"
                                    />
                                    <div className="category-description">
                                        <div className="htlfndr-icon-flag-border">
                                            <i className="htlfndr-icon-flag flag-italy"></i>
                                        </div>
                                        <h2 className="subcategory-name">rom</h2>
                                        <a href="/" className="htlfndr-category-permalink"></a>
                                        <h5 className="category-name">italy</h5>
                                        <p className="category-properties">
                                            <span>98</span> properties
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4 col-xs-6">
                                <div className="htlfndr-category-box">
                                    <Image
                                        src="https://th.bing.com/th/id/OIP.ESJ_lUju-X5N6DgEXjLXOAHaEo?w=316&h=197&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                                        height="311"
                                        width="370"
                                        alt="category-Image"
                                    />
                                    <div className="category-description">
                                        <div className="htlfndr-icon-flag-border">
                                            <i className="htlfndr-icon-flag flag-france"></i>
                                        </div>
                                        <h2 className="subcategory-name">paris</h2>
                                        <a href="/" className="htlfndr-category-permalink"></a>
                                        <h5 className="category-name">france</h5>
                                        <p className="category-properties">
                                            <span>281</span> properties
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4 col-xs-6">
                                <div className="htlfndr-category-box">
                                    <Image
                                        src="https://th.bing.com/th/id/OIP.ESJ_lUju-X5N6DgEXjLXOAHaEo?w=316&h=197&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                                        height="311"
                                        width="370"
                                        alt="category-Image"
                                    />
                                    <div className="category-description">
                                        <div className="htlfndr-icon-flag-border">
                                            <i className="htlfndr-icon-flag flag-russia"></i>
                                        </div>
                                        <h2 className="subcategory-name">moscow</h2>
                                        <a href="/" className="htlfndr-category-permalink"></a>
                                        <h5 className="category-name">russia</h5>
                                        <p className="category-properties">
                                            <span>38</span> properties
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4 col-xs-6">
                                <div className="htlfndr-category-box">
                                    <Image
                                        src="https://th.bing.com/th/id/OIP.ESJ_lUju-X5N6DgEXjLXOAHaEo?w=316&h=197&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                                        height="311"
                                        width="370"
                                        alt="category-Image"
                                    />
                                    <div className="category-description">
                                        <div className="htlfndr-icon-flag-border">
                                            <i className="htlfndr-icon-flag flag-japan"></i>
                                        </div>
                                        <h2 className="subcategory-name">tokio</h2>
                                        <a href="/" className="htlfndr-category-permalink"></a>
                                        <h5 className="category-name">japan</h5>
                                        <p className="category-properties">
                                            <span>318</span> properties
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="container-fluid htlfndr-visitors-cards">
                    <h2 className="htlfndr-section-title bigger-title">visitors experienced</h2>
                    <div className="htlfndr-section-under-title-line"></div>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-4 col-xs-12 htlfndr-visitor-column">
                                <div className="htlfndr-visitor-card">
                                    <div className="visitor-avatar-side">
                                        <div className="visitor-avatar">
                                            <Image
                                                src="https://th.bing.com/th/id/OIP.ESJ_lUju-X5N6DgEXjLXOAHaEo?w=316&h=197&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                                                height="90"
                                                width="90"
                                                alt="user avatar"
                                            />
                                        </div>
                                    </div>
                                    <div className="visitor-info-side">
                                        <h5 className="visitor-user-name">Sara Connor</h5>
                                        <h6 className="visitor-user-firm">Travel Magazine</h6>
                                        <p className="visitor-user-text">
                                            Nunc cursus libero purus ac congue arcu cursus ut sed vitae pulvinar massa
                                            idporta nequetiam nar...
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4 col-xs-12 htlfndr-visitor-column">
                                <div className="htlfndr-visitor-card">
                                    <div className="visitor-avatar-side">
                                        <div className="visitor-avatar">
                                            <Image
                                                src="https://th.bing.com/th/id/OIP.ESJ_lUju-X5N6DgEXjLXOAHaEo?w=316&h=197&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                                                height="90"
                                                width="90"
                                                alt="user avatar"
                                            />
                                        </div>
                                    </div>
                                    <div className="visitor-info-side">
                                        <h5 className="visitor-user-name">Mira Young</h5>
                                        <h6 className="visitor-user-firm">Hotel Manager</h6>
                                        <p className="visitor-user-text">
                                            Nunc cursus libero purus ac congue arcu cursus ut sed vitae pulvinar massa
                                            idporta nequetiam nar...
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4 col-xs-12 htlfndr-visitor-column">
                                <div className="htlfndr-visitor-card">
                                    <div className="visitor-avatar-side">
                                        <div className="visitor-avatar">
                                            <Image
                                                src="https://th.bing.com/th/id/OIP.ESJ_lUju-X5N6DgEXjLXOAHaEo?w=316&h=197&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                                                height="90"
                                                width="90"
                                                alt="user avatar"
                                            />
                                        </div>
                                    </div>
                                    <div className="visitor-info-side">
                                        <h5 className="visitor-user-name">John Smith</h5>
                                        <h6 className="visitor-user-firm">Hotel Manager</h6>
                                        <p className="visitor-user-text">
                                            Nunc cursus libero purus ac congue arcu cursus ut sed vitae pulvinar massa
                                            idporta nequetiam nar...
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}

export default Home;
