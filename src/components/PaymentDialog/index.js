import React, { useState } from 'react';
import styles from './PaymentDialog.module.scss';
import Image from '../Image';
import images from '~/assets/images';
import { payment } from '~/actions/otherActions';
import { useSelector } from 'react-redux';
import { Input } from 'antd';
import { DollarOutlined, BarcodeOutlined } from '@ant-design/icons';

function PaymentDialog({ onClose }) {
    const { user } = useSelector((state) => state.auth);
    const [isOpen, setIsOpen] = useState(true);
    const [amount, setAmount] = useState(null);
    const [bankCode, setBankCode] = useState(null);

    const submitForm = (e) => {
        console.log(1);
        e.preventDefault();
        try {
            if (amount !== null && bankCode !== null) {
                const fetchData = async () => {
                    const rs = await payment(amount, bankCode);
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
                        <h5>Notifications</h5>
                    </div>
                    <div className={styles.content}>
                        <div className={styles.form_survey}>
                            <p style={{ textAlign: 'center', color: '#ed2a2a' }}>
                                Your balance is not enough. <br />
                                Please add more balance to continue!
                            </p>
                            <div className={styles.form_image}>
                                <Image src={images.paynow} />
                            </div>

                            <form>
                                <div className={styles.input_text}>
                                    <Input
                                        style={{ marginBottom: '10px', width: '70%' }}
                                        placeholder="Amount"
                                        prefix={<DollarOutlined />}
                                        value={amount}
                                        onChange={(e) => setAmount(e.target.value)}
                                    />
                                    <Input
                                        style={{ width: '70%' }}
                                        placeholder="BankCode"
                                        prefix={<BarcodeOutlined />}
                                        onChange={(e) => setBankCode(e.target.value)}
                                    />
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'center' }}>
                                    <button onClick={submitForm} className={styles.btn_submit}>
                                        Send
                                    </button>
                                    <button
                                        className={styles.btn_cancel}
                                        onClick={() => {
                                            onClose();
                                            setIsOpen(!isOpen);
                                        }}
                                    >
                                        Cancel
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
