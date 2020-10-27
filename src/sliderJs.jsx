import { Carousel } from "antd";
import React, { Component } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const contentStyle = {
  width: "90%",
  height: "470px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center center",
  margin: "0 auto",
};
const slideImages = [
  "https://res.cloudinary.com/simplotel/image/upload/x_0,y_215,w_4288,h_2412,c_crop,q_80,fl_progressive/w_600,h_337,f_auto,c_fit/pride-hotel-bengaluru/Hotel_Exterior_Bldg_qzx0kh",
  "https://cdn.business2community.com/wp-content/uploads/2018/04/payment.jpg",
  "https://c1.sfdcstatic.com/content/dam/blogs/ca/Blog%20Posts/Every-Task-a-Customer-Service-Rep-Must-Do-opengraph.png",
];

export default class SliderJs extends Component {
  render() {
    return (
      <div style={{ paddingTop: "200px" }}>
        <Carousel>
          <div style={{ textAlign: "center" }}>
            <h3 style={{ textAlign: "center", fontSize: "50px" }}>
              <b>HOTEL MANAGEMENT SYSTEM</b>
            </h3>
          </div>
          <div style={{ textAlign: "center" }}>
            <h3 style={{ textAlign: "center", fontSize: "30px" }}>
              BY GROUP 14
            </h3>
          </div>
          <div style={{ textAlign: "center" }}>
            <h3 style={{ textAlign: "center", fontSize: "30px" }}>
              "When you are on a great mission, look simple; think and act
              complexly"
            </h3>
          </div>
        </Carousel>
      </div>
    );
  }
}
