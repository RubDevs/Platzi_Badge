import React from "react";
import Navbar from "../components/Navbar";
import header from "../images/badge-header.svg";
import "../components/styles/BadgeNew.css";
import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";

class BadgeNew extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={header} alt="logo"></img>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                firstName="Ruben"
                lastName="Hernandez"
                jobTitle="Developer"
                twitter="Rubsdevs"
                avatarUrl="https://www.gravatar.com/avatar/7b9b2ca64c3a6f703433cec0e43480cc"
              />
            </div>
            <div className="col-6">
              <BadgeForm />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BadgeNew;
