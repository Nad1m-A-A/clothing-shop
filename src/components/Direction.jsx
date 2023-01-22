import React from 'react'
import {FiArrowLeft} from 'react-icons/fi'
import {Link as SmoothLink} from 'react-scroll'

function Direction(props) {
    return (
        <>
            <SmoothLink to={props.whereTo} spy={true} smooth={true} offset={-50} duration={500}>
                <span>{props.content}</span>
                <FiArrowLeft/>
            </SmoothLink>
        </>
    )
}

export default Direction