import React from "react";
import { ReactComponent as Dashboard } from "../../assets/svgs/dashboard.svg";
import { ReactComponent as Activation } from "../../assets/svgs/activation.svg";
import { ReactComponent as Integrations } from "../../assets/svgs/integrations.svg";
import { ReactComponent as Developers } from "../../assets/svgs/developers.svg";
import { ReactComponent as Billing } from "../../assets/svgs/billing.svg";
import { ReactComponent as Settings } from "../../assets/svgs/settings.svg";
import { ReactComponent as Documentation } from "../../assets/svgs/documentation.svg";
import { Link } from "react-router-dom";
import logo from '../../assets/logo-green.png'
const Sidebar = () => {
  const links = [
    {
      component: <Dashboard />,
      text: "Universities",
      link: "/home",
    },
    {
      component: <Activation />,
      text: "Riders",
      link: "/activation",
    },
    {
      component: <Activation />,
      text: "Update",
      link: "/Update",
    },
    {
      component: <Integrations />,
      text: "Categories",
      link: "/category",
    },
    {
      component: <Developers />,
      text: "Merchants",
      link: "/logs",
    },
    {
      component: <Billing />,
      text: "Users",
      link: "/billing",
    },
    {
      component: <Settings />,
      text: "6",
      link: "/settings",
    },
    {
      component: <Settings />,
      text: "Partners",
      link: "/Partners",
    },

  ];
  return (
    <div className="flex flex-row min-h-screen bg-gray-100 text-gray-800 fixed">
      <aside className="sidebar w-64 md:shadow transform -translate-x-full md:translate-x-0 transition-transform duration-150 ease-in bg-sidebarColor">
        {/* <center> */}
          <img src={logo} style={{ height: 80, width: 65,marginTop:20,marginLeft:30 }} alt="logo" />
        {/* </center> */}
        <div className="sidebar-header flex  py-4 ml-6">
          <div className="inline-flex">
              <span className="leading-10 text-black text-2xl font-bold ml-1 uppercase">
                Soma
              </span>
          </div>
        </div>
        <div className="sidebar-content px-4 py-6">
          <ul className="flex flex-col w-full">
            {links.map((ele, i) => {
              return (
                <li key={i} className="my-px">
                  <Link
                    to={ele.link}
                    className="flex flex-row items-center h-10 px-3 rounded-lg hover:font-semibold "
                  >
                    {ele.component}
                    <span className="ml-3">{ele.text}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
