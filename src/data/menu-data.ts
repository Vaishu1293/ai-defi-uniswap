import { MenuItem, MobileMenuItemType } from "@/interFace/interFace";

export const MenuData:MenuItem[] = [
  {
    id: 1,
    hasDropdown: false,
    title: "Trade",
    link: "/trade",
  },
  {
    id: 2,
    hasDropdown: false,
    title: "Explore",
    link: "/explore",
    pluseInco: false,
  },
  {
    id: 3,
    hasDropdown: false,
    title: "Pool",
    link: "/pool",
  },
];

// mobile menu

export const menuItems: MobileMenuItemType[] = [
  { id: 1, label: "Trade", subMenu: false, href: "/trade" },
  { id: 2, label: "Explore", subMenu: false, href: "/explore" },
  { id: 3, label: "Pool", subMenu: false, href: "/pool" }
];
