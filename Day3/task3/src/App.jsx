import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { FaShoppingCart, FaDollarSign, FaUsers, FaChartLine } from "react-icons/fa";

export default function StatsDashboard() {
  const stats = [
    {
      title: "Total Sales",
      value: "1,245",
      change: "+12%",
      icon: <FaShoppingCart className="text-3xl" />,
      color: "bg-blue-100 text-blue-700",
    },
    {
      title: "Orders",
      value: "532",
      change: "+8%",
      icon: <FaChartLine className="text-3xl" />,
      color: "bg-green-100 text-green-700",
    },
    {
      title: "Customers",
      value: "3,210",
      change: "+5%",
      icon: <FaUsers className="text-3xl" />,
      color: "bg-yellow-100 text-yellow-700",
    },
    {
      title: "Revenue",
      value: "₦124,000",
      change: "+20%",
      icon: <FaDollarSign className="text-3xl" />,
      color: "bg-purple-100 text-purple-700",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-800 text-center">
        Stats Dashboard
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`flex items-center p-6 rounded-xl shadow-lg transition transform hover:-translate-y-2 ${stat.color}`}
          >
            <div className="mr-4">{stat.icon}</div>
            <div>
              <p className="text-lg font-medium">{stat.title}</p>
              <p className="text-2xl font-bold">{stat.value}</p>
              <p className="text-sm font-semibold mt-2">{stat.change}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}