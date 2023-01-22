import React from 'react'
import classes from '../assets/styles/Main.module.css'
import home1 from '../assets/images/home1.png'
import home2 from '../assets/images/home2.png'
import Direction from '../components/Direction'
function Home() {
    return (
        <section className={classes.home} id="home">
            <div className={classes.home_container}>
                <div className={classes.home_text}>
                    <h1>مجموعة ملابس <br/>جديدة</h1>
                    <p>المجموعة الأحدث للعام<br/> من أفضل الماركات العالمية</p>
                    <div className={classes.direction}>
                        <Direction whereTo="new" content="تصفح"/>
                    </div>
                </div>

                <div className={classes.home_images}>
                    <img className={classes.lower_img} src={home2} alt="Model Pausing"></img>
                    <img className={classes.upper_img} src={home1} alt="Model Pausing"></img>
                </div>
            </div>
        </section>
    )
}

export default Home