import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
//import Header from "./Header";

class RoomsCarousel extends React.Component {
  render() {
    return (
      <div>
        <div className="room-carousel">
          <div className="row">
            <div className="col-sm-12">
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://s7d2.scene7.com/is/image/ritzcarlton/RCCANCU_00415_conversion?$XlargeViewport100pct$"
                    alt="First slide"
                  />
                </Carousel.Item>

                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://s7d2.scene7.com/is/image/ritzcarlton/RCHALFM_00394_conversion?$XlargeViewport100pct$"
                    alt="Second slide"
                  />
                </Carousel.Item>

                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://s7d2.scene7.com/is/image/ritzcarlton/plsrt-executive-suite-50778763?$XlargeViewport100pct$"
                    alt="Third slide"
                  />
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RoomsCarousel;