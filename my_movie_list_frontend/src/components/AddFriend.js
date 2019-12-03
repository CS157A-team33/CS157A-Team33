import React, { Component } from "react";
import Popup from "reactjs-popup";

class AddFriend extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      isValid: false
    };
  }

  addFunction = _ => {
    fetch(`http://localhost:4040/addFriend?username=${this.props.username}&friend_username=$
        {this.state.username}`).catch(err => console.err(err));
    this.setState({ isValid: true });
  };

  render() {
    return (
      <Popup trigger={<button className="button"> Add Friend</button>}>
        {close => (
          <div>
            <a className="close" onClick={close}>
              &times;
            </a>
            <div className="header">Search a friend by username</div>
          </div>
        )}
      </Popup>
    );
  }
}

export default AddFriend;
