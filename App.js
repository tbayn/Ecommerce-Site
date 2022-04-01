import { Outlet, Link } from "react-router-dom";
import React from 'react'

export default function App() {
  return (
    <div id = "main">
      <h1 id = "Header">Some Random Text</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <ul className="pageContainer">
          <Link to ="/"> <li className="pageTabs">Home</li></Link> | {" "}
          <Link to="/login"><li className="pageTabs">Login</li></Link> |{" "}
          <Link to="/register"><li className="pageTabs">Register</li></Link> |{" "}
          <Link to="/products"><li className="pageTabs">Products</li></Link> |{" "}
          <Link to="/checkout"><li className="pageTabs">Checkout</li></Link>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}