import {
    PROVINCE_REQUEST,
    PROVINCE_SUCCESS,
    PROVINCE_FAIL,
} from '~/constants/addressConstants';

import * as httprequest from '~/utils/httprequest';

export const getProvinces = () => async (dispatch) => {
    try {
        dispatch({ type: PROVINCE_REQUEST });
        const { data } = await httprequest.get('address/province');

        dispatch({
            type: PROVINCE_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: PROVINCE_FAIL,
            payload: error.response,
        });
    }
};

export const getDistricts = async (provinceCode) => {
    try {
        const { data } = await httprequest.get(`address/district-by-province?provinceCode=${provinceCode}`);

        return data;
    } catch (error) {
        console.log(error);
    }
};

export const getWards = async (districtCode) => {
    try {
        const { data } = await httprequest.get(`address/ward-by-district?districtCode=${districtCode}`);

        return data;
    } catch (error) {
        console.log(error);
    }
};
