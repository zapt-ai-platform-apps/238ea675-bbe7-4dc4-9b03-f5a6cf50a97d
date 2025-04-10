import React from 'react';
import { CheckCircleIcon, XCircleIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline';

const qualityChecks = [
  { 
    id: 1, 
    productionRunId: 1,
    recipeName: 'Truffle Risotto', 
    checkDate: '2023-10-15T10:30:00', 
    inspector: 'Chef Michel',
    status: 'Passed',
    criteria: [
      { name: 'Texture', result: 'Pass', notes: 'Creamy with slight bite' },
      { name: 'Aroma', result: 'Pass', notes: 'Truffle aroma present' },
      { name: 'Taste', result: 'Pass', notes: 'Rich and flavorful' },
      { name: 'Appearance', result: 'Pass', notes: 'Holds shape nicely on plate' }
    ]
  },
  { 
    id: 2, 
    productionRunId: 2,
    recipeName: 'Beef Wellington', 
    checkDate: '2023-10-15T14:00:00', 
    inspector: 'Chef Sarah',
    status: 'Failed',
    criteria: [
      { name: 'Pastry', result: 'Fail', notes: 'Slightly undercooked in center' },
      { name: 'Meat', result: 'Pass', notes: 'Medium-rare as required' },
      { name: 'Duxelles', result: 'Pass', notes: 'Flavorful and moist' },
      { name: 'Appearance', result: 'Pass', notes: 'Good coloration' }
    ]
  },
  { 
    id: 3, 
    productionRunId: 3,
    recipeName: 'French Macarons', 
    checkDate: '2023-10-16T12:00:00', 
    inspector: 'Chef Jean',
    status: 'Passed with Issues',
    criteria: [
      { name: 'Texture', result: 'Pass', notes: 'Crisp shell with soft center' },
      { name: 'Feet', result: 'Pass', notes: 'Well-developed feet' },
      { name: 'Filling', result: 'Issue', notes: 'Slightly too sweet' },
      { name: 'Appearance', result: 'Pass', notes: 'Consistent size and shape' }
    ]
  }
];

export default function Quality() {
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
      case 'Passed':
        return 'bg-green-100 text-green-800';
      case 'Failed':
        return 'bg-red-100 text-red-800';
      case 'Passed with Issues':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };
  
  const getStatusIcon = (status) => {
    switch (status) {
      case 'Passed':
        return <CheckCircleIcon className="h-5 w-5 mr-1" />;
      case 'Failed':
        return <XCircleIcon className="h-5 w-5 mr-1" />;
      case 'Passed with Issues':
        return <ExclamationTriangleIcon className="h-5 w-5 mr-1" />;
      default:
        return null;
    }
  };
  
  const getResultBadgeClass = (result) => {
    switch (result) {
      case 'Pass':
        return 'bg-green-100 text-green-800';
      case 'Fail':
        return 'bg-red-100 text-red-800';
      case 'Issue':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };
  
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">Quality Control</h1>
        <p className="mt-1 text-sm text-gray-500">
          Monitor and ensure quality standards for your gourmet food production
        </p>
      </div>
      
      <div className="mb-6 flex justify-between items-center">
        <div className="text-sm text-gray-500">
          Showing {qualityChecks.length} quality inspection records
        </div>
        
        <button
          type="button"
          className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 cursor-pointer"
        >
          New Quality Check
        </button>
      </div>
      
      <div className="space-y-6">
        {qualityChecks.map((check) => (
          <div key={check.id} className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6 flex justify-between items-center">
              <div>
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  {check.recipeName}
                </h3>
                <p className="mt-1 max-w-2xl text-sm text-gray-500">
                  Inspected by {check.inspector} on {formatDate(check.checkDate)}
                </p>
              </div>
              <div className="flex items-center">
                <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getStatusBadgeClass(check.status)}`}>
                  {getStatusIcon(check.status)}
                  {check.status}
                </span>
              </div>
            </div>
            <div className="border-t border-gray-200">
              <dl>
                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Criteria</dt>
                  <dt className="text-sm font-medium text-gray-500">Result</dt>
                  <dt className="text-sm font-medium text-gray-500 sm:col-span-2">Notes</dt>
                </div>
                {check.criteria.map((criterion, index) => (
                  <div 
                    key={index} 
                    className={`px-4 py-5 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-6 ${
                      index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                    }`}
                  >
                    <dd className="text-sm text-gray-900">{criterion.name}</dd>
                    <dd className="text-sm">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getResultBadgeClass(criterion.result)}`}>
                        {criterion.result}
                      </span>
                    </dd>
                    <dd className="text-sm text-gray-500 sm:col-span-2">{criterion.notes}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}