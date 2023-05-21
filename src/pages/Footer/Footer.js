import React from "react";
import "./Footer.css"
import logo from "../../images/logo.svg";
import youtube from "../../images/youtube.svg"
import fb from "../../images/fb.svg"
import ins from "../../images/ins.svg"
import s from "../Header/Header.module.css"

const Footer = () => {
    return (<div className={`${s.footer} footer`}>
            <div className='container'>
                <nav className={`${s.nav}`}>
                    <ul className={`${s.menu} ${s.footer__menu}`}>
                        <li className={s.menu__list}><a className={s.menu__link} href="#">SHOP</a></li>
                        <li className={s.menu__list}><a className={s.menu__link} href="#">GAMES</a></li>
                        <li className={s.menu__list}><a className={s.menu__link} href="#">METAVERSE</a></li>
                        <li className={s.menu__list}><a className={s.menu__link} href="#">CONTACT US</a></li>
                    </ul>
                    <a className={s.logo} href="#">
                        <img src={logo} alt=""/>
                    </a>
                    <ul className="social">
                        <li className="social__item">
                            <a href="" className="social__link">
                                <img src={youtube} alt=""/>
                            </a>
                        </li>
                        <li className="social__item">
                            <a href="" className="social__link">
                                <img src={fb} alt=""/>
                            </a>
                        </li>
                        <li className="social__item">
                            <a href="" className="social__link">
                                <img src={ins} alt=""/>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>

        </div>)
}
export default Footer