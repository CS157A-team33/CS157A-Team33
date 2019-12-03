import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  Dropdown,
  DropdownButton
} from "react-bootstrap";

class NavBarWithSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: "",
      user_friend: []
    };
  }

  componentWillMount() {
    this.getFriend();
  }

  handleSearchInput(e) {
    this.setState({
      searchText: e.target.value
    });
  }

  getFriend = async _ => {
    await fetch(
      `http://localhost:4040/getFriend?email=${this.props.location.state.useremail}`
    )
      .then(res => res.json())
      .then(res => {
        this.setState({ user_friend: res.data });
      })
      .catch(err => console.error(err));
    console.log(this.state.user_friend);
  };

  renderFriend = ({ friend_email }) => {
    return <Dropdown.Item>{friend_email}</Dropdown.Item>;
  };

  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Nav className="mr-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link>Category</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl
              onChange={this.handleSearchInput.bind(this)}
              value={this.state.searchText}
              type="text"
              placeholder="@Search Friend's Email"
              className="mr-sm-2"
            />
            <Button onClick={this.handleAddFriend} variant="outline-info">
              Add Friend
            </Button>
          </Form>

          <DropdownButton id="dropdown-basic-button" title="My Connections">
            {this.state.user_friend.map(this.renderFriend)}
          </DropdownButton>
        </Navbar>
      </div>
    );
  }

  handleAddFriend = _ => {
    fetch(
      `http://localhost:4040/addFriend?email=${this.props.location.state.useremail}&friend_email=${this.state.searchText}`
    ).catch(err => console.err(err));
    this.setState({ searchText: "" });
  };
}
export default withRouter(NavBarWithSearch);
