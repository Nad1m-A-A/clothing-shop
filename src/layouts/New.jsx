import React from 'react'
import Card from '../components/Card'
import classes from '../assets/styles/Main.module.css'
import new1 from '../assets/images/new1.png'
import new2 from '../assets/images/new2.png'
import new3 from '../assets/images/new3.png'

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
            <h2>فئات جديدة</h2>
            <div className={classes.new_container}>
                {
                    newCategories.map((category, index) => {
                        return <Card key={index} category={category}/>
                    })
                }
            </div>
        </section>
    )
}

export default New