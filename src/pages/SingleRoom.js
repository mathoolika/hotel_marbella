import React, { Component } from "react";
import defaultBcg from "../images/room-1.jpg";
//import Banner from "../components/Banner";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import { RoomContext } from "../context";
import SingleBanner from "../components/SingleBanner";
import Calender from "../components/Calender";

export default function SingleRoom() {
  const { getRoom } = RoomContext;
  const room =
  window.location.href.split("/")[window.location.href.split("/").length - 1];
  console.log(room);
  console.log(
    window.location.href.split("/")[window.location.href.split("/").length - 1]
  );

  if (!room) {
    return (
      <div className="error">
        <h3> no such room could be found...</h3>
        <Link to="/rooms" className="btn-primary">
          back to rooms
        </Link>
      </div>
    );
  }
  const {
    name,
    description,
    capacity,
    size,
    price,
    extras,
    bedsheets,
    towels,
    images,
  } = room;
  //const [main, ...defaultImages] = images;
  //console.log(defaultImages);

  return (
    <>
      <SingleBanner>
        <Header title={`${name} room`}>
          <Link to="/rooms" className="btn-primary">
            back to rooms
          </Link>
        </Header>
      </SingleBanner>
      <section className="single-room">
        <div className="single-room-info">
          <article className="desc">
            <h3>details</h3>
            <p>{description}</p>
          </article>
          <article className="info">
            <h3>info</h3>
            <h6>price : ${price}</h6>
            <h6>size : {size} SQFT</h6>
            <h6>
              max capacity :
              {capacity > 1 ? `${capacity} people` : `${capacity} person`}
            </h6>
            <h6>
              {towels
                ? "free towels will be provided"
                : "towels will be charged extra"}
            </h6>
            <h6>{bedsheets && "free bedsheets will be provided"}</h6>
          </article>
        </div>
      </section>
      <Calender />
      <section className="room-extras">
        <h6>extras </h6>
        <ul className="extras"></ul>
      </section>
    </>
  );
  return <h1>Test</h1>;
}
