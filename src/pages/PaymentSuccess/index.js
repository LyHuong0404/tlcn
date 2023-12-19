import Image from '~/components/Image';
import styles from './PaymentSuccess.module.scss';
import images from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMailBulk, faPhone } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function PaymentSuccess() {
    const { t } = useTranslation();
    return (
        <div className={styles.wrapper}>
            <div className={styles.edit_form}>
                <div className={styles.edit_form_overlay}></div>
                <div className={styles.edit_form_body}>
                    <div className={styles.header}>
                        <Image src={images.vnpay} />
                    </div>

                    <div className={styles.inner}>
                        <div className={styles.icon_status}>
                            <Image src={images.payment_success} style={{ width: '45px', height: '45px' }} />
                        </div>
                        <p className={styles.message}>{t('Payment Successfull!')}</p>
                        {/* <Link to="/">
                            <button className={styles.button}>Back Home</button>
                        </Link> */}
                    </div>

                    <div className={styles.footer}>
                        <div style={{ display: 'flex' }}>
                            <FontAwesomeIcon icon={faPhone} className={styles.icon_contact} />
                            <p className={styles.text_contact}>1900.5555.77</p>
                        </div>
                        <div style={{ display: 'flex' }}>
                            <FontAwesomeIcon icon={faMailBulk} className={styles.icon_contact} />
                            <p className={styles.text_contact}>hotrovnpay@vnpay.vn</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PaymentSuccess;
