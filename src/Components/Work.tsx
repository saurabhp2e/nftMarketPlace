import React from "react";
import "./Work.css";

import Heading from "./Heading";
import wallet from "../images/work/wallet.svg";
import collection from "../images/work/collection.svg";
import earning from "../images/work/earning.svg";

function WorkCard(props:any) {
  return (
    <>
      <div className="work-card">
        
        <img src={props.image} alt={props.image} />
        <h5>{props.headLine}</h5>
        <p>
          {props.disc}
        </p>
      </div>
    </>
  );
}

export default function Work() {
  const list = [
    {
      image: wallet,
      headLine: "Setup your Wallet",
      disc: "Set up your wallet of choice. Connect it to the Animarket by clicking the wallet icon in the top right corner.",
    },
    {
      image: collection,
      headLine: "Create Collection",
      disc: "Upload your work and setup your collection. Add a description, social links and floor price.",
    },
    {
      image: earning,
      headLine: "Start Earning",
      disc: "Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others.",
    },
  ];

  return (
    <>
      <div className="work-cont">
        <Heading head="How It Works" foot="Find Out How To Get Started" />
        <div className="work-sub">
        {list.map((card :object, id:number) => (
          <WorkCard key={id} {...card} />
        ))}
        </div>
      </div>
    </>
  );
}
