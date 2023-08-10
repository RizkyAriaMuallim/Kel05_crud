"use client"

import Navbar from '@/components/navbar/navbar';
import { useState, useEffect } from 'react';

export default function EditProduct({ params })  {
  const { product } = params;
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');

  useEffect(() => {
    // Fetch the product data from the API and populate the form fields
    fetch(`https://dummyjson.com/products/${product}`)
      .then(response => response.json())
      .then(data => {
        setTitle(data.title);
        setPrice(data.price);
      })
      .catch(error => console.error('Error fetching product data:', error));
  }, [product]);

  const handleFormSubmit = async event => {
    event.preventDefault();

    const updatedProduct = {
      title,
      price,
    };

    try {
      const response = await fetch(`https://dummyjson.com/products/${product}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedProduct),
      })

      // .then((res) => res.json())
      // .then(console.log);

      if (response.ok) {
        // Handle success
        console.log('Product updated successfully');
      } else {
        // Handle error
        console.error('Error updating product');
      }
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };

  return (
    <>
        <Navbar/>
        <div className='bg-main px-6'>
            <div className="min-h-screen mx-auto max-w-6xl pt-4">
            <h1 className="text-xl font-bold mb-5 text-white">Edit</h1>
            <div className="w-1/2">
                <form onSubmit={handleFormSubmit}>
                <label htmlFor="title" className="block mb-5">
                    <span className="block mb-3 text-white">Title</span>
                    <input
                    type="text"
                    className="bg-white p-3 w-full outline-none rounded-lg text-slate-700"
                    name="title"
                    id="title"
                    value={title}
                    onChange={event => setTitle(event.target.value)}
                    />
                </label>
                <label htmlFor="price" className="block mb-5">
                    <span className="block mb-3 text-white">Price</span>
                    <input
                    type="text"
                    className="bg-white p-3 w-full outline-none rounded-lg text-slate-700"
                    name="price"
                    id="price"
                    value={price}
                    onChange={event => setPrice(event.target.value)}
                    />
                </label>
                <button
                    type="submit"
                    className="block bg-white px-4 py-2 hover:bg-slate-100 text-sm rounded-lg text-slate-600"
                >
                    Save
                </button>
                </form>
            </div>
            </div>
        </div>
    </>
  );
};