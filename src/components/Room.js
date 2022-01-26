import React from "react";
import { Link } from "react-router-dom";
import defaultImg from "../images/RoomBanner.jpeg";
import PropTypes from "prop-types";
import { memo } from "react";
const Room = memo(({ room }) => {
  const { name, single, images, price } = room;
  // console.log(name);
  return (
    <article className="room">
      <div className="img-container">
        <img src={images[0] || defaultImg} alt="single room" />
        <div className="price-top">
          <h6>${price}</h6>
          <p>per night</p>
        </div>
        <Link to={{pathname: `/rooms/${single}`, single: room}} className="btn-primary room-link">
          features
        </Link>
      </div>
      <p className="room-info">{name}</p>
    </article>
  );
});

Room.propTypes = {
  room: PropTypes.shape({
    name: PropTypes.string.isRequired,
    single: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.number.isRequired
  })
};
export default Room;