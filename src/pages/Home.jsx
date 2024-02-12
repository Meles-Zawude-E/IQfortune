import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/splide/css';
import '../styles/home.css';
import delImage from '../assets/del.png';
import cannonImage from '../assets/cannon.png';
import ciscoImage from '../assets/cisco.png';
import HP from '../assets/hp.png';
import SinerLine from '../assets/sinarline-copy.png';
import Richo from '../assets/ricoh-copy.png';
import Unomat from '../assets/unomat-copy.png';
import greatCan from '../assets/greateCanon.jpg';
import BigEpson from '../assets/epsonbig.jpg';
import Buiding from '../assets/biulding.jpg';
import Will from '../assets/base1.png';
import Quality from '../assets/quality.png'
import Responseviness from '../assets/respons.png'
import Trust from '../assets/base3.png'
import Relations from '../assets/respons.png'
import Epison from '../assets/epsonlogo.png'
import Background from '../assets/images/back1.png'
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import {  Button } from '@mui/material';
import { NavLink } from 'react-router-dom';

export default function Home() {
  const stripedRowImages = [delImage, cannonImage, ciscoImage,Epison, HP, SinerLine, Richo, Unomat];

  const splideOptions = {
    type: 'slide',
    width: '100%',
    perPage: 5,
    pagination: false,
    rewind: true,
    autoplay: {
      enabled: true,
    },
  };

  const splideOptionss = {
    type: 'slide',
    heightRatio: 0.5,
    pagination: false,
    width:'100%',
    height:530, 
    rewind: true,
    rewindByDrag: true,
    autoplay: {
      enabled:true,
      delay: 5000,
    },
  };
  return (
    <> 
    <section className="hero">
    <Splide options={splideOptionss} className="background-slider">
        <SplideSlide>
          <div className="hero-page" style={{ background: 'linear-gradient(to bottom, #34314c, #0d5f75)'}}>
            <div className="hero-content">
              <h2>Your One Stop Solution for Office Equipments!</h2>
              <h3>A Pioneer Business</h3>
              <hr style={{ height: '2px', backgroundColor: 'white', color: 'white' }} />
              <h3>Authorised Canon service center</h3>
              <button className="btn btn-info"><a href="https://en.canon-cna.com/support/consumer_products/contact_support/ethiopia.html" role="button"><ExitToAppIcon /></a></button>
            </div>
          </div>
        </SplideSlide>

        <SplideSlide>
          <div className="hero-page" style={{ backgroundImage: `url(${Background})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
            <div className="hero-content">
              <h2>Another Hero Page Content</h2>
              <h3>This is Different Content</h3>
              <hr style={{ height: '2px', backgroundColor: 'white', color: 'white' }} />
              <h3>Some other details here</h3>
              <Button variant="contained" color="primary" component={NavLink} to="/products" style={{ marginTop: '10px' }}>
              <ExitToAppIcon />
              </Button>
            </div>
          </div>
        </SplideSlide>
      </Splide>
    </section>
      <div className='container mt-5'>
        <Splide options={splideOptions} className="custom-splide mx-auto">
          {stripedRowImages.map((image, index) => (
            <SplideSlide key={index} >
              <img src={image} alt={`Image ${index + 1}`} className="img-fluid" />
            </SplideSlide>
          ))}
        </Splide>
      </div>

      <div className="container mt-5 border border-light mb-5 disp-card">
        <div className="row">
          <div className="col-md-4 mt-3">
            <div className="card">
              <img src={greatCan} alt="Mike" className="card-img-top img-fluid"/>
              <div className="card-body">
                <h5 className="card-title">CANON AUTHORIZED PARTNER</h5>
              </div>
            </div>
          </div>

          <div className="col-md-4 mt-3">
            <div className="card">
              <img src={BigEpson} alt="Jane" className="card-img-top img-fluid"/>
              <div className="card-body">
                <h5 className="card-title">WELL ORGANIZED SERVICE CENTER</h5>
              </div>
            </div>
          </div>

          <div className="col-md-4 mt-3">
            <div className="card">
              <img src={Buiding} alt="John" className="card-img-top img-fluid"/>
              <div className="card-body">
                <h5 className="card-title">SUFFICIENT STOCK FOR ALL YOUR NEEDS</h5>
              </div>
            </div>
          </div>
        </div>
      </div>

    <div className="container mt-2 disp-card">
    <h2 className='mb-5'>OUR FORTUE TO SUCCESS</h2>
    <div className='row'>
      <div className='center-head'>
        <div className='col-lg-4'>
          <img src={Will} alt="" className='img-circle img-fluid' />
          <div className="badge">01</div>
          <h4>Goodwill</h4>
          <p>Generating brand recognition ”Authorized Agent” through different marketing.</p>
        </div>
        <div className='col-lg-4'>
          <img src={Quality} alt="" className="img-fluid"/>
          <div className="badge">02</div>
          <h4>Quality</h4>
          <p>Providing quality products right the first time, offering 100% guarantee.</p>
        </div>
        <div className='col-lg-4'>
          <img src={Responseviness} alt="" className="img-fluid"/>
          <div className="badge">03</div>
          <h4>Responsiveness</h4>
          <p>Responding promptly to customer needs, inquiries, and complaints.</p>
        </div>
      </div>
    </div>
    <div className='row mt-4'>
      <div className='center-head'>
        <div className='col-lg-4' style={{margin:'auto'}}>
          <img src={Trust} alt="" className='img-circle img-fluid' />
          <div className="badge">04</div>
          <h4>Trust</h4>
          <p>Building trust with customers through transparent and ethical business practices.</p>
        </div>
        <div className='col-lg-4'style={{marginRight:'150px'}}>
          <img src={Relations} alt="" className="img-fluid"/>
          <div className="badge">05</div>
          <h4>Customer Relations</h4>
          <p>Establishing and maintaining strong customer relationships through effective communication.</p>
        </div>
      </div>
    </div>
  </div>
    </>
  );
}
