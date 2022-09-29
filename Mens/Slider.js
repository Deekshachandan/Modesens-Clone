import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slider.css"


export default function MenSlider() {

  return (
    <div 
    className="carousel"
    style={{ margin: "30px" }}>
      <Slider >

      <div>
          <img src="https://modesens.com/banner/13567/getimg/?img=%2Fbanner%2F20220927-modesens-SSENSE-1140x400-M-EN.jpg" style={{

            width: "92%",
            height: "50vh"
          }} />
        </div>
<div>
          <img src="https://modesens.com/banner/13568/getimg/?img=%2Fbanner%2F20220927-modesens-NAP-1140x400-F-EN.jpg" style={{

            width: "92%",
            height: "50vh"
          }} />
        </div>

        <div>
          <img src="https://modesens.com/banner/13566/getimg/?img=%2Fbanner%2F20220927-modesens-SSENSE-1140x400-F-EN.jpg"
            style={{
              width: "92%", height: "50vh",
            }} />
        </div>
        <div>
          <img src="https://modesens.com/banner/13550/getimg/?img=%2Fbanner%2F20220926-modesens-Matches-1140x400-EN.jpg"
            style={{ width: "92%", height: "50vh" }} />
        </div>

        <div>
          <img src="https://modesens.com/banner/13550/getimg/?img=%2Fbanner%2F20220926-modesens-Matches-1140x400-EN.jpg"
            style={{
              width: "92%", height: "50vh",
            }} />
        </div>

        <div>
          <img src="https://modesens.com/banner/13561/getimg/?img=%2Fbanner%2F20220926-modesens-Neiman-1140x400-EN.jpg" style={{
            width: "92%", height: "50vh",
          }} />
        </div>

        <div>
          <img src="https://modesens.com/banner/13367/getimg/?img=%2Fbanner%2F20220914-modesens-HarveyNichols-1140x400-EN.jpg" style={{ width: "92%", height: "50vh", }} />
        </div>








      </Slider>
    </div>
  )



}