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
  cartTotalCount: 0,
  showCart: false,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: cartInitialState,
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.cart.find(item => item.id === newItem.id);

      if (existingItem) {
        existingItem.quantity++;
        existingItem.total += existingItem.price;
      }

      if (!existingItem) {
        const createNewItem = {
          id: newItem.id,
          title: newItem.title,
          quantity: 1,
          total: newItem.price,
          price: newItem.price,
        };
        state.cart.push(createNewItem);
      }
      state.cartTotalCount++;
    },
    increaseItemCount(state, action) {
      const existingItem = state.cart.find(item => item.id === action.payload);
      existingItem.quantity++;
      existingItem.total += existingItem.price;
      state.cartTotalCount++;
    },
    decreaseItemCount(state, action) {
      const existingItem = state.cart.find(item => item.id === action.payload);
      if (existingItem.quantity === 1) {
        state.cart.pop(existingItem);
      }
      if (existingItem.quantity > 1) {
        existingItem.quantity--;
        existingItem.total -= existingItem.price;
      }

      state.cartTotalCount--;
    },
    toggleShowCart(state) {
      state.showCart = !state.showCart;
    },
  },
});

const store = configureStore({
  reducer: { products: productsSlice.reducer, cart: cartSlice.reducer },
});

export const cartActions = cartSlice.actions;
export const productsActions = productsSlice.actions;

export default store;
