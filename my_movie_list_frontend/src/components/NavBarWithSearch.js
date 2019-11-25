import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";

class Main extends React.Component {
  state = {
    searchText: ""
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
              placeholder="Search Friend username"
              className="mr-sm-2"
            />
            <Button onClick={this.handleSarchSubmit} variant="outline-info">
              Search
            </Button>
          </Form>
        </Navbar>
        {/* <Switch>
                    <Route exact path="/friendlist" Component={Friend} />
                </Switch> */}
      </div>
    );
  }
}
export default withRouter(Main);
