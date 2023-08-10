"use client"

import Navbar from "@/components/navbar/navbar";
import React, { useEffect } from "react";
import { useState } from "react";

export default function AddProduct() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    // Cek apakah ada nilai input di storage dan mengambilnya saat komponen dimuat
    const storedTitle = localStorage.getItem("storedTitle");
    const storedPrice = localStorage.getItem("storedPrice");

    if (storedTitle && storedPrice) {
      setTitle(storedTitle);
      setPrice(storedPrice);
    }
  }, []);

  // Set nilai title sesuai input user
  const handleTitleChange = (e) => {
    const newTitle = e.target.value;
    setTitle(newTitle);
    localStorage.setItem("storedTitle", newTitle);
  };

  // Set nilai price sesuai input user
  const handlePriceChange = (e) => {
    const newPrice = e.target.value;
    setPrice(newPrice);
    localStorage.setItem("storedPrice", newPrice);
  };

  const handleSave = async (e) => {
    e.preventDefault(); // Mencegah form ke refresh

    const productData = {
      title: title,
      price: price,
    };

    try {
      await fetch("https://dummyjson.com/products/1", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(productData),
      })
        .then((res) => res.json())
        .then(console.log);

      // Hapus nilai input dari local storage setelah berhasil disimpan
      localStorage.removeItem("storedTitle");
      localStorage.removeItem("storedPrice");
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  return (
    <>
      <Navbar />
      <div id="add" className="w-full h-screen bg-slate-600">
        <div className=" p-6 max-w-container m-container">
          <div className="text-white pb-6 font-bold text-3xl">
            <h1>Add</h1>
          </div>
          <form>
            <div className="w-full pb-5">
              <h1 className="text-white mb-2">Title</h1>
              <input
                role="textbox"
                onChange={handleTitleChange}
                className="bg-white text-black rounded-lg w-[50%] px-2 py-2"
              ></input>
            </div>
            <div>
              <h1 className="text-white mb-2">Price</h1>
              <input
                type="text"
                onChange={handlePriceChange}
                className="bg-white text-black rounded-lg w-[50%] px-2 py-2"
              ></input>
            </div>
            <div className="pt-4">
              <button
                onSubmit={handleSave}
                type="submit"
                className="block bg-white px-4 py-2 hover:bg-slate-100 text-sm rounded-lg font-bold text-black"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}