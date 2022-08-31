import React from "react";
import style from "../Navigation/Navigation.module.css";

function Navigation({ data }) {
  // console.log("mainlink data", data["mainLink"]);
  return (
    <div className={`${style.main_container} `}>
      <div className="max-w-[8%] my-auto">
        <img
          src={`http://localhost:1337${data["logo"]["data"]["attributes"]["url"]} `}
          alt=""
        />
      </div>
      <ul className="flex flex-row my-auto max-w-[400px] gap-4">
        {data["mainLink"].map((element, index) => {
          return (
            <li key={index}>
              <a href={element.href}>{element.label}</a>
            </li>
          );
        })}
      </ul>
      <ul className="flex flex-row my-auto max-w-[400px] gap-4">
        {data["subLink"].map((element, index) => {
          return (
            <li key={index}>
              <a href={element.href}>{element.label}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Navigation;
