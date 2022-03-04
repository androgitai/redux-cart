import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector } from 'react-redux';

function App() {
  const cart = useSelector(state => state.cart.showCart);

  return (
    <Layout>
      {cart && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
