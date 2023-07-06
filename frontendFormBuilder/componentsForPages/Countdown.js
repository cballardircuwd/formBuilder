import React, { useState, useEffect } from 'react';
import { Text, StyleSheet } from 'react-native';

const Countdown = ({ trashedDate }) => {
    const calculateRemainingTime = (trashedDate) => {
        const trashDate = new Date(trashedDate);
        const expirationDate = new Date(trashDate.getTime() + (21 * 24 * 60 * 60 * 1000));
        const currentDate = new Date();
        const diff = expirationDate - currentDate;
    
        const totalSeconds = Math.floor(diff / 1000);
        const totalMinutes = Math.floor(totalSeconds / 60);
        const totalHours = Math.floor(totalMinutes / 60);
        const days = Math.floor(totalHours / 24);
    
        const hours = totalHours % 24;
        const minutes = totalMinutes % 60;
        const seconds = totalSeconds % 60;
    
        if (days > 7) {
            return {
                timeString: days > 1 ? `${days} days left` : `${days} day left`,
                style: styles.normal
            };
        } else if (totalHours > 48) {
            return {
                timeString: `${totalHours} hours left`,
                style: styles.warning
            };
        } else if (totalHours >= 1) {
            return {
                timeString: `${totalHours} hours left`,
                style: styles.warning
            };
        } else if (totalMinutes >= 5) {
            return {
                timeString: `${totalMinutes} minutes left`,
                style: styles.critical
            };
        } else if (totalMinutes > 0 || seconds > 0) {
            return {
                timeString: `${minutes} minutes ${seconds} seconds left`,
                style: styles.critical
            };
        }
        return {
            timeString: 'Expired',
            style: styles.expired
        };
    };

    const [remainingTime, setRemainingTime] = useState(calculateRemainingTime(trashedDate));

    useEffect(() => {
        const timer = setInterval(() => {
            setRemainingTime(calculateRemainingTime(trashedDate));
        }, 1000);

        return () => clearInterval(timer);
    }, [trashedDate]);

    return (
        <Text style={[styles.countdownText, remainingTime.style]}>
            {remainingTime.timeString}
        </Text>
    );
};

export default Countdown;

const styles = StyleSheet.create({

    countdownText: {
        fontSize: 13,
        fontWeight: '400',
        color: '#585858',
        alignSelf: 'center',
        flexDirection: 'row',
        whiteSpace: 'nowrap',
        fontStyle: 'italic',
    },

    normal: {
        fontWeight: '400',
        color: '#585858',
    },

    warning: {
        fontWeight: '400',
        color: '#b31616',
    },

    critical: {
        fontWeight: '800',
        color: '#b31616',
        textDecorationLine: 'underline',
    },

    expired: {
        fontStyle: 'normal',
        fontSize: 15,
        fontWeight: '800',
        color: '#b31616',
        textDecorationLine: 'underline',
    },

});
