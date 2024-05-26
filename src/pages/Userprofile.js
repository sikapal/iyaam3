import React from 'react'
import profile_icon from '../images/blog-1.jpg'
import { IoChatbubbleOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';

const Userprofile = () => {
    return (
        <>

            <div className='container-xxl d-flex justify-content-center'>
                <div className='row'>
                   

                    <div className="col-12">
                        <div className='upc  justify-content-center'>
                            <div className='gradient'></div>
                            <div className='profile-down '>
                                <img src={profile_icon} alt='profile' />
                                <div className='profile-title'> Alice</div>
                                <div className='profile-description'>
                                    <h6>Je suis vendeur et jai une boutique au marche central</h6>
                                </div>

                                <div className='d-flex justify-content-center'>
                                    <div className='d-flex justify-content-between gap-10'>
                                        <div className='text-center'>
                                            <h5>50</h5>
                                            <p>Followers</p>
                                        </div>
                                        <div className='text-center'>
                                            <h5 >50</h5>
                                            <p>Following</p>
                                        </div>
                                        <div className='text-center'>
                                            <h5 >1000</h5>
                                            <p>Posts</p>
                                        </div>
                                    </div>
                                </div>

                                <div className='profile-box d-flex align-items-center justify-content-between '>
                                    <div className='message-box mt-0 mt-3 d-flex justify-content-center gap-30 align-items-center'>
                                        <Link to='/chatpage'>
                                        <button className='button1 border-0  d-flex justify-content-center align-items-center'>
                                            <IoChatbubbleOutline className='img1' />
                                        </button>
                                        </Link>

                                    </div>
                                    <div className='message-box mt-3 d-flex justify-content-center align-items-center'>
                                        <button className='button2 border-0 '>Follow Me</button>

                                    </div>
                                </div>

                               
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Userprofile
