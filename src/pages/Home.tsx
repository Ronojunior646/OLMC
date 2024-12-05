import React from 'react';
import { ServiceSchedule } from '../components/ServiceSchedule';

export function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div 
        className="relative h-[600px] bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1548625149-fc4a29cf7092?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60">
          <div className="max-w-8xl mx-auto h-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl font-bold text-white sm:text-6xl md:text-7xl">
                Outreach Living Christian Mountain Church
              </h1>
              <p className="mt-6 text-2xl text-white">
                Welcome to our spiritual home in Koinoin, Bomet County
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl font-bold text-blue-900 mb-6">Welcome to Our Church</h2>
            <p className="text-lg text-gray-600 mb-6">
              We are a vibrant Christian community dedicated to spreading God's love and message
              throughout Koinoin Constituency and beyond. Our doors are open to all who seek spiritual growth
              and fellowship.
            </p>
            <p className="text-lg text-gray-600">
              Join us for worship, prayer, and community service as we work together to make
              a positive impact in Bomet County and share the love of Christ.
            </p>
          </div>
          <ServiceSchedule />
        </div>
      </div>
    </div>
  );
}