import styles from "../styles/Addbutton.module.css";

const AddButton = ({ setClose }) => {
  return (
    <div onClick={() => setClose(false)} className={styles.mainAddButton}>
      Add New Product
    </div>
  );
};

export default AddButton;
