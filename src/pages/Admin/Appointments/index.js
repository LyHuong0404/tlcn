/* eslint-disable array-callback-return */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { DatePicker } from 'antd';
import Image from '~/components/Image';
import styles from './Appointments.module.scss';
import Pagination from '@mui/material/Pagination';
import { useEffect, useState } from 'react';
import { AllAppointments } from '~/actions/adminActions';
import { format, addDays } from 'date-fns';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import config from '~/config';
import 'react-tooltip/dist/react-tooltip.css';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const { RangePicker } = DatePicker;

function Appointments() {
    const { t } = useTranslation();
    const [data, setData] = useState([]);
    const [totalPage, setTotalPage] = useState(0);
    const [pageIndex, setPageIndex] = useState(0);
    const [pageSize, setPageSize] = useState(10);
    const [status, setStatus] = useState(undefined);
    const [totalElement, setTotalElement] = useState(0);
    const [startDate, setStartDate] = useState(format(new Date().setDate(new Date().getDate() - 7), 'yyyy-MM-dd'));
    const [endDate, setEndDate] = useState(format(addDays(new Date(), 10), 'yyyy-MM-dd'));
    const defaultDateRange = [dayjs().subtract(7, 'day'), dayjs(endDate)];

    const handleChangePageSize = (e) => {
        setPageSize(e.target.value);
        setPageIndex(0);
    };

    useEffect(() => {
        try {
            const fetchData = async () => {
                const rs = await AllAppointments(pageIndex, pageSize, status, startDate, endDate);
                rs?.content?.map((element) => {
                    element.day = format(new Date(element.day), 'dd-MM-yyyy');
                    element.time = format(new Date(`2000-01-01T${element.time}`), 'HH:mm');
                });
                setData(rs?.content);
                setTotalPage(rs?.totalPage);
                setTotalElement(rs?.totalElement);
            };
            fetchData();
        } catch (error) {
            console.log(error);
        }
    }, [pageIndex, pageSize, status, startDate, endDate]);

    const handleSetPage = (event, page) => {
        setPageIndex(page - 1);
        window.scrollTo({ top: 200, behavior: 'smooth' });
    };

    const handleChangeStatus = (e) => {
        if (e.target.value !== '' && e.target.value !== 'all') {
            setStatus(e.target.value.toUpperCase());
        } else {
            setStatus(undefined);
        }
    };

    const getStatusColor = (status) => {
        if (status === 'REQUEST') {
            return 'orange';
        } else if (status === 'CONFIRM') {
            return '#117e11';
        } else {
            return '#ed2a2a';
        }
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
                                <h1>{t('Appointments')}</h1>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="breadcrumb">
                                <div className="breadcrumb-item">
                                    <i className="fas fa-angle-right"></i>
                                    <a>{t('Appointments')}</a>
                                </div>
                                <div className="breadcrumb-item active">
                                    <i className="fas fa-angle-right"></i>
                                    {t('Appointment List')}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="box">
                        <div className="row no-gutters">
                            <div className="col text-left">
                                <div className="add-new">
                                    <Link to="/admin/adduser">
                                        {t('Add New')}
                                        <i className="fas fa-plus"></i>
                                    </Link>
                                </div>
                            </div>
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
                                        <RangePicker
                                            format="DD-MM-YYYY"
                                            defaultValue={defaultDateRange}
                                            onChange={handleDateChange}
                                            style={{ height: '38px', marginRight: '20px' }}
                                        />
                                        <label>
                                            {t('Status')}:
                                            <select
                                                name="example_length"
                                                aria-controls="example"
                                                className={styles.custom_status}
                                                onChange={handleChangeStatus}
                                            >
                                                <option value="all">{t('All')}</option>
                                                <option value="request">{t('Request')}</option>
                                                <option value="confirm">{t('Confirm')}</option>
                                                <option value="reject">{t('Reject')}</option>
                                            </select>
                                            {/* Search:
                                            <input
                                                type="search"
                                                className={styles.custom_search}
                                                aria-controls="example"
                                                value={keyword}
                                                onChange={handleChangeKeyWord}
                                            /> */}
                                        </label>
                                    </div>
                                </div>
                                <table id="example" className="display table-hover table-responsive-xl listing">
                                    <thead>
                                        <tr>
                                            <th>#ID</th>
                                            <th>{t('User')}</th>
                                            <th>{t('Owner')}</th>
                                            <th>{t('Room')}</th>
                                            <th>{t('Date')}</th>
                                            <th>{t('Time')}</th>
                                            <th>{t('Status')}</th>
                                            <th>{t('Action')}</th>
                                        </tr>
                                    </thead>
                                    <tbody style={{ backgroundColor: '#f9f9f9' }}>
                                        {data?.map((appointment, index) => (
                                            <tr key={index}>
                                                <td>{appointment.id}</td>
                                                <td>
                                                    <div>
                                                        <Link
                                                            to={config.authRoutes.getUserAppointmentsLink(
                                                                appointment.user.id,
                                                            )}
                                                        >
                                                            <Image
                                                                src={appointment.user.avatar}
                                                                alt={appointment.user.username}
                                                                className="img-fluid rounded-circle"
                                                                style={{ height: '37px', width: '40px' }}
                                                            />
                                                        </Link>
                                                    </div>
                                                </td>
                                                <td>
                                                    <Image
                                                        src={appointment.owner.avatar}
                                                        alt={appointment.owner.username}
                                                        className="img-fluid rounded-circle"
                                                        style={{ height: '37px', width: '40px' }}
                                                    />
                                                </td>
                                                <td>
                                                    <Image
                                                        src={appointment.room.avatarUrl}
                                                        alt={appointment.room.subject}
                                                        className="img-fluid rounded-circle"
                                                        style={{ height: '37px', width: '40px' }}
                                                    />
                                                </td>
                                                <td>{appointment.day}</td>
                                                <td>{appointment.time}</td>
                                                <td
                                                    style={{
                                                        color: getStatusColor(appointment.status),
                                                    }}
                                                >
                                                    {appointment.status}
                                                </td>
                                                <td>
                                                    <a>
                                                        <i className="fas fa-trash"></i>
                                                    </a>
                                                </td>
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

export default Appointments;
