import React, { useEffect, useState } from "react";
import axios from "axios";

const ItemSelection = () => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const response = await axios.get("mongodb://localhost:27017/api/menu");
        setMenuItems(response.data);
      } catch (error) {
        console.error("Error fetching menu items", error);
      }
    };
    fetchMenuItems();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
        Item Selection
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {menuItems.map((item) => (
          <div key={item._id} className="bg-white shadow-md rounded-lg p-4">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-40 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">
                {item.name}
              </h3>
              <p className="text-gray-600">{item.description}</p>
              <p className="text-gray-800 font-bold mt-2">${item.price}</p>
              <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                Select
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemSelection;
