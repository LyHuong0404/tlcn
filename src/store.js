import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { getProvinceReducer, getDistrictReducer, getWardReducer } from './reducers/addressReducers';
import userSlice  from './reducers/authSlice';

const reducer = combineReducers({
    provins: getProvinceReducer,
    districts: getDistrictReducer,
    wards: getWardReducer,
    auth: userSlice,
});

let initialState = {};

const middlware = [thunk];
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middlware)));

export default store;
