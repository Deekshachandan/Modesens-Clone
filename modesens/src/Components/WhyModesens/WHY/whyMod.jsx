import React from "react";
import "./whyMod.css";

export default function WhyMod () {
  return (
    <div className="main">

      <div className="one">
        <h4>
          WE'RE NOT A STORE,
          <br />
          WE'RE YOUR DIGITAL SHOPPING ASSISTANT
        </h4>
        <button>JOIN NOW</button>
      </div>

      <div className="video_div">
        <iframe
          className="iframe"
          src="https://www.youtube.com/embed/RKu9FJg3hRY?rel=0&modestbranding=0&autohide=0&showinfo=0&controls=0"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>

      <div className="compare_price">

        <div className="left">
          <h4 className="comp_h">
            Compare Price
            <span> In One Place</span>
          </h4>
          <p>
            ModeSens allows you to compare prices, availability and product
            images across hundreds of stores and thousands of brands.
          </p>
          <button className="join_btn">JOIN TO SAVE TODAY</button>
        </div>


        <div>
          <img
            src="https://cdn.modesens.com/static/img/20220915-video1-pic.png"
            alt="a"
            className="compare_img"
          />
        </div>
      </div>

     <div className="community">
      <p>
          Share your favorite likes, your best posts, and get inspiration from
          others in ModeSens Community period.
        </p>
        <br />
        <button className="join_btn">JOIN MODESENS COMMUNITY</button>
        <img
          src="https://cdn.modesens.com/static/img/20220915-bg3.png"
          alt="d"
          style={{height:"400px"}}
        />
      </div> 



<div className="loy_flex">
          <div className="loy_left">
            <p>
              Sign up to earn points towards Silver, Gold and Platinum
              memberships. You will get access to ModeSens Concierge providing
              you the best price, service, and a worry-free return experience.
            </p>
            <button>JOIN LOYALTY TODAY</button>
          </div>
          <div className="loy_right">
            <div>
              <img
                src="https://cdn.modesens.com/static/img/20220506bags.svg"
                alt=""
              />
              <p>
                Shop Through ModeSens For Shopper Purchase Protection Plus Earn
                Membership Points
              </p>
            </div>
            <div>
              <img
                src="https://cdn.modesens.com/static/img/20220506car.svg"
                alt=""
              />
              <p>
                At Silver Membership Use ModeSens Concierge For One Click
                Shopping Across Hundreds of Stores
              </p>
            </div>
          </div>
        </div>



 





  
    </div>
  );
};


