import {
    PROVINCE_REQUEST,
    PROVINCE_SUCCESS,
    PROVINCE_FAIL,
    DISTRICT_REQUEST,
    DISTRICT_SUCCESS,
    DISTRICT_FAIL,
    WARD_REQUEST,
    WARD_SUCCESS,
    WARD_FAIL,
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

export const getDistricts = (provinceCode) => async (dispatch) => {
    try {
        dispatch({ type: DISTRICT_REQUEST });

        const { data } = await httprequest.get(`address/district-by-province?provinceCode=${provinceCode}`);

        dispatch({
            type: DISTRICT_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: DISTRICT_FAIL,
            payload: error.response,
        });
    }
};

export const getWards = (districtCode) => async (dispatch) => {
    try {
        dispatch({ type: WARD_REQUEST });

        const { data } = await httprequest.get(`address/ward-by-district?districtCode=${districtCode}`);

        dispatch({
            type: WARD_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: WARD_FAIL,
            payload: error.response,
        });
    }
};
