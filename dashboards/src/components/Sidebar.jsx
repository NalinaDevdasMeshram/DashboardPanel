import { Link, NavLink } from "react-router-dom";
import { FaDochub } from "react-icons/fa";
import { MdOutlineCancel } from "react-icons/md";
// import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import Tooltip from "@mui/material/Tooltip";
import { links } from "../data/dummy";
import { useStateContext } from "../contexts/ContextProvider";

const Sidebar = () => {
  const { activeMenu, setActiveMenu, screenSize, currentColor } =
    useStateContext();

  const handleCloseSideBar = () => {
    if (activeMenu && screenSize <= 900) {
      setActiveMenu(false);
    }
  };

  const activeLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2";

  const normalLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg  text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2";

  return (
    <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pd-10">
      {activeMenu && (
        <>
          <div className="flex justify-between items-center">
            <Link
              to="/"
              onClick={handleCloseSideBar}
              className=" flex items-center gap-3 ml-5 mt-4 text-lg font-extrabold tracking-tight dark:text-white text-slate-900"
            >
              <FaDochub /> <span>Dashboard</span>
            </Link>
            <Tooltip content="Menu" position="BottomCenter">
              <button
                type="button"
                onClick={
                  () =>
                    // eslint-disable-next-line implicit-arrow-linebreak
                    setActiveMenu((prevActiveMenu) => {
                      // eslint-disable-next-line no-unused-expressions
                      !prevActiveMenu;
                    })
                  // eslint-disable-next-line react/jsx-curly-newline
                }
                className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden"
              >
                <MdOutlineCancel />
              </button>
            </Tooltip>
          </div>
          <div className="mt-10">
            {links.map((item) => (
              <div key={item.title}>
                <p className="text-gray-400 m-3 mt-4 dark:text-gray-400 uppercase">
                  {item.title}
                </p>
                {item.links.map((link) => (
                  <NavLink
                    to={`/${link.name}`}
                    key={link.name}
                    onClick={handleCloseSideBar}
                    style={({ isActive }) => ({
                      backgroundColor: isActive ? currentColor : "",
                    })}
                    // eslint-disable-next-line no-confusing-arrow
                    className={
                      // eslint-disable-next-line no-confusing-arrow
                      ({ isActive }) =>
                        // eslint-disable-next-line implicit-arrow-linebreak
                        isActive ? activeLink : normalLink
                      // eslint-disable-next-line react/jsx-curly-newline
                    }
                  >
                    {link.icon}
                    <span className="capitalize">{link.name}</span>
                  </NavLink>
                ))}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
