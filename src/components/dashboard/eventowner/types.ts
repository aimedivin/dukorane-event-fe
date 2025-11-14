export interface NavigationItem {
  name: string;
  href: string;
  icon: string;
}

export interface UserMenuItem {
  name: string;
  href: string;
  icon: string;
}

export interface UserMenuProps {
  isOpen: boolean;
  onToggle: () => void;
}

export interface MobileMenuProps {
  isOpen: boolean;
  navigation: NavigationItem[];
}