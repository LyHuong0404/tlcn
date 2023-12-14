
import styles from './UpdateAppointmentDialog.module.scss';
import { useState } from 'react';
import { format, parse  } from 'date-fns';
import { updateAppointment } from '~/actions/userActions';
import { toast } from 'react-toastify';

function UpdateAppointmentDialog({ open, onClose, data }) {
    const [isOpen, setIsOpen] = useState(open)
    const [day, setDate] = useState(format(parse(data.day, 'dd-MM-yyyy', new Date()), 'yyyy-MM-dd'));
    const [time, setTime] = useState(data.time);
    
    const handleConfirmation = async() => {  
        const appointmentId = data.id;     
        try {
            await updateAppointment({ appointmentId, day, time });
            toast.success("Appointment updated successfully.")
        } catch(error) {
            console.log(error);
        }
        onClose();
    };

    const handleChangeDate = (e) => {
        setDate(e.target.value);
    };

    const handleChangeTime = (e) => {
        setTime(e.target.value);
    };

    return (
        <div className={`styles.wrapper${open ? ' open' : ''}`}>
            <div className={styles.delete_form}>
                <div className={styles.delete_form_overlay}></div>
                <div className={styles.delete_form_body}>
                    <p className={styles.title}>Update Appointment</p>
                    <div className={styles.datetime}>
                        <input type='date' value={day} onChange={handleChangeDate} style={{width: '100%', marginBottom: '10px'}}/>
                        <input type='time' value={time} onChange={handleChangeTime} style={{width: '100%'}}/>
                    </div>
                    <div className={styles.action}>
                        <button
                            style={{ borderTop: '1px solid #e3e3e4' }}
                            className={styles.button_delete}
                            onClick={handleConfirmation}
                        >
                            Update
                        </button>
                        <button
                            style={{ marginLeft: '0px', borderTop: '1px solid #e3e3e4' }}
                            className={styles.button_cancel}
                            onClick={() => {
                                onClose();
                                setIsOpen(!isOpen);
                            }}
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UpdateAppointmentDialog;
