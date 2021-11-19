import * as React from 'react';
import { NavLink } from 'react-router-dom'

const Nav: React.FC = () => {

    return(
    <nav>
        <ul>
            <li></li>
            <li></li>
            <NavLink
            exact activeClassname='active' to='/'>
                <li>Hourly</li>
            </NavLink>

            <NavLink
            activeClassname='active' to='/daily'>
                <li>Daily</li>
            </NavLink>

            <li></li>
            <li></li>
        </ul>
    </nav>
    )
}

export default Nav;