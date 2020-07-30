import React, {useState}from 'react';
import ApplicationView from "./appview/ApplicationView"
import Nav from "./appview/Nav"

function FossilHuntApp() {

  const isAuthenticated = () => sessionStorage.getItem("userInfo") !== null;

  const [hasUser, setHasUser] = useState(isAuthenticated());

  const setUser = user => {
    sessionStorage.setItem("userInfo", JSON.stringify(user));
    setHasUser(isAuthenticated());
  };
  return (
     <>
    <Nav hasUser={hasUser} />
    <ApplicationView  hasUser={hasUser} setUser={setUser} />
    </>
  );
}

export default FossilHuntApp;
