import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import React from "react";

export default function ProductCard() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-purple-50">
      <div className="max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden transition hover:shadow-3xl">
        <div className="overflow-hidden">
          <img
            src="https://i.pinimg.com/736x/80/33/a4/8033a49a1af88a4e4b3e22abd2795173.jpg"
            alt="Product"
            className="w-full h-72 object-cover transform transition duration-500 hover:scale-110"
          />
        </div>

        <div className="p-8 text-center">
          <h2 className="text-2xl font-bold text-purple-900 transition duration-300 hover:text-yellow-500">
            Stylish Sneakers
          </h2>
          <p className="text-2xl font-extrabold text-yellow-600 mt-3">₦25,000</p>

          <button
            className="mt-6 w-full bg-purple-700 text-yellow-300 py-3 rounded-xl font-semibold text-lg transition duration-300 hover:bg-purple-800 active:scale-95"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
