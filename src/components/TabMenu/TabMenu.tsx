import React from 'react';
import styles from './TabMenu.module.scss';

const menuItems = [
    { title: 'Work stages', number: '/02/', link: '#section1' },
    { title: 'Services', number: '/03/', link: '#section2' },
    { title: 'Contacts', number: '/04/', link: '#section3' },
    { title: 'Our cases', number: '/05/', link: '#section4' },
    { title: 'Leave your mail', number: '/06/', link: '#section5' }
];

const TabMenu: React.FC = () => {
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const targetId = e.currentTarget.getAttribute('href')!;
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className={styles.menuContainer}>
            <div className={styles.menuHeader}><span>/Menu/</span></div>
            <ul className={styles.menuList}>
                {menuItems.map((item, index) => (
                    <li key={index} className={styles.menuItem}>
                        <a href={item.link} onClick={handleClick}>
                            {item.title} <span>{item.number}</span>
                        </a>
                    </li>
                ))}
            </ul>
            <div className={styles.contactInfo}>
                <p>ТЕЛЕФОН: +7(234)57-89-10</p>
                <p>TG: @dexzyy</p>
            </div>
        </div>
    );
};

export default TabMenu;
