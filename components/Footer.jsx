import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div id="down2" className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/hbf1.png" objectFit="cover" layout="fill" alt="" />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            THE HEALTY BOWL DELIVERS WELL COOKED HEALTHY MEALS AT YOURS DOORS.
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>FIND OUR RESTAURANTS</h1>
          <p className={styles.text}>
            2005 Model Town #300.
            <br /> Ludhiana
            <br /> (999) 867-1010
          </p>
          <p className={styles.text}>
            2002 Chandar Nagar Rd #235.
            <br /> Delhi
            <br /> (999) 867-1011
          </p>
          <p className={styles.text}>
            2000 P. Town St #104.
            <br /> Mumbai
            <br /> (999) 867-1012
          </p>
          
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>AVAILABLE HOURS</h1>
          <p className={styles.text}>
            MONDAY - FRIDAY
            <br /> 9:00 – 10:00
          </p>
          <p className={styles.text}>
            SATURDAY - SUNDAY
            <br /> 10:00 – 10:00
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
