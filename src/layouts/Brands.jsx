import React from 'react'
import classes from '../assets/styles/Main.module.css'
import logo1 from '../assets/images/logo1.png'
import logo2 from '../assets/images/logo2.png'
import logo3 from '../assets/images/logo3.png'
import logo4 from '../assets/images/logo4.png'

function Brands() {
    return (
        <section className={classes.brands}>
            <h2>العلامات التجارية المتوفرة</h2>
            <div className={classes.brands_container}>
                <img src={logo1} alt="Nike Brand"/>
                <img src={logo2} alt="Reebok Brand"/>
                <img src={logo3} alt="Puma Brand"/>
                <img src={logo4} alt="Adidas Brand"/>
            </div>
        </section>
    )
}

export default Brands