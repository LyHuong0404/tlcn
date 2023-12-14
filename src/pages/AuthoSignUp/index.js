/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import '~/assets/css/cssAuth/animate.min.css';
import '~/assets/css/cssAuth/bootstrap-select.min.css';
import '~/assets/css/cssAuth/bootstrap-submenu.css';
import '~/assets/css/cssAuth/bootstrap.min.css';
import '~/assets/css/cssAuth/dropzone.css';
import '~/assets/css/cssAuth/ie10-viewport-bug-workaround.css';
import '~/assets/css/cssAuth/initial.css';
import '~/assets/css/cssAuth/jquery.mCustomScrollbar.css';
import '~/assets/css/cssAuth/leaflet.css';
import '~/assets/css/cssAuth/slick.css';
import '~/assets/css/cssAuth/style.css';

import Image from '~/components/Image';
import { AuthoSignup } from '~/actions/authActions';
import images from '~/assets/images';
import Loading from '~/components/Loading';
import { toast } from 'react-toastify';

function AuthoSignUp() {
    const { error, success, loading } = useSelector((state) => state.auth);
    const location = useLocation();
    const [data, setData] = useState(location?.state?.data);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [code, setCode] = useState('');

    useEffect(() => {
        if (success) {
            navigate('/auth/login');
            toast.success('Account created successfully!', {
                style: {
                    fontSize: '15px', // Đặt kích thước font size mong muốn
                },
            });
        }
    }, [navigate, success]);

    const submitForm = (e) => {
        e.preventDefault();
        const username = data.username;
        const password = data.password;
        const email = data.email;

        dispatch(AuthoSignup({ username, password, email, code }));
    };
    return (
        <div className="login-section">
            {loading && <Loading />}
            <div className="container-fluid">
                <div className="row login-box">
                    <div className="col-lg-6 align-self-center form-section">
                        <div className="form-inner">
                            <a href="index.html" className="logo">
                                <Image src={images.user} alt="logo" />
                            </a>
                            <h3>Create an account</h3>
                            <form onSubmit={submitForm}>
                                <div className="form-group clearfix">
                                    <p style={{ color: '#1c82ca', marginBottom: '10px' }}>
                                        We have sent the verification code to your email. <br />
                                        Please check and fill in to log in.
                                    </p>
                                    <input
                                        name="code"
                                        type="code"
                                        className={`form-control ${error ? 'status-error' : ''}`}
                                        placeholder="Enter the code"
                                        aria-label="Code"
                                        value={code}
                                        onChange={(e) => setCode(e.target.value)}
                                    />
                                    {error && (
                                        <div style={{ textAlign: 'left' }}>
                                            <label className="error-message">{error}</label>
                                        </div>
                                    )}
                                </div>
                                <div className="form-group clearfix">
                                    <button type="submit" className="btn-md btn-theme w-100">
                                        SEND
                                    </button>
                                </div>
                                <div className="extra-login clearfix">
                                    <span>Or Login With</span>
                                </div>
                            </form>
                            <div className="clearfix"></div>
                            <div className="social-list">
                                <a href="#" className="facebook-bg">
                                    <i className="fa fa-facebook"></i>
                                </a>
                                <a href="#" className="twitter-bg">
                                    <i className="fa fa-twitter"></i>
                                </a>
                                <a href="#" className="google-bg">
                                    <i className="fa fa-google"></i>
                                </a>
                                <a href="#" className="linkedin-bg">
                                    <i className="fa fa-linkedin"></i>
                                </a>
                            </div>
                            <p className="option">
                                Already a member? <a href="login.html">Login here</a>
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-6 bg-color-15 none-992 bg-img">
                        <div className="info clearfix">
                            <h1>
                                Welcome to <span>Hotel Alpha</span>
                            </h1>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                has been the industry's standard dummy text ever since the 1500s, when an unknown
                                printer took a galley of type and scrambled it to make a type unknown printer took a
                                galley of type and scrambled{' '}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AuthoSignUp;
