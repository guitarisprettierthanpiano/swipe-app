import * as React from 'react';

const Nav: React.FC = () => {
    return(
        <>
        <nav>
            <ul>
                <li>Today</li>
                <li>Hourly</li>
                <li>Daily</li>
                <li>Radar</li>
            </ul>
            <input
            type='text'
            placeholder='Seach'
            onChange={event => setCityName(event.target.value)}
            value={cityName}
            onKeyPress={SearchCity}
            />
        </nav>
        </>
    )
}

export default Nav;