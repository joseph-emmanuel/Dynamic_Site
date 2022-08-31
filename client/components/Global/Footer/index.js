import React from "react";
import style from "../Footer/Footer.module.css";

function Footer({ data }) {
  return (
    <div className={`${style.main_container} `}>
      <ul className="flex flex-row my-auto gap-4 ">
        {data["Link"].map((element, index) => {
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

export default Footer;
