import React from "react";
import logo from "../images/platziconf-logo.svg";
import "../components/styles/Badges.css";
import CharactersList from "../components/CharactersList";
import "../components/styles/BadgesList.css";
import Skeleton from "react-loading-skeleton";

class Characters extends React.Component {
  state = {
    nextPage: 1,
    loading: true,
    error: null,
    data: {
      results: [],
    },
  };
  componentDidMount() {
    this.fetchCharacters();
  }

  fetchCharacters = async () => {
    this.setState({ loading: true, error: null });
    try {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character?page=${this.state.nextPage}`
      );
      const data = await response.json();

      this.setState({
        data: {
          info: data.info,
          results: [].concat(this.state.data.results, data.results),
        },
        loading: false,
        nextPage: this.state.nextPage + 1,
      });
    } catch (error) {
      this.setState({
        error,
        loading: false,
      });
    }
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
          <div className="Badges__list">
            <div className="Badges__container">
              <div className="BadgesList">
                <ul className="list-unstyled">
                  {this.state.loading ? (
                    new Array(10).fill(1).map((_, i) => {
                      return <Skeleton key={i} />;
                    })
                  ) : (
                    <CharactersList characters={this.state.data} />
                  )}
                </ul>
                {!this.state.loading && (
                  <button
                    onClick={() => this.fetchCharacters()}
                    className="btn btn-primary"
                  >
                    Cargar mas
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Characters;
