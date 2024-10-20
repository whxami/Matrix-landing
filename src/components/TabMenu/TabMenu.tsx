import React from 'react';
import styles from './TabMenu.module.scss'

const TabMenu = () => {
    return (
        <div className={styles.menuContainer}>
            <div className={styles.menuHeader}><span>-------   МЕНЮ   -------</span></div>
            <ul className={styles.menuList}>
                <li className={`${styles.menuItem}`}>ГЛАВНАЯ <span>/01/</span></li>
                <li className={styles.menuItem}>УСЛУГИ <span>/02/</span></li>
                <li className={styles.menuItem}>ОБО МНЕ <span>/03/</span></li>
                <li className={styles.menuItem}>КОНТАКТЫ <span>/04/</span></li>
            </ul>
            <div className={styles.contactInfo}>
                <p>ТЕЛЕФОН: +7(234)57-89-10</p>
                <p>TG: @dexzyy</p>
            </div>
        </div>
    );
};

export default TabMenu;