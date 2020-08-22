import React from "react";
import PageError from "../components/PageError";
import api from "../api";
import BadgeDetails from "../pages/BadgeDetails";

class BadgeDetailsContainer extends React.Component {
  state = {
    loading: true,
    error: null,
    data: {
      firstName: "",
      lastName: "",
      email: "",
      jobTitle: "",
      twitter: "",
    },
    modalIsOpen: false,
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    this.setState({ loading: true, error: null });

    try {
      const data = await api.badges.read(this.props.match.params.badgeId);
      this.setState({ loading: false, data: data });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  handleCloseModal = (e) => {
    this.setState({ modalIsOpen: false });
  };
  handleOpenModal = (e) => {
    this.setState({ modalIsOpen: true });
  };

  handleDelete = async (e) => {
    this.setState({ loading: true, error: null });
    try {
      await api.badges.remove(this.props.match.params.badgeId);
      this.setState({ loading: false });
      this.props.history.push("/badges");
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };
  render() {
    if (this.state.error) {
      return <PageError error={this.state.error} />;
    }

    return (
      <BadgeDetails
        onCloseModal={this.handleCloseModal}
        onOpenModal={this.handleOpenModal}
        onDeleteBadge={this.handleDelete}
        modalIsOpen={this.state.modalIsOpen}
        badge={this.state.data}
      />
    );
  }
}

export default BadgeDetailsContainer;
