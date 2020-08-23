import { hot } from 'react-hot-loader/root'
import React from 'react';

function HeaderComponent() {
    return(
        <header>
            <h1>Our react project!!!</h1>
            <p>Hello there</p>
        </header>
    );
}

export const Header = hot(HeaderComponent);

