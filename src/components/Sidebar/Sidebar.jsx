import { useState } from "react";
import { SlCalender } from "react-icons/sl";
import { MdMenu } from "react-icons/md";
import { CiLogout, CiSearch } from "react-icons/ci";
import { FaAngleDoubleRight, FaPlus } from "react-icons/fa";
import "./Sidebar.css";
import { VscChecklist } from "react-icons/vsc";
import { RiStickyNoteFill } from "react-icons/ri";
import { LuSettings2 } from "react-icons/lu";
//https://react-icons.github.io/react-icons/
const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchText, setSearchText] = useState("");
  const handleClick = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={`sidebar ${isSidebarOpen ? "sidebar-open" : ""}`}>
      <div className="sidebar-header">
        <p
          className={`sidebar-header-logo ${
            isSidebarOpen ? "d-block" : "d-none"
          }`}
        >
          Menu
        </p>

        <button className="sidebar-toggler" onClick={handleClick}>
          <MdMenu className="sidebar-header-icon" />
        </button>
      </div>
      <div className="sidebar-body">
        {isSidebarOpen ? (
          <>
            <div className="search-container">
              <div
                className={`search-icon-container ${
                  searchText === "" ? "" : "opacity-0"
                }`}
              >
                <CiSearch className="search-icon" />

                <p className="search-icon-placeholder">Search</p>
              </div>

              <input
                type="text"
                name="search"
                className="search-input"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />
            </div>

            <div className="category-container" style={{ marginTop: "20px" }}>
              <div className="category-heading">TASKS</div>

              <ul className="category-lists">
                <li className="category-item">
                  <FaAngleDoubleRight />
                  Upcoming
                </li>

                <li className="category-item">
                  <VscChecklist />
                  Today
                </li>

                <li className="category-item">
                  <SlCalender />
                  Calender
                </li>

                <li className="category-item">
                  <RiStickyNoteFill />
                  Sticky Wall
                </li>
              </ul>
            </div>

            <div className="category-container">
              <div className="category-heading">LISTS</div>

              <ul className="category-lists">
                <li className="category-item">
                  <div className="category-box"></div>
                  Personal
                </li>

                <li className="category-item">
                  <div
                    className="category-box"
                    style={{ background: "#8ccff0" }}
                  ></div>
                  Work
                </li>

                <li className="category-item">
                  <div
                    className="category-box"
                    style={{ background: "#ffd53c" }}
                  ></div>
                  List 1
                </li>

                <li className="category-item">
                  <FaPlus />
                  Add New List
                </li>
              </ul>
            </div>

            {/* <div className="category-container">
              <div className="category-heading">TAGS</div>

              {<ul className="tags-list">
                <li className="tag-item">Tag1</li>

                <li className="tag-item">Tag2</li>

                <li className="tag-item">
                  <FaPlus /> Add New Tag
                </li>
              </ul> }
            </div> */}

            <div className="settings-container">
              <li className="category-item">
                <LuSettings2 />
                Settings
              </li>

              <li className="category-item">
                <CiLogout />
                Logout
              </li>
            </div>
          </>
        ) : (
          <>
            <CiSearch className="search-icon" onClick={handleClick} />

            <div className="category-container">
              <ul className="category-lists">
                <li className="category-item collapsed" onClick={handleClick}>
                  <FaAngleDoubleRight className="sidebar-icon-collapsed" />
                </li>

                <li className="category-item collapsed" onClick={handleClick}>
                  <VscChecklist className="sidebar-icon-collapsed" />
                </li>

                <li className="category-item collapsed" onClick={handleClick}>
                  <SlCalender className="sidebar-icon-collapsed" />
                </li>

                <li className="category-item collapsed" onClick={handleClick}>
                  <RiStickyNoteFill className="sidebar-icon-collapsed" />
                </li>
              </ul>
            </div>

            <div className="category-container">
              <ul className="category-lists">
                <li className="category-item" onClick={handleClick}>
                  <div className="category-box box-collapsed"></div>
                </li>

                <li className="category-item" onClick={handleClick}>
                  <div
                    className="category-box box-collapsed"
                    style={{ background: "#8ccff0" }}
                  ></div>
                </li>

                <li className="category-item" onClick={handleClick}>
                  <div
                    className="category-box box-collapsed"
                    style={{ background: "#ffd53c" }}
                  ></div>
                </li>

                <li
                  className="category-item"
                  style={{ marginTop: "5px" }}
                  onClick={handleClick}
                >
                  <FaPlus className="sidebar-icon-collapsed" />
                </li>
              </ul>
            </div>

            <div className="settings-container-collapsed">
              <LuSettings2 />

              <CiLogout />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
