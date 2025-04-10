import React, { useState } from 'react';
import { 
  ArrowsUpDownIcon,
  EyeIcon,
  CheckCircleIcon,
  ClockIcon,
  ExclamationTriangleIcon
} from '@heroicons/react/24/outline';

const productionRuns = [
  { 
    id: 1, 
    recipeId: '1',
    recipeName: 'Truffle Risotto', 
    batchSize: '50 servings', 
    startTime: '2023-10-15T08:00:00', 
    endTime: '2023-10-15T10:30:00', 
    status: 'Completed',
    assignedTo: 'Chef Michel'
  },
  { 
    id: 2, 
    recipeId: '2',
    recipeName: 'Beef Wellington', 
    batchSize: '30 servings', 
    startTime: '2023-10-15T10:00:00', 
    endTime: '2023-10-15T14:00:00', 
    status: 'Completed',
    assignedTo: 'Chef Sarah'
  },
  { 
    id: 3, 
    recipeId: '3',
    recipeName: 'French Macarons', 
    batchSize: '120 pieces', 
    startTime: '2023-10-16T09:00:00', 
    endTime: '2023-10-16T12:00:00', 
    status: 'Completed',
    assignedTo: 'Chef Jean'
  },
  { 
    id: 4, 
    recipeId: '4',
    recipeName: 'Lobster Bisque', 
    batchSize: '60 servings', 
    startTime: '2023-10-17T08:00:00', 
    endTime: null, 
    status: 'In Progress',
    assignedTo: 'Chef Michel'
  },
  { 
    id: 5, 
    recipeId: '5',
    recipeName: 'Crème Brûlée', 
    batchSize: '40 servings', 
    startTime: '2023-10-17T13:00:00', 
    endTime: null, 
    status: 'Scheduled',
    assignedTo: 'Chef Anna'
  }
];

const statuses = ['All', 'Scheduled', 'In Progress', 'Completed'];

export default function Production() {
  const [statusFilter, setStatusFilter] = useState('All');
  
  const filteredRuns = productionRuns.filter(run => {
    return statusFilter === 'All' || run.status === statusFilter;
  });

  const formatDate = (dateString) => {
    if (!dateString) return '-';
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric'
    }).format(date);
  };
  
  const getStatusBadgeClass = (status) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-100 text-green-800';
      case 'In Progress':
        return 'bg-blue-100 text-blue-800';
      case 'Scheduled':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };
  
  const getStatusIcon = (status) => {
    switch (status) {
      case 'Completed':
        return <CheckCircleIcon className="h-4 w-4 mr-1" />;
      case 'In Progress':
        return <ClockIcon className="h-4 w-4 mr-1" />;
      case 'Scheduled':
        return <ExclamationTriangleIcon className="h-4 w-4 mr-1" />;
      default:
        return null;
    }
  };
  
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">Production Scheduling</h1>
        <p className="mt-1 text-sm text-gray-500">
          Manage and track your gourmet food production runs
        </p>
      </div>
      
      <div className="mb-6 flex justify-between items-center">
        <div className="flex space-x-2">
          {statuses.map((status) => (
            <button
              key={status}
              className={`px-3 py-1 rounded-md text-sm font-medium ${
                statusFilter === status
                  ? 'bg-indigo-100 text-indigo-800'
                  : 'text-gray-500 hover:bg-gray-100 hover:text-gray-900'
              } cursor-pointer`}
              onClick={() => setStatusFilter(status)}
            >
              {status}
            </button>
          ))}
        </div>
        
        <button
          type="button"
          className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 cursor-pointer"
        >
          Schedule New Run
        </button>
      </div>
      
      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                <div className="flex items-center cursor-pointer">
                  Recipe
                  <ArrowsUpDownIcon className="h-4 w-4 ml-1" />
                </div>
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Batch Size
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                <div className="flex items-center cursor-pointer">
                  Start Time
                  <ArrowsUpDownIcon className="h-4 w-4 ml-1" />
                </div>
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                End Time
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Status
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Assigned To
              </th>
              <th scope="col" className="relative px-6 py-3">
                <span className="sr-only">Actions</span>
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredRuns.map((run) => (
              <tr key={run.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">{run.recipeName}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">{run.batchSize}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">{formatDate(run.startTime)}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">{formatDate(run.endTime)}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusBadgeClass(run.status)}`}>
                    {getStatusIcon(run.status)}
                    {run.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">{run.assignedTo}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button className="text-indigo-600 hover:text-indigo-900 mr-3 cursor-pointer">
                    <EyeIcon className="h-5 w-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        
        {filteredRuns.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-gray-500">No production runs found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
}