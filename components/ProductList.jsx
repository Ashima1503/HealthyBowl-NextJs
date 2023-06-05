import styles from "../styles/ProductList.module.css";
import ProductCard from "./ProductCard";

const ProductList = ({productList}) => {
  return (
    <div id="down1" className={styles.container}>
      <h1 className={styles.title}>The Best Healthy Shopping In The Town</h1>
      <p className={styles.desc}>Welcome to Healthy Bowl! Try our Vibrant, Tangy, Yummy, Zesty, Wood-oven roasted, Crispy, Leafy & Elegant Healthy Bowls available at best price with full nutritive essentials.</p>
      <div className={styles.wrapper}>
        {productList?.map((product) => (
          <ProductCard key={product._id} product={product}/>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
