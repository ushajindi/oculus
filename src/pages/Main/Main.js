import React from 'react';
import s from "./Main.module.css"
import "./Main.module.css"

const Main = () => {
    return (
        <div className={s.main}>
            <section className={s.top}>
                <div className='container'>
                    <h1 className={s.title}>Meta Quest 2</h1>
                    <p className={s.subtitle}>Get on Elite Strap free</p>
                    <p className={s.top__text}>For a limited time only, save $59.99 USD. Offer ends 1/19/23</p>
                    <button className="buy-btn">
                        <span className='buy-btn__text'>BUY NOW</span>
                        <span className='buy-btn__price'>399,99 RUB</span>
                    </button>
                    <p className={s.buy__text}>Meta Quest 2 is for ages 13+</p>
                </div>
            </section>
        
        </div>
    );
}

export default Main;
