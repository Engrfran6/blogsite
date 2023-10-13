import {useState} from 'react';
import './header2.css';
import {NavLink} from 'react-router-dom';

export const Header2 = () => {
  return (
    <nav>
      <ul className="mewstap">
        <li>
          <NavLink to="/"> Latest News</NavLink>
        </li>
        <li>
          <NavLink>Erulo Blogs Recent Post</NavLink>
        </li>
      </ul>
    </nav>
  );
};
