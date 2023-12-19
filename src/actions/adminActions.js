import * as httprequest from '~/utils/httprequest';

export const AllUsers = async (pageIndex, pageSize, keyword) => {
    try {
        const filters = { pageIndex, pageSize, keyword };
        const filteredParams = Object.fromEntries(Object.entries(filters).filter(([_, value]) => value !== undefined));

        const response = await httprequest.get('find-all-user', { params: filteredParams });
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const AllAppointments = async (pageIndex, pageSize, status, startDate, endDate) => {
    try {
        const filters = { pageIndex, pageSize, status, startDate, endDate };
        const filteredParams = Object.fromEntries(Object.entries(filters).filter(([_, value]) => value !== undefined));

        const response = await httprequest.get('all-appointment', { params: filteredParams });
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const AllPayments = async (pageIndex, pageSize, startDate, endDate) => {
    try {
        const filters = { pageIndex, pageSize, startDate, endDate };
        const filteredParams = Object.fromEntries(Object.entries(filters).filter(([_, value]) => value !== undefined));
        const response = await httprequest.get('find-all-payment', { params: filteredParams });
        return response;
    } catch (error) {
        console.log(error);
    }
};

export const getUser = async (id) => {
    try {
        const response = await httprequest.get(`user/${id}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const getUserAppointments = async (id, pageIndex, pageSize) => {
    try {
        const response = await httprequest.get(`user-all-appointment/${id}`, {
            params: {
                pageIndex,
                pageSize,
            },
        });
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const getUserPayments = async (id, pageIndex, pageSize) => {
    try {
        const response = await httprequest.get(`user-payment/${id}`, { params: { pageIndex, pageSize } });
        return response;
    } catch (error) {
        console.log(error);
    }
};

export const getReport = async () => {
    try {
        const response = await httprequest.get('admin-dashboard');
        return response.data;
    } catch (error) {
        console.log(error);
    }
};
