import React from 'react'
import { Link} from 'react-router-dom';
import video from './inventroy.mp4';

function Home() {
  return (
    <div >
      {/* <div className='home-page'>
        <div className='home-div'>
        <p className=''>Welcome</p>
        <h1 >To Inventroy Solutions </h1>
        </div>
      </div> */}
      <div id="cliping">
        <div>
          <div id="tagline">
            <h1>Pakistan  Inventroy Solutions </h1>
            <h4>1.24 Million Happy Customers Daily</h4>
            <Link to="/login">
              <button className='buy'>Buy Now!</button>
            </Link>
          </div>
        </div>
        <video autoPlay muted loop id="myVideo">
          {/* <source src={video1} type="video/mp4" /> */}
          <source src={video} type="video/mp4" />

        </video>
      </div>

      <div id="benifits">
        <div><i class="fas fa-wallet"></i>
          <h2>Affordable Rates</h2>
          <p>Inventroy Solutions offers cheapest rate to buy products across Pakistan</p></div>
        <div><i class="fas fa-star"></i>
          <h2>Best Service</h2>
          <p>We provide services with more than 30,000 employees working at you service</p></div>
        <div><i class="fas fa-couch"></i>
          <h2>Comfortable Buying</h2>
          <p>Be willing to be uncomfortable. Be comfortable being uncomfortable. It may get tough, but it's a small price to pay for living a dream</p></div>
      </div>



    </div>
  )
}

export default Home