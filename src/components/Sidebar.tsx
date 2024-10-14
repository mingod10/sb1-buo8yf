import React, { useState } from 'react';
import { CreditCard, Home, Users, LogOut, ChevronRight, ChevronLeft, CreditCard as CardIcon, UserCog, ChevronDown, Gift } from 'lucide-react';

interface SidebarItemProps {
  Icon: React.ElementType;
  label: string;
  isOpen: boolean;
  onClick: () => void;
  subItems?: { label: string; onClick: () => void }[];
  onToggleOpen?: () => void;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ Icon, label, isOpen, onClick, subItems, onToggleOpen }) => {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  const handleClick = () => {
    if (subItems) {
      if (!isOpen && onToggleOpen) {
        onToggleOpen();
      }
      setIsSubMenuOpen(!isSubMenuOpen);
    } else {
      onClick();
    }
  };

  return (
    <div>
      <button
        onClick={handleClick}
        className={`flex items-center w-full p-3 text-white hover:bg-indigo-700 transition-colors ${
          isOpen ? 'justify-start' : 'justify-center'
        }`}
      >
        <Icon className={`w-6 h-6 ${isOpen ? 'mr-3' : ''}`} />
        {isOpen && (
          <span className="flex-grow text-left">{label}</span>
        )}
        {isOpen && subItems && (
          <ChevronDown className={`w-4 h-4 transition-transform ${isSubMenuOpen ? 'transform rotate-180' : ''}`} />
        )}
      </button>
      {isOpen && isSubMenuOpen && subItems && (
        <div className="ml-6 mt-1 space-y-1">
          {subItems.map((item, index) => (
            <button
              key={index}
              onClick={item.onClick}
              className="w-full text-left p-2 text-sm text-white hover:bg-indigo-700 transition-colors"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

interface SidebarProps {
  onNavigate: (page: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  const handleItemClick = (label: string) => {
    console.log(`Clicked on ${label}`);
    onNavigate(label.toLowerCase());
  };

  return (
    <aside
      className={`bg-indigo-800 text-white flex flex-col transition-all duration-300 ${
        isOpen ? 'w-64' : 'w-16'
      }`}
    >
      <div className="flex items-center justify-between p-4">
        <CreditCard className="w-8 h-8" />
        {isOpen && <span className="font-bold">Dashboard</span>}
      </div>
      <button
        onClick={toggleSidebar}
        className="self-end p-2 m-2 rounded-full bg-indigo-700 hover:bg-indigo-600"
      >
        {isOpen ? <ChevronLeft className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
      </button>
      <nav className="flex-grow">
        <SidebarItem Icon={Home} label="Dashboard" isOpen={isOpen} onClick={() => handleItemClick('Dashboard')} />
        <SidebarItem Icon={Users} label="Employees" isOpen={isOpen} onClick={() => handleItemClick('Employees')} />
        <SidebarItem 
          Icon={CardIcon} 
          label="Cards" 
          isOpen={isOpen} 
          onClick={() => handleItemClick('Cards')}
          subItems={[
            { label: "Solicitar Tarjetas", onClick: () => handleItemClick('RequestCards') },
            { label: "Recargar Tarjetas", onClick: () => handleItemClick('ReloadCards') },
          ]}
          onToggleOpen={toggleSidebar}
        />
        <SidebarItem Icon={Gift} label="Benefits" isOpen={isOpen} onClick={() => handleItemClick('Benefits')} />
        <SidebarItem Icon={UserCog} label="Administrators" isOpen={isOpen} onClick={() => handleItemClick('Administrators')} />
      </nav>
      <SidebarItem Icon={LogOut} label="Logout" isOpen={isOpen} onClick={() => handleItemClick('Logout')} />
    </aside>
  );
};

export default Sidebar;