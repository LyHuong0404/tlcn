/* eslint-disable jsx-a11y/anchor-is-valid */
import styles from './Payment.module.scss';
import Pagination from '@mui/material/Pagination';
import { useEffect, useState } from 'react';
import { AllPayments } from '~/actions/adminActions';
import { format } from 'date-fns';
import { DatePicker } from 'antd';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import { useTranslation } from 'react-i18next';
const { RangePicker } = DatePicker;

function Payment() {
    const { t } = useTranslation();
    const [data, setData] = useState([]);
    const [totalPage, setTotalPage] = useState(0);
    const [pageIndex, setPageIndex] = useState(0);
    const [pageSize, setPageSize] = useState(10);
    const [totalElement, setTotalElement] = useState(0);
    const [startDate, setStartDate] = useState(format(new Date().setDate(new Date().getDate() - 7), 'yyyy-MM-dd'));
    const [endDate, setEndDate] = useState(format(new Date(), 'yyyy-MM-dd'));
    const defaultDateRange = [dayjs().subtract(7, 'day'), dayjs(endDate)];

    const handleChangePageSize = (e) => {
        setPageSize(e.target.value);
        setPageIndex(0);
    };

    useEffect(() => {
        try {
            const fetchData = async () => {
                const rs = await AllPayments(pageIndex, pageSize, startDate, endDate);
                rs?.content?.map((element) => {
                    element.payDate = format(new Date(element.payDate), 'dd-MM-yyyy');
                    element.payTime = format(new Date(`2000-01-01T${element.payTime}`), 'HH:mm');
                });
                setData(rs?.content);
                setTotalPage(rs?.totalPage);
                setTotalElement(rs?.totalElement);
            };
            fetchData();
        } catch (error) {
            console.log(error);
        }
    }, [pageIndex, pageSize, startDate, endDate]);

    const handleSetPage = (event, page) => {
        setPageIndex(page - 1);
        window.scrollTo({ top: 200, behavior: 'smooth' });
    };

    const handleDateChange = (dates) => {
        setStartDate(format(dates[0].$d, 'yyyy-MM-dd'));
        setEndDate(format(dates[1].$d, 'yyyy-MM-dd'));
    };

    return (
        <section>
            <div className="content listing-content users-list">
                <div className="in-content-wrapper">
                    <div className="row no-gutters">
                        <div className="col display-header">
                            <div className="heading-messages">
                                <h1>{t('Payments')}</h1>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="breadcrumb">
                                <div className="breadcrumb-item">
                                    <i className="fas fa-angle-right"></i>
                                    <a>{t('Payments')}</a>
                                </div>
                                <div className="breadcrumb-item active">
                                    <i className="fas fa-angle-right"></i>
                                    {t('Payment List')}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="box">
                        <div className="row no-gutters">
                            {/* <div className="col text-left">
                                <div className="add-new">
                                    <Link to="/admin/adduser">
                                        Add New<i className="fas fa-plus"></i>
                                    </Link>
                                </div>
                            </div> */}
                            <div className="col text-right">
                                {/* <div className="tools-btns">
                                    <a>
                                        <i
                                            className="fas fa-print"
                                            data-toggle="tooltip"
                                            data-html="true"
                                            title="Print"
                                        ></i>
                                    </a>
                                    <a>
                                        <i
                                            className="fas fa-file-pdf"
                                            data-toggle="tooltip"
                                            data-html="true"
                                            title="Pdf"
                                        ></i>
                                    </a>
                                    <a>
                                        <i
                                            className="fas fa-file-excel"
                                            data-toggle="tooltip"
                                            data-html="true"
                                            title="Excel"
                                        ></i>
                                    </a>
                                </div> */}
                            </div>
                        </div>
                        <div className="row no-gutters">
                            <div className="col">
                                <div className="custom-display">
                                    <div className="dataTables_length" id="example_length">
                                        <label style={{ marginRight: '10px' }}>
                                            {t('Show')}
                                            <select
                                                name="example_length"
                                                aria-controls="example"
                                                className={styles.custom_select}
                                                onChange={handleChangePageSize}
                                            >
                                                <option value="10">10</option>
                                                <option value="20">20</option>
                                                <option value="30">30</option>
                                            </select>
                                            {t('entries')}
                                        </label>
                                    </div>

                                    <div id="example_filter" className="dataTables_filter">
                                        {/* <RangePicker
                                            format="DD-MM-YYYY"
                                            defaultValue={defaultDateRange}
                                            onChange={handleDateChange}
                                            style={{ height: '38px', marginRight: '20px' }}
                                        /> */}
                                    </div>
                                </div>
                                <table id="example" className="display table-hover table-responsive-xl listing">
                                    <thead>
                                        <tr>
                                            <th>#ID</th>
                                            <th>Bank Code</th>
                                            <th>TranNo</th>
                                            <th>TransactionNo</th>
                                            <th>{t('Date')}</th>
                                            <th>{t('Time')}</th>
                                            <th>{t('Amount')}</th>
                                            <th>UserId</th>
                                            <th>Username</th>
                                        </tr>
                                    </thead>
                                    <tbody style={{ backgroundColor: '#f9f9f9' }}>
                                        {data?.map((payment, index) => (
                                            <tr key={index}>
                                                <td>{payment.id}</td>
                                                <td>{payment.bankCode}</td>
                                                <td>{payment.bankTranNo}</td>
                                                <td>{payment.transactionNo}</td>
                                                <td>{payment.payDate}</td>
                                                <td>{payment.payTime}</td>
                                                <td>{payment.amount}</td>
                                                <td>{payment.userId}</td>
                                                <td>{payment.username}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                <div
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        margin: '25px 40px 40px 40px',
                                    }}
                                >
                                    <div
                                        className="dataTables_info"
                                        id="example_info"
                                        role="status"
                                        aria-live="polite"
                                        style={{ fontSize: '16px', color: '#333' }}
                                    >
                                        {t('Total')} {totalElement}
                                    </div>
                                    {totalPage > 1 && (
                                        <div
                                            className="dataTables_paginate paging_simple_numbers"
                                            id="example_paginate"
                                        >
                                            <Pagination
                                                count={totalPage}
                                                color="primary"
                                                sx={{
                                                    '& .MuiPaginationItem-page': {
                                                        fontSize: '14px',
                                                    },
                                                }}
                                                onChange={handleSetPage}
                                            />
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Payment;
