/* eslint-disable jsx-a11y/anchor-is-valid */
import { Pagination } from '@mui/material';
import { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ConfirmDialog from '~/components/ConfirmDialog';
import Image from '~/components/Image';
import {
    getAllAppointment,
    confirmAppointment,
    rejectAppointment,
    OKAppointment,
    CancelAppointment,
} from '~/actions/sellerActions';
import { DatePicker, Select, Space } from 'antd';
import { format } from 'date-fns';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import config from '~/config';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import { useTranslation } from 'react-i18next';
const { RangePicker } = DatePicker;

const status = [
    { id: 1, value: 'ALL', label: 'ALL' },
    { id: 2, value: 'REQUEST', label: 'REQUEST' },
    { id: 3, value: 'CONFIRM', label: 'CONFIRM' },
    { id: 4, value: 'REJECT', label: 'REJECT' },
];

function Appointments() {
    const { t } = useTranslation();
    const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
    const [roomId, setRoomId] = useState();
    const [appointments, setAppointments] = useState([]);
    const [totalPage, setTotalPage] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);
    const [totalElement, setTotalElement] = useState(0);
    const [statusFilter, setStatusFilter] = useState('ALL');
    const [startDate, setStartDate] = useState(format(new Date().setDate(new Date().getDate() - 7), 'yyyy-MM-dd'));
    const [endDate, setEndDate] = useState(format(new Date(), 'yyyy-MM-dd'));
    const defaultDateRange = [dayjs().subtract(7, 'day'), dayjs(endDate)];

    const getAllAppointments = useCallback(
        (currentPage, startDate, endDate, statusFilter) => {
            try {
                const fetchData = async () => {
                    const result = await getAllAppointment(currentPage, startDate, endDate, statusFilter);
                    result?.content?.map((element) => {
                        element.day = format(new Date(element.day), 'dd-MM-yyyy');
                        element.time = format(new Date(`2000-01-01T${element.time}`), 'HH:mm');
                    });
                    setTotalElement(result.totalElement);
                    setAppointments(result.content);
                    setTotalPage(result.totalPage);
                };
                fetchData();
            } catch (error) {
                console.log(error);
            }
        },
        [currentPage, startDate, endDate, statusFilter],
    );

    useEffect(() => {
        getAllAppointments(currentPage, startDate, endDate, statusFilter);
    }, [currentPage, getAllAppointments, startDate, endDate, statusFilter]);

    const handleClickOpen = (id) => {
        setDeleteDialogOpen(true);
        setRoomId(id);
    };

    const handleRejectAppointment = () => {
        try {
            const fetchData = async () => {
                await rejectAppointment(roomId);
                getAllAppointments();
            };
            fetchData();
        } catch (error) {
            console.log(error);
        }
    };

    const handleConfirmAppointment = (id) => {
        try {
            const fetchData = async () => {
                await confirmAppointment(id);
                getAllAppointments();
            };
            fetchData();
        } catch (error) {
            console.log(error);
        }
    };

    const handleOKAppointment = (id) => {
        try {
            const fetchData = async () => {
                await OKAppointment(id);
                getAllAppointments();
            };
            fetchData();
        } catch (error) {
            console.log(error);
        }
    };

    const handleCancelAppointment = (id) => {
        try {
            const fetchData = async () => {
                await CancelAppointment(id);
                getAllAppointments();
            };
            fetchData();
        } catch (error) {
            console.log(error);
        }
    };

    const handleChange = (value) => {
        setStatusFilter(value);
        setCurrentPage(0);
    };

    const getStatusColor = (status) => {
        if (status === 'REQUEST') {
            return 'orange';
        } else if (status === 'CONFIRM' || status === 'OK') {
            return '#117e11';
        } else {
            return '#ed2a2a';
        }
    };

    const handleSetPage = (event, page) => {
        setCurrentPage(page - 1);
    };

    const handleDateChange = (dates) => {
        setStartDate(format(dates[0].$d, 'yyyy-MM-dd'));
        setEndDate(format(dates[1].$d, 'yyyy-MM-dd'));
    };

    return (
        <div className="sb2-2">
            <div className="sb2-2-3">
                <div className="row">
                    <div className="col-md-12">
                        <div className="box-inn-sp">
                            <div className="inn-title display-app-small-search">
                                <div>
                                    <h4>{t('All Appointments')}</h4>
                                    <span>
                                        {t('Total')}: {totalElement}
                                    </span>
                                </div>
                                <div style={{ display: 'flex' }}>
                                    <Space wrap>
                                        <Select
                                            placeholder={t('Status')}
                                            style={{
                                                width: 120,
                                                marginRight: 5,
                                            }}
                                            onChange={handleChange}
                                            options={status}
                                            defaultValue={'ALL'}
                                        />
                                    </Space>

                                    <RangePicker
                                        format="DD-MM-YYYY"
                                        defaultValue={defaultDateRange}
                                        onChange={handleDateChange}
                                    />
                                </div>
                                {/* <form className="app-small-search">
                                    <input type="text" placeholder="Search..." className="form-control" />
                                    <a href="#">
                                        <i className="fa fa-search"></i>
                                    </a>
                                </form> */}
                            </div>
                            <div className="tab-inn">
                                <div className="table-responsive table-desi">
                                    <table className="table table-hover">
                                        <thead>
                                            <tr>
                                                <th>{t('User')}</th>
                                                <th>{t('Room')}</th>
                                                <th>{t('Phone')}</th>
                                                <th>Email</th>
                                                <th>{t('Date Time')}</th>
                                                <th>{t("Status")}</th>
                                                <th>{t('Action')}</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {appointments?.map((appointment, index) => (
                                                <tr key={index}>
                                                    <td
                                                        style={{
                                                            width: '80px',
                                                            overflow: 'hidden',
                                                            textOverflow: 'ellipsis',
                                                        }}
                                                    >
                                                        <Link to="" className="list-img">
                                                            <Image src={appointment.user.avatar} alt="" />
                                                        </Link>
                                                    </td>
                                                    <td
                                                        style={{
                                                            width: '250px',
                                                            overflow: 'hidden',
                                                            textOverflow: 'ellipsis',
                                                        }}
                                                    >
                                                        <Link
                                                            to={config.routes.detailRoomLink(appointment.room.id)}
                                                            state={{
                                                                step: 2,
                                                            }}
                                                            target="_blank"
                                                        >
                                                            <span className="list-enq-name">
                                                                {appointment.room.subject}
                                                            </span>
                                                            <span className="list-enq-city">
                                                                {appointment.room.address}
                                                            </span>
                                                        </Link>
                                                    </td>
                                                    <td
                                                        style={{
                                                            width: '120px',
                                                            overflow: 'hidden',
                                                            textOverflow: 'ellipsis',
                                                        }}
                                                    >
                                                        {appointment.user.phone}
                                                    </td>
                                                    <td
                                                        style={{
                                                            width: '170px',
                                                            overflow: 'hidden',
                                                            textOverflow: 'ellipsis',
                                                        }}
                                                    >
                                                        {appointment.user.email}
                                                    </td>
                                                    <td
                                                        style={{
                                                            width: '150px',
                                                            overflow: 'hidden',
                                                            textOverflow: 'ellipsis',
                                                        }}
                                                    >{`${appointment.day}, ${appointment.time}`}</td>
                                                    <td
                                                        style={{
                                                            color: getStatusColor(appointment.status),
                                                            width: '100px',
                                                            overflow: 'hidden',
                                                            textOverflow: 'ellipsis',
                                                        }}
                                                    >
                                                        {appointment.status}
                                                    </td>

                                                    <td
                                                        style={{
                                                            width: '40px',
                                                            overflow: 'hidden',
                                                            textOverflow: 'ellipsis',
                                                        }}
                                                    >
                                                        {appointment.status === 'REQUEST' && (
                                                            <>
                                                                <a
                                                                    data-tooltip-id="my-tooltip"
                                                                    data-tooltip-content="Confirm"
                                                                    onClick={() =>
                                                                        handleConfirmAppointment(appointment.id)
                                                                    }
                                                                >
                                                                    <i className="fa fa-check" aria-hidden="true"></i>
                                                                </a>
                                                                <Tooltip id="my-tooltip" />
                                                                <a
                                                                    data-tooltip-id="my_tooltip"
                                                                    data-tooltip-content="Reject"
                                                                    onClick={() => handleClickOpen(appointment.id)}
                                                                    style={{ cursor: 'pointer' }}
                                                                >
                                                                    <i className="fa fa-trash-o" aria-hidden="true"></i>
                                                                </a>
                                                                <Tooltip id="my_tooltip" />
                                                            </>
                                                        )}

                                                        {appointment.status === 'CONFIRM' && (
                                                            <>
                                                                <a
                                                                    data-tooltip-id="my-tooltip"
                                                                    data-tooltip-content="OK"
                                                                    onClick={() => handleOKAppointment(appointment.id)}
                                                                >
                                                                    <i className="fa fa-key" aria-hidden="true"></i>
                                                                </a>
                                                                <Tooltip id="my-tooltip" />
                                                                <a
                                                                    data-tooltip-id="my_tooltip"
                                                                    data-tooltip-content="Cancel"
                                                                    onClick={() =>
                                                                        handleCancelAppointment(appointment.id)
                                                                    }
                                                                    style={{ cursor: 'pointer' }}
                                                                >
                                                                    <i className="fa fa-times" aria-hidden="true"></i>
                                                                </a>
                                                                <Tooltip id="my_tooltip" />
                                                            </>
                                                        )}
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                    {totalElement === 0 && <div>{t('No data to display')}</div>}
                                </div>
                            </div>
                            {totalPage > 1 ? (
                                <Pagination
                                    count={totalPage}
                                    variant="outlined"
                                    color="primary"
                                    sx={{
                                        '& .MuiPaginationItem-page': {
                                            fontSize: '14px',
                                        },
                                    }}
                                    onChange={handleSetPage}
                                />
                            ) : (
                                <></>
                            )}

                            {deleteDialogOpen && (
                                <ConfirmDialog
                                    id={roomId}
                                    open={deleteDialogOpen}
                                    onClose={() => setDeleteDialogOpen(!deleteDialogOpen)}
                                    onDeleteSuccess={handleRejectAppointment}
                                    title="Are you sure want to reject this appointment?"
                                />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Appointments;
