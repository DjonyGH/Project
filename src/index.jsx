import React from 'react';
import ReactDom from 'react-dom';
import {Header} from 'header';


window.addEventListener('load', () => {
    ReactDom.render(
        <Header />,
        document.querySelector('.root')
    );
})
