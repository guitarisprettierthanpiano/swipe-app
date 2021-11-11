import * as React from 'react';
import { useState } from 'react';

interface Props{
    name: string;
    age: number;
}

const Nav: React.FC<Props> = (props) => {
    let testtt = props.name

    return(
        <>
        <nav>

            <ul>
                <li>Today</li>
                <li>Hourly</li>
                <li>Daily</li>
                <li>Radar{testtt}</li>
            </ul>

            <input
            type='text'
            placeholder='Seach'
            //onChange={event => setCityName(event.target.value)}
            //value={cityName}
            //onKeyPress={SearchCity}
            />

        </nav>
        </>
    )
}

export default Nav;