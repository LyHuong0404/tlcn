import DatePicker from 'react-datepicker';
import { useState } from 'react';
import styles from './SearchHeader.module.scss';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import './SearchHeader.module.scss';
function SearchHeader() {
    const [checkIn, setCheckIn] = useState(null);
    const [checkOut, setCheckOut] = useState(null);
    const [people, setPeople] = useState(1);

    const handleDecre = () => {
        if (people > 1) {
            setPeople(people - 1);
        }
    };

    const handleIncre = () => {
        setPeople(people + 1);
    };

    const handleChangePeople = (event) => {
        setPeople(event.target.value);
    };
    return (
        <aside className="htlfndr-sidebar htlfndr-sidebar-in-top htlfndr-full-form" role="search">
            <div className="widget htlfndr-form-light">
                <form name="search-hotel" id="search-hotel" className="htlfndr-search-form">
                    <div id="htlfndr-input-1" className="htlfndr-input-wrapper">
                        <input
                            type="text"
                            name="htlfndr-city"
                            id="htlfndr-city"
                            className="search-hotel-input"
                            placeholder="Enter city, region or district"
                        />
                    </div>
                    <div id="htlfndr-input-date-in" className="htlfndr-input-wrapper">
                        <DatePicker
                            selected={checkIn}
                            onChange={(date) => setCheckIn(date)}
                            id="htlfndr-date-in"
                            name="htlfndr-date-in"
                            className="search-hotel-input"
                            placeholderText="Check in"
                        />
                        <button type="button" className="htlfndr-clear-datepicker"></button>
                    </div>

                    <div id="htlfndr-input-date-out" className="htlfndr-input-wrapper">
                        <DatePicker
                            selected={checkOut}
                            onChange={(date) => setCheckOut(date)}
                            name="htlfndr-date-out"
                            id="htlfndr-date-out"
                            className="search-hotel-input"
                            placeholderText="Check out"
                        />
                        <button type="button" className="htlfndr-clear-datepicker"></button>
                    </div>
                    <div id="htlfndr-input-4" className="htlfndr-input-wrapper">
                        <Select
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="true"
                            role="button"
                            labelId="demo-simple-select-sort"
                            id="demo-simple-select"
                            value={people}
                            style={{ border: 'none' }}
                            onChange={handleChangePeople}
                            className="search-hotel-input"
                        >
                            <MenuItem value="">
                                <div>
                                    <p style={{ fontSize: '1.4rem', fontWeight: 'bold', marginBottom: '0' }}>People</p>
                                    <p style={{ fontSize: '1.4rem', margin: '0' }}>Number person in room</p>
                                </div>
                            </MenuItem>
                            <div style={{ display: 'flex', alignContent: 'center', justifyContent: 'center' }}>
                                <p className={styles.button_numeric} onClick={handleDecre}>
                                    -
                                </p>
                                <span style={{ fontSize: '1.6rem', marginTop: '8px' }}> {people} </span>
                                <p className={styles.button_numeric} onClick={handleIncre}>
                                    +
                                </p>
                            </div>
                        </Select>
                    </div>
                    <div id="htlfndr-input-5">
                        <input type="submit" value="search" />
                    </div>
                    <div className="clearfix"></div>
                </form>
            </div>
        </aside>
    );
}

export default SearchHeader;
