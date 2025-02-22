import { NavLink } from "react-router";
import { CoinsHandIcon, HomeLineIcon } from "../Icons";
import { useState } from "react";

export default function StaffSidebar() {
  const [open] = useState(true);

  const sections = [
    {
      name: "Dashboard",
      link: "/dashboard",
      icon: HomeLineIcon,
    },
    {
      name: "Invoices",
      link: "/invoices",
      icon: CoinsHandIcon,
    },
    {
      name: "Customers",
      link: "/customers",
      icon: CoinsHandIcon,
    },
    {
      name: "Reports",
      link: "/reports",
      icon: CoinsHandIcon,
    },
    {
      name: "Integrations",
      link: "/integrations",
      icon: CoinsHandIcon,
    },
    {
      name: "Settings",
      link: "/settings",
      icon: CoinsHandIcon,
    },
  ];

  return (
    <aside className={`h-screen border-r border-gray-200 bg-white p-4 ${open ? "w-[300px]" : ""}`}>
      <div>Logo here</div>
      <ul className="mt-2 space-y-1">
        {sections.map((section) => (
          <li key={section.link}>
            <NavLink
              to={section.link}
              className={({ isActive }) => `group flex items-center gap-3 px-3 py-2 ${isActive ? "bg-lime-50 text-lime-700" : "text-gray-700 hover:bg-lime-50 hover:text-lime-700"}`}
            >
              {({ isActive }) => (
                <>
                  <section.icon
                    className={`h-6 w-6 ${isActive ? "text-lime-600" : "text-gray-500 group-hover:text-lime-600"}`}
                    strokeWidth={2}
                  />
                  <span className="text-base font-medium">{section.name}</span>
                </>
              )}
            </NavLink>
          </li>
        ))}
      </ul>
    </aside>
  );
}
