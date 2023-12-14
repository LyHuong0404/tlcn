/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/no-redundant-roles */
import Product from './Room';
import { useLocation } from 'react-router-dom';
import MenuItem from '@mui/material/MenuItem';
import { useCallback, useEffect, useState } from 'react';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import { filterRooms } from '~/actions/userActions';
import { getWards, getDistricts } from '~/actions/addressActions';
import { useSelector } from 'react-redux';
import Select from 'react-select';
import Pagination from '@mui/material/Pagination';
import Loading from '~/components/Loading';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import MuiSelect from '@mui/material/Select';
import { Controller, useForm } from 'react-hook-form';

const customStyles = {
    control: (provided) => ({
        ...provided,
        width: '230px',
        height: '30px',
        alignContent: 'center',
        backgroundColor: '#fff',
    }),
};

const optionsPeople = [
    { label: '1 people in room', value: '1' },
    { label: '2 people in room', value: '2' },
    { label: '3 people in room', value: '3' },
    { label: '4 people in room', value: '4' },
];

function SearchResult() {
    const location = useLocation();
    const { control } = useForm();
    const searchData = location?.state?.data;
    const { provins } = useSelector((state) => state.provins);
    const [totalPerson, setTotalPerson] = useState(searchData?.totalPerson || null);
    const [provinceSearch, setProvinceSearch] = useState(searchData?.provinceCode || null);
    const [districtSearch, setDistrictSearch] = useState(searchData?.districtCode || null);
    const [wardSearch, setWardSearch] = useState(searchData?.wardCode || null);
    const [districts, setDistricts] = useState([]);
    const [wards, setWards] = useState([]);
    const [price, setPrice] = useState([0, 10000000]);
    const [rating, setRating] = useState(5);
    const [pageIndex, setPageIndex] = useState(0);
    const [totalPage, setTotalPage] = useState(1);
    const [rooms, setRooms] = useState([]);
    const [loading, setLoading] = useState(false);
    const [attic, setAttic] = useState(null);
    const [furnitureAvailable, setFurnitureAvailable] = useState(null);
    const [airConditionAvailable, setAirConditionAvailable] = useState(null);
    const [isFreeParking, setIsFreeParking] = useState(null);
    const [privateToilet, setPrivateToilet] = useState(null);
    const [allowedPet, setAllowedPet] = useState(null);
    const [tvAvailable, setTvAvailable] = useState(null);
    const [sort, setSort] = useState('price');
    const [show, setShow] = useState(9);

    const getRooms = useCallback(
        (
            pageIndex,
            sort,
            show,
            provinceSearch,
            districtSearch,
            wardSearch,
            price,
            attic,
            furnitureAvailable,
            airConditionAvailable,
            isFreeParking,
            privateToilet,
            allowedPet,
            tvAvailable,
            totalPerson,
        ) => {
            try {
                const fetchData = async () => {
                    setLoading(true);
                    const rs = await filterRooms(
                        pageIndex,
                        show,
                        sort,
                        null,
                        provinceSearch?.code || null,
                        districtSearch?.code || null,
                        wardSearch?.code || null,
                        price[0],
                        price[1],
                        attic,
                        furnitureAvailable,
                        airConditionAvailable,
                        isFreeParking,
                        privateToilet,
                        allowedPet,
                        tvAvailable,
                        totalPerson?.value,
                    );
                    setRooms(rs);
                    setTotalPage(rs?.totalPage);
                };
                fetchData();
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        },
        [
            pageIndex,
            sort,
            show,
            price,
            attic,
            furnitureAvailable,
            airConditionAvailable,
            isFreeParking,
            privateToilet,
            allowedPet,
            tvAvailable,
        ],
    );

    useEffect(() => {
        getRooms(
            pageIndex,
            sort,
            show,
            provinceSearch,
            districtSearch,
            wardSearch,
            price,
            attic,
            furnitureAvailable,
            airConditionAvailable,
            isFreeParking,
            privateToilet,
            allowedPet,
            tvAvailable,
            totalPerson,
        );
    }, [
        getRooms,
        pageIndex,
        sort,
        show,
        price,
        attic,
        furnitureAvailable,
        airConditionAvailable,
        isFreeParking,
        privateToilet,
        allowedPet,
        tvAvailable,
    ]);
    const handleChangePrice = (event, newValue) => {
        setPrice(newValue);
    };

    const handleChangeRating = (event, newValue) => {
        setRating(newValue);
    };

    const handleChangeProvince = (e) => {
        const fetchData = async () => {
            const result = await getDistricts(e.code);
            const districtOptions = result?.map((district) => ({
                code: district.code,
                label: district.name,
                value: district.name,
            }));
            setDistricts(districtOptions);
            setDistrictSearch({});
            setWardSearch({});
            setProvinceSearch(e);
        };
        fetchData();
    };
    const handleChangeDistrict = (e) => {
        const fetchData = async () => {
            const result = await getWards(e.code);
            const wardOptions = result?.map((ward) => ({
                code: ward.code,
                label: ward.name,
                value: ward.name,
            }));
            setWards(wardOptions);
            setWardSearch({});
            setDistrictSearch(e);
        };
        fetchData();
    };

    const handleChangeWard = (e) => {
        setWardSearch(e);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        getRooms(
            pageIndex,
            sort,
            show,
            provinceSearch,
            districtSearch,
            wardSearch,
            price,
            attic,
            furnitureAvailable,
            airConditionAvailable,
            isFreeParking,
            privateToilet,
            allowedPet,
            tvAvailable,
            totalPerson,
        );
    };

    const provinceOptions = provins.map((province) => ({
        code: province.code,
        label: province.name,
        value: province.name,
    }));

    const handleSetPage = (event, page) => {
        setPageIndex(page - 1);
        window.scrollTo({ top: 200, behavior: 'smooth' });
    };

    const handleChangeSort = (event) => {
        setSort(event.target.value);
    };

    const handleChangeShow = (event) => {
        setShow(event.target.value);
    };


    return (
        <>
            <aside className="htlfndr-sidebar htlfndr-sidebar-in-top htlfndr-full-form" role="search">
                {loading && <Loading />}
                <div className="widget htlfndr-form-light">
                    <form
                        onSubmit={(event) => handleSubmit(event)}
                        name="search-hotel"
                        id="search-hotel"
                        className="htlfndr-search-form"
                    >
                        <div id="htlfndr-input-2" className="htlfndr-input-wrapper">
                            <Select
                                value={
                                    provinceSearch?.value
                                        ? { value: provinceSearch.value, label: provinceSearch.label }
                                        : null
                                }
                                options={provinceOptions}
                                placeholder="Select a province..."
                                isSearchable={true}
                                styles={customStyles}
                                onChange={handleChangeProvince}
                            />
                        </div>
                        <div id="htlfndr-input-2" className="htlfndr-input-wrapper">
                            <Select
                                value={
                                    districtSearch?.value
                                        ? { value: districtSearch.value, label: districtSearch.label }
                                        : null
                                }
                                options={districts}
                                placeholder="Select a district..."
                                isSearchable={true}
                                styles={customStyles}
                                onChange={handleChangeDistrict}
                            />
                        </div>

                        <div id="htlfndr-input-2" className="htlfndr-input-wrapper">
                            <Select
                                value={wardSearch?.value ? { value: wardSearch.value, label: wardSearch.label } : null}
                                options={wards}
                                placeholder="Select a ward..."
                                isSearchable={true}
                                styles={customStyles}
                                onChange={handleChangeWard}
                            />
                        </div>
                        <div id="htlfndr-input-4" className="htlfndr-input-wrapper">
                            <Controller
                                name="totalPerson"
                                control={control}
                                render={(props) => (
                                    <Select
                                        value={
                                            totalPerson?.value
                                                ? { value: totalPerson.value, label: totalPerson.label }
                                                : null
                                        }
                                        {...props}
                                        options={optionsPeople}
                                        placeholder="Select people..."
                                        styles={customStyles}
                                        // components={{
                                        //     IndicatorSeparator: () => null,
                                        // }}
                                        // formatOptionLabel={({ label }) => (
                                        //     <span>
                                        //         <CustomIcon style={{ margin: '20px' }} />
                                        //         {label}
                                        //     </span>
                                        // )}
                                        onChange={(selectedOption) => {
                                            setTotalPerson(selectedOption);
                                        }}
                                    />
                                )}
                            />
                        </div>
                        <div id="htlfndr-input-5">
                            {loading && <div className="loading-spinner">Loading...</div>}
                            <input type="submit" value="search" />
                        </div>
                        <div className="clearfix"></div>
                    </form>
                </div>
            </aside>
            <div className="row">
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
                                    max={10000000}
                                />
                                <Typography variant="body3">
                                    {price[0]} - {price[1]}
                                </Typography>
                                <p className="htlfndr-input-label">user rating</p>
                                <Rating size="large" name="my-rating" value={rating} onChange={handleChangeRating} />

                                <p className="htlfndr-input-label">Amenities</p>
                                <p className="htlfndr-checkbox-line">
                                    <input
                                        type="checkbox"
                                        id="htlfndr-check-television"
                                        name="htlfndr-check-television"
                                        onChange={() => setTvAvailable(!tvAvailable)}
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
                                    />
                                    <label htmlFor="htlfndr-check-swimming-pool">Swimming pool</label>
                                </p>
                                <p className="htlfndr-checkbox-line">
                                    <input
                                        type="checkbox"
                                        id="htlfndr-check-smoking"
                                        name="htlfndr-check-smoking"
                                        onChange={() => setFurnitureAvailable(!furnitureAvailable)}
                                    />
                                    <label htmlFor="htlfndr-check-smoking">Furniture Available</label>
                                </p>
                                <p className="htlfndr-checkbox-line">
                                    <input
                                        type="checkbox"
                                        onChange={() => setAttic(!attic)}
                                        id="htlfndr-check-wine-bar"
                                        name="htlfndr-check-wine-bar"
                                    />
                                    <label htmlFor="htlfndr-check-wine-bar">Attic</label>
                                </p>
                                <p className="htlfndr-checkbox-line">
                                    <input
                                        type="checkbox"
                                        id="htlfndr-check-hot-tub"
                                        name="htlfndr-check-hot-tub"
                                        onChange={() => setAirConditionAvailable(!airConditionAvailable)}
                                    />
                                    <label htmlFor="htlfndr-check-hot-tub">Air Conditioning</label>
                                </p>
                                <p className="htlfndr-checkbox-line">
                                    <input
                                        type="checkbox"
                                        id="htlfndr-check-air-conditioning"
                                        name="htlfndr-check-air-conditioning"
                                        onChange={() => setIsFreeParking(!isFreeParking)}
                                    />
                                    <label htmlFor="htlfndr-check-air-conditioning">Free Parking</label>
                                </p>
                                <p className="htlfndr-checkbox-line">
                                    <input
                                        type="checkbox"
                                        id="htlfndr-check-breakfast"
                                        name="htlfndr-check-breakfast"
                                        onChange={() => setPrivateToilet(!privateToilet)}
                                    />
                                    <label htmlFor="htlfndr-check-breakfast">Private Toilet</label>
                                </p>
                                <p className="htlfndr-checkbox-line">
                                    <input
                                        type="checkbox"
                                        id="htlfndr-check-free-parking"
                                        name="htlfndr-check-free-parking"
                                        onChange={() => setAllowedPet(!allowedPet)}
                                    />
                                    <label htmlFor="htlfndr-check-free-parking">Allowed Pet</label>
                                </p>
                            </form>
                        </div>
                    </div>
                </aside>
                {/* Product */}
                <main className="col-sm-8 col-md-9 col-lg-9 htlfndr-search-result htlfndr-grid-view" role="main">
                    <h2 className="htlfndr-search-result-title">
                        <span>{rooms?.totalElement}</span> results found
                    </h2>
                    {/* Sort */}
                    <section className="htlfndr-search-result-sorting row" style={{ marginLeft: '-22px' }}>
                        <div className="col-md-12">
                            <div className="htlfndr-sort">
                                <FormControl sx={{ m: 1, minWidth: 100 }} size="small">
                                    <InputLabel
                                        id="demo-simple-select-sort"
                                        style={{
                                            fontSize: '14px',
                                            color: '#08c1da',
                                            fontWeight: 'bold',
                                            fontFamily: "'Montserrat', 'Helvetica Neue', Helvetica, Arial, sans-serif",
                                        }}
                                    >
                                        Sort
                                    </InputLabel>
                                    <MuiSelect
                                        data-toggle="dropdown"
                                        aria-haspopup="false"
                                        aria-expanded="false"
                                        role="button"
                                        labelId="demo-simple-select-sort"
                                        id="demo-simple-select"
                                        value={sort}
                                        label="sort"
                                        onChange={handleChangeSort}
                                    >
                                        <MenuItem value={'price'}>
                                            <span style={{ fontSize: '1.4rem' }}>Price</span>
                                        </MenuItem>
                                        <MenuItem value={'avgStar'}>
                                            <span style={{ fontSize: '1.4rem' }}>Rating</span>
                                        </MenuItem>
                                    </MuiSelect>
                                </FormControl>
                            </div>
                            <div className="dropdown htlfndr-show-number-hotels">
                                <FormControl sx={{ m: 1, minWidth: 100 }} size="small">
                                    <InputLabel
                                        id="demo-simple-select-show"
                                        style={{
                                            fontSize: '1.4rem',
                                            color: '#08c1da',
                                            fontWeight: 'bold',
                                            fontFamily: "'Montserrat', 'Helvetica Neue', Helvetica, Arial, sans-serif",
                                        }}
                                    >
                                        Show
                                    </InputLabel>
                                    <MuiSelect
                                        data-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="true"
                                        role="button"
                                        labelId="demo-simple-select-show"
                                        id="demo-simple-select"
                                        value={show}
                                        label="show"
                                        onChange={handleChangeShow}
                                    >
                                        <MenuItem value={9}>
                                            <span style={{ fontSize: '1.4rem' }}>9 items</span>
                                        </MenuItem>
                                        <MenuItem value={18}>
                                            <span style={{ fontSize: '1.4rem' }}>18 items</span>
                                        </MenuItem>
                                        <MenuItem value={27}>
                                            <span style={{ fontSize: '1.4rem' }}>27 items</span>
                                        </MenuItem>
                                    </MuiSelect>
                                </FormControl>
                            </div>
                            {/* <div className="htlfndr-view" style={{ marginTop: '16px' }}>
                    <button
                        id="htlfndr-grid"
                        type="button"
                        className="htlfndr-active"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Grid view"
                        role="button"
                        onClick={handleGridColumn}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                    <button
                        id="htlfndr-row"
                        type="button"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Row view"
                        role="button"
                        onClick={handleRowColumn}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div> */}
                        </div>
                    </section>
                    <Product data={rooms?.content}></Product>
                    {totalPage > 1 && (
                        <Pagination
                            count={totalPage}
                            variant="outlined"
                            shape="rounded"
                            color="primary"
                            sx={{
                                '& .MuiPaginationItem-page': {
                                    fontSize: '14px',
                                },
                            }}
                            onChange={handleSetPage}
                            style={{ margin: '15px 0' }}
                        />
                    )}
                </main>
            </div>
        </>
    );
}

export default SearchResult;
