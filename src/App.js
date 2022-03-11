import { Fragment, useEffect } from 'react';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification';
import { useSelector, useDispatch } from 'react-redux';
import { sendCartData, fetchCartData } from './store/cart-actions';

let initialLoad = true;

function App() {
  const dispatch = useDispatch();
  const showCart = useSelector(state => state.ui.showCart);
  const cart = useSelector(state => state.cart);
  const notification = useSelector(state => state.ui.notification);

  useEffect(() => {
    if (initialLoad) {
      initialLoad = false;
      return;
    }
    dispatch(sendCartData(cart));
  }, [cart, dispatch]);

  useEffect(() => {
    dispatch(fetchCartData());
    initialLoad = true;
  }, [dispatch]);
  return (
    <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
