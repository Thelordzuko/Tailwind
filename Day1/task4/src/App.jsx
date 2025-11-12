import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function NaijaColors() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-6 bg-gray-100">
      
      <div className="text-center">
        <div className="w-20 h-20 mx-auto rounded-lg shadow" style={{ backgroundColor: "#ecfdf5" }}></div>
        <p className="text-sm font-semibold mt-2">Naija Green 50</p>
        <p className="text-xs text-gray-500">#ecfdf5</p>
      </div>
      
      <div className="text-center">
        <div className="w-20 h-20 mx-auto rounded-lg shadow" style={{ backgroundColor: "#d1fae5" }}></div>
        <p className="text-sm font-semibold mt-2">Naija Green 100</p>
        <p className="text-xs text-gray-500">#d1fae5</p>
      </div>
      
      <div className="text-center">
        <div className="w-20 h-20 mx-auto rounded-lg shadow" style={{ backgroundColor: "#a7f3d0" }}></div>
        <p className="text-sm font-semibold mt-2">Naija Green 200</p>
        <p className="text-xs text-gray-500">#a7f3d0</p>
      </div>

      <div className="text-center">
        <div className="w-20 h-20 mx-auto rounded-lg shadow" style={{ backgroundColor: "#6ee7b7" }}></div>
        <p className="text-sm font-semibold mt-2">Naija Green 300</p>
        <p className="text-xs text-gray-500">#6ee7b7</p>
      </div>
      
      <div className="text-center">
        <div className="w-20 h-20 mx-auto rounded-lg shadow" style={{ backgroundColor: "#34d399" }}></div>
        <p className="text-sm font-semibold mt-2">Naija Green 400</p>
        <p className="text-xs text-gray-500">#34d399</p>
      </div>
      
      <div className="text-center">
        <div className="w-20 h-20 mx-auto rounded-lg shadow" style={{ backgroundColor: "#10b981" }}></div>
        <p className="text-sm font-semibold mt-2">Naija Green 500</p>
        <p className="text-xs text-gray-500">#10b981</p>
      </div>

      <div className="text-center">
        <div className="w-20 h-20 mx-auto rounded-lg shadow" style={{ backgroundColor: "#059669" }}></div>
        <p className="text-sm font-semibold mt-2 text-black">Naija Green 600</p>
        <p className="text-xs text-gray-500">#059669</p>
      </div>

      <div className="text-center">
        <div className="w-20 h-20 mx-auto rounded-lg shadow" style={{ backgroundColor: "#047857" }}></div>
        <p className="text-sm font-semibold mt-2 text-black">Naija Green 700</p>
        <p className="text-xs text-gray-500">#047857</p>
      </div>
    </div>
  );
}

export default NaijaColors;
