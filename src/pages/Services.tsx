import React from 'react';
import { ServiceSchedule } from '../components/ServiceSchedule';
import { Calendar, Users, Heart } from 'lucide-react';

export function Services() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-blue-900">Our Services</h1>
          <p className="mt-4 text-gray-600">Join us in worship and fellowship</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
              <Calendar className="h-6 w-6 text-blue-900" />
            </div>
            <h3 className="text-xl font-semibold text-blue-900 mb-2">Regular Services</h3>
            <p className="text-gray-600">
              Weekly services designed to nurture your spiritual growth and strengthen your faith.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
              <Users className="h-6 w-6 text-blue-900" />
            </div>
            <h3 className="text-xl font-semibold text-blue-900 mb-2">Community Groups</h3>
            <p className="text-gray-600">
              Small groups meeting throughout the week for fellowship, study, and prayer.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
              <Heart className="h-6 w-6 text-blue-900" />
            </div>
            <h3 className="text-xl font-semibold text-blue-900 mb-2">Special Events</h3>
            <p className="text-gray-600">
              Regular special services and events that bring our community together.
            </p>
          </div>
        </div>

        <ServiceSchedule />
      </div>
    </div>
  );
}