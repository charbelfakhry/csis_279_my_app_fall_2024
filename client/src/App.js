import {Routes, Route} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import AboutUs from './Pages/AboutUs';
import UserTable from './Components/users/UserTable';
import SignIn from './Pages/SignIn';
import { useState } from "react";
import {getUser} from "./UTILS/localStorageUtils";

function App() {


  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
    console.log(getUser());
  }

  

  const logout = () =>{
    setIsLoggedIn(false);
    localStorage.clear();
  }

  const fillWord = () => {
    const arr = [];
    for (let i = 0; i < 10; i++) {
      arr.push(<h1>hello</h1>);
    }
    return arr;
  }
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<SignIn onLogin={handleLogin} />} />
        <Route path="/users" element={<UserTable />} />
        <Route path="/aboutus" element={<AboutUs />} />
      </Routes>

    </div>
  );
}

export default App;
