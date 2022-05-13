import React from 'react';

import './recentSearches.css';

interface Props {
  counterPassed: number;
}

const recentSearches: React.FC<Props> = (props) => {
  const [searchesArray, setSearchesArray] = React.useState([]);
  const [timeArray, setTimeArray] = React.useState([]);

  const ClickedGet = async () => {
    try {
      const response = await fetch(
        'https://stevens-postgresql-backend.herokuapp.com/recent',
        {
          method: 'GET',
          headers: {
            'Content-type': 'application/json',
          },
          // body: JSON.stringify(body),
        }
      );

      const parseResponse = await response.json();
      // console.log(`PARSED RESP IS ${parseResponse[0].search_term}`);

      let searchArray = [];
      let timeArray = [];
      for (let i = 0; i < 10; i++) {
        searchArray.push(parseResponse[i].search_term);
        timeArray.push(parseResponse[i].exact_time);
      }

      setTimeArray(() => timeArray);
      setSearchesArray(() => searchArray);
    } catch (error) {}
  };

  React.useEffect(() => {
    ClickedGet();
  }, []);

  React.useEffect(() => {
    ClickedGet();
  }, [props.counterPassed]);

  return (
    <>
      <div className="dropdown">
        <a
          href="javascript:void(0)"
          className="dropbtn"
          onClick={() => ClickedGet()}
        >
          Recent Searches
        </a>
        <div className="dropdown-content">
          {searchesArray.map((x: string, i: number) => (
            <h1 key={i}>
              {new Intl.DateTimeFormat('en-US', {
                month: 'numeric',
                day: 'numeric',
                hour: 'numeric',
                minute: 'numeric',
              }).format(timeArray[i])}
              &ensp; &ensp;
              {x}
            </h1>
          ))}
        </div>
      </div>
    </>
  );
};

export default recentSearches;
