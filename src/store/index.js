import { createSlice, configureStore } from '@reduxjs/toolkit';

const productsInitialState = {
  products: [
    {
      id: 1,
      title: 'Test',
      description: 'This is a first product - amazing!',
      price: 6.0,
    },
  ],
};

const productsSlice = createSlice({
  name: 'products',
  initialState: productsInitialState,
  reducers: {},
});

const cartInitialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: cartInitialState,
  reducers: {
    addToCart(state, action) {
      console.log(action.payload);
      const newItem = {
        id: action.payload.id,
        title: action.payload.title,
        quantity: 1,
        total: 69,
        price: action.payload.price,
      };
      state.cart.push(newItem);
    },
    increaseItemCount() {},
    decreaseItemCount() {},
  },
});

const store = configureStore({
  reducer: { products: productsSlice.reducer, cart: cartSlice.reducer },
});

export const cartActions = cartSlice.actions;
export const productsActions = productsSlice.actions;

export default store;
