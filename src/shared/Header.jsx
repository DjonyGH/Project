import { hot } from 'react-hot-loader/root'
import React from 'react';
import styles from './header.css';
import lessStyles from './header.less';


function HeaderComponent() {

    return(
        <header>
            <h1 className={styles.example}>Our react project!!!</h1>
            <p className={lessStyles.p_class}>Hello there</p>
        </header>
    );
}

export const Header = hot(HeaderComponent);

