import classes from './CartButton.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from '../../store/ui-slice';

const CartButton = props => {
  const dispatch = useDispatch();
  const cartTotalCount = useSelector(state => state.cart.cartTotalCount);

  const toggleSHowCartHandler = () => {
    dispatch(uiActions.toggleShowCart());
  };

  return (
    <button className={classes.button} onClick={toggleSHowCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartTotalCount}</span>
    </button>
  );
};

export default CartButton;
