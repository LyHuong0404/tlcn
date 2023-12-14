/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { updateProfile, getProfile } from '~/actions/userActions';
import Loading from '~/components/Loading';

function Setting() {
    const [user, setUser] = useState({});
    const { register, handleSubmit } = useForm();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await getProfile();
                setUser(result);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, []);

    const submitForm = async (data) => {
        const avatarBlob = await fetch(user['avatar']).then((r) => r.blob());
        let fullData = { ...data, avatarFile: avatarBlob };

        const formData = new FormData();
        for (const key in fullData) {
            if (fullData[key] === '') {
                fullData[key] = user[key];
            }
            formData.append(key, fullData[key]);
        }

        try {
            const updateInfo = async () => {
                setLoading(true);
                const result = await updateProfile(formData);
                if (result?.success) {
                    toast.success('Profile updated successfully.');
                } else {
                    toast.error('Profile updated unsuccessfully.');
                }
                setLoading(false);
            };
            updateInfo();
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div className="sb2-2">
            {loading && <Loading />}
            <div className="sb2-2-2">
                <ul>
                    <li>
                        <a>
                            <i className="fa fa-home" aria-hidden="true"></i> Home
                        </a>
                    </li>
                    <li className="active-bre">
                        <a> Profile</a>
                    </li>
                </ul>
            </div>
            <div className="sb2-2-3">
                <div className="row">
                    <div className="col-md-12">
                        <div className="box-inn-sp">
                            <div className="inn-title">
                                <h4>Setting</h4>
                            </div>
                            <div className="tab-inn">
                                <form onSubmit={handleSubmit(submitForm)}>
                                    <div className="row">
                                        <div className="input-field col s6">
                                            <br />
                                            <input
                                                id="username"
                                                type="text"
                                                defaultValue={user?.username}
                                                style={{ height: '3rem' }}
                                                className="validate"
                                                readOnly={true}
                                                {...register('username')}
                                            />
                                            <label htmlFor="username">Username</label>
                                        </div>
                                        <div className="input-field col s6">
                                            <br />
                                            <input
                                                id="email"
                                                type="text"
                                                defaultValue={user?.email}
                                                style={{ height: '3rem' }}
                                                className="validate"
                                                {...register('email')}
                                            />
                                            <label htmlFor="email">Email</label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="input-field col s6">
                                            <br />
                                            <input
                                                id="fullname"
                                                type="text"
                                                defaultValue={user?.fullname}
                                                style={{ height: '3rem' }}
                                                className="validate"
                                                {...register('fullname')}
                                            />
                                            <label htmlFor="fullname">Fullname</label>
                                        </div>
                                        <div className="input-field col s6">
                                            <br />
                                            <input
                                                id="phone"
                                                type="text"
                                                defaultValue={user?.phone}
                                                style={{ height: '3rem' }}
                                                className="validate"
                                                {...register('phone')}
                                            />
                                            <label htmlFor="phone">Phone</label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="input-field col s6">
                                            <br />
                                            <input
                                                id="password"
                                                type="password"
                                                defaultValue="aksdjfhasdf"
                                                style={{ height: '3rem' }}
                                                className="validate"
                                            />
                                            <label htmlFor="password">Password</label>
                                        </div>
                                        <div className="input-field col s6">
                                            <br />
                                            <input
                                                id="password1"
                                                type="password"
                                                defaultValue="asdfaefrerfg"
                                                style={{ height: '3rem' }}
                                                className="validate"
                                            />
                                            <label htmlFor="password1">Confirm Password</label>
                                        </div>
                                    </div>

                                    {/* <div className="row">
                                        <div className="input-field col s12">
                                            <br />
                                            <input
                                                id="email"
                                                type="email"
                                                value="marshahi@mail.com"
                                                style={{ height: '3rem' }}
                                                className="validate"
                                            />
                                            <label htmlFor="email">Email</label>
                                        </div>
                                        <div className="input-field col s12">
                                            <br />
                                            <input
                                                id="email1"
                                                type="email"
                                                value="marshahi@mail.com"
                                                style={{ height: '3rem' }}
                                                className="validate"
                                            />
                                            <label htmlFor="email1">Alternate Email</label>
                                        </div>
                                    </div> */}
                                    <div className="row">
                                        <div className="input-field col s12">
                                            <input type="submit" className="waves-effect waves-light btn-large" />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Setting;
