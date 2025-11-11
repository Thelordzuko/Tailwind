import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

export default function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-10">
      <div className="space-y-4 w-full max-w-md">

        <button className="w-full px-5 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700">
          Primary Button
        </button>
      
        <button className="w-full px-5 py-3 bg-white border border-green-600 text-green-600 font-semibold rounded-lg hover:bg-green-50">
          Secondary Button
        </button>

        <button className="w-full px-5 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700">
          Danger Button
        </button>

        <button className="w-full px-5 py-3 bg-emerald-500 text-white font-semibold rounded-lg hover:bg-emerald-600">
          Success Button
        </button>

        <button className="w-full px-7 py-4 bg-green-600 text-white font-semibold rounded-xl text-lg hover:bg-green-700">
          Large Button
        </button>

        <button className="w-full px-3 py-2 bg-green-600 text-white font-medium rounded-md text-sm hover:bg-green-700">
          Small Button
        </button>

      </div>
    </div>
  );
}
