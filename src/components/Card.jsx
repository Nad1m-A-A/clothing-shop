import React from 'react'
import classes from '../assets/styles/Main.module.css'
import Direction from '../components/Direction'

function Card(props) {
    return (
        <div className={classes.card}>
            <img src={props.category.img} alt='Model Pausing'/>
            <h3>{props.category.title}</h3>
            <div className={classes.direction}>
                <Direction whereTo='new' content={props.category.type}/>
            </div>
        </div>
    )
}

export default Card