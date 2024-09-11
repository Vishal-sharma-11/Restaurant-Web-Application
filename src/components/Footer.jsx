import { FaFacebook, FaInstagram, FaTwitter, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 px-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">About Us</h3>
          <p className="text-gray-400">
            Welcome to [Millenials], where we serve delicious, handcrafted meals with the finest ingredients. 
            Enjoy a memorable dining experience with us!
          </p>
        </div>

        {/* Quick Links Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/" className="text-gray-400 hover:text-white">Home</a></li>
            <li><a href="/menu" className="text-gray-400 hover:text-white">Menu</a></li>
            {/* <li><a href="/reservation" className="text-gray-400 hover:text-white">Reservations</a></li>
            <li><a href="/order" className="text-gray-400 hover:text-white">Order Online</a></li>
            <li><a href="/contact" className="text-gray-400 hover:text-white">Contact</a></li> */}
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-2">
            <li className="text-gray-400 flex items-center">
              <FaPhoneAlt className="mr-2" /> +123 456 789
            </li>
            <li className="text-gray-400 flex items-center">
              <FaEnvelope className="mr-2" /> contact@restaurant.com
            </li>
            <li className="text-gray-400">123 Main Street, City, Country</li>
          </ul>
        </div>

        {/* Newsletter Signup */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
          <p className="text-gray-400 mb-4">Sign up for updates and special offers!</p>
          <form>
            <input 
              type="email"
              placeholder="Your Email" 
              className="w-full p-2 mb-2 rounded border-none focus:outline-none"
            />
            <button 
              type="submit" 
              className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Social Media Icons */}
      <div className="mt-10 text-center">
        <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
        <div className="flex justify-center space-x-6">
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <FaFacebook className="text-gray-400 hover:text-white text-2xl" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <FaInstagram className="text-gray-400 hover:text-white text-2xl" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <FaTwitter className="text-gray-400 hover:text-white text-2xl" />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-10 text-center border-t border-gray-700 pt-4">
        <p className="text-gray-400">© 2024 [Millenials]. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;

