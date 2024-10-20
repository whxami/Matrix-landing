import React, { useEffect, useState } from 'react';
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import TabMenu from "@/components/TabMenu/TabMenu";
import Footer from "@/widgets/footer/Footer";
import styles from './MainLayout.module.scss';

function MainLayout() {
    const [loading, setLoading] = useState(true);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (location.pathname === '/') {
            navigate('/main', { replace: true });
        } else {
            setLoading(false);
        }
    }, [location.pathname, navigate]);

    if (loading) {
        return (
            <div className={styles.spinnerContainer}>
                <div className={styles.spinner}>Loading...</div>
            </div>
        );
    }

    return (
        <div className={styles.bodyContainer}>
            <div className={styles.mainContainer}>
                 <TabMenu />
                <div className={styles.outletContainer}><Outlet /></div>
            </div>
            <Footer />
        </div>
    );
}

export default MainLayout;
