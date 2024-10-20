import React from 'react';
import TabMenu from "@/components/TabMenu/TabMenu";
import {Outlet} from "react-router-dom";
import Footer from "@/widgets/footer/Footer";
import styles from './MainLayout.module.scss'

function MainLayout() {
    return (
        <div className={styles.bodyContainer}>
            <div className={styles.mainContainer}>
                <TabMenu/>
                <div className={styles.outletContainer}><Outlet/></div>
            </div>
            <Footer/>
        </div>
    );
}

export default MainLayout;