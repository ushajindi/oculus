import React from 'react';
import './Accessories.css'
import med1 from "../../images/Acces1.png"
import med2 from "../../images/Acces2.png"
import med3 from "../../images/Acces3.png"
import med4 from "../../images/Acces4.png"

const Accessories = () => {
    return (
        <div className="accessories">
            <div className="container">
                <h2 className="accessories__title section-title">Accessories</h2>
                <p className="accessories__text">Personalize every experience</p>
                <div className="accessories__items">
                    <div className="accessories__item">
                        <img src={med1} alt="" className="accessories__item__img"/>
                        <h3 className="accessories__item__title">Meta Quest 2 Carrying Case</h3>
                        <p className="accessories__item__text">Protect your system–at home or away.</p>
                        <p className="accessories__item__price">$59.99 RUB</p>
                        <button className="accessories__item__btn">BUY NOW</button>
                    </div>
                    <div className="accessories__item">
                        <img src={med2} alt="" className="accessories__item__img"/>
                        <h3 className="accessories__item__title">Link Cable</h3>
                        <p className="accessories__item__text">Harness the power of your PC with this premium
                            fiber-optic cable.</p>
                        <p className="accessories__item__price">$59.99 RUB</p>
                        <button className="accessories__item__btn">BUY NOW</button>
                    </div>
                    <div className="accessories__item">
                        <img src={med3} alt="" className="accessories__item__img"/>
                        <h3 className="accessories__item__title">Meta Quest 2 Active Pack</h3>
                        <p className="accessories__item__text">A wipeable facial interface, wrist straps, and knuckle
                            straps.</p>
                        <p className="accessories__item__price">$99.99 RUB</p>
                        <button className="accessories__item__btn">BUY NOW</button>
                    </div>
                    <div className="accessories__item">
                        <img src={med4} alt="" className="accessories__item__img"/>
                        <h3 className="accessories__item__title">Meta Quest Gift Cards</h3>
                        <p className="accessories__item__text">Redeemable on 350+ games and apps.</p>
                        <p className="accessories__item__price">$9.99 RUB</p>
                        <button className="accessories__item__btn">BUY NOW</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Accessories;