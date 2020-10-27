import React, { Component } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const slideImages = [
  "https://res.cloudinary.com/simplotel/image/upload/x_0,y_215,w_4288,h_2412,c_crop,q_80,fl_progressive/w_600,h_337,f_auto,c_fit/pride-hotel-bengaluru/Hotel_Exterior_Bldg_qzx0kh",
  "https://cdn.business2community.com/wp-content/uploads/2018/04/payment.jpg",
  "https://c1.sfdcstatic.com/content/dam/blogs/ca/Blog%20Posts/Every-Task-a-Customer-Service-Rep-Must-Do-opengraph.png",
];

export default class SliderJs extends Component {
  render() {
    return (
      <div>
        <div
          className="slide-container"
          style={{ width: "85vw", height: "70vh", margin: "0 auto" }}
        >
          <Slide>
            <div
              className="each-slide"
              style={{ height: "100%", width: "100%" }}
            >
              <div
                style={{
                  backgroundImage: `url(${slideImages[0]})`,
                  height: "400px",
                  width: "100%",
                }}
              >
                <span>Slide 1</span>
              </div>
            </div>
            <div className="each-slide">
              <div
                style={{
                  backgroundImage: `url(${slideImages[1]})`,
                  height: "400px",
                  width: "100%",
                  backgroundSize: "cover",
                }}
              >
                <span>Slide 2</span>
              </div>
            </div>
            <div className="each-slide">
              <div
                style={{
                  backgroundImage: `url(${slideImages[2]})`,
                  height: "400px",
                  width: "100%",
                }}
              >
                <span>Slide 3</span>
              </div>
            </div>
          </Slide>
        </div>
      </div>
    );
  }
}
