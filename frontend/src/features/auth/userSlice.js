import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        userInfo: null, // Initialement, l'utilisateur n'est pas connecté
    },
    reducers: {
        setUserInfo: (state, action) => {
            // Met à jour les informations utilisateur
            state.userInfo = action.payload;
            console.log(action.payload);
        },
        clearUserInfo: (state) => {
            // Supprime les informations utilisateur lors de la déconnexion
            state.userInfo = null;
        },
    },
});

// Actions à exporter
export const { setUserInfo, clearUserInfo } = userSlice.actions;

// Sélecteurs (pour accéder à l'état utilisateur dans les composants)
export const selectUserInfo = (state) => state.user.userInfo;

// Reducer à exporter
export default userSlice.reducer;
