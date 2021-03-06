import React, {useState}from 'react';
import ApplicationView from "./appview/ApplicationView"
import Nav from "./appview/Nav"
import Helper from "./HelperFunctions/Helper"
import "../src/appview/styles/app.css"
function FossilHuntApp() {

  const isAuthenticated = () => sessionStorage.getItem("userInfo") !== null;

  const [hasUser, setHasUser] = useState(isAuthenticated());


  ///==================use SETUSER in log in to add to varifaction 
  const setUser = user => {
    sessionStorage.setItem("userInfo", JSON.stringify(user));
    setHasUser(isAuthenticated());
  };
  
  return (
     <>
     
    <Nav hasUser={hasUser} />
    <section className="appView">
    <ApplicationView  hasUser={hasUser} setUser={setUser} />
    </section>
    </>
  );
}

export default FossilHuntApp;
