import React, { useState } from 'react'
import Meta from '../components/Meta'


import BreadCrumb from '../components/BreadCrumb'
import ProductCard from '../components/ProductCard';

const OurStore = () => {
    const [grid, setGrid] = useState(4);

    return (
        <>
            <Meta title={"Our Store"} />
            <BreadCrumb title='Our Store' />
            <div className='store-wrapper home-wrapper-2 py-5'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-3'>
                            <div className='filter-card mb-3'>
                                <h3 className='filter-title'>Search By Categories</h3>
                                <div>
                                    <ul className='ps-0'>
                                        <li>Watch</li>
                                        <li>Tv</li>
                                        <li>Camera</li>
                                        <li>Laptop</li>
                                    </ul>
                                </div>
                            </div>
                            <div className='filter-card mb-3'>
                                <h3 className='filter-title'>Filter By</h3>
                                <div>
                                    <h5 className='sub-title'>Price</h5>
                                    <div className='form-check'>
                                        <input className='form-check-input' type='checkbox' value="" id='' />
                                        <label className='form-check-label' htmlFor=""> 500 F - 5000 F</label>

                                    </div>

                                    <div className='form-check'>
                                        <input className='form-check-input' type='checkbox' value="" id='' />
                                        <label className='form-check-label' htmlFor=""> 5001 F - 25000 F</label>

                                    </div>
                                </div>
                            </div>
                            <div className='filter-card mb-3'>
                                <h3 className='filter-title'>Product tags</h3>
                                <div className='product-tags d-flex flex-wrap align-items-center gap-10'>
                                    <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>
                                        Headphone
                                    </span>

                                    <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>
                                        Wire
                                    </span>
                                    <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>
                                        Laptop
                                    </span>
                                    <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>
                                        Mobile
                                    </span>
                                </div>
                            </div>
                            <div className='filter-card mb-3'>
                                <h3 className='filter-title'>Random Products</h3>
                                <div>
                                    <div className='random-products mb-3 d-flex '>
                                        <div className='w-50'>
                                            <img
                                                src='images/watch.jpg'
                                                className='img-fluid'
                                                alt='watch'
                                            />
                                        </div>
                                        <div className='w-50'>
                                            <h5>
                                                Kids headphone pack of 10
                                            </h5>
                                            <p className='price'>
                                                500 F
                                            </p>
                                        </div>
                                    </div>

                                    <div className='random-products d-flex'>
                                        <div className='w-50'>
                                            <img
                                                src='images/watch.jpg'
                                                className='img-fluid'
                                                alt='watch'
                                            />
                                        </div>
                                        <div className='w-50'>
                                            <h5>
                                                Kids headphone pack of 10
                                            </h5>
                                            <p className='price'>
                                                500 F
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='col-9'>
                            <div className='filter-sort-grid mb-4'>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <div className='d-flex align-items-center gap-10' >
                                        <p className='mb-0 d-block '>Sort By:</p>
                                        <select name='' className='form-control form-select' id=''>
                                            <option value='manual' >Featured</option>
                                            <option value='best-selling' selected="selected">Best Selling</option>
                                            <option value='title-ascending' >Alphabetically, A-Z</option>
                                            <option value='title-descending' >Alphabetically, Z-A</option>
                                            <option value='price-ascending' >Price, low to high</option>
                                            <option value='price-descending' >Price, high to low</option>
                                            <option value='created-ascending' >Date, old to new</option>
                                            <option value='created-descending' >Date, new to old</option>
                                        </select>
                                    </div>
                                    <div className='d-flex align-items-center gap-10 '>
                                        <p className='totalproducts mb-0 '>25 products</p>
                                        <div className='d-flex gap-10 align-items-center grid'>
                                            <img onClick={() => { setGrid(3) }} src='images/gr4.svg' className='d-block img-fluid' alt='grid'></img>
                                            <img onClick={() => { setGrid(4) }} src='images/gr3.svg' className='d-block img-fluid' alt='grid'></img>
                                            <img onClick={() => { setGrid(6) }} src='images/gr2.svg' className='d-block img-fluid' alt='grid'></img>
                                            <img onClick={() => { setGrid(12) }} src='images/gr.svg' className='d-block img-fluid' alt='grid'></img>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='product-list pb-5'>
                                <div className='d-flex gap-10 flex -wrap'>
                                     <ProductCard grid={grid}/>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default OurStore
