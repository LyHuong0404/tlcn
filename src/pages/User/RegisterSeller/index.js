import { useForm, Controller } from 'react-hook-form';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getCode, registerSeller } from '~/actions/userActions';
import { getDistricts, getWards } from '~/actions/addressActions';
import Select from 'react-select';
import Loading from '~/components/Loading';
import { toast } from 'react-toastify';
import Image from '~/components/Image';
import images from '~/assets/images';

const customStyles = {
    control: (provided) => ({
        ...provided,
        width: '460px',
        height: '35px',
        alignContent: 'center',
    }),
};

function RegisterSeller() {
    const navigate = useNavigate();
    const {
        control,
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const { provins } = useSelector((state) => state.provins);
    const [districts, setDistricts] = useState([]);
    const [wards, setWards] = useState([]);
    const [active, setActive] = useState(1);
    const [dataSubmit, setDataSubmit] = useState('');
    const [loading, setLoading] = useState(false);

    const handleChangeProvince = (e) => {
        const fetchData = async () => {
            const result = await getDistricts(e.code);
            const districtOptions = result?.map((district) => ({
                code: district.code,
                label: district.name,
                value: district.name,
            }));
            setDistricts(districtOptions);
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
            setWards(wardOptions);
        };
        fetchData();
    };

    const onSubmitToGetCode = (data) => {
        setDataSubmit(data);
        try {
            const callAPI = async () => {
                await getCode();
                setActive(2);
            };
            callAPI();
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleRegisterSeller = () => {
        const code = dataSubmit.code;
        const phone = dataSubmit.phone;
        const fullname = dataSubmit.fullname;
        const addressDetail = dataSubmit.addressDetail;
        const wardCode = dataSubmit.wardCode.code;
        try {
            const request = async () => {
                setLoading(true);
                const rs = await registerSeller({ code, phone, fullname, addressDetail, wardCode });
                if (rs?.status) {
                    toast.success('Registered as a seller successfully.');
                    navigate('/seller/dashboard');
                }
                setLoading(false);
            };

            request();
        } catch (error) {
            console.log(error);
        }
    };

    const provinceOptions = provins.map((province) => ({
        code: province.code,
        label: province.name,
        value: province.name,
    }));

    return (
        <>
            {loading && <Loading />}
            {active === 1 ? (
                <form onSubmit={handleSubmit(onSubmitToGetCode)}>
                    <div className="htlfndr-user-panel col-md-9 col-sm-8 htlfndr-setting-page" id="htlfndr-user-tab-5">
                        <h3>Set up your seller information</h3>
                        <div className="row" style={{ marginTop: '25px' }}>
                            <div className="col-xs-6 col-sm-6 col-md-6">
                                <label for="htlfndr-first-adult-name" className="htlfndr-required htlfndr-top-label">
                                    Address
                                </label>

                                <Select
                                    id="selectOption"
                                    options={provinceOptions || []}
                                    placeholder="Select a province..."
                                    issearchable="true"
                                    styles={customStyles}
                                    onChange={handleChangeProvince}
                                />
                            </div>
                        </div>
                        <div className="row" style={{ marginTop: '15px' }}>
                            <div className="col-xs-6 col-sm-6 col-md-6">
                                <Select
                                    id="selectOption"
                                    options={districts || []}
                                    placeholder="Select a district..."
                                    issearchable="true"
                                    styles={customStyles}
                                    onChange={handleChangeDistrict}
                                />
                            </div>
                        </div>
                        <div className="row" style={{ marginTop: '15px' }}>
                            <div className="col-xs-6 col-sm-6 col-md-6">
                                <Controller
                                    name="wardCode"
                                    control={control}
                                    render={({ field }) => (
                                        <Select
                                            id="selectOption"
                                            options={wards || []}
                                            placeholder="Select a ward"
                                            issearchable="true"
                                            styles={customStyles}
                                            {...field}
                                        />
                                    )}
                                />
                            </div>
                        </div>
                        <div className="row" style={{ marginTop: '15px' }}>
                            <div className="col-xs-6 col-sm-6 col-md-6">
                                <label for="htlfndr-first-adult-name" className="htlfndr-required htlfndr-top-label">
                                    Detailed Address
                                </label>
                                <input
                                    id="htlfndr-first-adult-name1"
                                    name="htlfndr-first-adult-name1"
                                    className={`htlfndr-input ${errors.addressDetail ? 'status-error' : ''}`}
                                    {...register('addressDetail', { required: true })}
                                />
                                {errors.addressDetail && (
                                    <div style={{ textAlign: 'left' }}>
                                        <label className="error-message">Address Detail is required.</label>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="row" style={{ marginTop: '15px', marginBottom: '26px' }}>
                            <div className="col-xs-6 col-sm-6 col-md-6">
                                <label for="htlfndr-first-adult-name" className="htlfndr-required htlfndr-top-label">
                                    Phone Number
                                </label>
                                <input
                                    type="number"
                                    id="htlfndr-first-adult-name2"
                                    name="htlfndr-first-adult-name2"
                                    className={`htlfndr-input ${errors.phone ? 'status-error' : ''}`}
                                    {...register('phone', { required: true })}
                                />
                                {errors.phone && (
                                    <div style={{ textAlign: 'left' }}>
                                        <label className="error-message">Phone is required.</label>
                                    </div>
                                )}
                            </div>
                            <div className="col-xs-6 col-sm-6 col-md-6">
                                <label
                                    for="htlfndr-first-adult-last-name"
                                    className="htlfndr-required htlfndr-top-label"
                                >
                                    Fullname
                                </label>
                                <input
                                    type="text"
                                    id="htlfndr-first-adult-last-name3"
                                    name="htlfndr-first-adult-last-name3"
                                    className={`htlfndr-input ${errors.fullname ? 'status-error' : ''}`}
                                    {...register('fullname', { required: true })}
                                />
                                {errors.fullname && (
                                    <div style={{ textAlign: 'left' }}>
                                        <label className="error-message">Fullname is required.</label>
                                    </div>
                                )}
                            </div>
                        </div>

                        <p>
                            Please fill in all information and we will send a confirmation code to the email you
                            registered your account with.
                        </p>
                        <button className="htlfndr-register-now" type="submit">
                            REGISTER SELLER
                        </button>
                    </div>
                </form>
            ) : (
                <form onSubmit={handleSubmit(handleRegisterSeller)}>
                    <div className="htlfndr-user-panel col-md-9 col-sm-8 htlfndr-setting-page" id="htlfndr-user-tab-5">
                        <h3>Set up your seller information</h3>

                        <div className="row" style={{ marginTop: '15px' }}>
                            <div className="col-xs-6 col-sm-6 col-md-6">
                                <p>
                                    We have sent the verification code to your email. <br />
                                    Please check and fill in to register seller.
                                </p>
                                < br/>
                                < br/>
                                < br/>
                                < br/>
                                <label for="htlfndr-first-adult-name" className="htlfndr-required htlfndr-top-label">
                                    Code
                                </label>
                                <input
                                    id="htlfndr-first-adult-name5"
                                    name="htlfndr-first-adult-name5"
                                    placeholder="Enter code"
                                    className={`htlfndr-input ${errors.code ? 'status-error' : ''}`}
                                    {...register('code', { required: true })}
                                />
                                {errors.code && (
                                    <div style={{ textAlign: 'left' }}>
                                        <label className="error-message">Code is required.</label>
                                    </div>
                                )}
                                <button className="htlfndr-register-now" type="submit">
                                    SUBMIT
                                </button>
                            </div>
                            <div className="col-xs-6 col-sm-6 col-md-6">
                                <Image src={images.email} />
                            </div>
                        </div>
                    </div>
                </form>
            )}
        </>
    );
}

export default RegisterSeller;
