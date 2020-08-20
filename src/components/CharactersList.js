import React from "react";
import Skeleton from "react-loading-skeleton";
import "./styles/BadgesList.css";

class CharactersListItem extends React.Component {
  render() {
    return (
      <div className="BadgesListItem">
        <img
          className="BadgesListItem__avatar"
          src={this.props.character.image}
          alt={`${this.props.character.name} ${this.props.character.species}`}
        />

        <div>
          <strong>{this.props.character.name}</strong>
          <br />@{this.props.character.name}
          <br />
          {this.props.character.species}
        </div>
      </div>
    );
  }
}

class CharactersList extends React.Component {
  render() {
    return (
      <React.Fragment>
        {this.props.characters.results.map((character) => {
          return (
            <li key={character.id}>
              <CharactersListItem character={character} />
            </li>
          );
        })}
      </React.Fragment>
    );
  }
}

export default CharactersList;
