/* eslint-disable jsx-a11y/no-redundant-roles */
import { useForm } from 'react-hook-form';
import Image from '~/components/Image';
import { makeAppointment } from '~/actions/userActions';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useState } from 'react';
import PaymentDialog from '~/components/PaymentDialog';
import { useTranslation } from 'react-i18next';

function Appointment() {
    const { t } = useTranslation();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const navigate = useNavigate();
    const location = useLocation();
    const room = location?.state?.room;
    const [isOpen, setIsOpen] = useState(false);
    const [isDisabled, setIsDisabled] = useState(true);

    const submitForm = (data) => {
        data.roomId = room?.id;
        try {
            const fetchAPI = async () => {
                const result = await makeAppointment(data);
                if (result?.success) {
                    toast.success('Make an appointment successfully');
                    navigate('/profile', { state: { activeTab: 2 } });
                } else {
                    setIsOpen(!isOpen);
                }
            };
            fetchAPI();
        } catch (error) {
            console.log(error);
        }
    };

    const renderStars = (averageStar) => {
        const stars = Array.from({ length: 5 }, (_, index) => (
            <i key={index} className={`fa fa-star ${index < averageStar ? 'htlfndr-star-color' : ''}`}></i>
        ));

        return <>{stars}</>;
    };
    return (
        <div className="row htlfndr-page-content">
            {isOpen && <PaymentDialog onClose={() => setIsOpen(!isOpen)} />}
            <div className="row htlfndr-payment-page">
                <main id="htlfndr-main-content" className="col-sm-12 col-md-8 col-lg-8" role="main">
                    <form onSubmit={handleSubmit(submitForm)}>
                        <section className="htlfndr-form-section">
                            <header>
                                <h2 className="htlfndr-form-section-title">
                                    {t('Time to')} <span>{t('make an appointment')}</span>?
                                </h2>
                                <h5 className="htlfndr-form-section-description">
                                    {t('Please tell us your appointment time.')}
                                </h5>
                            </header>
                            <div id="htlfndr-accordion-3" className="htlfndr-form-block">
                                <p className="htlfndr-form-block-title htlfndr-accordion-title"></p>
                                <div className="htlfndr-form-block-inner htlfndr-accordion-inner">
                                    <div className="row">
                                        <div className="col-xs-6 col-sm-6 col-md-6">
                                            <label
                                                htmlFor="htlfndr-first-adult-name"
                                                className="htlfndr-required htlfndr-top-label"
                                            >
                                                {t('Date')}
                                            </label>
                                            <input
                                                type="date"
                                                id="htlfndr-first-adult-name"
                                                name="htlfndr-first-adult-name"
                                                className="htlfndr-input"
                                                style={{ marginBottom: '0' }}
                                                {...register('day', { required: true })}
                                            />
                                            {errors.day && (
                                                <div style={{ textAlign: 'left' }}>
                                                    <label className="error-message">{t('Date is required.')}</label>
                                                </div>
                                            )}
                                        </div>
                                        <div className="col-xs-6 col-sm-6 col-md-6">
                                            <label
                                                htmlFor="htlfndr-first-adult-last-name"
                                                className="htlfndr-required htlfndr-top-label"
                                            >
                                                {t('Time')}
                                            </label>
                                            <input
                                                type="time"
                                                id="htlfndr-first-adult-last-name"
                                                name="htlfndr-first-adult-last-name"
                                                className="htlfndr-input"
                                                style={{ marginBottom: '0' }}
                                                {...register('time', { required: true })}
                                            />
                                            {errors.time && (
                                                <div style={{ textAlign: 'left' }}>
                                                    <label className="error-message">{t('Time is required.')}</label>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <br />
                        <input id="policy" type="checkbox" name="policy" onChange={() => setIsDisabled(!isDisabled)} />
                        <label htmlFor="policy">{t('I agree to deduct 2 points when creating an appointment.')}</label>

                        <section
                            className="htlfndr-form-section htlfndr-form-review-section"
                            style={{ marginTop: '20px' }}
                        >
                            <input
                                type="submit"
                                disabled={isDisabled}
                                className="htlfndr-payment-submit"
                                value="complete booking"
                            />
                        </section>
                    </form>
                </main>
                <aside
                    id="htlfndr-right-sidebar"
                    className="col-sm-12 col-md-4 col-lg-offset-1 col-lg-3 htlfndr-sidebar htlfndr-sidebar-in-right"
                    role="complementary"
                >
                    <div className="htlfndr-booking-details">
                        <div className="widget">
                            <div className="htlfndr-widget-main-content htlfndr-widget-padding">
                                <h3 className="widget-title">{t('appointment details')}</h3>
                                <div className="htlfndr-widget-block htlfndr-table-view">
                                    <div className="htlfndr-hotel-thumbnail">
                                        <a href="hotel-page-v1.html">
                                            <Image src={room?.avatarUrl} alt="Hotel picture" />
                                        </a>
                                    </div>
                                    <div className="htlfndr-hotel-info">
                                        <a href="hotel-page-v1.html">
                                            <h3>{room?.subject}</h3>
                                        </a>
                                        <div className="htlfndr-rating-stars">{renderStars(room?.averageStar)}</div>
                                        <p className="htlfndr-location">{room?.address}</p>
                                    </div>
                                </div>
                                <div className="htlfndr-widget-block htlfndr-bigger-font">
                                    <p className="htlfndr-details">
                                        <span>{t('persons')}:</span> <span>{room?.totalPerson}</span>
                                    </p>
                                    <p className="htlfndr-total-price" style={{ marginTop: '0', marginBottom: '55px' }}>
                                        {t('1 month price')}:
                                    </p>
                                    <br />
                                    <div className="htlfndr-hotel-price">
                                        <span className="htlfndr-cost">{room?.price}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    );
}

export default Appointment;
