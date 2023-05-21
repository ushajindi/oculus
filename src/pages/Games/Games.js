import React from 'react';
import "./Games.css"
import game1 from "../../images/game-1.png"
import game2 from "../../images/game2.png"
import game3 from "../../images/game3.png"
import oculus from "../../images/oculus.png"
import s from "../Main/Main.module.css";

const Games = () => {
    return (
        <div className="games">
            <div className="container">
                <h2 className="game__title">GAMES</h2>
                <div className="games__inner">
                    <div className="game__decsr">
                        <p className='game__decsr__title'>
                            It’s all fun and games
                        </p>
                        <p className="game__decsr__text">Discover new adventures, master epic challenges or revisit
                            classic moments in your favourite games and experiences</p>
                        <a href="#" className="game__link">SEE ALL GAMES</a>
                    </div>
                    <div className="game__item">
                        <img className="game__item__img" src={game1} alt=""/>
                        <h3 className="game__item__title">Blade & Sorcery: Nomad</h3>
                        <p className="game__item__text">Step into a medieval fantasy sandbox that uses phisics to serve
                            up some of the most realistic combat in VR</p>
                        <a href="#" className="game__item__link">SEE MORE</a>
                    </div>
                    <div className="game__item">
                        <img className="game__item__img" src={game2} alt=""/>
                        <h3 className="game__item__title">Population :One</h3>
                        <p className="game__item__text">Climb anything. Fight everywhere. Experience battle royale only possible in VR</p>
                        <a href="#" className="game__item__link">SEE MORE</a>
                    </div>
                    <div className="game__item">
                        <img className="game__item__img" src={game3} alt=""/>
                        <h3 className="game__item__title">Supernatural</h3>
                        <p className="game__item__text">Box, Flow, Meditate and Stretch with real coaches in stunning destinations from around the world. Enjoy new workouts every day.</p>
                        <a href="#" className="game__item__link">SEE MORE</a>
                    </div>
                </div>
            </div>
            <div className="buy">
                <p className="buy__bg">OCULUS</p>
                <img src={oculus} alt=""/>
                <button className="buy-btn">
                    <span className='buy-btn__text'>BUY NOW</span>
                    <span className='buy-btn__price'>399,99 RUB</span>
                </button>
                <p className={s.buy__text}>Meta Quest 2 is for ages 13+</p>
            </div>

        </div>
    );
};

export default Games;