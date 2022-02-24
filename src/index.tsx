import React from 'react';
import ReactDOM from 'react-dom'

require('./styles.css')
import ROUTER from './ROUTER'

ReactDOM.render(
    <ROUTER />,
    document.querySelector('#root')
);