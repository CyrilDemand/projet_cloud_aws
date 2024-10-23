import {createSlice} from '@reduxjs/toolkit';

export const accountBalanceSlice = createSlice({
    name: 'accountBalance',
    initialState: {
        value: 10000000000
    },
    reducers: {
        ConfirmPurshaseAccountBalance: (state, action) => {
            // Store a summary of the purchase before clearing the cart
            state.value = state.value - action.payload
        },
    },
});

export const selectAccountBalance = (state) => state.accountBalance.value;

export const { ConfirmPurshaseAccountBalance } = accountBalanceSlice.actions;
export default accountBalanceSlice.reducer;
