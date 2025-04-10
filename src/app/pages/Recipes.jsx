import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  MagnifyingGlassIcon, 
  PlusIcon,
  AdjustmentsHorizontalIcon
} from '@heroicons/react/24/outline';

const recipes = [
  { 
    id: '1', 
    name: 'Truffle Risotto', 
    category: 'Entrees', 
    imageUrl: "PLACEHOLDER",
    description: 'Creamy Arborio rice with truffle oil and Parmesan cheese',
    prepTime: '20 min',
    cookTime: '30 min',
    yield: '4 servings'
  },
  { 
    id: '2', 
    name: 'Beef Wellington', 
    category: 'Entrees', 
    imageUrl: "PLACEHOLDER",
    description: 'Beef tenderloin wrapped in puff pastry with mushroom duxelles',
    prepTime: '45 min',
    cookTime: '40 min',
    yield: '6 servings'
  },
  { 
    id: '3', 
    name: 'French Macarons', 
    category: 'Desserts', 
    imageUrl: "PLACEHOLDER",
    description: 'Delicate almond meringue cookies with buttercream filling',
    prepTime: '30 min',
    cookTime: '15 min',
    yield: '24 pieces'
  },
  { 
    id: '4', 
    name: 'Lobster Bisque', 
    category: 'Soups', 
    imageUrl: "PLACEHOLDER",
    description: 'Creamy soup made from lobster stock, aromatic vegetables, and cream',
    prepTime: '25 min',
    cookTime: '35 min',
    yield: '6 servings'
  },
  { 
    id: '5', 
    name: 'Crème Brûlée', 
    category: 'Desserts', 
    imageUrl: "PLACEHOLDER",
    description: 'Vanilla custard topped with a layer of hard caramel',
    prepTime: '15 min',
    cookTime: '45 min',
    yield: '6 servings'
  },
  { 
    id: '6', 
    name: 'Coq au Vin', 
    category: 'Entrees', 
    imageUrl: "PLACEHOLDER",
    description: 'Chicken braised with wine, lardons, mushrooms, and garlic',
    prepTime: '30 min',
    cookTime: '1 hr 15 min',
    yield: '6 servings'
  },
  { 
    id: '7', 
    name: 'Tarte Tatin', 
    category: 'Desserts', 
    imageUrl: "PLACEHOLDER",
    description: 'Upside-down caramelized apple tart',
    prepTime: '20 min',
    cookTime: '40 min',
    yield: '8 servings'
  },
  { 
    id: '8', 
    name: 'Ratatouille', 
    category: 'Sides', 
    imageUrl: "PLACEHOLDER",
    description: 'Provençal vegetable stew made with eggplant, zucchini, bell peppers, and tomatoes',
    prepTime: '25 min',
    cookTime: '45 min',
    yield: '6 servings'
  }
];

const categories = ['All', 'Entrees', 'Appetizers', 'Desserts', 'Sides', 'Soups', 'Breakfast'];

export default function Recipes() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  
  const filteredRecipes = recipes.filter(recipe => {
    const matchesSearch = recipe.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          recipe.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'All' || recipe.category === activeCategory;
    
    return matchesSearch && matchesCategory;
  });
  
  return (
    <div>
      <div className="mb-6 sm:flex sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Recipes</h1>
          <p className="mt-1 text-sm text-gray-500">
            Browse and manage your gourmet recipes
          </p>
        </div>
        <div className="mt-4 sm:mt-0">
          <button
            type="button"
            className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 cursor-pointer"
          >
            <PlusIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
            New Recipe
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
            className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 pr-12 sm:text-sm border-gray-300 rounded-md box-border"
            placeholder="Search recipes..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="absolute inset-y-0 right-0 flex items-center">
            <button
              type="button"
              className="h-full py-0 px-3 text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 cursor-pointer"
            >
              <AdjustmentsHorizontalIcon className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
      
      <div className="mb-6 bg-white shadow overflow-x-auto">
        <div className="flex p-2 space-x-2">
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
      </div>
      
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredRecipes.map((recipe) => (
          <Link 
            key={recipe.id} 
            to={`/recipes/${recipe.id}`}
            className="group relative bg-white border border-gray-200 rounded-lg shadow overflow-hidden hover:shadow-md transition-shadow duration-200"
          >
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 group-hover:opacity-90">
              <img 
                src={recipe.imageUrl}
                alt={recipe.name}
                data-image-request={`gourmet ${recipe.name.toLowerCase()}`}
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="p-4">
              <span className="inline-block px-2 py-1 text-xs font-medium bg-indigo-100 text-indigo-800 rounded-full mb-2">
                {recipe.category}
              </span>
              <h3 className="text-lg font-medium text-gray-900">{recipe.name}</h3>
              <p className="mt-1 text-sm text-gray-500 line-clamp-2">{recipe.description}</p>
              
              <div className="mt-4 grid grid-cols-3 gap-2 text-xs text-gray-500">
                <div>
                  <span className="block font-medium">Prep</span>
                  <span>{recipe.prepTime}</span>
                </div>
                <div>
                  <span className="block font-medium">Cook</span>
                  <span>{recipe.cookTime}</span>
                </div>
                <div>
                  <span className="block font-medium">Yield</span>
                  <span>{recipe.yield}</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      
      {filteredRecipes.length === 0 && (
        <div className="text-center py-12">
          <p className="text-lg text-gray-500">No recipes found matching your criteria.</p>
        </div>
      )}
    </div>
  );
}