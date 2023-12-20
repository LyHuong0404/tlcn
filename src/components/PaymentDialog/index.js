import React, { useState } from 'react';
import styles from './PaymentDialog.module.scss';
import Image from '../Image';
import images from '~/assets/images';
import { payment } from '~/actions/otherActions';
import { useSelector } from 'react-redux';
import { Input } from 'antd';
import { DollarOutlined, BarcodeOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';

function PaymentDialog({ onClose }) {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(true);
    const [amount, setAmount] = useState(null);

    const submitForm = (e) => {
        e.preventDefault();
        try {
            if (amount !== null) {
                const fetchData = async () => {
                    const rs = await payment(amount, "NCB");
                    if (rs?.success) {
                        window.open(rs?.data?.urlPayment, '_blank');
                        onClose();
                        setIsOpen(!isOpen);
                    }
                };
                fetchData();
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className={`${isOpen ? styles.wrapper : styles.wrapperclose}`}>
            <div className={styles.edit_form}>
                <div className={styles.edit_form_overlay}></div>
                <div className={styles.edit_form_body}>
                    <div className={styles.title}>
                        <h5>{t('Notifications')}</h5>
                    </div>
                    <div className={styles.content}>
                        <div className={styles.form_survey}>
                            <p style={{ textAlign: 'center', color: '#ed2a2a' }}>
                                {t('Your balance is not enough.')} <br />
                                {t('Please add more balance to continue!')}
                            </p>
                            <div className={styles.form_image}>
                                <Image src={images.paynow} />
                            </div>

                            <form>
                                <div className={styles.input_text}>
                                    <Input
                                        style={{ marginBottom: '10px', width: '70%' }}
                                        placeholder={t('Amount')}
                                        prefix={<DollarOutlined />}
                                        value={amount}
                                        onChange={(e) => setAmount(e.target.value)}
                                    />
                                    <Input
                                        style={{ width: '70%' }}
                                        placeholder={t('BankCode')}
                                        prefix={<BarcodeOutlined />}
                                        value="NCB"
                                        readOnly
                                    />
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'center' }}>
                                    <button onClick={submitForm} className={styles.btn_submit}>
                                        {t('Send')}
                                    </button>
                                    <button
                                        className={styles.btn_cancel}
                                        onClick={() => {
                                            onClose();
                                            setIsOpen(!isOpen);
                                        }}
                                    >
                                        {t('Cancel')}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PaymentDialog;
