// store/index.js

import { configureStore } from '@reduxjs/toolkit';
import basketReducer from '@/features/basket/basketSlice';
import userReducer from '@/features/auth/userSlice';
import accountBalanceReducer from "@/features/basket/accountBalanceSlice";

export const store = configureStore({
    reducer: {
        basket: basketReducer,
        user: userReducer,
        accountBalance: accountBalanceReducer
    },
});
