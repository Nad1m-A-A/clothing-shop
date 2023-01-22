import React from 'react'
import classes from '../assets/styles/Main.module.css'
import new1 from '../assets/images/new1.png'
import new2 from '../assets/images/new2.png'
import new3 from '../assets/images/new3.png'
import {FiArrowLeft} from 'react-icons/fi'
import {Link as SmoothLink} from 'react-scroll'

function New() {
    const newCategories = [
        {
            img: new2,
            title: 'بنطال و جاكيت',
            type: 'مجموعة الشتاء',
        },
        {
            img: new1,
            title: 'هوديي و بلوز',
            type: 'مجموعة الشتاء',
        },
        {
            img: new3,
            title: 'معطف و طقوم المعطف',
            type: 'مجموعة الشتاء',
        },
    ]

    return (
        <section className={classes.new} id="new">
            <h2>مجموعات جديدة</h2>
            <div className={classes.new_container}>
                {
                    newCategories.map((category, index) => {
                        return (
                            <div key={index} className={classes.new_card}>
                                <img src={category.img} alt='Model Pausing'/>
                                <h3>{category.title}</h3>
                                <div className={classes.direction}>
                                    <SmoothLink to="new" spy={true} smooth={true} offset={-50} duration={500}>
                                    <span>{category.type}</span>
                                    <FiArrowLeft/>
                                    </SmoothLink>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default New