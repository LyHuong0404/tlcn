/* eslint-disable jsx-a11y/anchor-is-valid */
import Image from '~/components/Image';
import { useState, useEffect } from 'react';
import styles from './EditProfile.module.scss';

function EditProfile() {
    const [filePreview, setFilePreview] = useState('');
    const [avatar, setAvatar] = useState('');

    useEffect(() => {
        return () => {
            avatar && URL.revokeObjectURL(avatar);
        };
    }, [avatar]);

    const handleAvatar = (e) => {
        const src = URL.createObjectURL(e.target.files[0]);
        setFilePreview(src);
        setAvatar(e.target.files[0]);
    };
    return (
        <section>
            <div className="content add-details profile">
                <div className="in-content-wrapper">
                    <div className="row no-gutters">
                        <div className="col" style={{ display: 'flex', alignItems: 'center' }}>
                            <div className="heading-messages">
                                <h1>Profile</h1>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="breadcrumb" style={{ fontSize: '16px' }}>
                                <div className="breadcrumb-item">
                                    <i className="fas fa-angle-right"></i>
                                    <a href="#">Profile</a>
                                </div>
                                <div className="breadcrumb-item active">
                                    <i className="fas fa-angle-right"></i>Edit Profile
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="box" >
                        <div className="row" >
                            <div className="col">
                                <div className="details-text" >
                                    <h1>Edit Profile Details</h1>
                                </div>
                            </div>
                        </div>
                        <div className="hotel-listing-form">
                            <form className="text-center">
                                <div className="row">
                                    <div className="col-sm-8">
                                        <div className="form-row">
                                            <div className="col-md">
                                                <div className="form-group">
                                                    <label htmlFor="to" className="">
                                                        Name:
                                                    </label>
                                                    <input type="text" className="form-control" required id="to" />
                                                </div>
                                            </div>
                                            <div className="col-md">
                                                <div className="form-group">
                                                    <label htmlFor="to1" className="">
                                                        Last Name
                                                    </label>
                                                    <input type="text" className="form-control" required id="to1" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="form-row">
                                            <div className="col-md">
                                                <div className="form-group">
                                                    <label htmlFor="to2" className="">
                                                        Telephone # :
                                                    </label>
                                                    <input type="text" className="form-control" required id="to2" />
                                                </div>
                                            </div>
                                            <div className="col-md">
                                                <div className="form-group">
                                                    <label htmlFor="to3" className="">
                                                        Email:
                                                    </label>
                                                    <input type="text" className="form-control" required id="to3" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <textarea
                                                className="form-control textarea text-left p-3 h-100"
                                                id="exampleFormControlTextarea1"
                                                rows="5"
                                                placeholder="Room Details"
                                            ></textarea>
                                        </div>
                                        <ul className="list-inline">
                                            <li className="list-inline-item">
                                                <button type="submit" className="btn" >
                                                    Submit
                                                </button>
                                            </li>
                                            <li className="list-inline-item">
                                                <button type="submit" className="btn">
                                                    Cancel
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col">
                                        <div className="upload-photo-wrapper">
                                            <div className="upload-heading">
                                                <h5>Your Photo</h5>
                                            </div>

                                            <div className="dz-message">
                                                <div
                                                    className={`needsclick dz-clickable ${
                                                        avatar ? '' : 'dropzone background_avatar'
                                                    }`}
                                                    id="demo-upload"
                                                >
                                                    <div className="dz-message">
                                                        {avatar ? (
                                                            <label>
                                                                <Image
                                                                    className={styles.image}
                                                                    src={avatar ? filePreview : ''}
                                                                    // src={avatar ? filePreview : currentUser.avatar}
                                                                    alt="avatar"
                                                                />
                                                                <input
                                                                    type="file"
                                                                    style={{ display: 'none' }}
                                                                    onChange={handleAvatar}
                                                                />
                                                            </label>
                                                        ) : (
                                                            <label>
                                                                <input
                                                                    type="file"
                                                                    style={{ display: 'none' }}
                                                                    onChange={handleAvatar}
                                                                />
                                                                <p>Drop files here or click to upload. </p>
                                                            </label>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default EditProfile;
