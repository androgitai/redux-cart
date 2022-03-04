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
      let current = false;
      state.cart.forEach(item => {
        if (item.id === 1) {
          item.quantity++;
          item.total = item.total + item.price;
          current = true;
        }
      });
      if (!current) {
        const newItem = {
          id: action.payload.id,
          title: action.payload.title,
          quantity: 1,
          total: action.payload.price,
          price: action.payload.price,
        };
        state.cart.push(newItem);
      }
      state.cartTotalCount++;
    },
    increaseItemCount(state, action) {
      state.cart.forEach(item => {
        if (item.id === action.payload) {
          item.quantity++;
          item.total = item.total + item.price;
        }
      });
      state.cartTotalCount++;
    },
    decreaseItemCount(state, action) {
      state.cart.forEach(item => {
        if (item.id === action.payload && item.quantity === 1) {
          state.cart.pop(item);
        }
        if (item.id === action.payload && item.quantity > 1) {
          item.quantity--;
          item.total = item.total - item.price;
        }
      });
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
