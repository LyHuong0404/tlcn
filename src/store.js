import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { getProvinceReducer } from './reducers/addressReducers';
import userSlice from './reducers/authSlice';
import { getProvinces } from './actions/addressActions';

const reducer = combineReducers({
    provins: getProvinceReducer,
    auth: userSlice,
});

let initialState = {};

const middlware = [thunk];
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middlware)));
store.dispatch(getProvinces());

export default store;
