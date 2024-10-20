import React, { useState } from 'react';
import axios from 'axios';
import styles from './Footer.module.scss';

const Footer = () => {
    const [email, setEmail] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (email) {
            setIsLoading(true);
            setIsError(false);
            setIsSuccess(false);

            try {
                await axios.post('http://localhost:3060/api/sendmail', { email });
                setIsSuccess(true);
                setEmail('');
            } catch (error) {
                setIsError(true);
                console.error('Failed to send email:', error);
            } finally {
                setIsLoading(false);
            }
        }
    };

    return (
        <div id='section5' className={styles.footerContainer}>
            <div className={styles.footerContent}>
                <h2>ARE YOU READY TO START COOPERATING?</h2>
                <form onSubmit={handleSubmit} className={styles.footerInputSection}>
                    <input
                        type="email"
                        className={styles.emailInput}
                        placeholder="Your mail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} // Обновляем состояние при вводе
                        required
                    />
                    <button className={styles.submitButton} disabled={isLoading}>
                        {isLoading ? 'Sending...' : 'Yes'}
                    </button>
                </form>
                {isError && <p style={{ color: 'red' }}>Failed to send email.</p>}
                {isSuccess && <p style={{ color: 'green' }}>Email sent successfully!</p>}
            </div>
        </div>
    );
};

export default Footer;
