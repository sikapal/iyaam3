import React from 'react'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import { Link } from 'react-router-dom'


const Signup = () => {
    return (
        <>
            <Meta title={"SignUp"} />
            <BreadCrumb title='SignUp' />

            <div className='login-wrapper home-wrapper-2 py-5'>
               <div className='container-xxl'>
               <div className='row'>
                    <div className="col-12">
                        <div className='auth-card'>
                            <h3 className='text-center'>Create an Account</h3>

                            <form action='' className='d-flex flex-column gap-15'>
                                <div>
                                    <input type="text" name='text' placeholder='Name ' className='form-control' />
                                </div>
                                <div>
                                    <input type="text" name='text' placeholder='Surname ' className='form-control' />
                                </div>
                                <div>
                                    <input type="email" name='email' placeholder='Email' className='form-control' />
                                </div>
                                <div className='mt-1'>
                                    <input type="password" name='password' placeholder='Password' className='form-control' />
                                </div>

                                <div>
                                    <div className='d-flex gap-250'>
                                        <p className='text-start mt-2 mb-3'> Already Have an Account? </p>


                                        <Link to="/login" className='text-end mt-2 mb-3  '>
                                            Login
                                        </Link>
                                    </div>

                                    <div className='mt-3 d-flex justify-content-center gap-15 align-items-center'>
                                        <button className='button border-0'>Create</button>

                                    </div>
                                </div>
                            </form>

                        </div>

                    </div>
                </div>
               </div>

            </div>
        </>
    )
}

export default Signup
