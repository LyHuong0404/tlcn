/* eslint-disable jsx-a11y/anchor-is-valid */
import Image from '~/components/Image';
import styles from './UserAppointments.module.scss';
import Pagination from '@mui/material/Pagination';
import { useEffect, useState } from 'react';
import 'dayjs/locale/zh-cn';
import config from '~/config';
import 'react-tooltip/dist/react-tooltip.css';
import { Link, useParams } from 'react-router-dom';
import { getUserAppointments } from '~/actions/adminActions';

function UserAppointments() {
    const params = useParams();
    const id = params.id;
    const [data, setData] = useState([]);
    const [totalPage, setTotalPage] = useState(0);
    const [pageIndex, setPageIndex] = useState(0);
    const [pageSize, setPageSize] = useState(10);
    const [status, setStatus] = useState(undefined);
    const [totalElement, setTotalElement] = useState(0);

    const handleChangePageSize = (e) => {
        setPageSize(e.target.value);
        setPageIndex(0);
    };

    useEffect(() => {
        try {
            const fetchData = async () => {
                const rs = await getUserAppointments(id, pageIndex, pageSize);
                if (status !== undefined) {
                    rs.content = rs?.content.filter((app) => app.status === 'status');
                }
                setData(rs?.content);
            };
            fetchData();
        } catch (error) {
            console.log(error);
        }
    }, [id, status, pageSize, pageIndex]);

    const handleSetPage = (event, page) => {
        setPageIndex(page - 1);
        window.scrollTo({ top: 200, behavior: 'smooth' });
    };

    const handleChangeStatus = (e) => {
        if (e.target.value === 'all') {
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


    return (
        <section>
            <div className="content listing-content users-list">
                <div className="in-content-wrapper">
                    <div className="row no-gutters">
                        <div className="col display-header">
                            <div className="heading-messages">
                                <h1>Appointments</h1>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="breadcrumb">
                                <div className="breadcrumb-item">
                                    <i className="fas fa-angle-right"></i>
                                    <a>Appointments</a>
                                </div>
                                <div className="breadcrumb-item active">
                                    <i className="fas fa-angle-right"></i>Appointment List
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
                                            Show
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
                                            entries
                                        </label>
                                    </div>

                                    <div id="example_filter" className="dataTables_filter">
                                        
                                        <label>
                                            Status:
                                            <select
                                                name="example_length"
                                                aria-controls="example"
                                                className={styles.custom_status}
                                                onChange={handleChangeStatus}
                                            >
                                                <option value="all">All</option>
                                                <option value="request">Request</option>
                                                <option value="confirm">Confirm</option>
                                                <option value="reject">Reject</option>
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
                                            <th>Date</th>
                                            <th>Time</th>
                                            <th>Status</th>
                                            <th>Owner</th>
                                            <th>Room</th>
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
                                                <td
                                                    style={{
                                                        color: getStatusColor(appointment.status),
                                                    }}
                                                >
                                                    {appointment.status}
                                                </td>
                                                <td>{appointment.day}</td>
                                                <td>{appointment.time}</td>
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
                                        Total {totalElement}
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

export default UserAppointments;
