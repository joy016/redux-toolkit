import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const Dummy_Data = [
  {
    id: 1,
    title: "First Product",
    price: 6,
    description: "This is a first product - amazing!",
  },
  {
    id: 2,
    title: "Second Product",
    price: 7,
    description: "This is a Second product - amazing!",
  },
  {
    id: 3,
    title: "Third Product",
    price: 8,
    description: "This is a Third product - amazing!",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {Dummy_Data.map(({ id, title, price, description }) => {
          return (
            <ProductItem
              key={id}
              id={id}
              title={title}
              price={price}
              description={description}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default Products;
