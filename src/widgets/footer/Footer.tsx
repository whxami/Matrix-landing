import React from 'react';
import styles from './Footer.module.scss';

const Footer = () => {
    return (
        <div className={styles.footerContainer}>
            <div className={styles.footerContent}>
                <h2>ВЫ ГОТОВЫ НАЧАТЬ СОТРУДНИЧЕСТВО?</h2>
                <div className={styles.footerInputSection}>
                    <input
                        type="email"
                        className={styles.emailInput}
                        placeholder="ВАШ EMAIL"
                    />
                    <button className={styles.submitButton}>ДА, ПРИСТУПИМ</button>
                </div>
                <div className={styles.footerPrivacy}>
                    <input type="checkbox" className={styles.checkbox} />
                    <label htmlFor="checkbox">
                        Я согласен с <a href="/privacy-policy">политикой конфиденциальности</a>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Footer;
