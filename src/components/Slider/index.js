import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from '~/components/Image';
import styles from './Slider.module.scss';
import images from '~/assets/images';
import 'swiper/swiper-bundle.css';
import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Select from 'react-select';
import { useForm, Controller } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { getWards, getDistricts } from '~/actions/addressActions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPeopleLine } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';

const CustomIcon = () => <FontAwesomeIcon icon={faPeopleLine} />;
const customStyles = {
    control: (provided) => ({
        ...provided,
        width: '230px',
        height: '30px',
        alignContent: 'center',
        backgroundColor: '#fff',
    }),
};

const optionsPeople = [
    { label: '1 people in room', value: '1' },
    { label: '2 people in room', value: '2' },
    { label: '3 people in room', value: '3' },
    { label: '4 people in room', value: '4' },
];

const slides = [
    {
        src: images.slider1,
        title: 'image',
    },
    {
        src: images.slider2,
        title: 'image',
    },
    {
        src: images.slider3,
        title: 'image',
    },
];

function Slider() {
    const { t } = useTranslation();
    const { control, handleSubmit, setValue } = useForm();
    const { provins } = useSelector((state) => state.provins);
    const [districts, setDistricts] = useState([]);
    const [wards, setWards] = useState([]);
    const navigate = useNavigate();

    const handleChangeProvince = (e) => {
        const fetchData = async () => {
            const result = await getDistricts(e.code);
            const districtOptions = result?.map((district) => ({
                code: district.code,
                label: district.name,
                value: district.name,
            }));
            setDistricts(districtOptions);
            setValue('districtCode', null);
            setValue('wardCode', null);
        };
        fetchData();
    };

    const handleChangeDistrict = (e) => {
        const fetchData = async () => {
            const result = await getWards(e.code);
            const wardOptions = result?.map((ward) => ({
                code: ward.code,
                label: ward.name,
                value: ward.name,
            }));

            setValue('wardCode', null);
            setWards(wardOptions);
        };
        fetchData();
    };

    const provinceOptions = provins.map((province) => ({
        code: province.code,
        label: province.name,
        value: province.name,
    }));

    const submitForm = async (data) => {
        await navigate('/search', { state: { data: data, step: 1 } });
    };

    return (
        <section className="htlfndr-slider-section">
            <div>
                <Swiper
                    modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    spaceBetween={10}
                    slidesPerView={1}
                    loop={true}
                >
                    {slides.map((slide, index) => (
                        <SwiperSlide key={index}>
                            <div className="htlfndr-slide-wrapper" key={index}>
                                <Image src={slide.src} alt={slide.title} className={styles.slider} />
                                <div className="htlfndr-slide-data container">
                                    <div className="htlfndr-slide-rating-stars">
                                        <i className="fa fa-star-o htlfndr-star-color"></i>
                                        <i className="fa fa-star-o htlfndr-star-color"></i>
                                        <i className="fa fa-star-o htlfndr-star-color"></i>
                                        <i className="fa fa-star-o htlfndr-star-color"></i>
                                        <i className="fa fa-star-o htlfndr-star-color"></i>
                                    </div>
                                    <h1 className="htlfndr-slider-title">{t('find your perfect room')}</h1>
                                    <div className="htlfndr-slider-under-title-line"></div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <form onSubmit={handleSubmit(submitForm)}>
                <aside className="htlfndr-form-in-slider htlfndr-search-form-inline">
                    <div className="container">
                        <h5>{t('What are you looking for?')}</h5>
                        <div id="htlfndr-input-1" className="htlfndr-input-wrapper">
                            <Controller
                                name="provinceCode"
                                control={control}
                                render={({ field }) => (
                                    <Select
                                        {...field}
                                        options={provinceOptions}
                                        placeholder={t('Select a province...')}
                                        isSearchable={true}
                                        styles={customStyles}
                                        onChange={(selectedOption) => {
                                            setValue('provinceCode', selectedOption);
                                            handleChangeProvince(selectedOption);
                                        }}
                                    />
                                )}
                            />

                            <p className="htlfndr-search-checkbox">
                                <label htmlFor="htlfndr-checkbox">{t('Specific information')}</label>
                            </p>
                        </div>
                        <div className="htlfndr-input-wrapper">
                            <Controller
                                name="districtCode"
                                control={control}
                                render={({ field }) => (
                                    <Select
                                        {...field}
                                        options={districts}
                                        placeholder={t('Select a district...')}
                                        isSearchable={true}
                                        styles={customStyles}
                                        onChange={(selectedOption) => {
                                            setValue('districtCode', selectedOption);
                                            handleChangeDistrict(selectedOption);
                                        }}
                                    />
                                )}
                            />
                        </div>
                        <div className="htlfndr-input-wrapper">
                            <Controller
                                name="wardCode"
                                control={control}
                                render={({ field }) => (
                                    <Select
                                        {...field}
                                        options={wards}
                                        placeholder={t('Select a ward...')}
                                        isSearchable={true}
                                        styles={customStyles}
                                    />
                                )}
                            />
                        </div>
                        <div id="htlfndr-input-4" className="htlfndr-input-wrapper">
                            <Controller
                                name="totalPerson"
                                control={control}
                                render={(props) => (
                                    <Select
                                        {...props}
                                        options={optionsPeople}
                                        placeholder={t('Select people...')}
                                        styles={customStyles}
                                        onChange={(selectedOption) => {
                                            setValue('totalPerson', selectedOption);
                                        }}
                                    />
                                )}
                            />
                        </div>
                        <div id="htlfndr-input-5">
                            <input type="submit" value={t('search')} />
                        </div>
                    </div>
                </aside>
            </form>
        </section>
    );
}

export default Slider;
