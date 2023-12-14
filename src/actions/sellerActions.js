import * as httprequest from '~/utils/httprequest';

//room
export const newRoom = async (formData) => {
    const config = {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    };
    try {
        const response = await httprequest.post('room/add', formData, config);
        return response;
    } catch (err) {
        console.log(err);
    }
};

export const updateRoom = async (formData) => {
    const config = {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    };
    try {
        const response = await httprequest.post('room/update', formData, config);
        return response;
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

export const getAllRooms = async (pageSize, pageIndex, keyword, provinceCode) => {
    try {
        const filters = { pageSize, pageIndex, keyword, provinceCode };
        const filteredParams = Object.fromEntries(Object.entries(filters).filter(([_, value]) => value !== null));

        const response = await httprequest.get('room/seller-filter-room', {
            params: filteredParams,
        });
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

//image room
export const addImageRoom = async (formData) => {
    const config = {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    };
    try {
        const response = await httprequest.post('add-image-room', formData, config);
        return response;
    } catch (err) {
        console.log(err);
    }
};

export const deleteImageRoom = async (imageId) => {
    try {
        const response = await httprequest.get('delete-image-room', {
            params: {
                imageId,
            },
        });
        return response;
    } catch (err) {
        console.log(err);
    }
};

//appointment
export const getAllAppointment = async (pageIndex, starDate, endDate, status) => {
    try {
        const filters = { pageIndex, starDate, endDate, status };
        const filteredParams = Object.fromEntries(Object.entries(filters).filter(([_, value]) => value !== 'ALL'));
        const response = await httprequest.get('seller-all-appointment', {
            params: filteredParams,
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
