import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-6 text-gray-700">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">About Us</h2>
          <p className="mt-4 text-xl">
            Discover our story and meet the people that make our brand unique.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-between">
          {/* Story Section */}
          <div className="w-full md:w-1/2 lg:w-2/5 mb-12 md:mb-0 text-center mx-28">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Our Story
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Founded in 2024, our restaurant has been serving delicious,
              locally-sourced meals with a focus on sustainable practices. We
              believe in creating memorable dining experiences by offering a
              menu that highlights the best seasonal ingredients.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our team is passionate about food and hospitality. From our chefs
              who meticulously craft each dish, to our front-of-house staff who
              ensure every guest feels welcome, we are committed to excellence
              in every aspect.
            </p>
          </div>

          {/* Image Section */}
          <div className="w-full md:w-1/2 lg:w-2/5">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Restaurant_N%C3%A4sinneula.jpg/800px-Restaurant_N%C3%A4sinneula.jpg"
              alt="Our Restaurant"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-gray-800 text-center mb-8">
            Meet Our Team
          </h3>
          <div className="flex flex-wrap justify-center">
            {/* Team Member 1 */}
            <div className="w-full md:w-1/3 lg:w-1/4 px-4 mb-8">
              <div className="text-center">
                <img
                  src="https://example.com/chef1.jpg"
                  alt="Chef John Doe"
                  className="w-24 h-24 rounded-full mx-auto mb-4 shadow-lg"
                />
                <h4 className="text-xl font-semibold text-gray-800">
                  John Doe
                </h4>
                <p className="text-gray-600">Head Chef</p>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="w-full md:w-1/3 lg:w-1/4 px-4 mb-8">
              <div className="text-center">
                <img
                  src="https://example.com/chef2.jpg"
                  alt="Chef Jane Smith"
                  className="w-24 h-24 rounded-full mx-auto mb-4 shadow-lg"
                />
                <h4 className="text-xl font-semibold text-gray-800">
                  Jane Smith
                </h4>
                <p className="text-gray-600">Sous Chef</p>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="w-full md:w-1/3 lg:w-1/4 px-4 mb-8">
              <div className="text-center">
                <img
                  src="https://example.com/manager.jpg"
                  alt="Manager Sarah Lee"
                  className="w-24 h-24 rounded-full mx-auto mb-4 shadow-lg"
                />
                <h4 className="text-xl font-semibold text-gray-800">
                  Sarah Lee
                </h4>
                <p className="text-gray-600">Restaurant Manager</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
