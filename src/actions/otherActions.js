import * as httprequest from '~/utils/httprequest';

export const topRecommends = async (currentPage, pageSize) => {
    try {
        const response = await httprequest.get('room/recommend-room', {
            params: {
                pageIndex: currentPage,
                pageSize,
            },
        });

        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const payment = async (amount, bankCode) => {
    try {
        const response = await httprequest.get('payment/create-payment', {
            params: {
                amount,
                bankCode,
            },
        });

        return response;
    } catch (error) {
        console.log(error);
    }
};

export const getListReviews = async (roomId, pageIndex) => {
    try {
        const response = await httprequest.get('review-of-room', {
            params: {
                roomId,
                pageIndex,
            },
        });

        return response.data;
    } catch (error) {
        console.log(error);
    }
};
