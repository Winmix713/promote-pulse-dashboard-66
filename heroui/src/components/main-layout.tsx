import React, { createContext, useContext, useState, useEffect, useCallback, useMemo } from 'react';
import { Icon } from '@iconify/react';
import { Avatar, Badge, Button, Dropdown, DropdownItem, DropdownMenu, DropdownSection, DropdownTrigger, Input, Tooltip } from '@heroui/react';
import { Sidebar } from './sidebar';
import { ThemeSwitcher } from './theme-switcher';
import { Breadcrumbs, BreadcrumbItem } from '@heroui/react';
import { useTheme } from '../context/theme-context';
import { Header } from './header';

interface MainLayoutProps {
  children: React.ReactNode;
}

// Create a context for layout
export const LayoutContext = createContext<{
  isDesktop: boolean;
  isMobile: boolean;
  activeSection: string;
  setActiveSection: (section: string) => void;
}>({
  isDesktop: true,
  isMobile: false,
  activeSection: 'dashboard',
  setActiveSection: () => {}
});

// Export the hook for consuming components
export const useLayout = () => {
  const context = useContext(LayoutContext);
  
  if (context === undefined) {
    throw new Error('useLayout must be used within a MainLayout');
  }
  
  return context;
};

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = React.useState(false);
  
  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };
  
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar collapsed={isSidebarCollapsed} />
      
      <div className="flex-1 flex flex-col">
        <Header toggleSidebar={toggleSidebar} isSidebarCollapsed={isSidebarCollapsed} />
        {children}
      </div>
    </div>
  );
};

// Extract components for better organization
const SearchBar = () => {
  return (
    <Tooltip content="Press / to focus">
      <Input
        classNames={{
          base: "max-w-xs",
          inputWrapper: "bg-content2 border-default-200"
        }}
        placeholder="Search anything... (Press / to focus)"
        radius="full"
        startContent={
          <Icon icon="lucide:search" className="text-default-400 w-4 h-4 flex-shrink-0" />
        }
        className="search-input"
      />
    </Tooltip>
  );
};

const NotificationButton = () => {
  return (
    <Tooltip content="Notifications">
      <Badge content="5" color="danger" placement="top-right" size="sm">
        <Button isIconOnly variant="light" radius="full">
          <Icon icon="lucide:bell" className="w-5 h-5 text-default-500" />
        </Button>
      </Badge>
    </Tooltip>
  );
};

const MessageButton = () => {
  return (
    <Tooltip content="Messages">
      <Badge content="3" color="primary" placement="top-right" size="sm">
        <Button isIconOnly variant="light" radius="full">
          <Icon icon="lucide:message-square" className="w-5 h-5 text-default-500" />
        </Button>
      </Badge>
    </Tooltip>
  );
};

const UserMenu = () => {
  return (
    <Dropdown placement="bottom-end">
      <DropdownTrigger>
        <Avatar
          src="https://img.heroui.chat/image/avatar?w=200&h=200&u=1"
          size="sm"
          isBordered
          color="primary"
          className="cursor-pointer"
        />
      </DropdownTrigger>
      <DropdownMenu aria-label="User menu">
        <DropdownSection showDivider>
          <DropdownItem textValue="Signed in as" isReadOnly className="opacity-100">
            <div className="flex flex-col">
              <span className="text-small">Signed in as</span>
              <span className="text-small font-bold">alex@example.com</span>
            </div>
          </DropdownItem>
        </DropdownSection>
        <DropdownSection showDivider>
          <DropdownItem startContent={<Icon icon="lucide:user" className="w-4 h-4" />}>
            Profile
          </DropdownItem>
          <DropdownItem startContent={<Icon icon="lucide:settings" className="w-4 h-4" />}>
            Settings
          </DropdownItem>
          <DropdownItem startContent={<Icon icon="lucide:help-circle" className="w-4 h-4" />}>
            Help & Feedback
          </DropdownItem>
        </DropdownSection>
        <DropdownItem 
          startContent={<Icon icon="lucide:log-out" className="w-4 h-4" />}
          color="danger"
        >
          Log Out
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

// Custom hook for media queries
function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);
  
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const mediaQuery = window.matchMedia(query);
    setMatches(mediaQuery.matches);
    
    const handler = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };
    
    mediaQuery.addEventListener('change', handler);
    return () => {
      mediaQuery.removeEventListener('change', handler);
    };
  }, [query]);
  
  return matches;
}

// Add missing KeyboardShortcutsButton component
export const KeyboardShortcutsButton = () => {
  return (
    <Tooltip content="Keyboard shortcuts (press ? to open)">
      <Button 
        isIconOnly 
        variant="flat" 
        color="default" 
        radius="full"
        className="bg-content1 border border-default-200"
      >
        <Icon icon="lucide:keyboard" className="w-5 h-5 text-default-500" />
      </Button>
    </Tooltip>
  );
};