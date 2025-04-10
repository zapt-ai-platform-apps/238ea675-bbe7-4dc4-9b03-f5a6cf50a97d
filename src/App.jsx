import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import AppLayout from '@/app/AppLayout';
import Dashboard from '@/app/pages/Dashboard';
import Recipes from '@/app/pages/Recipes';
import RecipeDetail from '@/app/pages/RecipeDetail';
import Inventory from '@/app/pages/Inventory';
import Production from '@/app/pages/Production';
import Quality from '@/app/pages/Quality';
import Settings from '@/app/pages/Settings';
import NotFound from '@/app/pages/NotFound';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Navigate to="/dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="recipes" element={<Recipes />} />
          <Route path="recipes/:id" element={<RecipeDetail />} />
          <Route path="inventory" element={<Inventory />} />
          <Route path="production" element={<Production />} />
          <Route path="quality" element={<Quality />} />
          <Route path="settings" element={<Settings />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}