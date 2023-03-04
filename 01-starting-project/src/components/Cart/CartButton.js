import { useDispatch, useSelector } from "react-redux";
import classes from "./CartButton.module.css";
import { isCartShown } from "../../redux/HeaderCartSlice";

const CartButton = (props) => {
  const cartBadge = useSelector((state) => state.cart.cartItemCount);
  const dispatchShowCart = useDispatch();

  const showCartHandler = () => {
    dispatchShowCart(isCartShown());
  };

  return (
    <button className={classes.button} onClick={showCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartBadge}</span>
    </button>
  );
};

export default CartButton;
