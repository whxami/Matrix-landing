import React from 'react';
import classes from './workStages.module.scss'

const stages = [
    { title: 'Согласование ТЗ', time: '1 неделя', description: 'Обсуждаем требования к проекту и возможности их реализации' },
    { title: 'Договор', time: '2 неделя', description: 'Подготавливаем договор, в котором определяются условия сотрудничества' },
    { title: 'Дизайн', time: '3 неделя', description: 'Дизайнер индивидуально разрабатывает макет и стиль сайта' },
    { title: 'Вёрстка', time: '1 месяц', description: 'Адаптируем Ваш сайт под любой размер экрана, устройство и браузера' },
    { title: 'Программирование', time: '5 неделя', description: 'Самый важный этап, реализация функций, на лучшем фреймворке для продвижения' },
    { title: 'Контент', time: '6 неделя', description: 'Наполнение уникальным текстом и медиа контентом' },
    { title: 'Запуск', time: '7 неделя', description: 'Сайт выгружается на хостинг и подключается к доменному имени' },
    { title: 'Гарантия', time: '2 месяца', description: 'Мы предоставляем гарантийное обслуживание Вашего сайта на протяжении 3 месяцев' },
]
const buttons = ['UI|UX Design', 'Next.js', 'Брендинг', 'Домен хостинг', 'SSL сертификат', 'Современное API', 'CEO', 'Продвижение']

const WorkStages = () => {
    return (
        <div id="steps" className={classes.container}>
            <h1 className={classes.header}>Этапы работ</h1>
            <div className={classes.buttons}>
                {buttons.map((buttonText, index) => (
                    <button key={index} className={classes.button}>
                        {buttonText}
                    </button>
                ))}
            </div>
            <div className={classes.grid}>
                {stages.map((card, index) => (
                    <div key={index} className={classes.card}>
                        <p className={classes.strong}>{card.time}</p>
                        <h3 className={classes.title}>{card.title}</h3>
                        <p className={classes.text}>{card.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WorkStages;