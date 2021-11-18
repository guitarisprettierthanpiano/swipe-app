import * as React from 'react';
import { NavLink } from 'react-router-dom'

const Nav: React.FC = () => {

    return(
    <nav>
        <ul>
            <NavLink
            exact activeClassname='active' to='/'>
                <li>Today</li>
            </NavLink>

            <NavLink
            activeClassname='active' to='/hourly'>
                <li>Hourly</li>
            </NavLink>

            <NavLink
            activeClassname='active' to='/daily'>
                <li>Daily</li>
            </NavLink>

            <li>Radar</li>
        </ul>
    </nav>
    )
}

export default Nav;