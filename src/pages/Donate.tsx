import React from 'react';
import { DonationForm } from '../components/DonationForm';
import { Target, Heart, HandHeart } from 'lucide-react';

export function Donate() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-blue-900">Support Our Ministry</h1>
          <p className="mt-4 text-gray-600">Your generosity helps us spread God's love</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <Target className="h-8 w-8 text-blue-900" />
            </div>
            <h3 className="text-lg font-semibold text-blue-900">Community Outreach</h3>
            <p className="mt-2 text-gray-600">Supporting local families in need</p>
          </div>

          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <Heart className="h-8 w-8 text-blue-900" />
            </div>
            <h3 className="text-lg font-semibold text-blue-900">Youth Programs</h3>
            <p className="mt-2 text-gray-600">Investing in the next generation</p>
          </div>

          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <HandHeart className="h-8 w-8 text-blue-900" />
            </div>
            <h3 className="text-lg font-semibold text-blue-900">Church Maintenance</h3>
            <p className="mt-2 text-gray-600">Maintaining our place of worship</p>
          </div>
        </div>

        <DonationForm />
      </div>
    </div>
  );
}