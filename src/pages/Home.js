import React from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import Service from "../components/Service";
import Banner from "../components/Banner";
import SingleRooms from "../components/SingleRooms";

export default function home() {
  return (
    <>
      <Banner>
        <Header
          title="Welcome to Marbella"
          subtitle="Find your home far away from home"
          children={
            <Link to="/rooms" className="btn-primary">
              our rooms
            </Link>
          }
        ></Header>
      </Banner>
      <Service />
      <SingleRooms />
    </>
  );
}
