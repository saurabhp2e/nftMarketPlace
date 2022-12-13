import React from "react";
import logo from '../images/Storefront.svg'
import "./Header.css";
import {RxPerson} from "react-icons/rx"
export default function () {
  return (
    <div className="container">
      <div className="logo">
        <img src={logo} alt={logo}/>
        <p>NFT Marketplace</p>
      </div>
      <div className="subContainer">
        <menu className="main-menu">
          <span style={{"marginTop":"5px"}}>Marketplace</span>
          <span style={{"marginTop":"5px"}}>Rankings</span>
          <span style={{"marginTop":"5px"}}>Connect a wallet</span>
        </menu>
        <button className="sign-btn"><RxPerson/> Sign up</button>
      </div>
    </div>
  );
}
