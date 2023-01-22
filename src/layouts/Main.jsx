import React, {useState} from 'react'
import Header from './Header'
import Home from './Home'
import New from './New'
import Collection from './Collection'
import Products from './Products'

import classes from '../assets/styles/Main.module.css'

function Main() {
    const [theme, setTheme] = useState('')
    function changeThemeHandler(newTheme) {
        setTheme(newTheme)
    }

    return (
        <div className={`${classes.main} ${theme === 'dark' ? classes.dark : ''}`}>
            <Header theme={theme} onChangeTheme={changeThemeHandler}/>
            <Home/>
            <New/>
            <Collection/>
            <Products/>
        </div>
    )
}

export default Main