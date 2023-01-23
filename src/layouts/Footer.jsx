import React from 'react'
import classes from '../assets/styles/Main.module.css'
import logo from '../assets/images/favicon.png'

import {FaFacebookF} from 'react-icons/fa'
import {BsInstagram, BsTwitter} from 'react-icons/bs'

function Footer() {
    return (
        <section className={classes.footer}>
            <div className={classes.footer_container}>
                <div className={classes.introduction}>
                    <div className={classes.logo_wrapper}>
                        <h3>Tسوق</h3>
                        <div><img src={logo} draggable="false" alt={'logo'}></img></div>
                    </div>
                    <p>
                    ملتزمون بإحضار أفضل <br/>الملابس من الماركات <br/>الشهيرة
                    </p>
                </div>
                <div className={classes.company}>
                    <h3>شركة</h3>
                    <ul>
                        <li>متجر</li>
                        <li>فئات</li>
                        <li>معلومات الإتصال</li>
                    </ul>
                </div>
                <div className={classes.info}>
                    <h3>مقالات</h3>
                    <ul>
                        <li>أحداث</li>
                        <li>أخبار شائعة</li>
                        <li>أخبار جديدة</li>
                    </ul>
                </div>
                <div className={classes.office}>
                    <h3>مكتب</h3>
                    <ul>
                        <li>9AM - 10PM <br/> الإثنين - السبت</li>
                    </ul>
                </div>
                <div className={classes.socials}>
                    <h3>تابعنا</h3>
                    <ul>
                        <li><FaFacebookF/></li>
                        <li><BsInstagram/></li>
                        <li><BsTwitter/></li>
                    </ul>
                </div>
            </div>
            <div className={classes.rights}>
                &#169; جميع الحقوق محفوظة
            </div>
        </section>
    )
}

export default Footer