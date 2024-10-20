import React, { useState } from 'react';
import matrixPerson from '@/assets/matrixPerson.png';
import console from '@/assets/console.png';
import binaryHumans from '@/assets/binaryHumans.png';
import styles from './mainPage.module.scss';
import CustomList from '@/components/customList/CustomList';
import { Item } from '@/components/customList/CustomList';

function MainPage() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const menuItems: Item[] = [
        { title: 'UX Design', description: 'User experience design principles' },
        { title: 'React', description: 'Building user interfaces with React' },
        { title: 'Branding', description: 'Branding strategies and guidelines' },
        { title: 'Strategy', description: 'Business and marketing strategy' },
        { title: 'Target', description: 'Setting and achieving goals' },
        { title: 'Sales funnel', description: 'Sales process optimization' },
        { title: 'Competitor analysis', description: 'Analyzing competitors' },
        { title: 'Copywriting', description: 'Writing effective marketing copy' }
    ];

    return (
        <div>
            <div className={styles.matrixContainer}>
                <img src={matrixPerson} alt='Matrix Person' height="85%" />
                <div className={styles.text}>
                    <span>string name = "company name"</span>
                    <span>string job = "company job"</span>
                    <span>{"cout << result << endl;"}</span>
                    <span>{"cout << result << endl;"}</span>
                    <span>{"cout << result << endl;"}</span>
                </div>
                <div className={styles.consoleImage}>
                    <img src={console} alt='Console' height="100%" />
                    <div className={styles.text} style={{ top: '45px' }}>
                        <span>some text...</span>
                    </div>
                </div>
            </div>
            <div>
            <CustomList items={menuItems} setActiveIndex={setActiveIndex} activeIndex={activeIndex} />
            </div>
            <div>
                <img src={binaryHumans} alt='Binary Humans' height="100%" />
            </div>
        </div>
    );
}

export default MainPage;
