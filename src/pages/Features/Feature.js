import React, {useState} from 'react';
import s from './Features.module.css'
import img from '../../images/features.png'
import play from '../../images/Play.svg'

const Feature = () => {
    const [active,setActive]=useState(1)
    return (<div className={s.feature}>
        <div className='container'>
            <div className={s.feature__titles}>
                <h2 className={`${s.feature__title} section-title`}>PRODUCT FEATURES</h2>
                <p className={s.feature__text}>Easy to set up and safe to use</p>
            </div>
            <div className={s.tabs}>
                <div className={s.tabs__btn}>
                    <button onClick={
                        ()=>{setActive(1)}
                    } className={`${active===1 && s.tabs__btn__item__active} ${s.tabs__btn__item}`} data-button="content-1">01 Graphics</button>
                    <button onClick={
                                       ()=>{setActive(2)}
                                   } className={`${active===2 && s.tabs__btn__item__active} ${s.tabs__btn__item}`}>02 Controls</button>
                    <button onClick={
                                       ()=>{setActive(3)}
                                   } className={`${active===3 && s.tabs__btn__item__active} ${s.tabs__btn__item}`}>03 Processor</button>
                    <button onClick={
                        ()=>{setActive(4)}
                    } className={`${active===4 && s.tabs__btn__item__active} ${s.tabs__btn__item}`}>04 Set up your play area</button>
                    <button onClick={
                        ()=>{setActive(5)}
                    } className={`${active===5 && s.tabs__btn__item__active} ${s.tabs__btn__item}`}>05 Gardian activity</button>
                    <button onClick={
                        ()=>{setActive(6)}
                    } className={`${active===6 && s.tabs__btn__item__active} ${s.tabs__btn__item}`}>06 Headset casting</button>
                </div>
                <div className={s.tabs__content}>
                    <div className={`${s.tabs__content__item} ${active===1 &&s.tabs__content__item__active}`} id="content-1">
                        <img className={s.tabs__content__img} src={img} alt=""/>
                        <div className={s.tabs__content__box}>
                            <h3>Graphics</h3>
                            <p>With 1832 x 1920 pixels per eye, everything from multiplayer games and productivity apps
                                to 360 0 videos look beyond incredible</p>
                        </div>
                        <div className={s.video}>
                            <button className={s.video__btn}>
                                <img src={play} alt=""/>
                            </button>
                            <span>Watch the video</span>
                        </div>
                    </div>
                    <div className={`${s.tabs__content__item} ${active===2 &&s.tabs__content__item__active}`} id="content-2">
                        <img className={s.tabs__content__img} src={img} alt=""/>
                        <div className={s.tabs__content__box}>
                            <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus pariatur</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
                        </div>
                        <div className={s.video}>
                            <button className={s.video__btn}>
                                <img src={play} alt=""/>
                            </button>
                            <span>Watch the video</span>
                        </div>
                    </div>
                    <div className={`${s.tabs__content__item} ${active===3 &&s.tabs__content__item__active}`} id="content-3">
                        <img className={s.tabs__content__img} src={img} alt=""/>
                        <div className={s.tabs__content__box}>
                            <h3>Graphics</h3>
                            <p>With 1832 x 1920 pixels per eye, everything from multiplayer games and productivity apps
                                to 360 0 videos look beyond incredible</p>
                        </div>
                        <div className={s.video}>
                            <button className={s.video__btn}>
                                <img src={play} alt=""/>
                            </button>
                            <span>Watch the video</span>
                        </div>
                    </div>
                    <div className={`${s.tabs__content__item} ${active===4 &&s.tabs__content__item__active}`} id="content-4">
                        <img className={s.tabs__content__img} src={img} alt=""/>
                        <div className={s.tabs__content__box}>
                            <h3>Graphics</h3>
                            <p>With 1832 x 1920 pixels per eye, everything from multiplayer games and productivity apps
                                to 360 0 videos look beyond incredible</p>
                        </div>
                        <div className={s.video}>
                            <button className={s.video__btn}>
                                <img src={play} alt=""/>
                            </button>
                            <span>Watch the video</span>
                        </div>
                    </div>
                    <div className={`${s.tabs__content__item} ${active===5 &&s.tabs__content__item__active}`} id="content-5">
                        <img className={s.tabs__content__img} src={img} alt=""/>
                        <div className={s.tabs__content__box}>
                            <h3>Graphics</h3>
                            <p>With 1832 x 1920 pixels per eye, everything from multiplayer games and productivity apps
                                to 360 0 videos look beyond incredible</p>
                        </div>
                        <div className={s.video}>
                            <button className={s.video__btn}>
                                <img src={play} alt=""/>
                            </button>
                            <span>Watch the video</span>
                        </div>
                    </div>
                    <div className={`${s.tabs__content__item} ${active===6 &&s.tabs__content__item__active}`} id="content-6">
                        <img className={s.tabs__content__img} src={img} alt=""/>
                        <div className={s.tabs__content__box}>
                            <h3>Graphics</h3>
                            <p>With 1832 x 1920 pixels per eye, everything from multiplayer games and productivity apps
                                to 360 0 videos look beyond incredible</p>
                        </div>
                        <div className={s.video}>
                            <button className={s.video__btn}>
                                <img src={play} alt=""/>
                            </button>
                            <span>Watch the video</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>);
}

export default Feature;
