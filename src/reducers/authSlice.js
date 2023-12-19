import { createSlice } from '@reduxjs/toolkit';
import { login, AuthoSignup } from '~/actions/authActions';

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
    extraReducers: (builder) => {
        builder
            .addCase(AuthoSignup.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(AuthoSignup.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.success = true;
            })
            .addCase(AuthoSignup.rejected, (state, { payload }) => {
                state.loading = false;
                state.error = payload;
                state.success = false;
            })
            .addCase(login.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(login.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.user = payload.user;
                state.token = payload.accessToken;
                state.isAuthenticated = true;
            })
            .addCase(login.rejected, (state, { payload }) => {
                state.loading = false;
                state.error = payload;
            });
    },
});
export default userSlice.reducer;
export const { logout } = userSlice.actions;
