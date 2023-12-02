/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import Image from '~/components/Image';
import styles from './AllRooms.module.scss';
import { Link } from 'react-router-dom';
import Pagination from '@mui/material/Pagination';
import { useEffect, useState } from 'react';
import ConfirmDialog from '~/components/ConfirmDialog';
import { getAllRooms, deleteRoom } from '~/actions/sellerActions';
import { useCallback } from 'react';
import { format } from 'date-fns';
import config from '~/config';
import { toast } from 'react-toastify';

function AllRooms() {
    const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
    const [roomId, setRoomId] = useState();
    const [rooms, setRooms] = useState([]);
    const [totalPage, setTotalPage] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);

    const fetchAllRooms = useCallback(() => {
        try {
            const fetchData = async () => {
                const result = await getAllRooms(currentPage);
                result?.content.map(
                    (element) => (element.dayPublic = format(new Date(element.dayPublic), 'dd-MM-yyyy')),
                );
                setRooms(result.content);
                setTotalPage(result.totalPage);
            };
            fetchData();
        } catch (error) {
            console.log(error);
        }
    }, [currentPage]);
    useEffect(() => {
        fetchAllRooms(currentPage);
    }, [currentPage, fetchAllRooms]);

    const handleClickOpen = (id) => {
        setDeleteDialogOpen(true);
        setRoomId(id);
    };

    const handleSetPage = (event, page) => {
        setCurrentPage(page - 1);
    };
    const handleDeteleRoom = () => {
        try {
            const fetchData = async () => {
                const result = await deleteRoom(roomId);
                if (result?.status === 'SUCCESS') {
                    fetchAllRooms(currentPage);
                    toast.success('Room deleted successfully.');
                } else {
                    toast.error('Error deleting room.');
                }
            };
            fetchData();
        } catch {}
    };

    return (
        <div className="sb2-2">
            <div className="sb2-2-2">
                {/* <ul>
                    <li>
                        <Link to="/seller/dashboard">
                            <i className="fa fa-home" aria-hidden="true"></i> Home
                        </Link>
                    </li>
                    <li className="active-bre">
                        <a className="txt-none"> All Room</a>
                    </li>
                </ul> */}
            </div>
            <div className="sb2-2-3">
                <div className="row">
                    <div className="col-md-12">
                        <div className="box-inn-sp">
                            <div className="inn-title display-app-small-search">
                                <h4>All Room</h4>
                                <form className="app-small-search">
                                    <input type="text" placeholder="Search..." className="form-control" />
                                    <a href="#">
                                        <i className="fa fa-search"></i>
                                    </a>
                                </form>
                                {/* <Tippy
                                    interactive
                                    offset={[-75, -30]} //lệch ngang, cao
                                    hideOnClick={true}
                                    render={(attrs) => (
                                        <div className={styles.box} tabIndex="-1" {...attrs}>
                                            <ul id="dr-users">
                                                <li className={styles.waves_effect}>
                                                    <a href="/seller/addroom">Add New</a>
                                                </li>
                                                <li className={styles.waves_effect}>
                                                    <a href="#!">Edit</a>
                                                </li>
                                                <li className={styles.waves_effect}>
                                                    <a href="#!">Update</a>
                                                </li>
                                                <li className="divider"></li>
                                                <li className={styles.waves_effect}>
                                                    <a href="#!">
                                                        <i className="material-icons" style={{ marginRight: '20px' }}>
                                                            delete
                                                        </i>
                                                        Delete
                                                    </a>
                                                </li>
                                                <li className={styles.waves_effect}>
                                                    <a href="#!">
                                                        <i className="material-icons" style={{ marginRight: '20px' }}>
                                                            subject
                                                        </i>
                                                        View All
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    )}
                                    // onHide={() => setHistory((prev) => prev.slice(0, 1))}
                                >
                                    <a className="dropdown-button drop-down-meta" href="#" data-activates="dr-users">
                                        <i className="material-icons">more_vert</i>
                                    </a>
                                </Tippy> */}
                            </div>
                            <div className="tab-inn">
                                <div className="table-responsive table-desi">
                                    <table className="table table-hover">
                                        <thead>
                                            <tr>
                                                <th>Avatar</th>
                                                <th>Name</th>
                                                <th>Address</th>
                                                <th>Price</th>
                                                <th>Day Public</th>
                                                <th>Total</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {rooms?.map((room) => (
                                                <tr key={room.id}>
                                                    <td
                                                        style={{
                                                            maxWidth: '70px',
                                                            overflow: 'hidden',
                                                            textOverflow: 'ellipsis',
                                                        }}
                                                    >
                                                        <span className="list-img">
                                                            <Image src={room.avatarUrl} alt={room.subject} />
                                                        </span>
                                                    </td>
                                                    <td
                                                        style={{
                                                            maxWidth: '120px',
                                                            overflow: 'hidden',
                                                            textOverflow: 'ellipsis',
                                                        }}
                                                    >
                                                        <a>
                                                            <span className="list-enq-name">{room.subject}</span>
                                                        </a>
                                                    </td>
                                                    <td
                                                        style={{
                                                            maxWidth: '240px',
                                                            overflow: 'hidden',
                                                            textOverflow: 'ellipsis',
                                                        }}
                                                    >
                                                        {room.address}
                                                    </td>
                                                    <td
                                                        style={{
                                                            maxWidth: '100px',
                                                            overflow: 'hidden',
                                                            textOverflow: 'ellipsis',
                                                        }}
                                                    >
                                                        {room.price}
                                                    </td>
                                                    <td
                                                        style={{
                                                            maxWidth: '100px',
                                                            overflow: 'hidden',
                                                            textOverflow: 'ellipsis',
                                                        }}
                                                    >
                                                        {room.dayPublic}
                                                    </td>
                                                    <td
                                                        style={{
                                                            maxWidth: '100px',
                                                            overflow: 'hidden',
                                                            textOverflow: 'ellipsis',
                                                        }}
                                                    >
                                                        {room.dayPublic}
                                                    </td>
                                                    <td>
                                                        <Link
                                                            to={config.routes.detailRoomLink(room.id)}
                                                            state={{
                                                                room: room,
                                                            }}
                                                            target="_blank"
                                                        >
                                                            <i className="fa fa-eye" aria-hidden="true"></i>
                                                        </Link>

                                                        <Link to="hotel-edit.html">
                                                            <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                                                        </Link>

                                                        <a
                                                            onClick={() => handleClickOpen(room.id)}
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
                                    onDeleteSuccess={handleDeteleRoom}
                                />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AllRooms;
