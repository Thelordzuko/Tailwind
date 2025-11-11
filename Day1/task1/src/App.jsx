import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function ProfileCard() {
  return (
    <div className="max-w-sm mx-auto bg-white rounded-lg shadow-lg overflow-hidden p-3">
      {/* this is for the header with Nigerian colors */}
      <div className="h-32 bg-gradient-to-r from-green-600 via-white to-green-600"></div>
      
      {/* for the avatar space */}
      <div className="relative px-6 -mt-16">
        <div className="w-32 h-32 bg-gray-300 rounded-full border-4 border-white mx-auto"></div>
      </div>
      
      {/* for the content */}
      <div className="text-center px-6 py-4">
        <h2 className="text-2xl font-bold text-gray-800">Oluwaseyi Alebiosu</h2>
        <p className="text-gray-600 mt-1">AI Developer</p>
        <p className="text-sm text-gray-500 mt-2">Abeokuta, Ogun State. Nigeria 🇳🇬</p>
        
        {/* for the bio */}
        <p className="text-gray-700 mt-4 text-sm leading-relaxed">
          An aspiring techie looking to use artificial intelligence to solve real-world problems.
        </p>
        
        {/* for the stats */}
        <div className="flex justify-around mt-6 pt-6 border-t border-gray-200">
          <div>
            <p className="text-2xl font-bold text-naija-green">30.5k</p>
            <p className="text-xs text-gray-600 uppercase">Followers</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-naija-green">67</p>
            <p className="text-xs text-gray-600 uppercase">Projects</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-naija-green">398</p>
            <p className="text-xs text-gray-600 uppercase">Following</p>
          </div>
        </div>
        
        {/* for the button */}
        <button className="mt-6 w-full bg-green-600 text-white font-semibold py-3 rounded-lg">
          Follow
        </button>
      </div>
    </div>
  );
}

export default ProfileCard;