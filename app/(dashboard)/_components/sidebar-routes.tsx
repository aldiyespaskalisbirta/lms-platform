"use client";

import SidebarItem from "./sidebar-item";
import { LuLayoutDashboard } from "react-icons/lu";
import { AiOutlineCompass, AiOutlineBars } from "react-icons/ai";
import { BiBarChart } from "react-icons/bi";
import { usePathname } from "next/navigation";

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

const teacherRoutes = [
  {
    icon: AiOutlineBars,
    label: "Courses",
    href: "/teacher/courses",
  },
  {
    icon: BiBarChart,
    label: "Analytics",
    href: "/teacher/analytics",
  },
];
function SidebarRoutes() {
  const pathname = usePathname();

  const isTeacherPage = pathname?.includes("/teacher");
  const routes = isTeacherPage ? teacherRoutes : guestRoutes;

  return (
    <div className="flex flex-col w-full">
      {routes.map((route) => (
        <SidebarItem key={route.href} {...route} />
      ))}
    </div>
  );
}

export default SidebarRoutes;
