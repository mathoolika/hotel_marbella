import React, { Component } from "react";
import { FaHotel } from "react-icons/fa";
import Title from "./Title";

export default class AboutText extends Component {
  state = {
    service: [
      {
        icon: <FaHotel />,
        info: "The Marbella Hotel is placed in Florida. Through every room you have a mesmerizing view right to the beach. Our rooms are very modern equipped. Our goal is to satify our guest and make their stay as memorable as possible.",
      },

    ],
  };
  render() {
    return (
      <section className="service">
        <Title title="Our Goal" />
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
