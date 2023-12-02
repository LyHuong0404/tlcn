/* eslint-disable jsx-a11y/no-redundant-roles */
import { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import images from '~/assets/images';

function Sort() {
    const [sort, setSort] = useState(10);
    const [show, setShow] = useState(10);
    const [gridColumn, setGridColumn] = useState(3);

    const handleChangeSort = (event) => {
        setSort(event.target.value);
    };

    const handleChangeShow = (event) => {
        setShow(event.target.value);
    };

    const handleGridColumn = () => {
        setGridColumn(3);
    };

    const handleRowColumn = () => {
        setGridColumn(1);
    };
    return (
        <section className="htlfndr-search-result-sorting row" style={{ marginLeft: '-22px' }}>
            <div className="col-md-12">
                <div className="dropdown htlfndr-sort">
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
                        <Select
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="true"
                            role="button"
                            labelId="demo-simple-select-sort"
                            id="demo-simple-select"
                            value={sort}
                            label='sort'
                            onChange={handleChangeSort}
                        >
                            <MenuItem value={10}>
                                <span style={{ fontSize: '1.4rem' }}>Price</span>
                            </MenuItem>
                            <MenuItem value={20}>
                                <span style={{ fontSize: '1.4rem' }}>Rating</span>
                            </MenuItem>
                            <MenuItem value={30}>
                                <span style={{ fontSize: '1.4rem' }}>Popular</span>
                            </MenuItem>
                        </Select>
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
                        <Select
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="true"
                            role="button"
                            labelId="demo-simple-select-show"
                            id="demo-simple-select"
                            value={show}
                            label='show'
                            onChange={handleChangeShow}
                        >
                            <MenuItem value={10}>
                                <span style={{ fontSize: '1.4rem' }}>9 items</span>
                            </MenuItem>
                            <MenuItem value={20}>
                                <span style={{ fontSize: '1.4rem' }}>18 items</span>
                            </MenuItem>
                            <MenuItem value={30}>
                                <span style={{ fontSize: '1.4rem' }}>27 items</span>
                            </MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div className="htlfndr-view" style={{ marginTop: '16px' }}>
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
                </div>
            </div>
        </section>
    );
}

export default Sort;
