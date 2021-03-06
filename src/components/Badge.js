import React from "react";
import "./styles/Badge.css";
import confLogo from "../images/badge-header.svg";
import Gravatar from "./Gravatar";

function Badge(props) {
  return (
    <div className="Badge">
      <div className="Badge__header">
        <img src={confLogo} alt="Logo de la conferencia" />
      </div>

      <div className="Badge__section-name">
        <Gravatar email={props.email} className="Badge__avatar" />
        <h1>
          {props.firstName} <br /> {props.lastName}
        </h1>
      </div>

      <div className="Badge__section-info">
        <h3>{props.jobTitle}</h3>
        <div>@{props.twitter}</div>
      </div>

      <div className="Badge__footer">#Platzi</div>
    </div>
  );
}

export default Badge;
