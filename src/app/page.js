"use client"

import DataBox from '@/components/boxData/dataBox'
import axios from 'axios';
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
      <div className='h-84 bg-navbar'>
        <div className=' px-6 h-84 flex justify-between items-center max-w-container m-container'>
          <p className='text-2xl font-normal text-title'>TokoLaku</p>
          <div className='flex'>
            <div className='flex mr-3 rounded-lg justify-center items-center h-36 w-75 bg-white'>Profile</div>
            <div className='flex rounded-lg justify-center items-center h-36 w-75 bg-buttRed text-white'>Logout</div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className='min-h-screen bg-main'>
        <div className='max-w-container m-container px-6'>
          <div className='flex justify-between py-6'>
            <p className='text-4xl text-white'>Products</p>
            <div className='flex justify-center items-center w-168 h-10 rounded-lg bg-buttAdd text-white text-base'>
              Add New Product
            </div>
          </div>
          <div className='flex flex-wrap gap-6 pb-6'>
            {products &&
              products.length !== 0 &&
              products.map((product, index) => {
                return (
                  <div className='' key={index}>
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
