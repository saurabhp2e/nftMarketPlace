import React from "react";
import logo from "../images/Storefront.svg";
import "./Footer.css";
import { AiOutlineMail } from "react-icons/ai";
import { RxDiscordLogo } from "react-icons/rx";
import { FiYoutube, FiTwitter } from "react-icons/fi";
import { BsInstagram } from "react-icons/bs";
export default function Footer() {
  return (
    <div className="footer-container">
      <div className="foot-cont">
        <div className="market">
          <div className="logo1">
            <img src={logo} alt={logo} />
            <p>NFT Marketplace</p>
          </div>
          <h5>NFT marketplace UI created with Anima for Figma.</h5>
          <h5>Join our community</h5>

          <div className="links">
            <ul>
              <li><a href="">
                <RxDiscordLogo />

              </a></li>
              <li><a href="">
                <FiYoutube />

              </a></li>
              <li><a href="">
                <FiTwitter />

              </a></li>
              <li><a href="">
                <BsInstagram />

              </a></li>
            </ul>
          </div>
        </div>

        <div className="explore">
          <h3>Explore</h3>
          <h5>Marketplace</h5>
          <h5>Ranking</h5>
          <h5>Connect a wallet</h5>
        </div>

        <div className="daily-news">
          <h3>Join Our Weekly Digest</h3>
          <p>Get exclusive promotions & updates straight to your inbox.</p>

          <div className="inputFeild">
            <input
              type="email"
              placeholder="Enter your email here"
              className="tag"
            />
            <button className="btn-sbc">
              <AiOutlineMail />
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <hr />

      <h6 className="basee1">Ⓒ NFT Market. Use this template freely.</h6>

    </div>
  );
}
