import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import { useSelector } from 'react-redux';

const Cart = props => {
  const cart = useSelector(state => state.cart.cart);

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cart.map(cartitem => (
          <CartItem
            key={cartitem.id}
            item={{
              id: cartitem.id,
              title: cartitem.title,
              quantity: cartitem.quantity,
              total: cartitem.total,
              price: cartitem.price,
            }}
          />
        ))}
      </ul>
    </Card>
  );
};

export default Cart;
