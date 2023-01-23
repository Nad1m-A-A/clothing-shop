import React, {useState} from 'react'
import Header from './Header'
import Home from './Home'
import New from './New'
import Collection from './Collection'
import Products from './Products'
import Brands from './Brands'
import Footer from './Footer'

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
            <Brands/>
            <Footer/>
        </div>
    )
}

export default Main