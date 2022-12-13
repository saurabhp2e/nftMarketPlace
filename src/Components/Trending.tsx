import React from "react";
import "./Trending.css";
import pic1 from "../images/collection image/pic1.jpg";
import pic2 from "../images/collection image/pic2.jpg";
import pic3 from "../images/collection image/pic3.png";
import pic4 from "../images/collection image/pic4.jpg";
import pic5 from "../images/collection image/pic5.jpg";
import pic6 from "../images/collection image/pic6.jpg";
import pic7 from "../images/collection image/pic7.jpg";

function TrendingCard(props:any) {
  return (
    <>
    
        <div className="collection-item">
          <div className="main">
            <img src={props.pic11} alt={props.pic11} className='image1'/>
          </div>
          <div className="secondary">
            <img src={props.pic12} alt={props.pic12} className='image2'/>
            <img src={props.pic13} alt={props.pic13} className='image3'/>
            <img src={props.pic14} alt={props.pic14} className='image4'/>
          </div>
          <div className="avatar">
            <div className="title">{props.title}</div>
            <div className="foot">
              <img src={props.pic15} alt={props.pic15} className='image5'/>
              <p className="title2">{props.title2}</p>
            </div>
          </div>
          </div>
    </>
  );
}

export default function Trending() {
  const list = [
    {
      pic11: pic1,
      pic12: pic2,
      pic13: pic3,
      pic14: pic4,
      pic15: pic5,
      title: "Dsgn Animals",
      title2:'MrFox'
    },
    {
        pic11: pic6,
        pic12: pic2,
        pic13: pic3,
        pic14: pic4,
        pic15: pic5,
        title: "Magic Mushrooms ",
        title2:'Shroomie'
    },
    {
        pic11: pic7,
        pic12: pic3,
        pic13: pic2,
        pic14: pic4,
        pic15: pic5,
        title: "Disco Machines",
        title2:'BeKind2Robots'
    },
  ];

  return (
    <>
    <div className="trending-container">
      <div className="heading">
        <h1>Trending Collection</h1>
        <p>Checkout Our Weekly Updated Trending Collection.</p>
      </div>
      <div className="collection">
    <div className="box">
      {list.map((card :any, idx :number) => (
        <TrendingCard key={idx} {...card} />
      ))}
    </div>
    </div>
    </div>
    </>
  );
}

