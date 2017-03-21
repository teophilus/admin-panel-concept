import React, { Component } from 'react';

class SidebarItem extends Component {

  render() {
    return (
      <li>
        <input type="radio" name="sidebar" value="one"/>
        <a href="#">Menu Item</a>
      </li>
    )
  }
}

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
          <ul>
            <SidebarItem />
            <SidebarItem />
            <SidebarItem />
          </ul>
      </div>
    )
  }
}

export default Sidebar;
