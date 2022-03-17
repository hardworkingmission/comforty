import React from 'react'
import './HeaderTop.css'

function HeaderTop() {
  return (
    <div className="bg-primary">
        <div className="container">
            <div className='row '>
                <div className="col-lg-6 col-md-6 col-sm-12 col-12 py-2 text-white ">
                    <p className="mb-0 text-sm-center text-center text-lg-start"><i class="fas fa-check me-1"></i>Free Shipping On All Order Over $50</p>

                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 col-12 py-2 text-white">
                    <ul className="list-unstyled d-flex justify-content-lg-end justify-content-center justify-content-sm-center justify-content-md-end mb-0 gap-3">
                        <li>
                            <select className='select-top'>
                                <option value='Englisg'>Eng</option>
                                <option value='Englisg'>Russian</option>
                                <option value='Englisg'>Bengli</option>
                            </select>
                        </li>
                        <li>FAQ</li>
                        <li><i class="far fa-question-circle me-1"></i>Need Help</li>
                    </ul>

                </div>
            </div>
        </div>
    </div>
  )
}

export default HeaderTop