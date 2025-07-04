import { TreePine, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <TreePine className="h-8 w-8 text-green-400" />
              <span className="text-xl font-bold">Lineage</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Discover your family history and build your family tree with our easy-to-use tools. 
              Connect with your heritage and preserve your family's story for future generations.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-gray-300">
                <Mail className="h-4 w-4" />
                <span>contact@lineage.com</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <MapPin className="h-4 w-4" />
                <span>123 Heritage Lane, Family City, FC 12345</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-green-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-gray-300 hover:text-green-400 transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-green-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-green-400 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy" className="text-gray-300 hover:text-green-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-300 hover:text-green-400 transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/cookies" className="text-gray-300 hover:text-green-400 transition-colors">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-green-400 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Lineage. All rights reserved. Built with love for families worldwide.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;