import React from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from 'react-router-dom';
import * as ROUTES from '../routes/routes';

export default props => {
  return (
    <Menu>
      <a className="menu-item" href="/">
        Inicio
      </a>

      <a className="menu-item" href="/burgers">
        Curiosity JS
      </a>

      <a className="menu-item" href="/pizzas">
        Jangg
      </a>
    </Menu>
  );
};