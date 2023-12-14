import * as httprequest from '~/utils/httprequest';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const login = createAsyncThunk('auth/login', async ({ username, password }, { rejectWithValue }) => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        };

        const { data } = await httprequest.post('auth/login', { username, password }, config);

        if (data) {
            localStorage.setItem('user', JSON.stringify(data));
            return data;
        } else {
            return rejectWithValue('Invalid Email Or Password');
        }
    } catch (error) {
        if (error.response && error.response.data.message) {
            return rejectWithValue(error.response.data.message);
        } else {
            return rejectWithValue(error.message);
        }
    }
});
export const signup = async ({ email, username, password }) => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        };
        const response = await httprequest.post('get-code-signup', { email, username, password }, config);
        return response;
    } catch (err) {
        console.log(err);
    }
};

export const AuthoSignup = createAsyncThunk(
    'signup',
    async ({ username, password, email, code }, { rejectWithValue }) => {
        try {
            const { success } = await httprequest.post('signup', { username, password, email, code });
            if (success) {
                return success;
            } else {
                return rejectWithValue('Please enter the correct OTP to sign up.');
            }
        } catch (error) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message);
            } else {
                return rejectWithValue(error.message);
            }
        }
    },
);
