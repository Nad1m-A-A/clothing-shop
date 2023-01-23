import React from 'react'
import classes from '../assets/styles/Main.module.css'
import {BiMoon, BiCollection, BiSun} from 'react-icons/bi'
import {RiHomeLine, RiPriceTag3Fill, RiTShirtLine} from 'react-icons/ri'

import {Link as SmoothLink} from 'react-scroll'

function Header(props) {
    return (
        <header>
            <nav className={classes.container}>
                <div className={classes.logo_wrapper}>
                    Tسوق
                </div>
                <ul className={classes.nav_ul}>
                    <li className={classes.nav_link}>
                        <SmoothLink to="home" spy={true} smooth={true} offset={-60} duration={500}>
                            <RiHomeLine/>
                            الرئيسية
                        </SmoothLink>
                        </li>
                    <li className={classes.nav_link}>
                        <SmoothLink to="new" spy={true} smooth={true} offset={-50} duration={500}>
                            <RiPriceTag3Fill/>
                            جديد
                        </SmoothLink>
                    </li>
                    <li className={classes.nav_link}>
                        <SmoothLink to="collection" spy={true} smooth={true} offset={-60} duration={500}>
                            <BiCollection/>
                            مجموعة
                        </SmoothLink>
                    </li>
                    <li className={classes.nav_link}>
                        <SmoothLink to="products" spy={true} smooth={true} offset={-50} duration={500}>
                        <RiTShirtLine/>
                            منتجات
                        </SmoothLink>
                    </li>
                </ul>
                <div className={classes.mode_button_wrapper}>
                    {props.theme === '' && <BiMoon onClick={() => props.onChangeTheme('dark')}/>}
                    {props.theme === 'dark' && <BiSun onClick={() => props.onChangeTheme('')}/>}
                </div>
            </nav>
        </header>
    )
}

export default Header