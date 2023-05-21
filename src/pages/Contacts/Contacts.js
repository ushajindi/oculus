import React from 'react';
import "./Contacts.css"

const Contacts = () => {
    return (<div className="Contacts">
        <div className="container">
            <h2 className="contacts__title">Get news and updates</h2>
            <div className="contacts__inner">
                <div className="contacts__form">
                    <form action="" className="form">
                        <input className="form__input" placeholder="Email" type="text"/>
                        <button className="form__btn" type="submit">go</button>
                    </form>
                    <p className="contacts__text">By signing up you agree to receive updates and marketing messages
                        (e.g. email, social, etc.) from Meta about Meta’s existing and future products and services.
                        You may withdraw your consent and unsubscribe at any time by clicking the unsubscribe link
                        included in our messages.
                        Your subscription is subject to the Terms and Privacy Policy.</p>
                </div>
                <a href="mailto:ushajindi@gmail.com" className="contacts__email">ushajindi@gmail.com</a>
            </div>
        </div>
    </div>)
}

export default Contacts;