import React from "react";

const Header = ({ children, title, subtitle }) => {
  return (
    <div className="header">
      <h1>{title}</h1>
      <div />
      <p>{subtitle}</p>
      {children}
    </div>
  );
};

export default Header;