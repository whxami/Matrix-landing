import React, { useState } from 'react';
import classes from './Header.module.scss';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };

    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({
                behavior: 'smooth', // Плавный скролл
                block: 'start', // Скроллим к началу секции
            });
        }
    };

    return (
        <header className={classes.headerContainer}>
            <div className={classes.headerMain}>
                <div className={classes.headerPointers}>
                    <div
                        style={{ display: 'flex', gap: '15px' }}
                        className={classes.pointer}
                        onClick={() => scrollToSection('main')}
                    >
                        <p style={{ color: "#00FF00" }}>{">"}</p>Главная
                    </div>
                    <div
                        className={classes.pointer}
                        onClick={() => scrollToSection('steps')}
                    >
                        Этапы работы
                    </div>
                    <div
                        className={classes.pointer}
                        onClick={() => scrollToSection('contacts')}
                    >
                        Контакты
                    </div>
                </div>
                <div className={classes.headerContacts}>
                    <div className={classes.phone}>+375 29 109 20 99</div>
                    <button onClick={() => scrollToSection('message')} className={classes.requestButton}>Оставить заявку</button>
                </div>
                <div className={classes.menuToggle} onClick={toggleMenu}>
                    ☰
                </div>
            </div>

            {isMenuOpen && (
                <div className={classes.menu}>
                    <div
                        className={classes.pointer}
                        onClick={() => scrollToSection('main')}
                    >
                        Главная
                    </div>
                    <div
                        className={classes.pointer}
                        onClick={() => scrollToSection('steps')}
                    >
                        Этапы работы
                    </div>
                    <div
                        className={classes.pointer}
                        onClick={() => scrollToSection('contacts')}
                    >
                        Контакты
                    </div>
                    <div className={classes.phone}>+375 29 109 20 99</div>
                </div>
            )}
        </header>
    );
};

export default Header;
