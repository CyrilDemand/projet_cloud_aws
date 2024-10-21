import { createSlice } from '@reduxjs/toolkit';

export const basketSlice = createSlice({
    name: 'basket',
    initialState: {
        value: [],
        size: 0
    },
    reducers: {
        addProductToBasket: (state, action) => {
            console.log(action.payload);
            state.value.push(action.payload);
            state.size += 1;
        },
        removeProductToBasket: (state, action) => {
            state.value.remove(action.payload);
            state.size -= 1;
        },
    },
});

export const { addProductToBasket } = basketSlice.actions;

export default basketSlice.reducer;
