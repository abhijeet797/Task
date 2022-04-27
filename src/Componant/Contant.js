import React from 'react'
import '../Css/Contant.css'
// import PlayStoreImg from '../Image/playstore.jpg'
import GoogleBook from '../Image/googleBook.png'
function Contant() {
    return (
        <>
            <section id="contant">
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-3 Card_box'>
                            <div className="card" >
                                <div className="Card_head">
                                    <i className="fa-regular fa-award"></i>
                                    <div className="card-body">
                                        <small>Instaread</small>
                                        <h5 className="card-title">Astrophysics for People in Hurry</h5>
                                        <p className="card-text">Neil De Grasse Tyson</p>
                                    </div>
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">Key Insights & Analysis</li>
                                </ul>
                                <div className='image'>
                                  
                                </div>
                            </div>
                        </div>
                        <div className='col-md-9 Text'>
                            <h2>Astrophysics for People in Hurry's Summary</h2>
                            <h5>Key Insights & Analysis</h5>
                            <p>Kelly Borgan, MD Wwidth Kristin Loberg</p>
                            <div className='tab_list'>

                                <div className='tab'> <i className="fa-solid fa-newspaper"></i>  18 read min <div className='TabHover'><img src={GoogleBook} className="hover_img"/> Read</div></div>
                                <div className='tab'>  <i className="fa-light fa-headphones-simple"></i>14 read listen  <div className='TabHover'> <img src={GoogleBook} className="hover_img"/>listen</div> </div>
                                <div className='tab'> <i className="fa-regular fa-bookmark"></i> Add to Library <div className='TabHover'><img src={GoogleBook} className="hover_img"/>Library </div></div>
                                <div className='tab'> <i className="fa-light fa-cart-shopping"></i> Buy Book <div className='TabHover'><img src={GoogleBook} className="hover_img"/> Google Book</div></div>
                            </div>
                            <button className="btn btn-secondary">Business & Finance</button>
                            <button className="btn btn-secondary mx-2">Business & Finance</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contant