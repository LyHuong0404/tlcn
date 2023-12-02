import { useLocation } from 'react-router-dom';

function Steps() {
    const location = useLocation();
    const step = location?.state?.step;
    return (
        <div className="htlfndr-steps">
            <ul className="htlfndr-progress">
                <li className={step === 1 ? 'htlfndr-active-step' : ''}>
                    <span className="htlfndr-step-number">1</span>
                    <span className="htlfndr-step-description">results</span>
                </li>
                <li className={step === 2 ? 'htlfndr-active-step' : ''}>
                    <span className="htlfndr-step-number">2</span>
                    <span className="htlfndr-step-description">room</span>
                </li>
                <li className={step === 3 ? 'htlfndr-active-step' : ''}>
                    <span className="htlfndr-step-number">3</span>
                    <span className="htlfndr-step-description">book</span>
                </li>
            </ul>
        </div>
    );
}

export default Steps;
