import React from "react";
import { Link, useHistory } from "react-router-dom";
import { ROUTER } from "../../routes/consts";

function Navbar() {


  const handleGoToServicePage = () => {
    useHistory.push(ROUTER.HOME);
  };

  return (
    <>
      <Link to={ROUTER.HOME.PATH}>Users</Link>
      <br />
      <br />

      <button onClick={handleGoToServicePage}>Go to Services</button>
    </>
  );
}

export default Navbar;