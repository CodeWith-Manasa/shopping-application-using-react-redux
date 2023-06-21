import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';

const Navbar = () => {
  const items = useSelector((state) => state.cart);
  return (
    <div style={navbarStyle}>
      <span>MANASA STORE</span>
      <div style={linkContainerStyle}>
        <Link to="/" style={linkStyle}>Home</Link>
        <Link to="/cart" style={linkStyle}>Cart</Link>
        <span className="cartCount" style={linkStyleN}>Cart items: {items.length}</span>
      </div>
    </div>
  );
};

const navbarStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "10px",
  position:"fixed",
  backgroundColor:"lightblue",
  fontSize:"30px",
};

const linkContainerStyle = {
  marginLeft: "20px",
};

const linkStyle = {
  marginRight: "10px",
};
const linkStyleN = {
  marginRight: "30px",
};

export default Navbar;
