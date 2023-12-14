import {
    PROVINCE_REQUEST,
    PROVINCE_SUCCESS,
    PROVINCE_FAIL,
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

