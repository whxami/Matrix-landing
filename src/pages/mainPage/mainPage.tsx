import React, {useState} from 'react';
import matrixPerson from '@/assets/matrixPerson.png';
import console from '@/assets/console.png';
import binaryHumans from '@/assets/binaryHumans.png';
import head from '@/assets/head.png';
import styles from './mainPage.module.scss';
import CustomList from '@/components/customList/CustomList';
import {Item} from '@/components/customList/CustomList';
import Portfolio from "@/components/Portfolio/Portfolio";

function MainPage() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const menuItems: Item[] = [
        {title: 'UX Design', description: 'User experience design principles'},
        {title: 'React', description: 'Building user interfaces with React'},
        {title: 'Branding', description: 'Branding strategies and guidelines'},
        {title: 'Strategy', description: 'Business and marketing strategy'},
        {title: 'Target', description: 'Setting and achieving goals'},
        {title: 'Sales funnel', description: 'Sales process optimization'},
        {title: 'Competitor analysis', description: 'Analyzing competitors'},
        {title: 'Copywriting', description: 'Writing effective marketing copy'}
    ];

    const PortfolioItems = ['Design studio', 'Logistic company', 'Lighting and sound business']

    return (
        <div className={styles.mainContainer}>
            <div id='section1' className={styles.matrixContainer}>
                <img src={matrixPerson} alt='Matrix Person' height="85%"/>
                <div className={styles.text}>
                    <span>string name = "company name"</span>
                    <span>string job = "company job"</span>
                    <span>{"cout << result << endl;"}</span>
                    <span>{"cout << result << endl;"}</span>
                    <span>{"cout << result << endl;"}</span>
                </div>
                <div className={styles.consoleImage}>
                    <img src={console} alt='Console' height="100%"/>
                    <div className={styles.text} style={{top: '45px'}}>
                        <span>Contact with us</span>
                        <span>Address: </span>
                        <span>Gmail: </span>
                    </div>
                </div>
            </div>
            <div id='section2' className={styles.listContainer}>
                <p className={styles.headers} style={{marginLeft: '30px', marginBottom: '0px'}}>Work stages</p>
                <div style={{alignSelf: 'flex-end'}}>
                    <p className={styles.headers} style={{opacity: 0.6, marginBottom: '10px'}}>Studying your
                        business</p>
                    <p className={styles.headers} style={{opacity: 0.6, marginBottom: '0', fontSize: '20px'}}>The
                        outcome of this will be a market positioning strategy,</p>
                    <p className={styles.headers} style={{opacity: 0.6, fontSize: '20px'}}>we will understand our
                        objectives and constraints.</p>
                </div>
                <CustomList items={menuItems} setActiveIndex={setActiveIndex} activeIndex={activeIndex}/>
            </div>
            <div id='section3' style={{alignSelf: 'flex-start', marginLeft: '-130px', marginBottom: '20px'}}>
                <p style={{fontSize: "25px", color: "white"}}>SERVICES</p>
            </div>

            <div className={styles.binaryHumansImage}>
                <div className={styles.servicesTextContainer}>
                    <div className={styles.servicesText}>
                        <p className={styles.pHover} style={{textAlign: 'left'}}>Website development</p>
                        <p className={styles.pHover} style={{textAlign: 'right'}}>Sales funnel creation</p>
                        <p className={styles.pHover} style={{textAlign: 'left'}}>Site maintenance</p>
                        <p className={styles.pHover} style={{textAlign: 'right', paddingRight: '70px'}}>Marketing</p>
                    </div>
                </div>
                <div style={{height: '100%', width: '100%', display: 'flex', position: 'absolute'}}>
                    <img src={binaryHumans} alt='Binary Humans' height="100%" width="45%"
                         style={{opacity: '0.8'}}/>
                </div>
            </div>
            <div id='section4'>
                <p className={styles.headers} style={{marginLeft: '-130px'}}>Our Cases</p>
                <Portfolio items={PortfolioItems}/>
            </div>
            <div className={styles.headContainer}>
                <p className={styles.whyUsFont}>Why us?</p>
                <div style={{height: '100%', position: 'absolute', top: '10'}}>
                    <img src={head} alt='Head Image' height='100%' style={{opacity: '0.8'}}/>

                </div>
            </div>
        </div>
    );
}

export default MainPage;
