import React from "react";
import space from "../images/news/Photo.jpg";
import "./News.css";
import Heading from "./Heading";
import { AiOutlineMail } from "react-icons/ai";

export default function News() {
  return (
    <div className="news1">
      <div className="news-cont">
        <div className="space-pic">
          <img src={space} alt={space} style={{ borderRadius: "30px" }} />
        </div>
        <div className="subs">
          <Heading
            head="Join Our Weekly Digest"
            foot="Get Exclusive Promotions & Updates Straight To Your Inbox."
          />
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
    </div>
  );
}


