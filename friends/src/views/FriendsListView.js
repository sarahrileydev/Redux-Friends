import React from "react";
import { connect } from "react-redux";

import FriendsList from "../components/FriendsList";
import { getFriends } from "../actions/friendsData";

class FriendsListView extends React.Component {
 

  componentDidMount() {
    // call our action
    this.props.getFriends();
  }

  render() {
    if (this.props.fetching) {
      return <div>Loading...</div>;
      // return something here to indicate that you are fetching data
    }
    return (
      <div className="CharactersList_wrapper">
        <FriendsList friends={this.props.friends} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  friends: state.friends,
  fetchingFriends: state.fetchingFriends
});


export default connect(
  mapStateToProps,
  {
    getFriends
  }
)(FriendsListView);