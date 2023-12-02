// import { ADD_ROOM_REQUEST, ADD_ROOM_SUCCESS, ADD_ROOM_FAIL, UPDATE_ROOM_REQUEST, UPDATE_ROOM_SUCCESS, UPDATE_ROOM_FAIL, CLEAR_ERRORS } from '~/constants/sellerContants';

// export const newRoomReducer = (state = { room: {} }, action) => {
//     switch (action.type) {
//         case ADD_ROOM_REQUEST:
//             return {
//                 ...state,
//                 loading: true,
//             };

//         case ADD_ROOM_SUCCESS:
//             return {
//                 loading: false,
//                 success: action.payload.success,
//                 room: action.payload.data,
//             };

//         case ADD_ROOM_FAIL:
//             return {
//                 ...state,
//                 error: action.payload,
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

