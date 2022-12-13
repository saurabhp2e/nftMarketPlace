import React from "react";
import Heading from "./Heading";
import "./Categories.css";

import pic1 from "../images/categories/pic1.jpg";
import pic2 from "../images/categories/pic2.jpg";
import pic3 from "../images/categories/pic3.jpg";
import pic4 from "../images/categories/pic4.jpg";
import pic5 from "../images/categories/pic5.jpg";
import pic6 from "../images/categories/pic6.jpg";
import pic7 from "../images/categories/pic7.jpg";
import pic8 from "../images/categories/pic8.jpg";

function CategoriesCard(props: any) {
  return (
    <>
      <div className="cat-card">
        <div className="picturediv">
          <img src={props.image} alt={props.image} className="cat-image" style={{ "borderRadius": "30px 30px 0 0" }} />
        </div>

        <div className="cat-name" style={{ "borderRadius": "0px 0px 30px 30px" }}>{props.categorie}</div>
      </div>
    </>
  );
}

export default function Categories() {
  const list = [
    { image: pic1, categorie: "Art" },
    { image: pic2, categorie: "Collectibles" },
    { image: pic3, categorie: "Music" },
    { image: pic4, categorie: "Photography" },
    { image: pic5, categorie: "Video" },
    { image: pic6, categorie: "Utility" },
    { image: pic7, categorie: "Sports" },
    { image: pic8, categorie: "Virtuals" },
  ];
  return (
    <>
      <div className="categorie-container">
        <Heading head="Browse Categories" foot={undefined} />
        <div className="display-cat">
          {list.map((card: any, id: number) => (
            <CategoriesCard key={id} {...card} />
          ))}
        </div>
      </div>
    </>
  );
}
