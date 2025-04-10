import React from 'react';
import { CalendarIcon, CurrencyDollarIcon, TrendingUpIcon, BeakerIcon } from '@heroicons/react/24/outline';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const stats = [
  { name: 'Today\'s Production', value: '24 recipes', icon: CalendarIcon, color: 'bg-pink-500' },
  { name: 'Quality Score', value: '98.7%', icon: BeakerIcon, color: 'bg-green-500' },
  { name: 'Revenue (MTD)', value: '$24,271', icon: CurrencyDollarIcon, color: 'bg-blue-500' },
  { name: 'Production Growth', value: '+15.3%', icon: TrendingUpIcon, color: 'bg-indigo-500' },
];

const chartOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Monthly Production Volume',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June'];
const chartData = {
  labels,
  datasets: [
    {
      label: 'Pastries',
      data: [65, 78, 66, 74, 85, 80],
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Entrees',
      data: [45, 59, 80, 81, 56, 55],
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
    {
      label: 'Desserts',
      data: [30, 45, 55, 50, 60, 75],
      backgroundColor: 'rgba(75, 192, 192, 0.5)',
    },
  ],
};

export default function Dashboard() {
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
        <p className="mt-1 text-sm text-gray-500">
          Overview of your gourmet food production operation
        </p>
      </div>
      
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.name}
            className="bg-white overflow-hidden shadow rounded-lg"
          >
            <div className="p-5">
              <div className="flex items-center">
                <div className={`flex-shrink-0 rounded-md p-3 ${stat.color}`}>
                  <stat.icon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">{stat.name}</dt>
                    <dd>
                      <div className="text-lg font-medium text-gray-900">{stat.value}</div>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-8">
        <div className="bg-white shadow rounded-lg p-6">
          <Bar options={chartOptions} data={chartData} height={100} />
        </div>
      </div>
      
      <div className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-2">
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Recent Production</h2>
          <div className="flow-root">
            <ul className="-my-5 divide-y divide-gray-200">
              <li className="py-4">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center">
                    <span className="text-xs font-medium text-indigo-800">GP</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">French Macarons</p>
                    <p className="text-sm text-gray-500 truncate">Completed: 2 hours ago</p>
                  </div>
                  <div>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Completed
                    </span>
                  </div>
                </div>
              </li>
              <li className="py-4">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center">
                    <span className="text-xs font-medium text-indigo-800">GP</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">Truffle Risotto</p>
                    <p className="text-sm text-gray-500 truncate">Completed: 3 hours ago</p>
                  </div>
                  <div>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Completed
                    </span>
                  </div>
                </div>
              </li>
              <li className="py-4">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center">
                    <span className="text-xs font-medium text-indigo-800">GP</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">Beef Wellington</p>
                    <p className="text-sm text-gray-500 truncate">Completed: 5 hours ago</p>
                  </div>
                  <div>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Completed
                    </span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Low Inventory Items</h2>
          <div className="flow-root">
            <ul className="-my-5 divide-y divide-gray-200">
              <li className="py-4">
                <div className="flex items-center space-x-4">
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">Truffle Oil</p>
                    <p className="text-sm text-gray-500 truncate">Remaining: 200ml (2 bottles)</p>
                  </div>
                  <div>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                      Low
                    </span>
                  </div>
                </div>
              </li>
              <li className="py-4">
                <div className="flex items-center space-x-4">
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">Aged Balsamic Vinegar</p>
                    <p className="text-sm text-gray-500 truncate">Remaining: 350ml (1 bottle)</p>
                  </div>
                  <div>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                      Low
                    </span>
                  </div>
                </div>
              </li>
              <li className="py-4">
                <div className="flex items-center space-x-4">
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">Saffron</p>
                    <p className="text-sm text-gray-500 truncate">Remaining: 15g</p>
                  </div>
                  <div>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                      Low
                    </span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}