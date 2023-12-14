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
import Select from 'react-select';
import { useSelector } from 'react-redux';
import { SearchOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import useDebounce from '~/components/hooks';

const customStyles = {
    control: (provided) => ({
        ...provided,
        width: '230px',
        height: '20px',
        alignContent: 'center',
        backgroundColor: '#fff',
    }),
};

function AllRooms() {
    const { provins } = useSelector((state) => state.provins);
    const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
    const [roomId, setRoomId] = useState();
    const [rooms, setRooms] = useState([]);
    const [totalPage, setTotalPage] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);
    const [totalRoom, setTotalRoom] = useState(0);
    const [searchValue, setSearchValue] = useState(null);
    const [provinceCode, setProvinceCode] = useState(null);
    const debounceValue = useDebounce(searchValue, 500);

    const fetchAllRooms = useCallback(
        (pageSize, currentPage, debounceValue, provinceCode) => {
            try {
                const fetchData = async () => {
                    const result = await getAllRooms(pageSize, currentPage, debounceValue, provinceCode);
                    result?.content?.map(
                        (element) => (element.dayPublic = format(new Date(element.dayPublic), 'dd-MM-yyyy')),
                    );
                    setTotalRoom(result?.totalElement);
                    setRooms(result?.content);
                    setTotalPage(result?.totalPage);
                };
                fetchData();
            } catch (error) {
                console.log(error);
            }
        },
        [currentPage, debounceValue, provinceCode],
    );

    useEffect(() => {
        fetchAllRooms(7, currentPage, debounceValue, provinceCode);
    }, [currentPage, fetchAllRooms, debounceValue, provinceCode]);

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
    const handleChangeProvince = (e) => {
        setProvinceCode(e.code);
    };

    const handleChangeSearch = (e) => {
        const SearchValue = e.target.value;
        if (!SearchValue.startsWith(' ')) {
            setSearchValue(e.target.value);
        }
    };

    const provinceOptions = provins.map((province) => ({
        code: province.code,
        label: province.name,
        value: province.name,
    }));

    return (
        <div className="sb2-2">
            <div className="sb2-2-2">
                <ul>
                    <li>
                        <Link to="/seller/dashboard">
                            <i className="fa fa-home" aria-hidden="true"></i> Home
                        </Link>
                    </li>
                    <li className="active-bre">
                        <a className="txt-none"> All Room</a>
                    </li>
                </ul>
            </div>
            <div className="sb2-2-3">
                <div className="row">
                    <div className="col-md-12">
                        <div className="box-inn-sp">
                            <div className="inn-title display-app-small-search">
                                <div>
                                    <h4>All Rooms</h4>
                                    <span>Total: {totalRoom}</span>
                                </div>
                                <div style={{ display: 'flex' }}>
                                    <Select
                                        options={provinceOptions}
                                        placeholder="Select a province..."
                                        isSearchable={true}
                                        styles={customStyles}
                                        onChange={(selectedOption) => {
                                            handleChangeProvince(selectedOption);
                                        }}
                                    />
                                    <Input
                                        style={{ marginLeft: '5px' }}
                                        placeholder="Search..."
                                        suffix={<SearchOutlined />}
                                        value={searchValue}
                                        onChange={handleChangeSearch}
                                    />
                                </div>
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
                                                            width: '70px',
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
                                                            width: '170px',
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
                                                            width: '320px',
                                                            overflow: 'hidden',
                                                            textOverflow: 'ellipsis',
                                                        }}
                                                    >
                                                        {room.address}
                                                    </td>
                                                    <td
                                                        style={{
                                                            width: '150px',
                                                            overflow: 'hidden',
                                                            textOverflow: 'ellipsis',
                                                        }}
                                                    >
                                                        {room.price}
                                                    </td>
                                                    <td
                                                        style={{
                                                            width: '110px',
                                                            overflow: 'hidden',
                                                            textOverflow: 'ellipsis',
                                                        }}
                                                    >
                                                        {room.dayPublic}
                                                    </td>
                                                    <td
                                                        style={{
                                                            width: '110px',
                                                            overflow: 'hidden',
                                                            textOverflow: 'ellipsis',
                                                        }}
                                                    >
                                                        {room.dayPublic}
                                                    </td>
                                                    <td>
                                                        <Link
                                                            to={config.routes.detailRoomLink(room.id)}
                                                            target="_blank"
                                                            state={{
                                                                step: 2,
                                                            }}
                                                        >
                                                            <i
                                                                className="fa fa-eye"
                                                                aria-hidden="true"
                                                                style={{ cursor: 'pointer' }}
                                                            ></i>
                                                        </Link>

                                                        <Link to={config.routes.updateRoomLink(room.id)}>
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
                                    {totalRoom === 0 && <div>No data to display</div>}
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
                                    title="Are you sure want to delete this room?"
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
