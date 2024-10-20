import React from 'react';
import styles from './Portfolio.module.scss';

interface PortfolioProps {
    items: string[];
}

const Portfolio: React.FC<PortfolioProps> = ({ items }) => {
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            {items.map((item, index) => (
                <div key={index} className={styles.octagon}>
                    <span>{item}</span>
                </div>
            ))}
        </div>
    );
};

export default Portfolio;
