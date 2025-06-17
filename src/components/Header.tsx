import React, { useState, ReactNode } from 'react';
import { SearchIcon, UserIcon, BellIcon, MenuIcon, XIcon } from 'lucide-react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 bg-white shadow-md z-50">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <span className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-green-600 via-yellow-500 to-black">
                Stadium876
              </span>
            </a>
          </div>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <NavLink href="/football">Football</NavLink>
            <NavLink href="/netball">Netball</NavLink>
            <NavLink href="/basketball">Basketball</NavLink>
            <NavLink href="/track-field">Track & Field</NavLink>
            <NavLink href="/gaming">Gaming</NavLink>
          </nav>
          {/* Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="p-1 hover:bg-gray-100 rounded-full">
              <SearchIcon className="h-5 w-5 text-gray-600" />
            </button>
            <a href="/login" className="p-1 hover:bg-gray-100 rounded-full">
              <UserIcon className="h-5 w-5 text-gray-600" />
            </a>
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
            <a href="/football" className="block py-2 text-base font-medium text-gray-900 hover:text-green-600">
              Football
            </a>
            <a href="/netball" className="block py-2 text-base font-medium text-gray-900 hover:text-green-600">
              Netball
            </a>
            <a href="/basketball" className="block py-2 text-base font-medium text-gray-900 hover:text-green-600">
              Basketball
            </a>
            <a href="/track-field" className="block py-2 text-base font-medium text-gray-900 hover:text-green-600">
              Track & Field
            </a>
            <a href="/gaming" className="block py-2 text-base font-medium text-gray-900 hover:text-green-600">
              Gaming
            </a>
            <div className="flex space-x-4 py-3 border-t border-gray-200">
              <button className="p-1 hover:bg-gray-100 rounded-full">
                <SearchIcon className="h-5 w-5 text-gray-600" />
              </button>
              <a href="/login" className="p-1 hover:bg-gray-100 rounded-full">
                <UserIcon className="h-5 w-5 text-gray-600" />
              </a>
              <button className="p-1 hover:bg-gray-100 rounded-full">
                <BellIcon className="h-5 w-5 text-gray-600" />
              </button>
            </div>
          </div>
        </div>}
    </header>
  );
};


type NavLinkProps = {
  href: string;
  children: ReactNode;
};

const NavLink = ({
  href,
  children
}: NavLinkProps) => {
  return <a href={href} className="text-base font-medium text-gray-800 hover:text-green-600 relative group">
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-500 group-hover:w-full transition-all duration-300"></span>
    </a>;
};
export default Header;