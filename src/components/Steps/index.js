import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

function Steps() {
    const { t } = useTranslation();
    const location = useLocation();
    const step = location?.state?.step;
    return (
        <div className="htlfndr-steps">
            <ul className="htlfndr-progress">
                <li className={step === 1 ? 'htlfndr-active-step' : ''}>
                    <span className="htlfndr-step-number">1</span>
                    <span className="htlfndr-step-description">{t('results')}</span>
                </li>
                <li className={step === 2 ? 'htlfndr-active-step' : ''}>
                    <span className="htlfndr-step-number">2</span>
                    <span className="htlfndr-step-description">{t('room')}</span>
                </li>
                <li className={step === 3 ? 'htlfndr-active-step' : ''}>
                    <span className="htlfndr-step-number">3</span>
                    <span className="htlfndr-step-description">{t('appointment')}</span>
                </li>
            </ul>
        </div>
    );
}

export default Steps;
