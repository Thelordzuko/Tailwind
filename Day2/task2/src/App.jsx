import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-green-700 text-white">
      <div className="flex justify-between items-center px-6 py-4">
     
        <div className='flex items-center gap-2'>
          <div className='w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white font-bold'>
            Z.
          </div>
          <span className="text-xl font-bold">Zuconnect</span>
        </div>
        
        <div className="hidden md:flex space-x-6 font-medium">
          <a href="#" className="hover:text-green-200">Home</a>
          <a href="#" className="hover:text-green-200">Products</a>
          <a href="#" className="hover:text-green-200">About</a>
          <a href="#" className="hover:text-green-200">Contact</a>
        </div>

        <div className="flex items-center space-x-4">
          <span className="text-xl cursor-pointer">🛒</span>
          <button className="bg-white text-green-700 px-4 py-2 rounded font-semibold hover:bg-green-50 hidden md:block">
            Login
          </button>

          <button
            className="md:hidden text-2xl"
            onClick={() => setIsOpen(!menuOpen)}
          >
            {isOpen ? "✖️" : "☰"}
          </button>
        </div>
      </div>

      <div
        className={`md:hidden bg-green-800 text-white overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-64 py-4" : "max-h-0"
        }`}
      >
        <div className="flex flex-col items-start space-y-3 px-6">
          <a href="#" className="hover:text-green-200">Home</a>
          <a href="#" className="hover:text-green-200">Products</a>
          <a href="#" className="hover:text-green-200">About</a>
          <a href="#" className="hover:text-green-200">Contact</a>
          <button className="w-full bg-white text-green-700 px-4 py-2 rounded font-semibold hover:bg-green-50">
            Login
          </button>
        </div>
      </div>
    </nav>
  );
}