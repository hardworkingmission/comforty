import React from 'react';
import './HeaderMiddle.css'

const HeaderMiddle = () => {
    return (
        <div className='header-middle'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-12 col-12 py-1 text-lg-start text-md-start text-sm-center text-center">
                        <h4 className='mb-0'><i className="fas fa-couch"></i>Comforty</h4>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                        <div className="d-flex search-box justify-content-center py-2">
                            <input className=''  type="search" name="" id="" placeholder='Search Here..'/>
                            <button className='search-btn'><i className="fas fa-search " id='search-icon'></i></button>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                        <div className='d-flex justify-content-lg-end justify-content-md-end justify-content-sm-center justify-content-center gap-3 py-2'>
                            <div className="cart bg-white py-1 px-2 rounded"><i className="fas fa-shopping-cart me-1"></i>Cart <div className="d-inline ms-1">1</div>
                            </div>
                            <div className="whitelist bg-white py-1 px-2 rounded"><i class="far fa-heart"></i></div>
                            <div className="register bg-white py-1 px-2 rounded"><i class="far fa-user"></i></div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default HeaderMiddle;