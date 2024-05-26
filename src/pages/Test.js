import React, { useState } from 'react';
import '../Test.css'


import Container from '../components/Container'

const Test = () => {
    const [activeTab, setActiveTab] = useState(null);

    const toggleTab = (tab) => {
        setActiveTab(tab === activeTab ? null : tab);
    }

    return (
        <>
            <Container class1='home-wrapper-2 py-5'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='services d-flex flex-wrap gap-30  ' >

                            <div className='d-block '>
                                <button onClick={() => toggleTab('tab1')} className='homecategories d-flex align-items-center gap-15 bg-white  '>
                                    <img src='images/service.png' alt='services'></img>
                                    <div>
                                        <h6 className=''> immobiliers a vendre</h6>
                                    </div>
                                </button>

                                <div className={`toggle-div ${activeTab === 'tab1' ? 'active' : ''}`} style={{ width: activeTab === 'tab1' ? '500px' : 'auto', height: '70px',marginTop:'60px', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                                    {activeTab === 'tab1' && (
                                         <div className=' category-sub d-flex flex-wrap align-items-between gap-5' style={{ gap: '10px', background:'white'}}>
                                         <h6>Peopoe 1</h6>
                                            <h6>Peopoe 2</h6>
                                            <h6>Peopoe 3</h6>
                                            <h6>Peopoe 4</h6>
                                            <h6>Peopoe 5</h6>
                                            <h6>Peopoe 6</h6>
                                            <h6>Peopoe 7</h6>
                                            <h6>Peopoe 8</h6>
                                            <h6>Peopoe 9</h6>
                                            <h6>Peopoe 10</h6>
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className='d-block'>
                                <button onClick={() => toggleTab('tab2')} className='homecategories mb-2 d-flex align-items-center gap-15 bg-white  '>
                                    <img src='images/service.png' alt='services'></img>
                                    <div>
                                        <h6 className=''> immobiliers a vendre</h6>
                                    </div>
                                </button>

                                <div  className={`toggle-div ${activeTab === 'tab2' ? 'active' : ''}`} style={{ width: activeTab === 'tab2' ? '500px' : 'auto', height: '70px',marginTop:'60px', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                                    {activeTab === 'tab2' && (
                                         <div className='category-sub d-flex flex-wrap align-items-between gap-5' style={{ gap: '10px', background:'white'}}>
                                            <h6>Peopoe 1</h6>
                                            <h6>Peopoe 2</h6>
                                            <h6>Peopoe 3</h6>
                                            <h6>Peopoe 4</h6>
                                            <h6>Peopoe 5</h6>
                                            <h6>Peopoe 6</h6>
                                            <h6>Peopoe 7</h6>
                                            <h6>Peopoe 8</h6>
                                            <h6>Peopoe 9</h6>
                                            <h6>Peopoe 10</h6>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className='d-block'>
                                <button onClick={() => toggleTab('tab3')} className='homecategories d-flex align-items-center gap-15 bg-white  '>
                                    <img src='images/service.png' alt='services'></img>
                                    <div>
                                        <h6 className=''> immobiliers a vendre</h6>
                                    </div>
                                </button>

                                <div className={`toggle-div ${activeTab === 'tab3' ? 'active' : ''}`} style={{ width: activeTab === 'tab3' ? '500px' : 'auto', height: '70px',marginTop:'60px', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                                    {activeTab === 'tab3' && (
                                         <div className='category-sub  d-flex flex-wrap align-items-between gap-5' style={{ gap: '10px', background:'white'}}>
                                         <h6>Peopoe 1</h6>
                                            <h6>Peopoe 2</h6>
                                            <h6>Peopoe 3</h6>
                                            <h6>Peopoe 4</h6>
                                            <h6>Peopoe 5</h6>
                                            <h6>Peopoe 6</h6>
                                            <h6>Peopoe 7</h6>
                                            <h6>Peopoe 8</h6>
                                            <h6>Peopoe 9</h6>
                                            <h6>Peopoe 10</h6>
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className='d-block'>
                                <button onClick={() => toggleTab('tab4')} className='homecategories d-flex align-items-center gap-15 bg-white  '>
                                    <img src='images/service.png' alt='services'></img>
                                    <div>
                                        <h6 className=''> immobiliers a vendre</h6>
                                    </div>
                                </button>

                                <div className={`toggle-div ${activeTab === 'tab4' ? 'active' : ''}`} style={{ width: activeTab === 'tab4' ? '500px' : 'auto', height: '70px',marginTop:'60px', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                                    {activeTab === 'tab4' && (
                                         <div className='category-sub d-flex flex-wrap align-items-between gap-5' style={{ gap: '10px', background:'white'}}>
                                            <h6>Peopoe 1</h6>
                                            <h6>Peopoe 2</h6>
                                            <h6>Peopoe 3</h6>
                                            <h6>Peopoe 4</h6>
                                            <h6>Peopoe 5</h6>
                                            <h6>Peopoe 6</h6>
                                            <h6>Peopoe 7</h6>
                                            <h6>Peopoe 8</h6>
                                            <h6>Peopoe 9</h6>
                                            <h6>Peopoe 10</h6>
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className='d-block'>
                                <button onClick={() => toggleTab('tab5')} className='homecategories mb-2 d-flex align-items-center gap-15 bg-white  '>
                                    <img src='images/service.png' alt='services'></img>
                                    <div>
                                        <h6 className=''> immobiliers a vendre</h6>
                                    </div>
                                </button>

                                <div  className={`toggle-div ${activeTab === 'tab5' ? 'active' : ''}`} style={{ width: activeTab === 'tab5' ? '500px' : 'auto', height: '70px',marginTop:'60px', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                                    {activeTab === 'tab5' && (
                                         <div className=' category-sub d-flex flex-wrap align-items-between gap-5' style={{ gap: '10px', background:'white'}}>
                                            <h6>Peopoe 1</h6>
                                            <h6>Peopoe 2</h6>
                                            <h6>Peopoe 3</h6>
                                            <h6>Peopoe 4</h6>
                                            <h6>Peopoe 5</h6>
                                            <h6>Peopoe 6</h6>
                                            <h6>Peopoe 7</h6>
                                            <h6>Peopoe 8</h6>
                                            <h6>Peopoe 9</h6>
                                            <h6>Peopoe 10</h6>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className='d-block'>
                                <button onClick={() => toggleTab('tab6')} className='homecategories d-flex align-items-center gap-15 bg-white  '>
                                    <img src='images/service.png' alt='services'></img>
                                    <div>
                                        <h6 className=''> immobiliers a vendre</h6>
                                    </div>
                                </button>

                                <div className={`toggle-div ${activeTab === 'tab6' ? 'active' : ''}`} style={{ width: activeTab === 'tab6' ? '500px' : 'auto', height: '70px',marginTop:'60px', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                                    {activeTab === 'tab6' && (
                                         <div className='category-sub d-flex flex-wrap align-items-between gap-5' style={{ gap: '10px', background:'white'}}>
                                         <h6>Peopoe 1</h6>
                                            <h6>Peopoe 2</h6>
                                            <h6>Peopoe 3</h6>
                                            <h6>Peopoe 4</h6>
                                            <h6>Peopoe 5</h6>
                                            <h6>Peopoe 6</h6>
                                            <h6>Peopoe 7</h6>
                                            <h6>Peopoe 8</h6>
                                            <h6>Peopoe 9</h6>
                                            <h6>Peopoe 10</h6>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Test
