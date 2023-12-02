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
    CLEAR_ERRORS,
} from '~/constants/addressConstants';

export const getProvinceReducer = (state = { provins: [] }, action) => {
    switch (action.type) {
        case PROVINCE_REQUEST:
            return {
                ...state,
                loading: true,
            };

        case PROVINCE_SUCCESS:
            return {
                loading: false,
                success: action.payload.success,
                provins: action.payload,
            };

        case PROVINCE_FAIL:
            return {
                ...state,
                error: action.payload,
            };

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null,
            };

        default:
            return state;
    }
};

export const getDistrictReducer = (state = {}, action) => {
    switch (action.type) {
        case DISTRICT_REQUEST:
            return {
                ...state,
                loading: true,
            };

        case DISTRICT_SUCCESS:
            return {
                loading: false,
                success: action.payload.success,
                districts: action.payload,
            };

        case DISTRICT_FAIL:
            return {
                ...state,
                error: action.payload,
            };

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null,
            };

        default:
            return state;
    }
};

export const getWardReducer = (state = {}, action) => {
    switch (action.type) {
        case WARD_REQUEST:
            return {
                ...state,
                loading: true,
            };

        case WARD_SUCCESS:
            return {
                loading: false,
                success: action.payload.success,
                wards: action.payload,
            };

        case WARD_FAIL:
            return {
                ...state,
                error: action.payload,
            };

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null,
            };

        default:
            return state;
    }
};
