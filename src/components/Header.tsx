import React, { useState } from 'react';
import { SearchIcon, BellIcon, MenuIcon, XIcon } from 'lucide-react';
import { useNavigate, Link, NavLink } from 'react-router-dom';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 bg-white shadow-md z-50">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-green-600 via-yellow-500 to-black">
                Stadium876
              </span>
            </Link>
          </div>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <NavLink to="/football">Football</NavLink>
            <NavLink to="/netball">Netball</NavLink>
            <NavLink to="/basketball">Basketball</NavLink>
            <NavLink to="/track-field">Track & Field</NavLink>
            <NavLink to="/gaming">Gaming</NavLink>
          </nav>
          {/* Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="p-1 hover:bg-gray-100 rounded-full">
              <SearchIcon className="h-5 w-5 text-gray-600" />
            </button>
            <button
              className="bg-red-600 hover:bg-red-700 px-4 py-1 text-sm font-medium rounded"
              onClick={() => navigate('/subscribe')}
            >
              Subscribe
            </button>
            <Link to="/login" className="text-sm font-medium text-gray-300 hover:text-gray-700 transition-colors">Log In</Link>
            <button className="p-1 hover:bg-gray-100 rounded-full">
              <BellIcon className="h-5 w-5 text-gray-600" />
            </button>
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 rounded-md text-gray-500">
              {mobileMenuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {mobileMenuOpen && <div className="md:hidden bg-white border-t border-gray-200">
          <div className="container mx-auto px-4 py-3 space-y-3">
            <Link to="/football" className="block py-2 text-base font-medium text-gray-900 hover:text-green-600">
              Football
            </Link>
            <Link to="/netball" className="block py-2 text-base font-medium text-gray-900 hover:text-green-600">
              Netball
            </Link>
            <Link to="/basketball" className="block py-2 text-base font-medium text-gray-900 hover:text-green-600">
              Basketball
            </Link>
            <Link to="/track-field" className="block py-2 text-base font-medium text-gray-900 hover:text-green-600">
              Track & Field
            </Link>
            <Link to="/gaming" className="block py-2 text-base font-medium text-gray-900 hover:text-green-600">
              Gaming
            </Link>
            <div className="flex space-x-4 py-3 border-t border-gray-200">
              <button className="p-1 hover:bg-gray-100 rounded-full">
                <SearchIcon className="h-5 w-5 text-gray-600" />
              </button>
              <button
                className="bg-red-600 hover:bg-red-700 px-4 py-1 text-sm font-medium rounded"
                onClick={() => navigate('/subscribe')}
              >
                Subscribe
              </button>
              <Link to="/login" className="text-sm font-medium text-black-300">Log In</Link>
              <button className="p-1 hover:bg-gray-100 rounded-full">
                <BellIcon className="h-5 w-5 text-gray-600" />
              </button>
            </div>
          </div>
        </div>}
    </header>
  );
};

export default Header;