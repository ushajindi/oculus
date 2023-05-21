import React, {useState} from 'react';
import s from "./Header.module.css"
import logo from "../../images/logo.svg"
import bag from "../../images/bag.svg"

const Header = () => {
    const [menuView,setMenuView]=useState(false)
    return (<header className={s.header}>
        <div className='container'>
            <nav className={s.nav}>
                <button
                    onClick={()=>setMenuView(!menuView)} className={`${s.menu__btn} ${menuView && s.menu__btn__active} `}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <ul  onFocus={(e)=>{setMenuView(false)}} className={`${s.menu} ${menuView && s.menu__active}`}>
                    <li className={s.menu__list}><a className={s.menu__link} href="#">SHOP</a></li>
                    <li className={s.menu__list}><a className={s.menu__link} href="#">GAMAES</a></li>
                    <li className={s.menu__list}><a className={s.menu__link} href="#">METAVERSE</a></li>
                </ul>
                <a className={s.logo} href="#">
                    <img src={logo} alt=""/>
                </a>
                <a className={`${s.basket} ${s.basket__on}`} href="#">
                    <img src={bag} alt=""/>
                    <span>1</span>
                </a>
            </nav>
        </div>
    </header>);
}

export default Header;
