import { useState } from "react";
import { Outlet, Route, Routes, BrowserRouter as Router, Link, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FiLogOut, FiEdit } from "react-icons/fi";
import UserTable from './Components/users/UserTable';
import AboutUs from './Pages/AboutUs';
import SignIn from './Pages/SignIn';
import { getLocalStorageUser } from "./UTILS/localStorageUtils";
import ResizableDiv from "./Components/resizable/ResizableDiv";
import DateTimeLabel from "./UTILS/DateTimeLabel";
import ProductTable from "./Components/prodcut/ProductTable";


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.clear();
    setIsNavCollapsed(true);
  };



  const isAdmin = () => {
    const user = getLocalStorageUser();
    if (user?.role === "admin") {
      return true;
    }
    return false;
  };

  return (
    <Router>
      <div className="App">
        {isLoggedIn && (
          <div>
            <nav
              className="navbar navbar-expand-lg"
              style={{ backgroundColor: "#3498db" }}
            >
              <div className="container">
                <Link to="/" className="navbar-brand text-light">
                  UOB <span>{"</>"}&#60;/&#62;</span>
                </Link>
                <DateTimeLabel isMilitary={true} color={"white"}/>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNav"
                  aria-controls="navbarNav"
                  aria-expanded={!isNavCollapsed ? true : false}
                  aria-label="Toggle navigation"
                  onClick={() => setIsNavCollapsed(!isNavCollapsed)}
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className={`${isNavCollapsed ? "collapse" : ""
                    } navbar-collapse`}
                  id="navbarNav"
                >
                  <ul className="navbar-nav ms-auto">
                    {isAdmin() && (
                      <li className="nav-item">
                        <Link to="/users" className="nav-link text-light">
                          Users Admin
                        </Link>
                      </li>
                    )}
                    <li className="nav-item">
                      <Link to="/users" className="nav-link text-light">
                        Users
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/products" className="nav-link text-light">
                        Products
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/resizablediv" className="nav-link text-light">
                        Resizable Div
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/aboutus" className="nav-link text-light">
                        About Us
                      </Link>
                    </li>
                    <li className="nav-item dropdown">
                    <button
                      className="nav-link dropdown-toggle btn btn-link text-light"
                      id="navbarDropdown"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <FiEdit className="dropdown-icon" />{" "}
                      {/* Edit Profile Icon */}
                    </button>
                    <ul
                      className="dropdown-menu dropdown-menu-end"
                      aria-labelledby="navbarDropdown"
                    >
                      <li>
                        <Link
                          className="dropdown-item"
                          onClick={handleLogout}
                          path="/"
                        >
                          <FiLogOut className="dropdown-item-icon" /> Logout
                        </Link>
                      </li>
                      <li>
                        <Link to="/userForm" className="dropdown-item">
                          <FiEdit className="dropdown-item-icon" /> Edit Profile
                        </Link>
                      </li>
                    </ul>
                  </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        )}
        <div className="container mt-3">
          <Routes>
            {isLoggedIn ? (
              <>
                <Route path="/users" element={<UserTable />} />
                <Route path="/aboutus" element={<AboutUs />} />
                <Route path="/resizablediv" element={<ResizableDiv />} />
                <Route path="/products" element={<ProductTable />} />

              </>
            ) : (
              <Route path="/" element={<SignIn onLogin={handleLogin} />} />
            )}
          </Routes>
          <ToastContainer />
        </div>
      </div>
    </Router>
  );
}

export default App;
