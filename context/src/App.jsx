import React from "react";
import UserContextProvider from "./contextapi/UserContextProvider";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <UserContextProvider>
    
      <Login></Login>
      <Profile></Profile>
    </UserContextProvider>
  );
};

export default App;
