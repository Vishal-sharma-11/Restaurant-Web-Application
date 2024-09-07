import { Link } from "react-router-dom";
import React from "react";

const Home = () => {
  
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header
      <header className="bg-gray-800 text-white py-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">My Restaurant</h1>
          <nav className="space-x-4">
            <a href="/menu" className="hover:text-gray-400">Menu</a>
            <a href="/about-us" className="hover:text-gray-400">About Us</a>
            <a href="/contact" className="hover:text-gray-400">Contact</a>
          </nav>
        </div>
      </header> */}

      {/* Hero Section */}
      <section
        className="flex-grow bg-cover bg-center"
        style={{
            
          backgroundImage:
            'url("https://images.pexels.com/photos/940302/pexels-photo-940302.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
        }}
      >
        <div className="container mx-auto text-center text-white py-20">
          <h2 className="[text-shadow:_10px_10px_10px_rgb(0_0_0_/_40%)] text-4xl md:text-6xl font-bold mb-4">
            Welcome to Millenials
          </h2>
          <p className="text-xl mb-8">
            Experience the finest dining experience
          </p>
          <Link
            to={"/menu"}
            className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600"
          >
            Menu
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-8">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl">
              <h3 className="text-2xl font-bold mb-4">Fresh Ingredients</h3>
              <img src="https://www.cannolikitchen.com/wp-content/uploads/2022/04/fresh_ingredients_cannoli_kitchen-750x333.jpg" alt="Ingredients"  height={88}/>
              <p className="text-gray-600">
                We use only the freshest ingredients to prepare our dishes.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl">
              <h3 className="text-2xl font-bold mb-4">Cozy Atmosphere</h3>
              <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/b3/78/fa/tamra-restaurant.jpg?w=600&h=-1&s=1" alt="Cozy Atmosphere" />
              <p className="text-gray-600">
                Enjoy your meal in a warm and inviting atmosphere.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl">
              <h3 className="text-2xl font-bold mb-4">Excellent Service</h3>
              <img src="https://www.liveandlearnconsultancy.co.uk/wp-content/uploads/2013/06/018236b5c3ea872c42b160e0e23ac541.jpg" alt="" />
              <p className="text-gray-600">
                Our friendly staff is here to ensure you have a great
                experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      {/* <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto text-center">
          <p className="text-sm">© 2024 My Restaurant. All rights reserved.</p>
        </div>
      </footer> */}
    </div>
  );
};

export default Home;
