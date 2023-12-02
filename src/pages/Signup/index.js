/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
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
import { signup } from '~/actions/authActions';

function Signup() {
    const { error, success } = useSelector((state) => state.auth);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { register, handleSubmit } = useForm();

    useEffect(() => {
        if (success) {
            navigate('/login');
        }
    }, [navigate, success]);

    const submitForm = (data) => {
        dispatch(signup(data));
    };
    return (
        <div className="login-section">
            <div className="container-fluid">
                <div className="row login-box">
                    <div className="col-lg-6 align-self-center form-section">
                        <div className="form-inner">
                            <a href="index.html" className="logo">
                                <Image src="img/logos/logo.png" alt="logo" />
                            </a>
                            <h3>Create an account</h3>
                            {error && <p style={{ color: '#ed2a2a', fontSize: '17px' }}>{error}</p>}
                            <form onSubmit={handleSubmit(submitForm)}>
                                <div className="form-group clearfix">
                                    <input
                                        name="name"
                                        type="text"
                                        className="form-control"
                                        placeholder="Username"
                                        aria-label="Username"
                                        {...register('username', { required: true })}
                                    />
                                </div>
                                <div className="form-group clearfix">
                                    <input
                                        name="password"
                                        type="password"
                                        className="form-control"
                                        placeholder="Password"
                                        aria-label="Password"
                                        autoComplete="username"
                                        {...register('password', { required: true })}
                                    />
                                </div>
                                <div className="form-group checkbox clearfix">
                                    <div className="form-check checkbox-theme float-start">
                                        <input className="form-check-input" type="checkbox" id="agree" />
                                        <label className="form-check-label" htmlFor="agree">
                                            I agree to the
                                            <a href="#" className="terms">
                                                terms of service
                                            </a>
                                        </label>
                                    </div>
                                </div>
                                <div className="form-group clearfix">
                                    <button type="submit" className="btn-md btn-theme w-100">
                                        Register
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

export default Signup;
