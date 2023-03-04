import { useSelector } from "react-redux";
import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartItems = useSelector((state) => state.cart.cartItems);

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      {!cartItems.length && <p>No item found in your cart</p>}
      <ul>
        {cartItems.map(({ id, title, price, quantity }) => {
          return (
            <CartItem
              key={id}
              item={{
                id: id,
                title,
                quantity: quantity,
                total: price * quantity,
                price,
              }}
            />
          );
        })}
      </ul>
    </Card>
  );
};

export default Cart;
