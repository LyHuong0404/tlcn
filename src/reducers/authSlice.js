import { createSlice } from '@reduxjs/toolkit';
import { login, signup } from '~/actions/authActions';

// initialize TOKEN from local storage
const userJson = localStorage.getItem('user');
const user = JSON.parse(userJson)?.user || null;
const token = JSON.parse(userJson)?.accessToken || null;


const initialState = {
    loading: false,
    user: user,
    token: token,
    error: null,
    success: false,
    isAuthenticated: false,
};

const userSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: {
        // Register user
        [signup.pending]: (state) => {
            state.loading = true;
            state.error = null;
        },
        [signup.fulfilled]: (state, { payload }) => {
            state.loading = false;
            state.success = true;
        },
        [signup.rejected]: (state, { payload }) => {
            state.loading = false;
            state.error = payload;
            state.success = false;
        },
        // Login user
        [login.pending]: (state) => {
            state.loading = true;
            state.error = null;
        },
        [login.fulfilled]: (state, { payload }) => {
            state.loading = false;
            state.user = payload.user;
            state.token = payload.accessToken;
            state.isAuthenticated = true;
        },
        [login.rejected]: (state, { payload }) => {
            state.loading = false;
            state.error = payload;
        },
        // [logout.fulfilled]: (state) => {
        //     state.loading = false;
        //     state.user = null;
        //     state.token = null;
        //     state.error = null;
        // },
    },
});
export default userSlice.reducer;
// export const { logout } = userSlice.actions;
