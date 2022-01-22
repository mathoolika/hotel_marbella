import React from "react";

const Banner = ({ children, banner }) => {
  return <header className={banner}>{children}</header>;
};

export default Banner;

Banner.defaultProps = {
  banner: "defaultBanner"
};
