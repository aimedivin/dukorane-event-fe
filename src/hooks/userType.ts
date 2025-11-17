export interface UserMenuProps {
  isOpen: boolean;
  onToggle: () => void;
}

export interface UserMenuItem {
  name: string;
  href?: string;
  icon: string;
  action?: () => void;
}
