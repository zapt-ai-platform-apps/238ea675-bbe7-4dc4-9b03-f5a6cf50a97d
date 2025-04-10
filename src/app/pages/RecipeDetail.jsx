import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeftIcon, ClockIcon, UsersIcon, ScaleIcon, PrinterIcon, PencilIcon } from '@heroicons/react/24/outline';

// Mock recipe data
const recipeData = {
  '1': {
    id: '1',
    name: 'Truffle Risotto',
    category: 'Entrees',
    imageUrl: "PLACEHOLDER",
    description: 'Creamy Arborio rice with truffle oil and Parmesan cheese. This luxurious dish is perfect for special occasions and showcases the earthy flavors of truffles.',
    prepTime: '20 min',
    cookTime: '30 min',
    yield: '4 servings',
    ingredients: [
      '1½ cups Arborio rice',
      '5-6 cups vegetable or chicken stock, heated',
      '1 small onion, finely diced',
      '2 cloves garlic, minced',
      '½ cup dry white wine',
      '2 tablespoons butter',
      '¼ cup grated Parmesan cheese, plus more for serving',
      '2 tablespoons truffle oil, plus more for drizzling',
      '2 tablespoons fresh parsley, chopped',
      'Salt and freshly ground black pepper to taste'
    ],
    instructions: [
      'In a large saucepan, heat the stock and keep warm over low heat.',
      'In a large, heavy-bottomed saucepan, melt 1 tablespoon of butter over medium heat. Add the onion and sauté until translucent, about 5 minutes.',
      'Add the garlic and cook for another minute until fragrant.',
      'Add the Arborio rice and stir to coat with the butter. Toast the rice for 2-3 minutes, stirring constantly.',
      'Add the white wine and cook, stirring, until the liquid is absorbed.',
      'Begin adding the hot stock, one ladle at a time, stirring constantly and allowing each addition to be absorbed before adding the next.',
      'Continue this process until the rice is creamy and tender but still al dente, about 18-20 minutes.',
      'Remove from heat and stir in the remaining butter, Parmesan cheese, and truffle oil.',
      'Season with salt and pepper to taste.',
      'Garnish with fresh parsley, additional Parmesan, and a drizzle of truffle oil before serving.'
    ],
    nutritionInfo: {
      calories: 380,
      protein: '8g',
      carbs: '58g',
      fat: '12g'
    },
    notes: 'For an extra luxurious version, add sautéed wild mushrooms or shaved fresh truffles when in season.',
    qualityCheckpoints: [
      'Rice should be creamy but still have a slight bite (al dente)',
      'Texture should be flowing but not soupy',
      'Truffle aroma should be present but not overpowering',
      'Risotto should hold its shape slightly when plated'
    ]
  },
  // Additional recipes would be added here
};

export default function RecipeDetail() {
  const { id } = useParams();
  const recipe = recipeData[id];
  
  if (!recipe) {
    return (
      <div className="text-center py-12">
        <h2 className="text-xl font-medium text-gray-900">Recipe not found</h2>
        <p className="mt-2 text-gray-500">The recipe you're looking for doesn't exist.</p>
        <Link to="/recipes" className="mt-4 inline-flex items-center text-indigo-600 hover:text-indigo-900">
          <ArrowLeftIcon className="h-5 w-5 mr-1" />
          Back to recipes
        </Link>
      </div>
    );
  }
  
  return (
    <div>
      <div className="mb-6">
        <Link to="/recipes" className="inline-flex items-center text-indigo-600 hover:text-indigo-900">
          <ArrowLeftIcon className="h-5 w-5 mr-1" />
          Back to recipes
        </Link>
      </div>
      
      <div className="bg-white shadow overflow-hidden rounded-lg">
        <div className="relative h-64 sm:h-96 bg-gray-200">
          <img 
            src={recipe.imageUrl} 
            alt={recipe.name}
            data-image-request={`gourmet ${recipe.name.toLowerCase()} plated beautifully`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black opacity-50"></div>
          <div className="absolute bottom-0 left-0 p-6">
            <span className="inline-block px-2 py-1 text-xs font-medium bg-indigo-100 text-indigo-800 rounded-full mb-2">
              {recipe.category}
            </span>
            <h1 className="text-3xl font-bold text-white">{recipe.name}</h1>
          </div>
        </div>
        
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <div className="flex space-x-6">
              <div className="flex items-center">
                <ClockIcon className="h-5 w-5 text-gray-400 mr-2" />
                <span className="text-sm text-gray-500">Prep: {recipe.prepTime}</span>
              </div>
              <div className="flex items-center">
                <ClockIcon className="h-5 w-5 text-gray-400 mr-2" />
                <span className="text-sm text-gray-500">Cook: {recipe.cookTime}</span>
              </div>
              <div className="flex items-center">
                <UsersIcon className="h-5 w-5 text-gray-400 mr-2" />
                <span className="text-sm text-gray-500">Yield: {recipe.yield}</span>
              </div>
            </div>
            
            <div className="flex space-x-2">
              <button className="inline-flex items-center px-3 py-1 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 cursor-pointer">
                <PrinterIcon className="h-5 w-5 mr-1" />
                Print
              </button>
              <button className="inline-flex items-center px-3 py-1 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 cursor-pointer">
                <PencilIcon className="h-5 w-5 mr-1" />
                Edit
              </button>
            </div>
          </div>
          
          <div className="prose max-w-none mb-8">
            <p>{recipe.description}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
              <h2 className="text-xl font-medium text-gray-900 mb-4">Ingredients</h2>
              <ul className="space-y-2">
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index} className="flex items-start">
                    <span className="h-5 w-5 mr-2 rounded-full bg-indigo-100 flex items-center justify-center text-xs font-medium text-indigo-800">
                      {index + 1}
                    </span>
                    <span className="text-gray-700">{ingredient}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8">
                <h2 className="text-xl font-medium text-gray-900 mb-4">Nutrition Information</h2>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <span className="block text-sm font-medium text-gray-500">Calories</span>
                      <span className="block text-lg font-medium text-gray-900">{recipe.nutritionInfo.calories}</span>
                    </div>
                    <div>
                      <span className="block text-sm font-medium text-gray-500">Protein</span>
                      <span className="block text-lg font-medium text-gray-900">{recipe.nutritionInfo.protein}</span>
                    </div>
                    <div>
                      <span className="block text-sm font-medium text-gray-500">Carbs</span>
                      <span className="block text-lg font-medium text-gray-900">{recipe.nutritionInfo.carbs}</span>
                    </div>
                    <div>
                      <span className="block text-sm font-medium text-gray-500">Fat</span>
                      <span className="block text-lg font-medium text-gray-900">{recipe.nutritionInfo.fat}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:col-span-2">
              <h2 className="text-xl font-medium text-gray-900 mb-4">Instructions</h2>
              <ol className="space-y-6">
                {recipe.instructions.map((step, index) => (
                  <li key={index} className="flex">
                    <span className="flex-shrink-0 h-6 w-6 rounded-full bg-indigo-600 flex items-center justify-center text-xs font-medium text-white mr-3 mt-0.5">
                      {index + 1}
                    </span>
                    <span className="text-gray-700">{step}</span>
                  </li>
                ))}
              </ol>
              
              {recipe.notes && (
                <div className="mt-8">
                  <h2 className="text-xl font-medium text-gray-900 mb-4">Chef's Notes</h2>
                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <p className="text-gray-700">{recipe.notes}</p>
                  </div>
                </div>
              )}
              
              <div className="mt-8">
                <h2 className="text-xl font-medium text-gray-900 mb-4">Quality Checkpoints</h2>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <ul className="space-y-2">
                    {recipe.qualityCheckpoints.map((checkpoint, index) => (
                      <li key={index} className="flex items-start">
                        <ScaleIcon className="h-5 w-5 text-indigo-600 mr-2 flex-shrink-0" />
                        <span className="text-gray-700">{checkpoint}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}