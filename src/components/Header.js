import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header>
        <h1>Main Dashboard</h1>
        <NavLink to="/" exact={true} activeClassName="is-active">Dashboard</NavLink>
        <NavLink to="/reports" activeClassName="is-active">Reports</NavLink>
        <NavLink to="/manage" activeClassName="is-active">Manage</NavLink>
    </header>
)

export default Header;