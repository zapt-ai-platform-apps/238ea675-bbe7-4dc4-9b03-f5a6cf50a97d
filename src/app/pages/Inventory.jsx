import React, { useState } from 'react';
import { 
  MagnifyingGlassIcon, 
  PlusIcon,
  ExclamationCircleIcon,
  ArrowsUpDownIcon
} from '@heroicons/react/24/outline';

const inventory = [
  { id: 1, name: 'Arborio Rice', category: 'Grains', quantity: '10 kg', unit: 'kg', status: 'In Stock', supplier: 'Italian Imports Inc.' },
  { id: 2, name: 'Truffle Oil', category: 'Oils', quantity: '200 ml', unit: 'ml', status: 'Low', supplier: 'Gourmet Essentials' },
  { id: 3, name: 'Parmesan Cheese', category: 'Dairy', quantity: '5 kg', unit: 'kg', status: 'In Stock', supplier: 'Artisan Cheese Co.' },
  { id: 4, name: 'Saffron', category: 'Spices', quantity: '15 g', unit: 'g', status: 'Low', supplier: 'Exotic Spice Traders' },
  { id: 5, name: 'Beef Tenderloin', category: 'Meat', quantity: '20 kg', unit: 'kg', status: 'In Stock', supplier: 'Premium Meats Ltd.' },
  { id: 6, name: 'Puff Pastry', category: 'Bakery', quantity: '30 sheets', unit: 'sheets', status: 'In Stock', supplier: 'Bakery Supplies Co.' },
  { id: 7, name: 'Almond Flour', category: 'Flours', quantity: '8 kg', unit: 'kg', status: 'In Stock', supplier: 'Nut Producers LLC' },
  { id: 8, name: 'Heavy Cream', category: 'Dairy', quantity: '15 L', unit: 'L', status: 'In Stock', supplier: 'Fresh Dairy Farms' },
  { id: 9, name: 'Aged Balsamic Vinegar', category: 'Vinegars', quantity: '350 ml', unit: 'ml', status: 'Low', supplier: 'Italian Imports Inc.' },
  { id: 10, name: 'Vanilla Beans', category: 'Spices', quantity: '25 pods', unit: 'pods', status: 'In Stock', supplier: 'Exotic Spice Traders' },
  { id: 11, name: 'Duck Breast', category: 'Meat', quantity: '12 kg', unit: 'kg', status: 'In Stock', supplier: 'Premium Meats Ltd.' },
  { id: 12, name: 'White Wine', category: 'Beverages', quantity: '24 bottles', unit: 'bottles', status: 'In Stock', supplier: 'Vineyard Selections' },
];

const categories = ['All', 'Grains', 'Oils', 'Dairy', 'Spices', 'Meat', 'Bakery', 'Flours', 'Vinegars', 'Beverages'];

export default function Inventory() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [statusFilter, setStatusFilter] = useState('All');
  
  const filteredInventory = inventory.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         item.supplier.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
    const matchesStatus = statusFilter === 'All' || item.status === statusFilter;
    
    return matchesSearch && matchesCategory && matchesStatus;
  });
  
  return (
    <div>
      <div className="mb-6 sm:flex sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Inventory</h1>
          <p className="mt-1 text-sm text-gray-500">
            Manage your gourmet food ingredients and supplies
          </p>
        </div>
        <div className="mt-4 sm:mt-0">
          <button
            type="button"
            className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 cursor-pointer"
          >
            <PlusIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
            Add Item
          </button>
        </div>
      </div>
      
      <div className="mb-6">
        <div className="relative rounded-md shadow-sm max-w-lg">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
          </div>
          <input
            type="text"
            className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md box-border"
            placeholder="Search inventory..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      
      <div className="mb-6 bg-white shadow overflow-hidden">
        <div className="overflow-x-auto">
          <div className="flex p-2 space-x-2 border-b">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-3 py-1 rounded-md text-sm font-medium ${
                  activeCategory === category
                    ? 'bg-indigo-100 text-indigo-800'
                    : 'text-gray-500 hover:bg-gray-100 hover:text-gray-900'
                } cursor-pointer`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
          
          <div className="p-2 border-b bg-gray-50 flex justify-between items-center">
            <div className="flex space-x-2">
              <button
                className={`px-3 py-1 rounded-md text-sm font-medium ${
                  statusFilter === 'All'
                    ? 'bg-indigo-100 text-indigo-800'
                    : 'text-gray-500 hover:bg-gray-100 hover:text-gray-900'
                } cursor-pointer`}
                onClick={() => setStatusFilter('All')}
              >
                All
              </button>
              <button
                className={`px-3 py-1 rounded-md text-sm font-medium ${
                  statusFilter === 'Low'
                    ? 'bg-red-100 text-red-800'
                    : 'text-gray-500 hover:bg-gray-100 hover:text-gray-900'
                } cursor-pointer`}
                onClick={() => setStatusFilter('Low')}
              >
                Low Stock
              </button>
              <button
                className={`px-3 py-1 rounded-md text-sm font-medium ${
                  statusFilter === 'In Stock'
                    ? 'bg-green-100 text-green-800'
                    : 'text-gray-500 hover:bg-gray-100 hover:text-gray-900'
                } cursor-pointer`}
                onClick={() => setStatusFilter('In Stock')}
              >
                In Stock
              </button>
            </div>
            
            <div className="flex items-center text-sm text-gray-500">
              <span>Total items: {filteredInventory.length}</span>
            </div>
          </div>
          
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  <div className="flex items-center cursor-pointer">
                    Name
                    <ArrowsUpDownIcon className="h-4 w-4 ml-1" />
                  </div>
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Category
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  <div className="flex items-center cursor-pointer">
                    Quantity
                    <ArrowsUpDownIcon className="h-4 w-4 ml-1" />
                  </div>
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
                  Supplier
                </th>
                <th scope="col" className="relative px-6 py-3">
                  <span className="sr-only">Actions</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredInventory.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{item.name}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{item.category}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{item.quantity}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      item.status === 'Low'
                        ? 'bg-red-100 text-red-800'
                        : 'bg-green-100 text-green-800'
                    }`}>
                      {item.status === 'Low' && <ExclamationCircleIcon className="h-4 w-4 mr-1" />}
                      {item.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{item.supplier}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button className="text-indigo-600 hover:text-indigo-900 cursor-pointer">Edit</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          
          {filteredInventory.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-gray-500">No inventory items found matching your criteria.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}