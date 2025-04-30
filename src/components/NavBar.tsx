import React from 'react';

interface NavBarProps {
  isMobile?: boolean;
  setMobileMenuOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavBar: React.FC<NavBarProps> = ({ isMobile, setMobileMenuOpen }) => {
  const navItems = [
    { label: 'HOME', href: '#' },
    { label: 'WORK', href: '#work' },
    { label: 'SERVICES', href: '#services' },
    { label: 'ABOUT US', href: '#about' },
    { label: 'BLOGS', href: '#blogs' },
    { label: 'CAREERS', href: '#careers' },
    { label: 'CONTACT US', href: '#contact' },
  ];

  const handleClick = () => {
    if (isMobile && setMobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav>
      <ul className={`flex ${isMobile ? 'flex-col space-y-4' : 'space-x-6'}`}>
        {navItems.map((item) => (
          <li key={item.label}>
            <a 
              href={item.href} 
              className={`nav-item ${isMobile ? 'block py-2' : ''}`}
              onClick={handleClick}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;