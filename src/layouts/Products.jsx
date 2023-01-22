import React from 'react'
import Card from '../components/Card'
import {FiArrowLeft, FiArrowRight} from 'react-icons/fi'
import classes from '../assets/styles/Main.module.css'
import product1 from '../assets/images/product1.png'
import product2 from '../assets/images/product2.png'
import product3 from '../assets/images/product3.png'
import product4 from '../assets/images/product4.png'
import { useState } from 'react'

function Products() {
    const bestProducts = [
        {
            img: product1,
            title: 'جاكيت غوتلاند أسود',
            type: '124.99$',
        },
        {
            img: product2,
            title: 'شورت رياضة أسود',
            type: '34.99$',
        },
        {
            img: product3,
            title: 'جاكيت مبطن',
            type: '97.99$',
        },
        {
            img: product4,
            title: 'سروال رياضة أزرق',
            type: '6.99$',
        },
    ]
    const [transform, setTransform] = useState({})
    const [slidePosition, setSlidePosition] = useState(0)

    const slideLeftHandler = () => {
        if(slidePosition === 0) {
            setSlidePosition(-270)
            setTransform({transform: 'translateX(-270px)'})
        }
        if(slidePosition === -270) {
            setSlidePosition(270)
            setTransform({transform: 'translateX(270px)'})
        }
        if(slidePosition === 270) {
            setSlidePosition(0)
            setTransform({transform: 'translateX(0)'})
        }
    }
    const slideRightHandler = () => {
        if(slidePosition === 0) {
            setSlidePosition(270)
            setTransform({transform: 'translateX(270px)'})
        }
        if(slidePosition === 270) {
            setSlidePosition(-270)
            setTransform({transform: 'translateX(-270px)'})
        }
        if(slidePosition === -270) {
            setSlidePosition(0)
            setTransform({transform: 'translateX(0)'})
        }
    }

    return (
        <section className={classes.products} id="products">
            <h2>أفضل المنتجات</h2>
            <div className={classes.products_container} >
                <div className={classes.cards_holder} style={transform}>
                    {
                    bestProducts.map((category, index) => {
                        return <Card key={index} category={category}/>
                    })
                    }
                </div>
            </div>
            <div className={classes.arrows}>
                <FiArrowRight onClick={slideLeftHandler}/>
                <FiArrowLeft onClick={slideRightHandler}/>
            </div>
        </section>
    )
}

export default Products