function Pagination() {
    return (
        <nav className="htlfndr-pagination">
            <ul className="pagination">
                <li className="htlfndr-left">
                    <a href="/" aria-label="Previous">
                        <span aria-hidden="true" className="fa fa-angle-left"></span>
                    </a>
                </li>
                <li className="current">
                    <a href="/">1</a>
                </li>
                <li>
                    <a href="/">2</a>
                </li>
                <li>
                    <a href="/">3</a>
                </li>
                <li>
                    <a href="/">4</a>
                </li>
                <li className="htlfndr-right">
                    <a href="/" aria-label="Next">
                        <span aria-hidden="true" className="fa fa-angle-right"></span>
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default Pagination;
