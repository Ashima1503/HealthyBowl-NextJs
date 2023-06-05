import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Slider from '@/components/Slider'
import ProductList from '@/components/ProductList'
import axios from 'axios'
import { useState } from 'react'
import Add from "../components/Add";
import Addbutton from "../components/Addbutton";


const inter = Inter({ subsets: ['latin'] })

export default function Home({productList, admin}) {
  const [close, setClose] = useState(true);
  return (
<>
    <div className={styles.container}>
      <Head>
        <title>Healthy Bowl</title>
        <meta name="description" content="Healthy food shop" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Slider/>
      {admin && <Addbutton setClose={setClose}/>}
      <ProductList productList={productList}/>
      {!close && <Add setClose={setClose} />}
      </div>
</>
  )
}

export const getServerSideProps= async(ctx)=> {
  const myCookie = ctx.req?.cookies || "";
  let admin = false;

  if (myCookie.token === process.env.TOKEN) {
    admin = true;
  }

  const res = await axios.get("http://localhost:3000/api/products");
  return{
    props:{
      productList:res.data,
      admin
    }
  }
} 