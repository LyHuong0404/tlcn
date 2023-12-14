import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import styles from './ConfirmDialog.module.scss';

function ConfirmDialog({ open, onClose, onDeleteSuccess, title }) {
    const handleConfirmation = (choice) => {
        if (choice === 'Yes') {
            onDeleteSuccess();
        }
        onClose();
    };
    return (
        <Dialog
            open={open}
            onClose={onClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">{'Notifications'}</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    {title}
                </DialogContentText>
            </DialogContent>

            <DialogActions>
                <button onClick={() => handleConfirmation('Yes')} className={styles.button_delete}>
                    Yes
                </button>
                <button onClick={() => handleConfirmation('No')} className={styles.button_cancel}>
                    No
                </button>
            </DialogActions>
        </Dialog>
    );
}

export default ConfirmDialog;
