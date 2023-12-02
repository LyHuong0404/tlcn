import * as httprequest from '~/utils/httprequest';

export const newRoom = async (formData) => {
    const config = {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    };
    try {
        const response = await httprequest.post('room/add', formData, config);
        return response.data;
    } catch (err) {
        console.log(err);
    }
};

export const deleteRoom = async (roomID) => {
    try {
        const response = await httprequest.get('room/delete', {
            params: {
                roomId: roomID,
            },
        });
        return response;
    } catch (err) {
        console.log(err);
    }
};

export const getAllRooms = async (currentPage) => {
    try {
        const response = await httprequest.get('room/seller-filter-room', {
            params: {
                pageIndex: currentPage,
            },
        });
        return response.data;
    } catch (error) {}
};

export const getAllAppointment = async (currentPgae) => {
    try {
        const response = await httprequest.get('seller-all-appointment', {
            params: {
                pageIndex: currentPgae,
            },
        });
        return response.data;
    } catch (err) {
        console.log(err);
    }
};

export const confirmAppointment = async (id) => {
    try {
        const response = await httprequest.get('seller-confirm-appointment', {
            params: {
                appointmentId: id,
            },
        });
        return response.data;
    } catch (err) {
        console.log(err);
    }
};

export const rejectAppointment = async (id) => {
    try {
        const response = await httprequest.get('seller-reject-appointment', {
            params: {
                appointmentId: id,
            },
        });
        return response.data;
    } catch (err) {
        console.log(err);
    }
};
