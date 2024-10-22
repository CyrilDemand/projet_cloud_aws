import { createSlice } from '@reduxjs/toolkit';

export const basketSlice = createSlice({
    name: 'basket',
    initialState: {
        value: [],
        size: 0
    },
    reducers: {
        addProductToBasket: (state, action) => {
            const productInBasket = state.value.find(product => product.product.id === action.payload.id);

            if (productInBasket) {
                productInBasket.quantity += 1; // Incrémente la quantité si le produit existe déjà
            } else {
                state.value.push({
                    product: action.payload,
                    quantity: 1,
                });
            }
            state.size += 1;
        },
        removeProductToBasket: (state, action) => {
            const productIndex = state.value.findIndex(product => product.product.id === action.payload);

            if (productIndex !== -1) {
                if (state.value[productIndex].quantity > 1) {
                    state.value[productIndex].quantity -= 1; // Diminue la quantité
                } else {
                    state.value.splice(productIndex, 1); // Supprime le produit si la quantité tombe à 0
                }
                state.size -= 1;
            }
        },
        ConfirmPurshase: (state, action) => {
            // Store a summary of the purchase before clearing the cart
            state.purchaseSummary = {
                products: state.value,
                total: state.value.reduce((total, item) => total + (item.product.price * item.quantity), 0)
            };

            // Clear the cart
            state.value = [];
            state.size = 0;
        },
    },
});

export const { addProductToBasket } = basketSlice.actions;
export const { removeProductToBasket } = basketSlice.actions;
export const { ConfirmPurshase } = basketSlice.actions;
export default basketSlice.reducer;
