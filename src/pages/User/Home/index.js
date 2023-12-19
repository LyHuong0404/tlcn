/* eslint-disable jsx-a11y/anchor-is-valid */
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
import images from '~/assets/images';
import Image from '~/components/Image';
import Slider from '~/components/Slider';
import { topRecommends } from '~/actions/otherActions';
import { useEffect, useState } from 'react';
import RecommendRoom from '~/components/RecommendRoom';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Home() {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const [recommendRooms, setRecommendRooms] = useState([]);

    useEffect(() => {
        try {
            const fetchData = async () => {
                const result = await topRecommends(0, 6);
                setRecommendRooms(result?.content);
            };
            fetchData();
        } catch (error) {
            console.log(error);
        }
    }, []);

    const filterRoom = async (cod) => {
        let object = { provinceCode: { code: cod } };
        await navigate('/search', { state: { data: object, step: 1 } });
    };
    return (
        <>
            <Slider></Slider>
            <main role="main">
                <section className="container htlfndr-top-destinations">
                    <h2 className="htlfndr-section-title">{t('top recommends')}</h2>
                    <div className="htlfndr-section-under-title-line"></div>
                    <RecommendRoom data={recommendRooms} />
                </section>
                <section className="container-fluid htlfndr-usp-section">
                    <h2 className="htlfndr-section-title htlfndr-lined-title">
                        <span>{t('USP section')}</span>
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
                                <h5 className="htlfndr-section-subtitle">{t('eat and drink')}</h5>
                                <p>
                                    {t('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse interdum eleifend augue, quis rhoncus purus fermentum.')}
                                </p>
                            </div>
                            <div className="col-sm-4 htlfndr-icon-box">
                                <Image
                                    className="htlfndr-icon icon-drinks"
                                    src={images.iconupcard}
                                    height="100"
                                    width="100"
                                    alt="icon"
                                />
                                <h5 className="htlfndr-section-subtitle">{t('best deals')}</h5>
                                <p>
                                {t('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse interdum eleifend augue, quis rhoncus purus fermentum.')}

                                </p>
                            </div>
                            <div className="col-sm-4 htlfndr-icon-box">
                                <Image
                                    className="htlfndr-icon icon-drinks"
                                    src={images.iconupcheck}
                                    height="100"
                                    width="100"
                                    alt="icon"
                                />
                                <h5 className="htlfndr-section-subtitle">{t('guarantee')}</h5>
                                <p>
                                {t('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse interdum eleifend augue, quis rhoncus purus fermentum.')}

                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="container-fluid htlfndr-categories-portfolio">
                    <h2 className="htlfndr-section-title bigger-title">{t('discover the location')}</h2>
                    <div className="htlfndr-section-under-title-line"></div>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-4 col-xs-6">
                                <div className="htlfndr-category-box">
                                    <img
                                        src="https://th.bing.com/th/id/OIP.-IZ6tYUaBZtm-rqmV_0H6QHaEc?rs=1&pid=ImgDetMain"
                                        style={{ height: '311px', width: '370px' }}
                                        alt="category-Image"
                                    />
                                    <div className="category-description" onClick={() => filterRoom(48)}>
                                        <div className="htlfndr-icon-flag-border">
                                            <i className="htlfndr-icon-flag flag-germany"></i>
                                        </div>
                                        <h2 className="subcategory-name">Cầu Vàng</h2>
                                        <a className="htlfndr-category-permalink"></a>
                                        <h5 className="category-name">Đà Nẵng</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4 col-xs-6">
                                <div className="htlfndr-category-box">
                                    <img
                                        src="https://th.bing.com/th/id/OIP.7xul3PG_QTojIuV9sdzUAAHaE6?w=266&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                                        style={{ height: '311px', width: '370px' }}
                                        alt="category-Image"
                                    />
                                    <div className="category-description" onClick={() => filterRoom(79)}>
                                        <div className="htlfndr-icon-flag-border">
                                            <i className="htlfndr-icon-flag flag-britain"></i>
                                        </div>
                                        <h2 className="subcategory-name">City Gold</h2>
                                        <a className="htlfndr-category-permalink"></a>
                                        <h5 className="category-name">Đà Lạt</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4 col-xs-6">
                                <div className="htlfndr-category-box">
                                    <img
                                        src="https://th.bing.com/th/id/OIP._H2NpUGKVJgE10s-KCcdnAHaEv?rs=1&pid=ImgDetMain"
                                        style={{ height: '311px', width: '370px' }}
                                        alt="category-Image"
                                    />
                                    <div className="category-description" onClick={() => filterRoom(79)}>
                                        <div className="htlfndr-icon-flag-border">
                                            <i className="htlfndr-icon-flag flag-italy"></i>
                                        </div>
                                        <h2 className="subcategory-name">Landmark 81</h2>
                                        <a className="htlfndr-category-permalink"></a>
                                        <h5 className="category-name">TP HCM</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4 col-xs-6">
                                <div className="htlfndr-category-box">
                                    <img
                                        src="https://th.bing.com/th/id/OIP.nt656956KKGK1HEdPue-FwHaEa?w=261&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                                        style={{ height: '311px', width: '370px' }}
                                        alt="category-Image"
                                    />
                                    <div className="category-description" onClick={() => filterRoom(60)}>
                                        <div className="htlfndr-icon-flag-border">
                                            <i className="htlfndr-icon-flag flag-france"></i>
                                        </div>
                                        <h2 className="subcategory-name">Đảo Phú Quý</h2>
                                        <a className="htlfndr-category-permalink"></a>
                                        <h5 className="category-name">Bình Thuận</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4 col-xs-6">
                                <div className="htlfndr-category-box">
                                    <img
                                        src="https://th.bing.com/th/id/R.5c44e0ce2ccd44009f8e56292713013a?rik=p5dZKW7%2bfZocnQ&pid=ImgRaw&r=0"
                                        style={{ height: '311px', width: '370px' }}
                                        alt="category-Image"
                                    />
                                    <div className="category-description" onClick={() => filterRoom(49)}>
                                        <div className="htlfndr-icon-flag-border">
                                            <i className="htlfndr-icon-flag flag-russia"></i>
                                        </div>
                                        <h2 className="subcategory-name">Hội An</h2>
                                        <a className="htlfndr-category-permalink"></a>
                                        <h5 className="category-name">Quảng Nam</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4 col-xs-6">
                                <div className="htlfndr-category-box">
                                    <img
                                        src="https://th.bing.com/th/id/R.1394cd318a5011ed736f0fa78244c6f9?rik=1GCAvnXonIFLGw&pid=ImgRaw&r=0"
                                        style={{ height: '311px', width: '370px' }}
                                        alt="category-Image"
                                    />
                                    <div className="category-description" onClick={() => filterRoom(92)}>
                                        <div className="htlfndr-icon-flag-border">
                                            <i className="htlfndr-icon-flag flag-japan"></i>
                                        </div>
                                        <h2 className="subcategory-name">Vinpearl</h2>
                                        <a className="htlfndr-category-permalink"></a>
                                        <h5 className="category-name">Cần Thơ</h5>
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
