// import { REGISTER_SELLER_REQUEST, REGISTER_SELLER_SUCCESS, REGISTER_SELLER_FAIL, CLEAR_ERRORS } from "~/constants/userConstants";

// export const registerSellerReducer = (state = {}, action) => {
//     switch (action.type) {
//         case REGISTER_SELLER_REQUEST:
//             return {
//                 ...state,
//                 loading: true,
//             };

//         case REGISTER_SELLER_SUCCESS:
//             return {
//                 loading: false,
//                 success: action.payload.success,
//             };

//         case REGISTER_SELLER_FAIL:
//             return {
//                 ...state,
//                 error: action,
//             };

//         case CLEAR_ERRORS:
//             return {
//                 ...state,
//                 error: null,
//             };

//         default:
//             return state;
//     }
// };