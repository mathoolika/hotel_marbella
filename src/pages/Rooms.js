import React from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import Container from "../components/Container";
import Calender from "../components/Calender";

export default function rooms() {
  return (
    <>
      <Banner banner="roomsBanner">
        <Header
          title="Rooms"
          subtitle="Book your Room Now"
          children={
            <Link to="/" className="btn-primary">
              Back to home
            </Link>
          }
        ></Header>
      </Banner>
      <Calender />
      <Container />
    </>
  );
}
