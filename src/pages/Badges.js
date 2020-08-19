import React from "react";
import logo from "../images/platziconf-logo.svg";
import "../components/styles/Badges.css";
import BadgesList from "../components/BadgesList";
import { Link } from "react-router-dom";

class Badges extends React.Component {
  state = {
    data: {
      results: [],
    },
  };
  componentDidMount() {
    this.fetchCharacters();
  }

  fetchCharacters = async () => {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    const data = await response.json();

    this.setState({
      data,
    });
  };

  render() {
    return (
      <React.Fragment>
        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <img src={logo} alt="logo"></img>
            </div>
          </div>
        </div>
        <div className="Badge__container">
          <div className="Badges__buttons">
            <Link to="/badge/new" className="btn btn-primary">
              New Badge
            </Link>
          </div>
          <div className="Badges__list">
            <div className="Badges__container">
              <BadgesList badges={this.state.data.results} />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Badges;
