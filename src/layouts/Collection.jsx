import React from 'react'
import classes from '../assets/styles/Main.module.css'
import collection1 from '../assets/images/collection1.png'
import collection2 from '../assets/images/collection2.png'
import Direction from '../components/Direction'


function Collection() {
    return (
        <section className={classes.collection} id='collection'>
            <div className={classes.collection_container}>
                    <div className={classes.men_collection}>
                        <div className={classes.collection_text}>
                            <h2>مجموعة<br/>الرجال</h2>
                            <div className={classes.direction}>
                                <Direction whereTo="no where" content="تصفح الملابس"/>
                            </div>
                        </div>
                        <img src={collection1} alt="Model Pausing"/>
                    </div>

                    <div className={classes.women_collection}>
                        <img src={collection2} alt="Model Pausing"/>
                        <div className={classes.collection_text}>
                            <h2>مجموعة<br/>النساء</h2>
                            <div className={classes.direction}>
                                <Direction whereTo="no where" content="تصفح الملابس"/>
                            </div>
                        </div>
                    </div>
            </div>
        </section>
    )
}

export default Collection