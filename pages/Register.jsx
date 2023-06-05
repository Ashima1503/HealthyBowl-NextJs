import React from 'react'
import Link from 'next/link'
import styles from "../styles/UserLogin.module.css";

export default function RegisterScreen() {
  return (
        <form className={styles.container}>
            <div className={styles.wrapper}>
            {/* <span onClick={() => setClose(true)} className={styles.close}>X</span> */}
            <h1 className={styles.h1}>Register</h1>
            <div className="">
                <label htmlFor='email' className={styles.label}>Name</label>
                <input type="email" className={styles.input1} id="email" autoFocus></input>
            </div>
            <div className="">
                <label htmlFor='email' className={styles.label}>Email</label>
                <input type="email" className={styles.input1} id="email" autoFocus></input>
            </div>
            <div className="">
                <label htmlFor='password' className={styles.label}>Password</label>
                <input type="password" className={styles.input2} id="password" autoFocus></input>
            </div>
            <div className="">
                <button className={styles.button}>Submit</button>
            </div>
            <div className={styles.l1}>
                Already have an account? &nbsp;
                <Link href="">Login</Link>
            </div>
            </div>
        </form>
  )
}
