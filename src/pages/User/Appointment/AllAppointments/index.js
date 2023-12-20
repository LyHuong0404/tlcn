/* eslint-disable jsx-a11y/anchor-is-valid */
import '~/assets/css/bootstrap.min.css';
import '~/assets/css/jquery-ui.css';
import '~/assets/css/ie.css';
import '~/assets/css/style.css';
import '~/assets/css/owl.carousel.css';
import '~/assets/css/select-style.css';
import '~/assets/css/font-awesome.min.css';
import '~/assets/js/jquery-1.11.3.min.js';
import styles from './AllAppointments.module.scss';
import Image from '~/components/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-regular-svg-icons';
import { useState, useEffect } from 'react';
import { userAllAppointment, deleteAppointment } from '~/actions/userActions';
import ConfirmDialog from '~/components/ConfirmDialog';
import { format } from 'date-fns';
import { Pagination } from '@mui/material';
import { useCallback } from 'react';
import { toast } from 'react-toastify';
import UpdateAppointmentDialog from '~/components/UpdateAppointmentDialog';
import { useTranslation } from 'react-i18next';

function AllAppointments() {
    const { t } = useTranslation();
    const [dataAppointments, setDataAppointments] = useState([]);
    const [appointment, setAppointment] = useState();
    const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
    const [updateDialogOpen, setUpdateDialogOpen] = useState(false);
    const [totalPage, setTotalPage] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);

    const getAllAppointment = useCallback(() => {
        try {
            const fetchData = async () => {
                const result = await userAllAppointment(currentPage);
                result?.content?.map((element) => {
                    element.day = format(new Date(element.day), 'dd-MM-yyyy');
                    element.time = format(new Date(`2000-01-01T${element.time}`), 'HH:mm');
                });
                setDataAppointments(result.content);
                setTotalPage(result.totalPage);
            };
            fetchData();
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }, [currentPage]);

    useEffect(() => {
        getAllAppointment(currentPage);
    }, [currentPage, getAllAppointment]);

    const handleDeleteAppointment = async () => {
        try {
            const result = await deleteAppointment(appointment.id);
            if (result?.success) {
                getAllAppointment(currentPage);
            }
            toast.success(t('Delete Appointment successfully!'));
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleDeleteDialogClick = (appointment) => {
        setDeleteDialogOpen(true);
        setAppointment(appointment);
    };

    const handleUpdateDialogClick = (appointment) => {
        setUpdateDialogOpen(true);
        setAppointment(appointment);
    };

    const handleSetPage = (event, page) => {
        setCurrentPage(page - 1);
    };

    const handleCloseUpdateDialog = () => {
        setUpdateDialogOpen(!updateDialogOpen);
        getAllAppointment(currentPage);
    };
    return (
        <div className="htlfndr-user-panel col-md-9 col-sm-8 htlfndr-booking-page" id="htlfndr-user-tab-2">
            <table className="table">
                <thead>
                    <tr>
                        <th>{t('Image')}</th>
                        <th>{t('Room Name')}</th>
                        <th>{t('Price')}</th>
                        <th>{t('Location')}</th>
                        <th>{t('Date Time')}</th>
                        <th>{t('Action')}</th>
                    </tr>
                </thead>
                <tbody>
                    {dataAppointments?.map((appointment, index) => (
                        <tr key={index}>
                            <td
                                className="htlfndr-scope-row"
                                style={{
                                    width: '150px',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                }}
                            >
                                <a>
                                    <Image
                                        src={appointment.room.avatarUrl}
                                        alt="user avatar"
                                        className={styles.image_room}
                                    />
                                </a>
                            </td>
                            <td
                                style={{
                                    width: '150px',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                }}
                            >
                                {appointment.room.subject}
                            </td>
                            <td
                                style={{
                                    width: '100px',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                }}
                            >
                                {appointment.room.price}
                            </td>
                            <td
                                style={{
                                    width: '280px',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                }}
                            >
                                {appointment.room.address}
                            </td>
                            <td>
                                {appointment.day}, {appointment.time}
                            </td>
                            <td>
                                <a className={styles.action_edit} onClick={() => handleUpdateDialogClick(appointment)}>
                                    <FontAwesomeIcon icon={faEdit} className={styles.custom_icon} />
                                </a>
                                <a
                                    className={styles.action_delete}
                                    onClick={() => handleDeleteDialogClick(appointment)}
                                >
                                    <FontAwesomeIcon icon={faTrashCan} className={styles.custom_icon} />
                                </a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className={styles.pagination}>
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
            </div>
            {deleteDialogOpen && (
                <ConfirmDialog
                    open={deleteDialogOpen}
                    onClose={() => setDeleteDialogOpen(!deleteDialogOpen)}
                    onDeleteSuccess={handleDeleteAppointment}
                    title="Are you sure want to delete this appointment?"
                />
            )}
            {updateDialogOpen && (
                <UpdateAppointmentDialog open={updateDialogOpen} onClose={handleCloseUpdateDialog} data={appointment} />
            )}
        </div>
    );
}

export default AllAppointments;
