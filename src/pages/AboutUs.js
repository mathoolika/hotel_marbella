import React from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import AboutService from "../components/AboutUsService";
import Map from "../components/Map";
import AboutText from "../components/AboutUsText";
//import Container from "../components/Container";

export default function Aboutus() {
  return (
    <>
      <Banner banner="roomsBanner">
        <Header
          title="About Us"
          subtitle=""
          children={
            <Link to="/" className="btn-primary">
              Back to home
            </Link>
          }
        ></Header>
      </Banner>
      <AboutService />
      <AboutText />
      <Map />
    </>
  );
}
