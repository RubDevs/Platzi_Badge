import React from "react";
import confLogo from "../images/badge-header.svg";
import "../components/styles/Badges.css";
import "../components/styles/BadgesList.css";
import BadgesList from "../components/BadgesList";
import { Link } from "react-router-dom";
import api from "../api";
import Skeleton from "react-loading-skeleton";
import PageError from "../components/PageError";

class Badges extends React.Component {
  state = {
    loading: true,
    error: null,
    data: undefined,
  };

  componentDidMount() {
    this.fetchData();

    this.intervalId = setInterval(this.fetchData, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  fetchData = async () => {
    this.setState({ loading: true, error: null });

    try {
      const data = await api.badges.list();
      this.setState({ loading: false, data: data });
    } catch (error) {
      this.setState({ loading: false, error: error });
      console.log(`Error: ${error.message}`);
    }
  };

  render() {
    if (this.state.error) {
      return <PageError error={this.state.error} />;
    }
    return (
      <React.Fragment>
        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <img
                className="Badges_conf-logo"
                src={confLogo}
                alt="conf logo"
              />
            </div>
          </div>
        </div>

        <div className="Badges__container">
          <div className="Badges__buttons">
            <Link to="/badge/new" className="btn btn-primary">
              New Badge
            </Link>
          </div>
          <div className="Badges__list">
            <div className="Badges__container">
              <div className="BadgesList">
                <ul className="list-unstyled">
                  {this.state.loading && !this.state.data ? (
                    new Array(10).fill(1).map((_, i) => {
                      return <Skeleton key={i} />;
                    })
                  ) : (
                    <React.Fragment>
                      <BadgesList badges={this.state.data} />
                      {this.state.loading && <Skeleton />}
                    </React.Fragment>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Badges;
