import * as httprequest from '~/utils/httprequest';

//auth
export const getCode = async () => {
    try {
        const response = await httprequest.get('register-seller');
        return response;
    } catch (error) {
        console.log(error);
    }
};

export const registerSeller = async ({ code, phone, fullname, addressDetail, wardCode }) => {
    try {
        const response = await httprequest.post('register-seller', { code, phone, fullname, addressDetail, wardCode });
        return response;
    } catch (error) {
        console.log(error);
    }
};

export const makeSurvey = async ({
    registerNotify,
    priceMin,
    priceMax,
    attic,
    furnitureAvailable,
    airConditionAvailable,
    isFreeParking,
    privateToilet,
    allowedPet,
}) => {
    try {
        const response = await httprequest.post('update-profile', {
            registerNotify,
            priceMin,
            priceMax,
            attic,
            furnitureAvailable,
            airConditionAvailable,
            isFreeParking,
            privateToilet,
            allowedPet,
        });
        return response;
    } catch (error) {
        console.log(error);
    }
};

//appointments
export const makeAppointment = async ({ roomId, day, time }) => {
    try {
        const response = await httprequest.post('user-set-appointment', { roomId, day, time });
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
                pageSize: 5,
            },
        });
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const updateAppointment = async ({ appointmentId, day, time }) => {
    try {
        const response = await httprequest.post('user-update-appointment', { appointmentId, day, time });
        return response;
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

//wishlist
export const userWishlist = async (currentPage) => {
    try {
        const response = await httprequest.get('room/user-room-followed', {
            params: {
                pageIndex: currentPage,
                pageSize: 4,
            },
        });
        return response.data;
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

//rooms
export const filterRooms = async (
    pageIndex,
    pageSize,
    orderBy,
    keyword,
    provinceCode,
    districtCode,
    wardCode,
    priceMin,
    priceMax,
    attic,
    furnitureAvailable,
    airConditionAvailable,
    isFreeParking,
    privateToilet,
    allowedPet,
    tvAvailable,
    totalPerson,
) => {
    const filters = {
        pageIndex,
        pageSize,
        orderBy,
        keyword,
        provinceCode,
        districtCode,
        wardCode,
        priceMin,
        priceMax,
        attic,
        furnitureAvailable,
        airConditionAvailable,
        isFreeParking,
        privateToilet,
        allowedPet,
        tvAvailable,
        totalPerson,
    };
    const filteredParams = Object.fromEntries(Object.entries(filters).filter(([_, value]) => value !== null));
    try {
        const response = await httprequest.get('room/filter-room', {
            params: filteredParams,
        });
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const detailRoom = async (id) => {
    try {
        const response = await httprequest.get(`room/detail/${id}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

//review
export const addReview = async (formData) => {
    const config = {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    };
    try {
        const response = await httprequest.post('add-review', formData, config);
        return response;
    } catch (error) {
        console.log(error);
    }
};

//profile
export const getProfile = async () => {
    try {
        const response = await httprequest.get('user-info');
        return response?.data;
    } catch (error) {
        console.log(error);
    }
};

export const updateProfile = async (formData) => {
    try {
        const config = {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        };
        const response = await httprequest.post('update-info-user', formData, config);
        return response;
    } catch (error) {
        console.log(error);
    }
};
