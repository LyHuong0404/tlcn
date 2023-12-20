import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import styles from './EditProfileDialog.module.scss';
import Image from '~/components/Image';
import { getProfile, updateProfile } from '~/actions/userActions';
import { toast } from 'react-toastify';
import Loading from '../Loading';
import { useTranslation } from 'react-i18next';

function EditProfileDialog({ onClose }) {
    const { t } = useTranslation();
    const [user, setUser] = useState({});
    const [isOpen, setIsOpen] = useState(true);
    const [loading, setLoading] = useState(false);
    const [filePreview, setFilePreview] = useState('');
    const [avatar, setAvatar] = useState('');
    const { register, handleSubmit } = useForm();

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

    const submitForm = async (data) => {
        let fullData;
        if (avatar !== '') {
            fullData = { ...data, avatarFile: avatar };
        } else {
            const avatarBlob = await fetch(user['avatar']).then((r) => r.blob());
            fullData = { ...data, avatarFile: avatarBlob };
        }

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
                    // window.location.reload();
                    toast.success(t('Update Profile successfully.'));
                    setIsOpen(!isOpen);
                }
                setLoading(false);
            };
            updateInfo();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <form onSubmit={handleSubmit(submitForm)}>
            {loading && <Loading />}
            <div className={`${isOpen ? styles.wrapper : styles.wrappernone}`}>
                <div className={styles.edit_form}>
                    <div className={styles.edit_form_overlay}></div>
                    <div className={styles.edit_form_body}>
                        <div className={styles.header}>
                            <strong className={styles.title}>{t('Edit Profile')}</strong>
                            <FontAwesomeIcon
                                icon={faXmark}
                                className={styles.icon_close}
                                disabled={loading}
                                onClick={() => {
                                    setIsOpen(false);
                                    onClose();
                                }}
                            />
                        </div>

                        <div className={styles.inner}>
                            <div className={styles.avatar_wrapper}>
                                <p className={styles.title_input}>{t('Profile photo')}</p>
                                <label>
                                    <Image
                                        className={styles.image}
                                        src={avatar ? filePreview : user.avatar}
                                        alt={user.username}
                                    />

                                    <i className={`fa fa-camera ${styles.icon_upload_avatar}`}></i>

                                    <input type="file" style={{ display: 'none' }} onChange={handleAvatar} />
                                </label>
                            </div>
                            <div className={styles.feild}>
                                <p className={styles.title_input}>{t('Username')}</p>
                                <input
                                    id="username"
                                    name="username"
                                    className={styles.input_value}
                                    defaultValue={user.username}
                                    readOnly={true}
                                />
                            </div>
                            <div className={styles.feild}>
                                <p className={styles.title_input}>{t('FullName')}</p>
                                <input
                                    className={styles.input_value}
                                    id="fullname"
                                    name="fullname"
                                    defaultValue={user.fullname}
                                    {...register('fullname')}
                                />
                            </div>

                            <div className={styles.feild}>
                                <p className={styles.title_input}>Email</p>
                                <input
                                    id="email"
                                    name="email"
                                    className={styles.input_value}
                                    readOnly={true}
                                    defaultValue={user.email}
                                />
                            </div>
                            <div className={styles.feild}>
                                <p className={styles.title_input}>{t('Phone')}</p>
                                <input
                                    id="phone"
                                    name="phone"
                                    className={styles.input_value}
                                    defaultValue={user.phone}
                                    {...register('phone')}
                                />
                            </div>
                        </div>

                        <div className={styles.footer}>
                            <button disabled={loading} type="submit" className={styles.button}>
                                {t('Save')}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
}

export default EditProfileDialog;
