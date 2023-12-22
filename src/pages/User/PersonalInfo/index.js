import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { getProfile } from '~/actions/userActions';

function PersonalInfo() {
    const { t } = useTranslation();
    const [user, setUser] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await getProfile();
                setUser(result);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="htlfndr-user-panel col-sm-8 col-md-9 htlfndr-info-page">
            <div id="htlfndr-user-tab-1" className="htlfndr-description-table">
                <h2>{t('Personal Infor')}</h2>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '50px' }}>
                    <table className="htlfndr-personal-info-table">
                        <tbody>
                            <tr>
                                <th className="htlfndr-scope-row">{t('Username')}:</th>
                                <td>{user.username}</td>
                            </tr>
                            <tr>
                                <th className="htlfndr-scope-row">Fullname:</th>
                                <td>{user.fullname}</td>
                            </tr>
                            <tr>
                                <th className="htlfndr-scope-row">E-mail:</th>
                                <td>{user.email}</td>
                            </tr>
                            <tr>
                                <th className="htlfndr-scope-row">{t('Phone number')}:</th>
                                <td>{user.phone}</td>
                            </tr>
                            <tr>
                                <th className="htlfndr-scope-row">{t('country')}:</th>
                                <td>Việt Nam</td>
                            </tr>
                            <tr>
                                <th className="htlfndr-scope-row">{t('role')}:</th>
                                <td>{user && user.roles && user.roles[0]}</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="col-md-4 col-sm-6" style={{ marginTop: '20px' }}>
                        <div className="htlfndr-counter-block">
                            <div className="htlfndr-icon-holder">
                                <i className="fa fa-building-o"></i>
                            </div>
                            <dl className="htlfndr-counter-numbers">
                                <dt className="htlfndr-count">{user.balance}</dt>
                                <dd>{t('Balance')}</dd>
                            </dl>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PersonalInfo;
