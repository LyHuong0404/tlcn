/* eslint-disable jsx-a11y/anchor-is-valid */
import { Pagination } from '@mui/material';
import { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ConfirmDialog from '~/components/ConfirmDialog';
import Image from '~/components/Image';
import { getAllAppointment, confirmAppointment, rejectAppointment } from '~/actions/sellerActions';
import { DatePicker, Select, Space } from 'antd';
import { format } from 'date-fns';

const { RangePicker } = DatePicker;

const status = [
    { id: 1, value: 'ALL', label: 'ALL' },
    { id: 2, value: 'REQUEST', label: 'REQUEST' },
    { id: 3, value: 'ACCEPT', label: 'ACCEPT' },
    { id: 4, value: 'REJECT', label: 'REJECT' },
];

function Appointments() {
    const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
    const [roomId, setRoomId] = useState();
    const [appointments, setAppointments] = useState([]);
    const [totalPage, setTotalPage] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);

    const getAllAppointments = useCallback(() => {
        try {
            const fetchData = async () => {
                const result = await getAllAppointment(currentPage);
                result?.content.map((element) => {
                    element.day = format(new Date(element.day), 'dd-MM-yyyy');
                    element.time = format(new Date(`2000-01-01T${element.time}`), 'HH:mm');
                });
                setAppointments(result.content);
                setTotalPage(result.totalPage);
            };
            fetchData();
        } catch (error) {
            console.log(error);
        }
    }, [currentPage]);

    useEffect(() => {
        getAllAppointments(currentPage);
    }, [currentPage, getAllAppointments]);

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

    const handleChange = (value) => {
        console.log(`selected ${value}`);
    };

    const getStatusColor = (status) => {
        if (status === 'REQUEST') {
            return 'orange';
        } else if (status === 'ACTIVE') {
            return 'green';
        } else {
            return '#ff0000';
        }
    };

    const handleSetPage = (event, page) => {
        setCurrentPage(page - 1);
    };

    const onSearch = (value, _e, info) => console.log(info?.source, value);
    return (
        <div className="sb2-2">
            <div className="sb2-2-3">
                <div className="row">
                    <div className="col-md-12">
                        <div className="box-inn-sp">
                            <div className="inn-title display-app-small-search">
                                <h4>All Appointments</h4>
                                <div style={{ display: 'flex' }}>
                                    <Space wrap>
                                        <Select
                                            placeholder="Status"
                                            style={{
                                                width: 120,
                                                marginRight: 5,
                                            }}
                                            onChange={handleChange}
                                            options={status}
                                        />
                                    </Space>

                                    <RangePicker />
                                </div>
                                <form className="app-small-search">
                                    <input type="text" placeholder="Search..." className="form-control" />
                                    <a href="#">
                                        <i className="fa fa-search"></i>
                                    </a>
                                </form>
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
                                                <th>User</th>
                                                <th>Room</th>
                                                <th>Phone</th>
                                                <th>Email</th>
                                                <th>Date Time</th>
                                                <th>Status</th>
                                                <th>Action</th>
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
                                                        <Link to="">
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
                                                            width: '170px',
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
                                                            width: '160px',
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

                                                    <td>
                                                        <a onClick={() => handleConfirmAppointment(appointment.id)}>
                                                            <i className="fa fa-check" aria-hidden="true"></i>
                                                        </a>
                                                        <a
                                                            onClick={() => handleClickOpen(appointment.id)}
                                                            style={{ cursor: 'pointer' }}
                                                        >
                                                            <i className="fa fa-trash-o" aria-hidden="true"></i>
                                                        </a>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
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
