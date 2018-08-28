import React, { Component } from 'react';
import '../footer/footer.css';

class Footer extends React.Component {
    render() {
        return (
            <div className="footer">
                <a className="footer__item footer__item--insta" href="https://www.instagram.com/ep_prod/ "></a>
                <a className="footer__item footer__item--fb" href="https://www.facebook.com/epproductionmoscow/ "></a>
                <a className="footer__item footer__item--vk" href="https://vk.com/ep_prod "></a>
            </div>
        );
    }
}

export default Footer;