import * as React from 'react';

const MyLocation: React.FC = () => {

    return(
    <div className='my-location'>
        <button id="find-me">Show my location</button><br />
        <p id="status"></p>
        <a id="map-link" target="_blank"></a>
    </div>
    )
}
 
export default MyLocation;
