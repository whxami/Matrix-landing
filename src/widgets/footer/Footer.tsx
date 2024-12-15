import React from 'react';
import classes from './Footer.module.scss';

const links = ['Ссылка 1', 'Ссылка 2', 'Ссылка 3', 'Ссылка 4'];
const socials = ['Соц. сеть 1', 'Соц. сеть 2', 'Соц. сеть 3', 'Соц. сеть 4', 'Соц. сеть 5'];

const Footer = () => {
    return (
        <footer className={classes.footerContainer}>
            <div id="contacts" className={classes.content}>
                <div className={classes.descContainer}>
                    <div className={classes.titleText}>Про нашу</div>
                    <div className={classes.titleText}>веб-студию</div>
                    <div className={classes.descriptionText}>
                        We are a full-service digital agency that helps businesses build a strong online presence
                        through website development, SEO, and digital marketing.
                    </div>
                </div>
                <div className={classes.linksAndSocialsContainer}>
                    <div className={classes.linksContainer}>
                        <div className={classes.subtitleText}>Быстрые ссылки</div>
                        {links.map((item, index) => (
                            <div key={index} className={classes.links}>{item}</div>
                        ))}
                    </div>
                    <div className={classes.linksContainer}>
                        <div className={classes.subtitleText}>Наши соц. сети</div>
                        {socials.map((item, index) => (
                            <div key={index} className={classes.links}>{item}</div>
                        ))}
                    </div>
                </div>
            </div>
            <div className={classes.credsContainer}>2022 — 2025, © УНП 693257297</div>
        </footer>
    );
};

export default Footer;
