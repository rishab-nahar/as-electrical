import React from "react";
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "./context";
import sublinks from "./SubLinksData";
import { NavLink } from "react-router-dom";
const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();
  return (
    <div
      className={`${
        isSidebarOpen ? "sidebar-wrapper show" : "sidebar-wrapper"
      }`}
    >
      console.log(isSidabarOpen);
      <aside className="sidebar">
        <button className="close-btn" onClick={closeSidebar}>
          <FaTimes />
        </button>
        <div className="sidebar-links">
          {sublinks.map((item, index) => {
            const { page, url } = item;
            console.log(url);
            return (
              <p className="topmargin_50 ps-1">
                {" "}
                <NavLink
                  to={url}
                  className="btn bigbtn movedown "
                  onClick={closeSidebar}
                >
                  {page}
                </NavLink>{" "}
              </p>
            );
          })}
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
