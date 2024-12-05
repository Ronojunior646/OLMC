import React, { useState } from 'react';
import { CreditCard, DollarSign } from 'lucide-react';

export function DonationForm() {
  const [amount, setAmount] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement payment processing logic here
    alert('Thank you for your donation! This is a demo - no actual payment was processed.');
  };

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-xl p-8">
      <div className="flex items-center justify-center mb-8">
        <DollarSign className="h-16 w-16 text-blue-900" />
      </div>
      <h2 className="text-3xl font-bold text-center text-blue-900 mb-8">Make a Donation</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-lg font-medium text-gray-700">Amount (KES)</label>
          <div className="mt-2 relative rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span className="text-gray-500 sm:text-lg">KSh</span>
            </div>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-12 pr-12 sm:text-lg border-gray-300 rounded-md"
              placeholder="0.00"
              required
            />
          </div>
        </div>
        <div>
          <label className="block text-lg font-medium text-gray-700">Full Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-2 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-lg border-gray-300 rounded-md"
            required
          />
        </div>
        <div>
          <label className="block text-lg font-medium text-gray-700">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-2 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-lg border-gray-300 rounded-md"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-blue-900 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          <CreditCard className="mr-2 h-5 w-5" />
          Donate Now
        </button>
      </form>
    </div>
  );
}