import React, { Component } from "react";
//import defaultBcg from "../images/room-1.jpg";
//import Banner from "../components/Banner";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import { RoomContext } from "../context";

import SingleBanner from "../components/SingleBanner";
export default class SingleRoom extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    /*this.state = {
      single: this.props.match.params.single,
      //defaultBcg: defaultBcg
    };*/
  }
  static contextType = RoomContext;

   componentDidMount() {
     console.log(this.props);
   }
  render() {
    const { getRoom } = this.context;
    const room = getRoom(this.state.single);

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
      images
    } = room;
    const [defaultImages] = images;
    console.log(defaultImages);

    return (
      <>
        <SingleBanner img={images[0] || this.state.defaultBcg}>
          <Header title={`${name} room`}>
            <Link to="/rooms" className="btn-primary">
              back to rooms
            </Link>
          </Header>
        </SingleBanner>
        <section className="single-room">
          <div className="single-room-images">
            {defaultImages.map((item, index) => (
              <img key={index} src={item} alt={name} />
            ))}
          </div>
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
              <h6>{towels ? "towels will be provided" : "towels cost extra"}</h6>
              <h6>{bedsheets && "bedsheets included"}</h6>
            </article>
          </div>
        </section>
        <section className="room-extras">
          <h6>extras </h6>
          <ul className="extras">
            {extras.map((item, index) => (
              <li key={index}>- {item}</li>
            ))}
          </ul>
        </section>
      </>
    );
  }
}