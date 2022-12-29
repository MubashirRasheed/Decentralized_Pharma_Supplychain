import React, { useEffect } from "react";
import {
  BrowserRouter,
  Switch,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import {
  Navbar,
  Footer,
  Sidebar,
  ThemeSettings,
  Login,
  Register,
} from "./components";
import {
  Dashboard,
  Orders,
  Employees,
  Stacked,
  Pyramid,
  Customers,
  Line,
  Area,
  Bar,
  Pie,
  Financial,
  ColorMapping,
} from "./pages";
import "./App.css";

import { useStateContext } from "./contexts/ContextProvider";

const App = () => {
  const {
    setCurrentColor,
    setCurrentMode,
    currentMode,
    activeMenu,
    currentColor,
    themeSettings,
    setThemeSettings,
  } = useStateContext();

  useEffect(() => {
    const currentThemeColor = localStorage.getItem("colorMode");
    const currentThemeMode = localStorage.getItem("themeMode");
    if (currentThemeColor && currentThemeMode) {
      setCurrentColor(currentThemeColor);
      setCurrentMode(currentThemeMode);
    }
  }, []);

  const location = new useLocation();

  return (
    <div className={currentMode === "Dark" ? "dark" : ""}>
      {/* <BrowserRouter> */}
      <div className="flex relative dark:bg-main-dark-bgnpm start">
        <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
          <TooltipComponent content="Settings" position="Top">
            <button
              type="button"
              onClick={() => setThemeSettings(true)}
              style={{ background: currentColor, borderRadius: "50%" }}
              className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
            >
              <FiSettings />
            </button>
          </TooltipComponent>
        </div>

        {location.pathname === `/` ||
        location.pathname === `/register` ||
        location.pathname === `/login` ? (
          <div className="flex mt-36  ">
            {/* <BrowserRouter> */}
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
            {/* </BrowserRouter> */}
          </div>
        ) : (
          <div>
            {activeMenu ? (
              <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
                <Sidebar />
              </div>
            ) : (
              <div className="w-0 dark:bg-secondary-dark-bg">
                <Sidebar />
              </div>
            )}
            <div
              className={`dark:bg-main-dark-bg bg-main-bg min-h-screen w-full ${
                activeMenu ? "md:ml-72" : "flex-2"
              }`}
            >
              <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
                <Navbar />
              </div>
              <div>
                {themeSettings && <ThemeSettings />}

                <Routes>
                  {/* dashboard  */}
                  <Route path="/dashboard" element={<Dashboard />} />

                  {/* pages  */}
                  <Route path="/contracts" element={<Orders />} />
                  <Route path="/users" element={<Employees />} />
                  <Route path="/customers" element={<Customers />} />

                  {/* charts  */}
                  <Route path="/line" element={<Line />} />
                  <Route path="/area" element={<Area />} />
                  <Route path="/bar" element={<Bar />} />
                  <Route path="/pie" element={<Pie />} />
                  <Route path="/financial" element={<Financial />} />
                  <Route path="/color-mapping" element={<ColorMapping />} />
                  <Route path="/pyramid" element={<Pyramid />} />
                  <Route path="/stacked" element={<Stacked />} />
                </Routes>
              </div>
              <Footer />
            </div>
          </div>
        )}
      </div>
      {/* </BrowserRouter> */}
    </div>
  );
};

export default App;
