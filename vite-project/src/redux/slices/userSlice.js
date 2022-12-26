import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        name: '',
        isLogged: false,
    },
    reducers: {
        login: (state, { payload }) => {
            return {...state, name: payload, isLogged: true};
        },
        logout: (state) => {
            return {...state, name: '', isLogged: false};
        }
    }
});

export const { login, logout } = userSlice.actions;

export const selectUser = state => state.user;

export default userSlice.reducer;