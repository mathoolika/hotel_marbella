import React, { Component } from "react";
import Title from "./Title";
import { RoomContext } from "../context";
import Room from "./Room";
import Loading from "./Loading";
export default class SingleRooms extends Component {
  static contextType = RoomContext;

  render() {
    let { loading, featuredRooms: rooms } = this.context;

    rooms = rooms.map(room => {
      return <Room key={room.id} room={room} />;
    });
    return (
      <section className="single-rooms">
        <Title title=" Rooms" />
        <div className="single-rooms-center">
          {loading ? <Loading /> : rooms}
        </div>
      </section>
    );
  }
}