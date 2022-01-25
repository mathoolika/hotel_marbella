import React from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import Container from "../components/Container";
import Navbar from "../components/Navbar";

export default function Rooms() {
  return (
    <>
      <Navbar />
      <Banner banner="roomsBanner">
        <Header
          title="Rooms"
          subtitle="Book your Room Now"
          children={
            <Link to="/home" className="btn-primary">
              Back to home
            </Link>
          }
        ></Header>
      </Banner>
      <Container />
    </>
  );
}
