import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

export function About() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-blue-900">About Our Church</h1>
          <p className="mt-6 text-xl text-gray-600">Serving the Koinoin community with faith and love</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Our Mission</h2>
            <p className="text-lg text-gray-600 mb-8">
              At Outreach Living Christian Mountain Church, our mission is to spread God's love
              through worship, fellowship, and service to our community. We believe in creating
              a welcoming environment where everyone can experience God's presence and grow in
              their faith journey.
            </p>

            <h2 className="text-3xl font-bold text-blue-900 mb-6">Our Vision</h2>
            <p className="text-lg text-gray-600 mb-8">
              We envision a community transformed by God's love, where people from all walks of
              life come together to worship, learn, and serve. Through our ministry, we aim to
              make a lasting impact in Koinoin and throughout Bomet County.
            </p>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <MapPin className="h-6 w-6 text-blue-900" />
                <span className="text-lg text-gray-600">Koinoin, Bomet County, Kenya</span>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="h-6 w-6 text-blue-900" />
                <span className="text-lg text-gray-600">+254 XXX XXX XXX</span>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="h-6 w-6 text-blue-900" />
                <span className="text-lg text-gray-600">contact@olcmchurch.org</span>
              </div>
            </div>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1543465077-db45d34b88a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
              alt="Church building"
              className="w-full h-full object-cover rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}