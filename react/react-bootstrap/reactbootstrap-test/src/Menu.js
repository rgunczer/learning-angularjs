import React, { Component } from 'react';
import { Nav, Navbar, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

class Menu extends Component {

  constructor(props, context) {
    super(props, context);

    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(selectedKey) {
    // alert(selectedKey);
    let value = '';
    switch (selectedKey) {
      case 1:
        value = 'search';
        break;

      default:
        value = 'default';
        break;
    }
    this.props.onselect(value);
  }

  render() {
    return(
      <Navbar inverse fluid>
        <Nav onSelect={this.handleSelect}>
          <NavItem eventKey={1} href="#">
            Search
          </NavItem>
          <NavItem eventKey={2} href="#">
            Add
          </NavItem>
          <NavDropdown eventKey={3} title="Actions" id="basic-nav-dropdown">
            <MenuItem eventKey={3.1}>Action</MenuItem>
            <MenuItem eventKey={3.2}>Another action</MenuItem>
            <MenuItem eventKey={3.3}>Something else here</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={3.4}>Separated link</MenuItem>
          </NavDropdown>
        </Nav>
      </Navbar>
    );
  }

}

export default Menu;