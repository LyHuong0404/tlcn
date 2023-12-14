/* eslint-disable jsx-a11y/no-redundant-roles */
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import { useState } from 'react';
import './SearchSidebar.module.scss';

function SearchSidebar() {
    const [price, setPrice] = useState([0, 5000]);
    const [rating, setRating] = useState(5);

    const handleChangePrice = (event, newValue) => {
        setPrice(newValue);
    };

    const handleChangeRating = (event, newValue) => {
        setRating(newValue);
    };
    return (
        <aside className="col-sm-4 col-md-3 col-lg-3 htlfndr-sidebar htlfndr-sidebar-in-left" role="complementary">
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
                        <p className="htlfndr-input-label">Amenities</p>
                        <p className="htlfndr-checkbox-line">
                            <input type="checkbox" id="htlfndr-check-television" name="htlfndr-check-television" />
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
    );
}

export default SearchSidebar;
