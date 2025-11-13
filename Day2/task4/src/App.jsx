import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

export default function Table() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold text-green-700 mb-10 text-center">
        Choose Your Data Plan
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl w-full">
        
        <div className="bg-white shadow-lg rounded-xl p-8 text-center border border-gray-200">
          <h2 className="text-xl font-semibold text-green-700">Basic</h2>
          <p className="text-4xl font-bold mt-3 text-gray-800">₦5,000<span className="font-medium text-gray-500">/month</span></p>
          <ul className="text-gray-600 mt-6 space-y-2">
            <li>✔️ Data: 2 GB</li>
            <li> ✔️Validity: 24 hours</li>
            <li>✔️ Speed: Up to 10 Mbps</li>
          </ul>
          <button className="mt-6 w-full bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700">
            Choose Plan
          </button>
        </div>

        <div className="bg-green-700 text-white shadow-2xl rounded-xl p-10 text-center md:scale-105 border border-green-700 hover:scale-110 transition">
          <h2 className="text-xl font-semibold">Pro (Most Popular)</h2>
          <p className="text-4xl font-bold mt-3">₦15,000<span className="font-medium text-green-100">/month</span></p>
          <ul className="mt-6 space-y-2 text-green-100">
            <li>✔️ Data: 15 GB</li>
            <li> ✔️ Validity: 7 days</li>
            <li>✔️ Speed: Up to 25 Mbps + night browsing bonus (12 AM – 5 AM)</li>
          </ul>
          <button className="mt-6 w-full bg-white text-green-700 py-2 rounded-lg font-semibold hover:bg-green-50">
            Choose Plan
          </button>
        </div>

        <div className="bg-white shadow-lg rounded-xl p-8 text-center border border-gray-200 hover:shadow-xl transition">
          <h2 className="text-xl font-semibold text-green-700">Enterprise</h2>
          <p className="text-4xl font-bold mt-3 text-gray-800">₦50,000<span className="font-medium text-gray-500">/month</span></p>
          <ul className="text-gray-600 mt-6 space-y-2">
            <li>✔️ Data: 100 GB</li>
            <li>✔️ Validity: 30 days</li>
            <li>✔️ Speed: Up to 50 Mbps + multi-device hotspot sharing</li>
          </ul>
          <button className="mt-6 w-full bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700">
            Choose Plan
          </button>
        </div>

      </div>
    </div>
  );
}
