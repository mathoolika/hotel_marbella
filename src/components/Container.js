import React from "react";
import { withRoomConsumer } from "../context";
import Loading from "./Loading";
import Filter from "./Filter";
import List from "./List";

function RoomContainer({ context }) {
  const { loading, sortedRooms, rooms } = context;
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <Filter rooms={rooms} />
      <List rooms={sortedRooms} />
    </>
  );
}

export default withRoomConsumer(RoomContainer);