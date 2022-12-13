import React from "react";
import card from "../images/card.jpg";
import avatar from "../images/Avatar.jpg";
import "./Summary.css";
import { SlRocket } from "react-icons/sl";
export default function Summary() {
  return (
    <div className="container1">
      <div className="first-cont">
        <h1>Discover Digital Art & Collect Nfts</h1>
        <p>
          Nft Marketplace Ui Created With Anima For Figma. Collect, Buy And Sell
          Art From More Than 20k Nft Artists.
        </p>

        <button className="start-btn">
          <SlRocket />
          Get Started
        </button>

        <div className="sales">
          <div>
            <h2>240k+</h2>
            <p>Total sale</p>
          </div>
          <div>
            <h2>100k+</h2>
            <p>Auctions</p>
          </div>
          <div>
            <h2>240k+</h2>
            <p>Artists</p>
          </div>
        </div>
      </div>

      <div className="card" id="HeroCard">
        <img src={card} alt={card} className="image" />
        <div className="intro">
          <div className="img1">
            <img src={avatar} alt={avatar} />
          </div>
          <div className="name">
            <div>
              animakid
            </div>
            <div>
              <span className="total-sale">Total sales: </span>34.53 ETH
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
