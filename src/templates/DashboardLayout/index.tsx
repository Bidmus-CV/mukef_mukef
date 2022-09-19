import { ReactNode, useState } from "react";
import { Link } from "react-router-dom";
import AddIcon from "../../vectors/AddIcon";
import LogoutIcon from "../../vectors/LogoutIcon";
import SupportIcon from "../../vectors/SupportIcon";
import TransactionIcon from "../../vectors/TransactionIcon";
import UserIcon from "../../vectors/UserIcon";
import PageLayout from "../PageLayout";
import "./DashboardLayout.scss";

const menuList = [
  {
    title: "Profile",
    icon: UserIcon,
    url: "/profile",
  },
  {
    title: "Add donation",
    icon: AddIcon,
    url: "/add-donation",
  },
  {
    title: "Support a project",
    icon: SupportIcon,
    url: "/support-project",
  },
  {
    title: "Transactions",
    icon: TransactionIcon,
    url: "/transaction",
  },
  {
    title: "Logout",
    icon: LogoutIcon,
    url: "/",
  },
];

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  const [activePath, setActivePath] = useState(window.location.pathname);
  return (
    <PageLayout>
      <section className="dashboard-layout-wrapper">
        <aside className="sidebar">
          {menuList.map((menu) => (
            <Link
              to={menu.url}
              key={menu.title}
              className={
                menu.url === activePath ? "active-menu-tab" : "menu-tab"
              }
            >
              <menu.icon />
              <span>{menu.title}</span>
            </Link>
          ))}
        </aside>
        <div className="main">{children}</div>
      </section>
    </PageLayout>
  );
};

export default DashboardLayout;
