import { NavLink } from "react-router";
import { CoinsHandIcon, Dataflow04Icon, File03Icon, HomeLineIcon, Settings02Icon, Users01Icon } from "../Icons";
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
      icon: Users01Icon,
    },
    {
      name: "Reports",
      link: "/reports",
      icon: File03Icon,
    },
    {
      name: "Integrations",
      link: "/integrations",
      icon: Dataflow04Icon,
    },
    {
      name: "Settings",
      link: "/settings",
      icon: Settings02Icon,
    },
  ];

  return (
    <aside className={`h-screen border-r border-gray-200 bg-white p-4 shadow-2xl ${open ? "w-[300px] max-w-[300px] min-w-[300px]" : ""}`}>
      <div>
        <img
          src="/logos/Amdragz full v4@4x.png"
          alt=""
          className="h-10 w-full object-cover"
        />
      </div>
      <ul className="mt-4 space-y-1">
        {sections.map((section) => (
          <li key={section.link}>
            <NavLink
              to={section.link}
              className={({ isActive }) =>
                `group flex items-center gap-3 rounded-md px-3 py-2 ${isActive ? "bg-primary-50 text-primary-700" : "hover:bg-primary-50 hover:text-primary-700 text-gray-700"}`
              }
            >
              {({ isActive }) => (
                <>
                  <section.icon
                    className={`h-6 w-6 ${isActive ? "text-primary-600" : "group-hover:text-primary-600 text-gray-500"}`}
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
