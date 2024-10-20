import React, {useRef} from 'react';
import styles from './CustomListItem.module.scss';

interface ListItemProps {
    title: string;
    description: string;
    index: number;
    activeIndex: number | null;
    setActiveIndex: (index: number | null) => void;
}

const CustomListItem: React.FC<ListItemProps> = ({title, description, index, activeIndex, setActiveIndex}) => {
    const isActive = activeIndex === index;
    const contentRef = useRef<HTMLDivElement>(null);

    const toggleItem = () => {
        if (isActive) {
            setActiveIndex(null);
        } else {
            setActiveIndex(index);
        }
    };

    return (
        <div className={styles.menuItem}>
            <div className={styles.menuHeader} onClick={toggleItem}>
                <span className={isActive ? styles.activeTitle : ''}>
                    --- {title} ---
                </span>
                <span className={`${styles.arrow} ${isActive ? styles.open : ''}`}>
                    {isActive ? '▼' : '►'}
                </span>
            </div>
            <div
                ref={contentRef}
                style={{
                    maxHeight: isActive ? `${contentRef.current?.scrollHeight}px` : '0px',
                    overflow: 'hidden',
                    transition: 'max-height 0.3s ease',
                }}
                className={`${styles.menuContent} ${isActive ? 'open' : ''}`}
            >
                <p style={{padding: '10px'}}>{description}</p>
            </div>
        </div>
    );
};

export default CustomListItem;
