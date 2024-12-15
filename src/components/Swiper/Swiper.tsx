import React, { useState } from 'react';
import classes from './Swiper.module.scss';
import website from "@/assets/website.png";

const examples = [
    {
        title: 'Производство изделий из кожи 1',
        image: website,
        link: '#',
    },
    {
        title: 'Производство изделий из кожи 2',
        image: website,
        link: '#',
    },
    {
        title: 'Производство изделий из кожи 3',
        image: website,
        link: '#',
    },
    {
        title: 'Производство изделий из кожи 4',
        image: website,
        link: '#',
    },
    {
        title: 'Производство изделий из кожи 5',
        image: website,
        link: '#',
    },
    {
        title: 'Производство изделий из кожи 6',
        image: website,
        link: '#',
    },
];

const Slider: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const calculateIndex = (index: number, offset: number): number => {
        const total = examples.length;
        return (index + offset + total) % total;
    };

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) => calculateIndex(prevIndex, -1));
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) => calculateIndex(prevIndex, 1));
    };

    return (
        <>
            <div className={classes.slider}>
                <div className={classes.photoContainer}>
                    {[...Array(5)].map((_, i) => {
                        const slideIndex = calculateIndex(currentIndex, i - 2);
                        const slide = examples[slideIndex];
                        const positionClass =
                            i === 2
                                ? classes.mainPhoto
                                : i < 2
                                    ? classes.leftPhoto
                                    : classes.rightPhoto;

                        return (
                            <div
                                key={slideIndex}
                                className={`${classes.photo} ${positionClass}`}
                            >
                                <div className={classes.picContainer}>
                                <img
                                    className={i === 0 || i === 4 ? classes.blur : ''}
                                    src={slide.image}
                                    alt={slide.title}
                                    height="100%"
                                    width="100%"
                                />
                                </div>
                                {i !== 0 && i !== 4 && (
                                    <>
                                        <div className={classes.text}>{slide.title}</div>
                                        <button
                                            className={i === 1 || i === 3 ? `${classes.btn}`: `${classes.btn} ${classes.activeBtn}`}
                                        >
                                            Ссылка на сайт
                                        </button>
                                    </>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className={classes.switchers}>
                <div className={classes.switcher} onClick={goToPrevious}>
                    {"<"}
                </div>
                <div className={classes.switcher} onClick={goToNext}>
                    {">"}
                </div>
            </div>
        </>
    );
};

export default Slider;
