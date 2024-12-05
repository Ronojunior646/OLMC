import React from 'react';

const services = [
  { day: 'Sunday', time: '9:00 AM - 11:30 AM', name: 'Main Service' },
  { day: 'Sunday', time: '4:00 PM - 6:00 PM', name: 'Evening Service' },
  { day: 'Tuesday', time: '6:00 PM - 7:30 PM', name: 'Bible Study' },
  { day: 'Wednesday', time: '5:30 PM - 7:00 PM', name: 'Prayer Meeting' },
];

export function ServiceSchedule() {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold text-blue-900 mb-4">Service Schedule</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="bg-blue-100">
              <th className="px-6 py-3 text-left text-sm font-semibold text-blue-900">Day</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-blue-900">Time</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-blue-900">Service</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {services.map((service, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm text-gray-900">{service.day}</td>
                <td className="px-6 py-4 text-sm text-gray-900">{service.time}</td>
                <td className="px-6 py-4 text-sm text-gray-900">{service.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}