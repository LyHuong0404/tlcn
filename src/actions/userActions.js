import * as httprequest from '~/utils/httprequest';

export const registerSeller = async () => {
    try {
        const response = await httprequest.post('register-seller');

        return response;
    } catch (error) {
        console.log(error);
    }
};

export const makeAppointment = async (data) => {
    try {
        const response = await httprequest.post('user-set-appointment', data);
        return response;
    } catch (error) {
        console.log(error);
    }
};

export const userAllAppointment = async (currentPage) => {
    try {
        const response = await httprequest.get('user-all-appointment', {
            params: {
                pageIndex: currentPage,
            },
        });
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const deleteAppointment = async (appointmentId) => {
    try {
        const response = await httprequest.get('user-delete-appointment', {
            params: {
                appointmentId: appointmentId,
            },
        });
        return response;
    } catch (error) {
        console.log(error);
    }
};

export const addToWishlist = async (roomId) => {
    try {
        const response = await httprequest.get('room/following', {
            params: {
                roomId: roomId,
            },
        });
        return response;
    } catch (error) {
        console.log(error);
    }
};

export const searchRooms = async () => {
    try {
        const response = await httprequest.get('room/filter-room');
        return response.data;;
    } catch (error) {
        console.log(error);
    }
};
