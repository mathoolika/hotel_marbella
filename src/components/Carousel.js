import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
//import Header from "./Header";

class CarouselComponent extends React.Component {
  render() {
    return (
      <div>
        <div className="home-carousel">
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
                    src="https://www.falstaff-travel.com/wp-content/uploads/2021/04/Allgaeu_Resort_Bergkristall_online.jpg"
                    alt="First slide"
                  />
                </Carousel.Item>

                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://media.meintophotel.de/uploads/2021/02/Hotelpool_Das-Koenig-Ludwig_1.jpg"
                    alt="Second slide"
                  />
                </Carousel.Item>

                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://media.cntraveler.com/photos/5f6ac3279a18c4ed58dd37fd/master/w_2048,h_1365,c_limit/Naladhu-Private-Island-Maldives.jpg"
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

export default CarouselComponent;