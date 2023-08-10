"use client"

import DataBox from '@/components/boxData/dataBox'
import Navbar from '@/components/navbar/navbar';
import axios from 'axios';
import Link from 'next/link';
import { useEffect, useState } from "react";

export default function Home() {
  const [products, setProducts] = useState();

  const fetchProducts = async () => {
    try {
        const res = await axios.get('https://dummyjson.com/products', {
            params: {
                limit: 10,
            },
        });
        setProducts(res.data.products);
    } catch (err) {
    }
  }

  useEffect(() => {
    fetchProducts();
  }, [])

  return (
    <div className='w-full h-screen'>
      {/* Navbar */}
      <Navbar />
      {/* Main Content */}
      <div className='min-h-screen bg-main'>
        <div className='max-w-container m-container px-6'>
          <div className='flex justify-between py-6'>
            <p className='text-4xl text-white'>Products</p>
            <div className='flex justify-center items-center w-168 h-10 rounded-lg bg-buttAdd text-white text-base hover:bg-hovAddProd'>
              <Link href='/add'>Add New Product</Link>
            </div>
          </div>
          <div className='grid grid-cols-4 gap-6'>
            {products &&
              products.length !== 0 &&
              products.map((product, index) => {
                return (
                  <div className='max-lg:col-span-2' key={index}>
                    <DataBox title={product.title} price={product.price} images={product.images[0]}/>
                  </div>
                );
            })}
          </div>

        </div>
      </div>
    </div>
  )
}
