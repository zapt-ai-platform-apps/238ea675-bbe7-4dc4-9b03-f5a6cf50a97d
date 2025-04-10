import React from 'react';
import { CogIcon, UserIcon, BuildingStorefrontIcon, ScaleIcon } from '@heroicons/react/24/outline';

export default function Settings() {
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">Settings</h1>
        <p className="mt-1 text-sm text-gray-500">
          Configure your gourmet food production system
        </p>
      </div>
      
      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="company_name" className="block text-sm font-medium text-gray-700">
                Company Name
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="company_name"
                  id="company_name"
                  defaultValue="Gourmet Creations Inc."
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md box-border"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="production_location" className="block text-sm font-medium text-gray-700">
                Production Location
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="production_location"
                  id="production_location"
                  defaultValue="Main Kitchen"
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md box-border"
                />
              </div>
            </div>
            
            <div className="sm:col-span-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900 flex items-center">
                <UserIcon className="h-5 w-5 text-indigo-500 mr-2" />
                User Settings
              </h3>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="head_chef" className="block text-sm font-medium text-gray-700">
                Head Chef
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="head_chef"
                  id="head_chef"
                  defaultValue="Chef Michel Laurent"
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md box-border"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <div className="mt-1">
                <input
                  type="email"
                  name="email"
                  id="email"
                  defaultValue="chef@gourmetcreations.com"
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md box-border"
                />
              </div>
            </div>
            
            <div className="sm:col-span-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900 flex items-center">
                <BuildingStorefrontIcon className="h-5 w-5 text-indigo-500 mr-2" />
                Supplier Settings
              </h3>
            </div>

            <div className="sm:col-span-6">
              <label htmlFor="default_supplier" className="block text-sm font-medium text-gray-700">
                Default Supplier
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="default_supplier"
                  id="default_supplier"
                  defaultValue="Gourmet Essentials"
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md box-border"
                />
              </div>
            </div>
            
            <div className="sm:col-span-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900 flex items-center">
                <ScaleIcon className="h-5 w-5 text-indigo-500 mr-2" />
                Production Settings
              </h3>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="default_batch_size" className="block text-sm font-medium text-gray-700">
                Default Batch Size
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="default_batch_size"
                  id="default_batch_size"
                  defaultValue="50 servings"
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md box-border"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="quality_check_threshold" className="block text-sm font-medium text-gray-700">
                Quality Check Threshold (%)
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="quality_check_threshold"
                  id="quality_check_threshold"
                  defaultValue="90"
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md box-border"
                />
              </div>
            </div>
            
            <div className="sm:col-span-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900 flex items-center">
                <CogIcon className="h-5 w-5 text-indigo-500 mr-2" />
                System Settings
              </h3>
            </div>
            
            <div className="sm:col-span-3">
              <label htmlFor="units" className="block text-sm font-medium text-gray-700">
                Units System
              </label>
              <div className="mt-1">
                <select
                  id="units"
                  name="units"
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  defaultValue="metric"
                >
                  <option value="metric">Metric (g, kg, L, mL)</option>
                  <option value="imperial">Imperial (oz, lb, fl oz, gal)</option>
                </select>
              </div>
            </div>
            
            <div className="sm:col-span-3">
              <label htmlFor="temperature" className="block text-sm font-medium text-gray-700">
                Temperature Units
              </label>
              <div className="mt-1">
                <select
                  id="temperature"
                  name="temperature"
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  defaultValue="celsius"
                >
                  <option value="celsius">Celsius (°C)</option>
                  <option value="fahrenheit">Fahrenheit (°F)</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
          <button
            type="button"
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 cursor-pointer"
          >
            Save Settings
          </button>
        </div>
      </div>
    </div>
  );
}