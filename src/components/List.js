import React from "react";
import Room from "./Room";
const List = ({ rooms }) => {
  if (rooms.length === 0) {
    return (
      <div className="empty-search">
        <h3>unfortunately no rooms matched your search parameters</h3>
      </div>
    );
  }
  return (
    <section className="list">
      <div className="list-center">
        {rooms.map(item => {
          return <Room key={item.id} room={item} />;
        })}
      </div>
    </section>
  );
};

export default List;