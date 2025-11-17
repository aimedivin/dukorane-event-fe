export interface NavigationItem {
  name: string;
  href: string;
  icon: string;
}

// Mobile menu props
export interface MobileMenuProps {
  isOpen: boolean;
  navigation: NavigationItem[];
}

// User menu props
export interface UserMenuProps {
  isOpen: boolean;
  onToggle: () => void;
}

// User menu item
export interface UserMenuItem {
  name: string;
  href?: string;
  icon: string;
  action?: () => void;
}
export interface FilterState {
  eventDate: string;
  budgetMin: string;
  budgetMax: string;
  minRating: number | null;
  verifiedOnly: boolean;
  categories: string[];
}

export interface Provider {
  id: string;
  name: string;
  title: string;
  description: string;
  image: string;
  rating: number;
  reviewCount: number;
  verified: boolean;
  premium?: boolean;
  location: string;
  priceFrom: number;
  priceUnit: string;
}
