// store/index.js

import { configureStore } from '@reduxjs/toolkit';
import basketReducer from '@/features/basket/basketSlice';

export const store = configureStore({
    reducer: {
        basket: basketReducer,
    },
});
