import React from 'react';
import styles from './Footer.module.scss';

const Footer = () => {
    return (
        <div id='section5' className={styles.footerContainer}>
            <div className={styles.footerContent}>
                <h2>ARE YOU READY TO START COOPERATING?</h2>
                <div className={styles.footerInputSection}>
                    <input
                        type="email"
                        className={styles.emailInput}
                        placeholder="Your mail"
                    />
                    <button className={styles.submitButton}>Yes</button>
                </div>
            </div>
        </div>
    );
};

export default Footer;
