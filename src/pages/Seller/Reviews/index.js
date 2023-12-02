/* eslint-disable jsx-a11y/anchor-is-valid */
import Image from '~/components/Image';

function Reviews() {
    return (
        <section>
            <div className="content">
                <div className="in-content-wrapper">
                    <div className="row no-gutters">
                        <div className="col">
                            <div className="heading-messages">
                                <h3>Reviews</h3>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="breadcrumb">
                                <div className="breadcrumb-item">
                                    <i className="fas fa-angle-right"></i>
                                    <a href="#">Reviews</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="box">
                        <div className="row">
                            <div className="col">
                                <div className="details-text">
                                    <h4>Reviews</h4>
                                </div>
                            </div>
                        </div>
                        <div className="reviews-body">
                            <ul>
                                <li>
                                    <div className="media">
                                        <Image
                                            src="images/commenter-1.jpg"
                                            className="mr-1 mr-sm-3 rounded-circle"
                                            alt="img-review"
                                        />
                                        <div className="media-body">
                                            <h5>
                                                John Doe <small>By Mr. Gabril</small>
                                            </h5>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <span className="text-sm-right mb-3 float-sm-right">December 19, 2018</span>
                                            <p>
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque aliquid
                                                explicabo debitis ratione omnis, sapiente amet. Laboriosam ratione optio
                                                exercitationem?
                                            </p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="media">
                                        <Image
                                            src="images/commenter-2.jpg"
                                            className="mr-1 mr-sm-3 rounded-circle"
                                            alt="..."
                                        />
                                        <div className="media-body">
                                            <h5>
                                                Mary Luise <small>By Ms. Sara hann</small>
                                            </h5>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas null fa-star"></i>
                                            <span className="text-sm-right mb-3 float-sm-right">January 18, 2019</span>
                                            <p>
                                                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                                                ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus
                                                viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
                                                Donec lacinia congue felis in faucibus.
                                            </p>

                                            <div className="media">
                                                <a href="#">
                                                    <Image
                                                        src="images/commenter-3.jpg"
                                                        className="mr-1 mr-sm-3 rounded-circle"
                                                        alt="..."
                                                    />
                                                </a>
                                                <div className="media-body">
                                                    <h5>
                                                        Author <small>By R.Hujo Kelvin</small>
                                                    </h5>
                                                    <p className="text-sm-right mb-3">January 17, 2019</p>
                                                    <p>Thank you for your Support.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="media">
                                        <Image
                                            src="images/commenter-1.jpg"
                                            className="mr-1 mr-sm-3 rounded-circle"
                                            alt="img-review"
                                        />
                                        <div className="media-body">
                                            <h5>
                                                John Doe <small>By Mr. Gabril</small>
                                            </h5>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <span className="text-sm-right mb-3 float-sm-right">January 16, 2019</span>
                                            <p>
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque aliquid
                                                explicabo debitis ratione omnis, sapiente amet. Laboriosam ratione optio
                                                exercitationem?
                                            </p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="media">
                                        <Image
                                            src="images/commenter-2.jpg"
                                            className="mr-1 mr-sm-3 rounded-circle"
                                            alt="..."
                                        />
                                        <div className="media-body">
                                            <h5>
                                                Mary Luise <small>By Ms. Sara hann</small>
                                            </h5>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas null fa-star"></i>
                                            <span className="text-sm-right mb-3 float-sm-right">January 12, 2019</span>
                                            <p>
                                                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                                                ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus
                                                viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
                                                Donec lacinia congue felis in faucibus.
                                            </p>

                                            <div className="media">
                                                <a href="#">
                                                    <Image
                                                        src="images/commenter-3.jpg"
                                                        className="mr-1 mr-sm-3 rounded-circle"
                                                        alt="..."
                                                    />
                                                </a>
                                                <div className="media-body">
                                                    <h5>
                                                        Author <small>By R.Hujo Kelvin</small>
                                                    </h5>
                                                    <p className="text-sm-right mb-3">January 13, 2019</p>
                                                    <p>Thank you for your Support.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Reviews;
