/* eslint-disable jsx-a11y/no-redundant-roles */
import { useForm } from 'react-hook-form';
import Image from '~/components/Image';
import { makeAppointment } from '~/actions/userActions';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function Appointment({ dataRoom }) {
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();
    const location = useLocation();
    const room = location?.state?.room;
    debugger;
    const submitForm = (data) => {
        data.roomId = room.id;
        try {
            const fetchAPI = async () => {
                const result = await makeAppointment(data);
                if (result.success) {
                    toast.success('Make an appointment successfully');
                    navigate('/profile', { state: { activeTab: 2 } });
                }
            };
            fetchAPI();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="row htlfndr-page-content">
            <div className="row htlfndr-payment-page">
                <main id="htlfndr-main-content" className="col-sm-12 col-md-8 col-lg-8" role="main">
                    <form onSubmit={handleSubmit(submitForm)}>
                        <section className="htlfndr-form-section">
                            <header>
                                <h2 className="htlfndr-form-section-title">
                                    Time to <span>make an appointment</span>?
                                </h2>
                                <h5 className="htlfndr-form-section-description">
                                    Please tell us your appointment time.
                                </h5>
                            </header>
                            <div id="htlfndr-accordion-3" className="htlfndr-form-block">
                                <p className="htlfndr-form-block-title htlfndr-accordion-title"></p>
                                <div className="htlfndr-form-block-inner htlfndr-accordion-inner">
                                    <div className="row">
                                        <div className="col-xs-6 col-sm-6 col-md-6">
                                            <label
                                                for="htlfndr-first-adult-name"
                                                className="htlfndr-required htlfndr-top-label"
                                            >
                                                Date
                                            </label>
                                            <input
                                                type="date"
                                                id="htlfndr-first-adult-name"
                                                name="htlfndr-first-adult-name"
                                                className="htlfndr-input"
                                                {...register('day', { required: true })}
                                            />
                                        </div>
                                        <div className="col-xs-6 col-sm-6 col-md-6">
                                            <label
                                                for="htlfndr-first-adult-last-name"
                                                className="htlfndr-required htlfndr-top-label"
                                            >
                                                Time
                                            </label>
                                            <input
                                                type="time"
                                                id="htlfndr-first-adult-last-name"
                                                name="htlfndr-first-adult-last-name"
                                                className="htlfndr-input"
                                                {...register('time', { required: true })}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="htlfndr-form-section htlfndr-form-review-section">
                            <input type="submit" className="htlfndr-payment-submit" value="complete booking" />
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
                                <h3 className="widget-title">appointment details</h3>
                                <div className="htlfndr-widget-block htlfndr-table-view">
                                    <div className="htlfndr-hotel-thumbnail">
                                        <a href="hotel-page-v1.html">
                                            <Image src="images/16415688600_a030e3e8dd_k.jpg" alt="Hotel picture" />
                                        </a>
                                    </div>
                                    <div className="htlfndr-hotel-info">
                                        <a href="hotel-page-v1.html">
                                            <h3>Hilton Hotel</h3>
                                        </a>
                                        <div className="htlfndr-rating-stars">
                                            <i className="fa fa-star htlfndr-star-color"></i>
                                            <i className="fa fa-star htlfndr-star-color"></i>
                                            <i className="fa fa-star htlfndr-star-color"></i>
                                            <i className="fa fa-star htlfndr-star-color"></i>
                                            <i className="fa fa-star htlfndr-star-color"></i>
                                        </div>
                                        <p className="htlfndr-location">san francisco, usa</p>
                                    </div>
                                </div>
                                <div className="htlfndr-widget-block htlfndr-bigger-font">
                                
                                    <p className="htlfndr-details">
                                        <span>persons:</span> <span>2</span>
                                    </p>
                                </div>
                                <div className="htlfndr-widget-block htlfndr-bigger-font">
                                    <p className="htlfndr-room-cost">
                                        <span>1 month price</span>
                                        <span>$100</span>
                                    </p>
                                </div>
                                <p className="htlfndr-total-price">total price:</p>
                                <div className="htlfndr-hotel-price">
                                    <span className="htlfndr-cost">$ 130</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="widget htlfndr-widget-help">
                        <div className="htlfndr-widget-main-content htlfndr-widget-padding">
                            <h3 className="widget-title">need our help</h3>
                            <span>24/7 dedicated customer support</span>
                            <p className="htlfndr-phone">+(000) 000-000-000</p>
                            <p className="htlfndr-mail">support@bestwebsoft.zendesk.com</p>
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    );
}

export default Appointment;
