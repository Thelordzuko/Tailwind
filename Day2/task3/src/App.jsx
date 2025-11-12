import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

export default function BlogPost() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">

      <div className="w-full h-64 md:h-96 bg-green-700 relative">
        <img
          src="https://i.pinimg.com/736x/6c/cf/87/6ccf873cb76d7a5e6651271758e7ce81.jpg"
          alt="Featured image"
          className="w-full h-full object-fit"

        />
        <div className="absolute inset-0  bg-opacity-40 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center px-4">
            Sustainable Future: Green Innovations from Nigeria
          </h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 bg-blue-100">

        <article className="md:col-span-2 space-y-6">
          <div className="text-sm text-gray-500 flex flex-wrap gap-4">
            <span>By <span className="text-green-700 font-semibold">Alebiosu Oluwaseyi Samuel</span></span>
            <span>• Nov 12, 2025</span>
            <span>• 6 min read</span>
          </div>

          <div className="space-y-6 text-lg">
            <p>
              Nigeria's path toward a sustainable future is gaining momentum as
              innovators and young scientists develop green technologies to
              tackle pollution and climate change. From solar startups to
              bio-waste conversion labs, the next generation is taking the
              challenge personally.
            </p>
            <p>
              These innovations are not only environmentally sound but also
              economically promising — creating jobs, improving public health,
              and boosting productivity. Collaboration between academia,
              government, and private sectors remains key to scaling these
              solutions nationwide.
            </p>
            
          </div>
        </article>

        <aside className="space-y-6">
          <h2 className="text-2xl font-bold text-green-700">Related Posts</h2>
          <div className="space-y-4">
            <div className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition">
              <h3 className="font-semibold text-lg">The Rise of Eco-Entrepreneurs in Africa</h3>
              <p className="text-sm text-gray-500 mt-1">5 min read</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition">
              <h3 className="font-semibold text-lg">How Chemistry is Shaping a Cleaner Nigeria</h3>
              <p className="text-sm text-gray-500 mt-1">7 min read</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition">
              <h3 className="font-semibold text-lg">Renewable Energy Projects to Watch in 2025</h3>
              <p className="text-sm text-gray-500 mt-1">4 min read</p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
