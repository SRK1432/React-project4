import React, { useEffect, useState } from "react";
import UserLogin from "./components/Login/UserLogin";
import UserLogout from "./components/Login/UserLogout"
const App=()=>{
  const [isLogIn, setIsLogIn] = useState(false);
  useEffect(()=>{
    const local = localStorage.getItem('isLoggedIn');
    if(local === '1'){
      setIsLogIn(true);
    }
  },[]);
  const loginHandler=(event)=>{
    localStorage.setItem('isLoggedIn', '1');
      setIsLogIn(true);
  }
  const logoutHandler=()=>{
    localStorage.removeItem('isLoggedIn');
    setIsLogIn(false);
  }
  return(<div>

    {!isLogIn ? (<UserLogin onLogin={loginHandler}/>):
    <UserLogout onLogout={logoutHandler}/>}{/* here we use tartiory operator*/}
  </div>
  )
}
export default App;