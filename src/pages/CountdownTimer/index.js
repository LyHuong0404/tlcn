import React, { useTransition } from 'react';
import Countdown from 'react-countdown';

function CountdownTimer() {
    const { t } = useTransition();
    const renderer = ({ seconds, completed }) => {
        if (completed) {
            return <span style={{ fontSize: '14px', color: '#ed2a2a' }}>{t('CODE has expired!')}</span>;
        } else {
            return <strong style={{ fontSize: '14px' }}>{seconds}s</strong>;
        }
    };

    const futureDate = new Date().getTime() + 60000;

    return (
        <div style={{textAlign: 'center'}}>
            <Countdown date={futureDate} renderer={renderer} />
        </div>
    );
}

export default CountdownTimer;
