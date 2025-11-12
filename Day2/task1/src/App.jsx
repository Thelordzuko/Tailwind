import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

export default function ProductGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-6 bg-gray-100">

      <div className="bg-white p-4 rounded shadow ">
        <img src="https://i.pinimg.com/736x/fc/6c/cf/fc6ccf6314f207173840e9e368cc20b0.jpg" alt="Jollof Rice" className="w-full h-40 object-cover rounded mb-2" />
        <h3 className="font-semibold">Jollof Rice</h3>
        <p className="text-green-700 font-bold">₦1,500</p>
        <button className="bg-green-600 text-white px-3 py-1 rounded mt-2">Buy</button>
      </div>

      <div className="bg-white p-4 rounded shadow">
        <img src="https://i.pinimg.com/1200x/23/f2/0f/23f20fe7d8c365a2595a832c12295d99.jpg" alt="Ankara Fabric" className="w-full h-40 object-cover rounded mb-2" />
        <h3 className="font-semibold">Ankara Fabric</h3>
        <p className="text-green-700 font-bold">₦5,000</p>
        <button className="bg-green-600 text-white px-3 py-1 rounded mt-2">Buy</button>
      </div>

      <div className="bg-white p-4 rounded shadow">
        <img src="https://i.pinimg.com/736x/73/c8/4d/73c84df93a770108f50657de2f6b6900.jpg" alt="Suya" className="w-full h-40 object-cover rounded mb-2" />
        <h3 className="font-semibold">Suya</h3>
        <p className="text-green-700 font-bold">₦1,000</p>
        <button className="bg-green-600 text-white px-3 py-1 rounded mt-2">Buy</button>
      </div>

      <div className="bg-white p-4 rounded shadow">
        <img src="https://i.pinimg.com/736x/ae/e7/82/aee7828cf5b640f42f82043eb2380a46.jpg" alt="Aso-Ebi" className="w-full h-40 object-cover rounded mb-2" />
        <h3 className="font-semibold">Aso-Ebi</h3>
        <p className="text-green-700 font-bold">₦15,000</p>
        <button className="bg-green-600 text-white px-3 py-1 rounded mt-2">Buy</button>
      </div>

      <div className="bg-white p-4 rounded shadow">
        <img src="https://i.pinimg.com/736x/c7/20/2c/c7202c948789eb7e3ffaf8eb32d53b42.jpg" alt="Palm Wine" className="w-full h-40 object-cover rounded mb-2" />
        <h3 className="font-semibold">Palm Wine</h3>
        <p className="text-green-700 font-bold">₦1,200</p>
        <button className="bg-green-600 text-white px-3 py-1 rounded mt-2">Buy</button>
      </div>

      <div className="bg-white p-4 rounded shadow">
        <img src="https://i.pinimg.com/1200x/6c/dc/b1/6cdcb1d8b1c267c0e398b3add1cdde9a.jpg" alt="Agbada" className="w-full h-40 object-cover rounded mb-2" />
        <h3 className="font-semibold">Agbada</h3>
        <p className="text-green-700 font-bold">₦25,000</p>
        <button className="bg-green-600 text-white px-3 py-1 rounded mt-2">Buy</button>
      </div>

      <div className="bg-white p-4 rounded shadow">
        <img src="https://i.pinimg.com/1200x/8c/43/51/8c43517573225c2ba7b4eb857acf5c2d.jpg" alt="Chin Chin" className="w-full h-40 object-cover rounded mb-2" />
        <h3 className="font-semibold">Chin Chin</h3>
        <p className="text-green-700 font-bold">₦500</p>
        <button className="bg-green-600 text-white px-3 py-1 rounded mt-2">Buy</button>
      </div>

      <div className="bg-white p-4 rounded shadow">
        <img src="https://i.pinimg.com/736x/ff/ac/b6/ffacb64af7c22a7e2060e454a0d75e90.jpg" alt="Puff Puff" className="w-full h-40 object-cover rounded mb-2" />
        <h3 className="font-semibold">Puff Puff</h3>
        <p className="text-green-700 font-bold">₦300</p>
        <button className="bg-green-600 text-white px-3 py-1 rounded mt-2">Buy</button>
      </div>

    </div>
  );
}
