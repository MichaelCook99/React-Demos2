import React from 'react';
import {  bubble as Menu } from 'react-burger-menu';

export default props => {
  return (
    <Menu style = "float: left;">
      <a className="menu-item" href="/">
        Home
      </a>

      <a className="menu-item" href="/Option1">
        Option 1
      </a>

      <a className="menu-item" href="/Option2">
        Option 2
      </a>

      <a className="menu-item" href="/Contact">
        Contact
      </a>

    </Menu>
  );
};
