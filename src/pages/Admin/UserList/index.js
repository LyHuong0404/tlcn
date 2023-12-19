/* eslint-disable jsx-a11y/anchor-is-valid */
import Image from '~/components/Image';
import styles from './UserList.module.scss';
import Pagination from '@mui/material/Pagination';
import Switch from 'react-switch';
import { useEffect, useState } from 'react';
import { AllUsers } from '~/actions/adminActions';
import { Link } from 'react-router-dom';
import useDebounce from '~/components/hooks';
import config from '~/config';
import { useTranslation } from 'react-i18next';

function UserList() {
    const { t } = useTranslation();
    const [status, setStatus] = useState(false);
    const [users, setUsers] = useState([]);
    const [totalPage, setTotalPage] = useState(0);
    const [pageIndex, setPageIndex] = useState(0);
    const [pageSize, setPageSize] = useState(10);
    const [keyword, setKeyword] = useState(undefined);
    const [totalElement, setTotalElement] = useState(0);
    const debounceValue = useDebounce(keyword, 500);

    const handleChangeStatus = () => {
        setStatus(!status);
    };

    const handleChangePageSize = (e) => {
        setPageSize(e.target.value);
        setPageIndex(0);
    };

    useEffect(() => {
        try {
            const fetchData = async () => {
                const rs = await AllUsers(pageIndex, pageSize, debounceValue);
                setUsers(rs?.content);
                setTotalPage(rs?.totalPage);
                setTotalElement(rs?.totalElement);
            };
            fetchData();
        } catch (error) {
            console.log(error);
        }
    }, [pageIndex, pageSize, debounceValue]);

    const handleSetPage = (event, page) => {
        setPageIndex(page - 1);
        window.scrollTo({ top: 200, behavior: 'smooth' });
    };

    const handleChangeKeyWord = (e) => {
        if (e.target.value !== '') {
            setKeyword(e.target.value);
        } else {
            setKeyword(undefined);
        }
    };

    return (
        <section>
            <div className="content listing-content users-list">
                <div className="in-content-wrapper">
                    <div className="row no-gutters">
                        <div className="col display-header">
                            <div className="heading-messages">
                                <h1>{t('Users')}</h1>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="breadcrumb">
                                <div className="breadcrumb-item">
                                    <i className="fas fa-angle-right"></i>
                                    <a>{t('Users')}</a>
                                </div>
                                <div className="breadcrumb-item active">
                                    <i className="fas fa-angle-right"></i>{t('Users List')}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="box">
                        <div className="row no-gutters">
                            <div className="col text-left">
                                <div className="add-new">
                                    <Link to="/admin/adduser">
                                        {t('Add New')}<i className="fas fa-plus"></i>
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
                                        <label>
                                            {t('Status')}:
                                            <select
                                                name="example_length"
                                                aria-controls="example"
                                                className={styles.custom_status}
                                            >
                                                <option value="active">{t('Active')}</option>
                                                <option value="non">{t('Non')}</option>
                                            </select>
                                            {t('Search')}:
                                            <input
                                                type="search"
                                                className={styles.custom_search}
                                                aria-controls="example"
                                                value={keyword}
                                                onChange={handleChangeKeyWord}
                                            />
                                        </label>
                                    </div>
                                </div>
                                <table id="example" className="display table-hover table-responsive-xl listing">
                                    <thead>
                                        <tr>
                                            <th>{t('Img')}</th>
                                            <th>#</th>
                                            <th>{t('User Name')}</th>
                                            <th>{t('Full Name')}</th>
                                            <th>Email</th>
                                            <th>{t("Phone")} #</th>
                                            <th>{t('Balance')}</th>
                                            <th>{t('Status')}</th>
                                            <th>{t('Action')}</th>
                                        </tr>
                                    </thead>
                                    <tbody style={{ backgroundColor: '#f9f9f9' }}>
                                        {users?.map((user, index) => (
                                            <tr key={index}>
                                                <td>
                                                    <Image
                                                        src={user.avatar}
                                                        alt={user.username}
                                                        className="img-fluid rounded-circle"
                                                        width="40px"
                                                    />
                                                </td>
                                                <td>{user.id}</td>
                                                <td>{user.username}</td>
                                                <td>{user.fullname}</td>
                                                <td>{user.email}</td>
                                                <td>{user.phone}</td>
                                                <td>{user.balance}</td>
                                                <td>
                                                    <Switch
                                                        onChange={handleChangeStatus}
                                                        checked={status}
                                                        checkedIcon={false}
                                                        uncheckedIcon={false}
                                                        height={22}
                                                        width={50}
                                                    />
                                                </td>
                                                <td>
                                                    <div>
                                                        <Link to={config.authRoutes.getUserLink(user.id)}>
                                                            <i className="fas fa-edit"></i>
                                                        </Link>
                                                        <a>
                                                            <i className="fas fa-trash"></i>
                                                        </a>
                                                    </div>
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

export default UserList;
