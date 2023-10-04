"use client";

import SidebarItem from "./sidebar-item";
import { LuLayoutDashboard } from "react-icons/lu";
import { AiOutlineCompass } from "react-icons/ai";

const guestRoutes = [
  {
    icon: LuLayoutDashboard,
    label: "Dashboard",
    href: "/",
  },
  {
    icon: AiOutlineCompass,
    label: "Browse",
    href: "/search",
  },
];

function SidebarRoutes() {
  const routes = guestRoutes;
  return (
    <div className="flex flex-col w-full">
      {routes.map((route) => (
        <SidebarItem key={route.href} {...route} />
      ))}
    </div>
  );
}

export default SidebarRoutes;
