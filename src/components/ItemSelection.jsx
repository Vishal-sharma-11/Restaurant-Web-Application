import React, { useState } from 'react';

const ItemSelection = () => {
  // Hardcoded menu items
  const menuItems = [
    {
      id: 1,
      name: 'Grilled Chicken',
      description: 'Delicious grilled chicken with herbs and spices.',
      price: 12.99,
      image: 'https://images.pexels.com/photos/18698222/pexels-photo-18698222/free-photo-of-food-photography.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 2,
      name: 'Vegan Salad',
      description: 'Fresh vegetables mixed with a tangy dressing.',
      price: 9.99,
      image: 'https://images.pexels.com/photos/7530828/pexels-photo-7530828.jpeg',
    },
    {
      id: 3,
      name: 'Pasta Carbonara',
      description: 'Creamy pasta with bacon and parmesan cheese.',
      price: 14.99,
      image: 'https://images.pexels.com/photos/2703468/pexels-photo-2703468.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: 4,
      name: 'Margarita Pizza',
      description: 'Classic pizza with tomato, mozzarella, and basil.',
      price: 10.99,
      image: 'https://images.pexels.com/photos/17402721/pexels-photo-17402721/free-photo-of-three-pizza-on-table.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: 5,
      name: 'Cheeseburger',
      description: 'Beef patty topped with cheddar cheese, lettuce, and tomato.',
      price: 11.99,
      image: 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: 6,
      name: 'Steak and fries',
      description: 'Grilled steak served with crispy fries.',
      price: 16.99,
      image: 'https://images.pexels.com/photos/27643015/pexels-photo-27643015/free-photo-of-a-steak-and-potatoes-on-a-plate-with-a-fork.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  // State to track selected items
  const [selectedItems, setSelectedItems] = useState([]);

  // Function to add or remove items from the selection
  const toggleSelectItem = (item) => {
    if (selectedItems.some((selected) => selected.id === item.id)) {
      setSelectedItems(selectedItems.filter((selected) => selected.id !== item.id));
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">Select Your Items</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
                <p className="text-gray-600 mt-2">{item.description}</p>
                <p className="mt-4 text-lg font-bold text-blue-500">${item.price.toFixed(2)}</p>
                <button
                  className={`mt-4 w-full px-4 py-2 ${
                    selectedItems.some((selected) => selected.id === item.id)
                      ? 'bg-red-500 text-white'
                      : 'bg-blue-500 text-white'
                  } font-semibold rounded-lg hover:opacity-75 transition-opacity duration-300`}
                  onClick={() => toggleSelectItem(item)}
                >
                  {selectedItems.some((selected) => selected.id === item.id) ? 'Remove' : 'Select'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Selected Items Section */}
        {selectedItems.length > 0 && (
          <div className="mt-12">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Selected Items</h2>
            <ul className="bg-white p-6 rounded-lg shadow-lg">
              {selectedItems.map((item) => (
                <li key={item.id} className="border-b border-gray-200 py-2 flex justify-between">
                  <span>{item.name}</span>
                  <span className="text-blue-500 font-semibold">${item.price.toFixed(2)}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default ItemSelection;
