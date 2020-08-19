import React from "react";
import Skeleton from "react-loading-skeleton";
import "./styles/BadgesList.css";

class BadgesListItem extends React.Component {
  render() {
    return (
      <div className="BadgesListItem">
        <img
          className="BadgesListItem__avatar"
          src={this.props.badge.image}
          alt={`${this.props.badge.name} ${this.props.badge.species}`}
        />

        <div>
          <strong>{this.props.badge.name}</strong>
          <br />@{this.props.badge.name}
          <br />
          {this.props.badge.species}
        </div>
      </div>
    );
  }
}

class BadgesList extends React.Component {
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
    if (this.state.error) {
      return `Error: ${this.state.error.message}`;
    }
    return (
      <div className="BadgesList">
        <ul className="list-unstyled">
          {this.state.data.results.map((badge) => {
            return (
              <li key={badge.id}>
                <BadgesListItem badge={badge} />
              </li>
            );
          })}
        </ul>
        {this.state.loading && <Skeleton />}
        {!this.state.loading && (
          <button
            onClick={() => this.fetchCharacters()}
            className="btn btn-primary"
          >
            Cargar mas
          </button>
        )}
      </div>
    );
  }
}

export default BadgesList;
