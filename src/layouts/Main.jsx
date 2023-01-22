import React, {useState} from 'react'
import Header from './Header'
import Home from './Home'
import New from './New'

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
        </div>
    )
}

export default Main