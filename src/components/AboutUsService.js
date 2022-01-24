import React, { Component } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { BsFillHouseDoorFill, BsFillPersonFill } from "react-icons/bs";

import Title from "./Title";


export default class AboutService extends Component {
  state = {
    service: [
      {
        icon: <FaPhoneAlt />,
        title: "Contact us",
        info: "076 778 73 03 or mathoolika.vasigaran@gmail.com",
      },
      {
        icon: <BsFillPersonFill />,
        title: "Contact",
        info: "Mathoolika Vasigaran",
      },
      {
        icon: <BsFillHouseDoorFill />,
        title: "Address",
        info: "1043 Railroad Street, 32202 Florida, Jacksonville",
      },
    ],
  };
  render() {
    return (
      <section className="service">
        <Title title="Contact Details" />
        <div className="service-center">
          {this.state.service.map((item) => {
            return (
              <article key={`item-${item.title}`} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
