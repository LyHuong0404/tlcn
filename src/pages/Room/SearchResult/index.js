/* eslint-disable jsx-a11y/no-redundant-roles */
import Product from './Room';
import Sort from './Sort';
import { useLocation } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import styles from './SearchResult.module.scss';
import { useState } from 'react';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import { searchRooms } from '~/actions/userActions';

//truyền thêm key search qua
function SearchResult() {
    const location = useLocation();
    const searchText = location?.state?.searchText;
    const [price, setPrice] = useState([0, 5000]);
    const [rating, setRating] = useState(5);

    const handleChangePrice = (event, newValue) => {
        setPrice(newValue);
    };

    const handleChangeRating = (event, newValue) => {
        setRating(newValue);
    };

    return (
        <>
            {/* Search Header */}
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
                                // selected={checkIn}
                                // onChange={(date) => setCheckIn(date)}
                                id="htlfndr-date-in"
                                name="htlfndr-date-in"
                                className="search-hotel-input"
                                placeholderText="Check in"
                            />
                            <button type="button" className="htlfndr-clear-datepicker"></button>
                        </div>

                        <div id="htlfndr-input-date-out" className="htlfndr-input-wrapper">
                            <DatePicker
                                // selected={checkOut}
                                // onChange={(date) => setCheckOut(date)}
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
                                // value={people}
                                style={{ border: 'none' }}
                                // onChange={handleChangePeople}
                                className="search-hotel-input"
                            >
                                <MenuItem value="">
                                    <div>
                                        <p style={{ fontSize: '1.4rem', fontWeight: 'bold', marginBottom: '0' }}>
                                            People
                                        </p>
                                        <p style={{ fontSize: '1.4rem', margin: '0' }}>Number person in room</p>
                                    </div>
                                </MenuItem>
                                <div style={{ display: 'flex', alignContent: 'center', justifyContent: 'center' }}>
                                    {/* <p className={styles.button_numeric} onClick={handleDecre}> */}
                                    <p className={styles.button_numeric}>-</p>
                                    {/* <span style={{ fontSize: '1.6rem', marginTop: '8px' }}> {people} </span> */}
                                    <span style={{ fontSize: '1.6rem', marginTop: '8px' }}> 2 </span>
                                    {/* <p className={styles.button_numeric} onClick={handleIncre}> */}
                                    <p className={styles.button_numeric}>+</p>
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
            <div className="row">
                {/* Search Sidebar */}
                <aside
                    className="col-sm-4 col-md-3 col-lg-3 htlfndr-sidebar htlfndr-sidebar-in-left"
                    role="complementary"
                >
                    <div className="htlfndr-search-details widget">
                        <h3 className="widget-title">details</h3>
                        <div className="htlfndr-widget-content">
                            <form name="search-hotel-details" id="search-hotel-details">
                                <label htmlFor="htlfndr-price-show" className="htlfndr-input-label">
                                    Price
                                </label>
                                <Slider
                                    value={price}
                                    onChange={handleChangePrice}
                                    valueLabelDisplay="auto"
                                    aria-labelledby="range-slider"
                                    min={0}
                                    max={5000}
                                />
                                <Typography variant="body3">
                                    ${price[0]} - ${price[1]}
                                </Typography>
                                <p className="htlfndr-input-label">user rating</p>
                                <Rating
                                    size="large"
                                    name="my-rating"
                                    value={rating}
                                    // precision={0.5} // Specify half-star increments (optional)
                                    onChange={handleChangeRating}
                                />
                                <p className="htlfndr-input-label">accomodation type</p>
                                <p className="htlfndr-checkbox-line">
                                    <input
                                        type="checkbox"
                                        id="htlfndr-check-apartment"
                                        name="htlfndr-check-apartment"
                                    />
                                    <label htmlFor="htlfndr-check-apartment">
                                        Apartment
                                        <span>(5)</span>
                                    </label>
                                </p>
                                <p className="htlfndr-checkbox-line">
                                    <input type="checkbox" id="htlfndr-check-hostel" name="htlfndr-check-hostel" />
                                    <label htmlFor="htlfndr-check-hostel">
                                        Hostel
                                        <span>(5)</span>
                                    </label>
                                </p>
                                <p className="htlfndr-checkbox-line">
                                    <input
                                        type="checkbox"
                                        id="htlfndr-check-hotel"
                                        name="htlfndr-check-hotel"
                                        defaultChecked
                                    />
                                    <label htmlFor="htlfndr-check-hotel">
                                        Hotel
                                        <span>(15)</span>
                                    </label>
                                </p>
                                <p className="htlfndr-input-label">Amenities</p>
                                <p className="htlfndr-checkbox-line">
                                    <input
                                        type="checkbox"
                                        id="htlfndr-check-television"
                                        name="htlfndr-check-television"
                                    />
                                    <label htmlFor="htlfndr-check-television">Television</label>
                                </p>
                                <p className="htlfndr-checkbox-line">
                                    <input type="checkbox" id="htlfndr-check-wi-fi" name="htlfndr-check-wi-fi" />
                                    <label htmlFor="htlfndr-check-wi-fi">Wi-Fi</label>
                                </p>
                                <p className="htlfndr-checkbox-line">
                                    <input
                                        type="checkbox"
                                        id="htlfndr-check-swimming-pool"
                                        name="htlfndr-check-swimming-pool"
                                        defaultChecked
                                    />
                                    <label htmlFor="htlfndr-check-swimming-pool">Swimming pool</label>
                                </p>
                                <p className="htlfndr-checkbox-line">
                                    <input
                                        type="checkbox"
                                        id="htlfndr-check-smoking"
                                        name="htlfndr-check-smoking"
                                        defaultChecked
                                    />
                                    <label htmlFor="htlfndr-check-smoking">Smoking allowed</label>
                                </p>
                                <p className="htlfndr-checkbox-line">
                                    <input
                                        type="checkbox"
                                        id="htlfndr-check-wine-bar"
                                        name="htlfndr-check-wine-bar"
                                        defaultChecked
                                    />
                                    <label htmlFor="htlfndr-check-wine-bar">wine bar</label>
                                </p>
                                <p className="htlfndr-checkbox-line">
                                    <input
                                        type="checkbox"
                                        id="htlfndr-check-hot-tub"
                                        name="htlfndr-check-hot-tub"
                                        defaultChecked
                                    />
                                    <label htmlFor="htlfndr-check-hot-tub">Hot tub</label>
                                </p>
                                <p className="htlfndr-checkbox-line">
                                    <input
                                        type="checkbox"
                                        id="htlfndr-check-air-conditioning"
                                        name="htlfndr-check-air-conditioning"
                                        defaultChecked
                                    />
                                    <label htmlFor="htlfndr-check-air-conditioning">Air conditioning</label>
                                </p>
                                <p className="htlfndr-checkbox-line">
                                    <input
                                        type="checkbox"
                                        id="htlfndr-check-breakfast"
                                        name="htlfndr-check-breakfast"
                                        defaultChecked
                                    />
                                    <label htmlFor="htlfndr-check-breakfast">Breakfast</label>
                                </p>
                                <p className="htlfndr-checkbox-line">
                                    <input
                                        type="checkbox"
                                        id="htlfndr-check-free-parking"
                                        name="htlfndr-check-free-parking"
                                        defaultChecked
                                    />
                                    <label htmlFor="htlfndr-check-free-parking">Free parking</label>
                                </p>
                            </form>
                        </div>
                    </div>
                </aside>
                {/* Product */}
                <main className="col-sm-8 col-md-9 col-lg-9 htlfndr-search-result htlfndr-grid-view" role="main">
                    <h2 className="htlfndr-search-result-title">
                        <span>125</span> results found
                    </h2>
                    <Sort></Sort>
                    {/* <Product data={rooms}></Product> */}
                </main>
            </div>
        </>
    );
}

export default SearchResult;
