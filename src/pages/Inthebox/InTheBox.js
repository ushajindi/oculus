import React, {Component} from 'react';
import "./inthebox.css"
import media1 from "../../images/i.png"
import media2 from "../../images/i2.png"
import media3 from "../../images/i3.png"
import media4 from "../../images/i4.png"

class InTheBox extends Component {
    render() {
        return (
            <div className="equipment">
                <div className="container">
                    <h2 className="equipment__title">IN THE BOX</h2>
                    <div className="equipment__box">
                        <div className="equipment__box__item equipment__box__item__one">
                            <img src={media1} alt="" className="equipment__box__img"/>
                            <p className="equipment__box__text">VR Headset</p>
                        </div>
                        <div className="equipment__box__item">
                            <img src={media2} alt="" className="equipment__box__img"/>
                            <p className="equipment__box__text">Two Touch Controllers & AA Batteries</p>
                        </div>
                        <div className="equipment__box__item">
                            <p className="equipment__box__title">What's included</p>
                        </div>
                        <div className="equipment__box__item">
                            <img src={media3} alt="" className="equipment__box__img"/>
                            <p className="equipment__box__text">Charging Cable & Power Adapter</p>
                        </div>
                        <div className="equipment__box__item">
                            <img src={media4} alt="" className="equipment__box__img"/>
                            <p className="equipment__box__text">Glasses Spacer</p>
                        </div>
                    </div>
                    <div className="promo">
                        <button className="promo__btn">GO</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default InTheBox;