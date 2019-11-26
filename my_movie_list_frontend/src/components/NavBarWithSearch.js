import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import UserAuth from "../userauth";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      qResult: [],
      searchText: "",
      email: ""
    };
  }
  addFriend = _ => {
    fetch(
      `http://localhost:4040/addFriend?email=${this.state.email}&friend_email=${this.state.searchText}`
    ).catch(err => console.err(err));
    this.setState({ redirect: true });
  };

  handleRoute = route => () => {
    this.props.history.push({ pathname: route });
  };

  handleSearchInput = e => {
    this.setState({
      searchText: e.target.value
    });
  };

  handleSarchSubmit = () => {
    if (this.state.searchText) {
      this.props.history.push({
        pathname: "/results",
        state: {
          searchText: this.state.searchText
        }
      });
    } else {
      alert("Please enter a user name");
    }
  };

  render() {
    return (
      <div>
        {console.log(this.props.location.state.useremail)}
        <Navbar bg="dark" variant="dark">
          <Nav className="mr-auto">
            <Nav.Link onClick={this.handleRoute("/home")}>Home</Nav.Link>
            <Nav.Link onCline={this.handleRoute("/category")}>
              Category
            </Nav.Link>
          </Nav>
          <Form inline>
            <FormControl
              onChange={this.handleSearchInput}
              value={this.state.searchText}
              type="text"
              placeholder="@Search friend email"
              className="mr-sm-2"
            />
            <Button onClick={this.logined} variant="outline-info">
              {console.log(this.state.email)}
              Add Friend
            </Button>
          </Form>
        </Navbar>
        {/* <Switch>
                    <Route exact path="/friendlist" Component={Friend} />
                </Switch> */}
      </div>
    );
  }

  logined = async _ => {
    const { user } = this.state;
    await fetch(
      `http://localhost:4040/login?email=${this.props.location.state.useremail}`
    ).then(res =>
      res.json().then(res =>
        this.setState(
          {
            qResult: res.data
          },
          () =>
            this.state.qResult.map(db =>
              this.setState({
                email: db.email
              })
            )
        )
      )
    );
  };
}
export default withRouter(Main);
