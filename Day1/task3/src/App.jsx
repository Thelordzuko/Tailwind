import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

export default function NewsCard() {
  return (
    <div className="max-w-sm mx-auto bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src="https://i.pinimg.com/1200x/fd/36/09/fd36098f9c95d832c7b8fb55b6d6639b.jpg"
        alt="news image"
        className="w-full h-40 object-cover"
      />

      <div className="p-4">
        <p className="text-xs px-2 py-1 bg-green-600 text-white rounded">
          Politics
        </p>

        <h2 className="mt-2 text-lg font-bold text-gray-900">
          Nigeria Introduces New Policy Reform
        </h2>

        <p className="mt-1 text-sm text-gray-600">
          The Federal Government has rolled out a new national reform agenda aimed at
          boosting development and economic growth across all regions.
        </p>

        <div className="mt-3 text-xs text-gray-500 flex justify-between">
          <p>By Oluwaseyi Alebiosu</p>
          <p>3 min read</p>
        </div>

        <div class="max-w-sm mx-auto bg-white rounded-lg shadow-md p-4 text-center text-gray-800 font-bold text-xs">
          11:45 AM
        </div>

        <a
          href="#"
          className="mt-3 inline-block text-green-700 text-sm font-semibold"
        >
          Read more →
        </a>

      </div>
    </div>
  );
}