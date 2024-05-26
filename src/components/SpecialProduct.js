import React from 'react'
import { Link } from 'react-router-dom'

const SpecialProduct = () => {
    return (
        <div className='col-6 mb-3'>
            <div className='special-product-card'>
                <div className='d-flex justify-content-between'>
                    <div>
                        <img src='images/watch.jpg' className='img-fluid' alt='watch' />
                    </div>
                    <div className='special-product-content'>
                        <h5 className='brand'>Havel</h5>
                        <h6 className="title"> Samsung Galaxy Note10+</h6>
                        <p className='price'>
                            <span className='red-p'>100000F</span> &nbsp; <strike>5000 F</strike>
                        </p>

                        <div className='discount-till gap-10 d-flex align-items-center'>
                            <p className='mb-0'>
                                <b>10 </b>days
                            </p>
                            <div className='d-flex gap-10 align-items-center'>
                                <span className='badge rounded-circle p-3 bg-danger'>1</span>
                                <span className='badge rounded-circle p-3 bg-danger'>1</span>
                                <span className='badge rounded-circle p-3 bg-danger'>1</span>

                            </div>


                        </div>
                        <div className='prod-count my-3'>
                            <p>Products:5</p>
                            <div className='progress'>
                                <div
                                    className='progress-bar'
                                    role='progressbar'
                                    style={{ width: '25%' }}
                                    aria-valuenow="15"
                                    aria-valuemin="0"
                                    aria-valuemax='100'


                                ></div>
                            </div>

                        </div>
                        <Link>
                             Add to Fav
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SpecialProduct
