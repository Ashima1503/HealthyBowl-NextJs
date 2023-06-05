import Image from "next/image";
import styles from "../styles/Navbar.module.css";
import Link from "next/link";
import { useSelector } from "react-redux";


const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);

  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.texts}>
        <Image src="/img/l1.png" alt="" width="140" height="64" />
        </div>
      </div>
      <Link href="/cart" passHref>
      </Link>
        <div className={styles.item}>
          <ul className={styles.list}>
          <Link href="/" passHref>
            <li className={styles.listItem}>Homepage</li>
          </Link>
          <Link href="/#down1" passHref>
            <li className={styles.listItem}>Menu</li>
          </Link>
          <Link href="/#down2" passHref>
            <li className={styles.listItem}>Contact</li>
          </Link>
          {/* <Link href="/Userlogin" passHref>
            <li className={styles.listItem}>Login</li>
          </Link>
          <Link href="/Register" passHref>
            <li className={styles.listItem}>Register</li> */}
          {/* </Link> */}
          <Link href="/admin" passHref>
            <li className={styles.listItem}>Admin</li>
          </Link>
          </ul>
        </div>
        <Link href="/cart" passHref>
        <div className={styles.item}>
          <div className={styles.cart}>
            <Image src="/img/cart.png" alt="" width="30" height="30" />
            <div className={styles.counter}>{quantity}</div>
          </div>
        </div>
        </Link>
    </div>
  );
};

export default Navbar;
