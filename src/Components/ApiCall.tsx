import React, { useEffect, useState } from "react";
import "./ApiCall.css";

import Heading from "./Heading";

function ApiCard( props: any ) {
  return (
    <>
      <div className="api-card">
        Name:<p>{props.name}</p>
        Email:<p>{props.email}</p>
        Phone:<p>{props.phone}</p>
        <a href={props.website}>{props.website}</a>
      </div>
    </>
  );
}

export default function ApiCall() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((info) => setData(info));
  }, []);
  return (
    <>
      <div className="api-cont">
        <Heading head="Dummy Api Calls" foot="Displaying basic details" />
        <div className="api-sub">
          {data.slice(0, 9).map((card : any, id : number) => (
            <ApiCard key={id} {...card} />
          ))}
        </div>
      </div>
    </>
  );
}
