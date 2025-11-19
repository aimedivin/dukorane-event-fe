import Link from "next/link";
import { MobileMenuProps } from "./types/types";

const MobileMenu = ({ isOpen, navigation }: MobileMenuProps) => {
  if (!isOpen) return null;

  return (
    <div className="md:hidden">
      <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50">
        {navigation.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="text-gray-700 hover:text-primary block px-3 py-2 rounded-md text-base font-medium transition duration-300"
          >
            <i className={`${item.icon} mr-2`}></i>
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MobileMenu;
