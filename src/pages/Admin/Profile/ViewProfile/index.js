/* eslint-disable jsx-a11y/anchor-is-valid */
import Image from '~/components/Image';
import { useState, useEffect } from 'react';
import styles from './ViewProfile.module.scss';

function ViewProfile() {
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
            <div className="content profile view-profile">
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
                                <i className="fas fa-angle-right"></i>View Profile
                            </div>
                        </div>
                    </div>
                </div>
                <div className="box" style={{ fontSize: '16px' }}>
                    <div className="row">
                        <div className="col">
                            <div className="details-text">
                                <h1>Profile Details</h1>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-8">
                            <div className="profile-padding">
                                <div className="row">
                                    <div className="col-sm-6 col-5">
                                        <div className="heading-part">
                                            <p htmlFor="Name">Name:</p>

                                            <p htmlFor="LastName">Last Name:</p>

                                            <p htmlFor="inputPassword4">Telephone:</p>

                                            <p htmlFor="inputEmail4">Email:</p>
                                        </div>
                                    </div>

                                    <div className="col-sm-6 col-7">
                                        <div className="details-part">
                                            <p>John</p>

                                            <p>Doe</p>

                                            <p>9200222934</p>

                                            <p>johndoe@yahoo.com</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="personal-info" style={{ fontSize: '16px' }}>
                                    <h3 htmlFor="examplehtmlFormControlTextarea1" style={{ marginLeft: '20px' }}>
                                        Details
                                    </h3>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos labore enim
                                        maiores beatae. Magni asperiores necessitatibus saepe eaque reprehenderit.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="upload-photo-wrapper">
                                <div className="upload-heading">
                                    <h5>Photo</h5>
                                </div>

                                <div
                                    className={`needsclick dz-clickable ${avatar ? '' : 'dropzone background_avatar'}`}
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
                                                <h1>
                                                    <i className="fas fa-camera"></i>
                                                </h1>
                                            </label>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ViewProfile;
