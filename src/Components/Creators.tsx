import React from "react";

import "./Creators.css";
import pic1 from "../images/creators_image/pic1.jpg";
import pic2 from "../images/creators_image/pic2.png";
import pic3 from "../images/creators_image/pic3.jpg";
import pic4 from "../images/creators_image/pic4.jpg";
import pic5 from "../images/creators_image/pic5.jpg";
import pic6 from "../images/creators_image/pic6.jpg";
import pic7 from "../images/creators_image/pic7.jpg";
import pic8 from "../images/creators_image/pic8.jpg";
import { SlRocket } from "react-icons/sl";

import Heading from "./Heading";
function CreatorCard(props:any) {
  return (
    <>
      <div className="creator-card">
        <div className="upper">
          <div className="id">{props.id}</div>
          <img src={props.image} alt={props.image} className="profile" />
        </div>
        <div className="lower">
          <div>{props.name}</div>
          <div>
            <span className="total-sale">Total sales: </span>34.53 ETH
          </div>
        </div>
      </div>
    </>
  );
}

export default function Creators() {
  const list = [
    {
      id: 1,
      image: pic1,
      name: "Keepitreal",
    },
    {
      id: 2,
      image: pic2,
      name: "Digilab",
    },
    {
      id: 3,
      image: pic3,
      name: "Gravityone",
    },
    {
      id: 4,
      image: pic4,
      name: "Juanie",
    },
    {
      id: 5,
      image: pic5,
      name: "Bluewhale",
    },
    {
      id: 6,
      image: pic6,
      name: "Mr Fox",
    },
    {
      id: 7,
      image: pic7,
      name: "Shroomie",
    },
    {
      id: 8,
      image: pic8,
      name: "Robotica",
    },
    {
      id: 9,
      image: pic3,
      name: "Rustyrobot",
    },
    {
      id: 10,
      image: pic3,
      name: "Animakid",
    },
    {
      id: 11,
      image: pic4,
      name: "Dotgu",
    },
    {
      id: 12,
      image: pic1,
      name: "Ghiblier",
    },
  ];

  return (
    <>
      <div className="creator-container">
        <div className="head23">
        <Heading
          head="Top Creators"
          foot="Checkout Top Rated Creators On The Nft Marketplace"
        />
        <button className="start-btn1">
          <SlRocket />
          View Rankings
        </button>
        </div>
        <div className="creator-grids">
          {list.map((card:any, idx:number) => (
            <CreatorCard key={idx} {...card} />
          ))}
        </div>
      </div>
    </>
  );
}
