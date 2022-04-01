import React from 'react';
import '../css/home.css'

const Home = () => {
        return (
                <div>
                       
                        <div className='concept-wrap'>
                                        <div className='wave'></div>
                                        </div>
                                        <div className='btn-wrap'>
                                        <div>
                                                <div className='cnt cnt-4'><p className='text'>Student</p>
                                                        <i className='icon' data-feather="chevron-right"></i>
                                                </div>
                                        </div>
                        </div>

                        <div className='concept-wrap'>
                                        <div className='wave'></div>
                                        </div>
                                        <div className='btn-wrap'>
                                        <div>
                                                <div className='cnt cnt-4'><p className='text'>Staff</p>
                                                        <i className='icon' data-feather="chevron-right"></i>
                                                </div>
                                        </div>
                        </div>

                </div>
        )
}

export default Home;