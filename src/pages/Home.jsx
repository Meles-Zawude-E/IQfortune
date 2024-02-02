import Slider from 'react-slick';
import '../styles/home.css';
import delImage from '../assets/del.png';
import cannonImage from '../assets/cannon.png';
import ciscoImage from '../assets/cisco.png';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import greatCan from '../assets/greateCanon.jpg';
import BigEpson from '../assets/epsonbig.jpg';
import Buiding from '../assets/biulding.jpg';
import Will from '../assets/base1.png';
import Quality from '../assets/quality.png'
import Responseviness from '../assets/respons.png'
import Trust from '../assets/base3.png'
import Relations from '../assets/respons.png'
import HP from '../assets/hp.png'
import SinerLine from '../assets/sinarline-copy.png'
import Richo from '../assets/ricoh-copy.png'
import Unomat from '../assets/unomat-copy.png'
import Printer from '../assets/benjamin-sander-bergum-fcLa4CNVnBQ-unsplash.jpg'
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';


export default function Home() {
  const stripedRowImages = [delImage, cannonImage, ciscoImage,  HP, SinerLine, Richo, Unomat];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    customStyles: {
      maxHeight: '100px', 
    },
  };

  return (
    <>
    <div>
      <div className="first-face">
        <div className="text-column">
          <h2 className='mb-4'>YOUR ONE STOP SOLUTION FOR OFFICE EQUIPMENTS!</h2>
          <h3>A Pioneer Business</h3>
          <p>
            IQ Fortune Advanced Technology P.L.C. is engaged in selling computers,
            network equipment, office machinery, and computer accessories with good
            reputations and business success.
          </p>
         

          <Button variant="contained" component="button" sx={{height:"50px"}}>
           <Link href="https://en.canon-cna.com/support/consumer_products/contact_support/ethiopia.html" 
           color="inherit" style={{textDecoration: "none"}}>
             Canon Authorised Service Center
           </Link>
          </Button>
          
        </div>
        <div className="image-column">
          <img src={Printer} alt="Canon" style={{height:"100%"}}/>
        </div>
      </div>

      <div className='container mt-5'>
        <Slider {...sliderSettings}>
          {stripedRowImages.map((image, index) => (
            <div key={index}>
              <img src={image} alt={`Image ${index + 1}`} style={{ maxWidth: '100%', height: '70px' }} />
            </div>
          ))}
        </Slider>
      </div>

      <hr style={{ color: "red" }} />
      <hr />

      <div className="container mt-5 border border-light mb-5 disp-card">
        <div className="row">
          <div className="column">
            <div className="card">
              <img src={greatCan} alt="Mike" style={{ width: "100%" }} />
              <div className="mt-container">
                <h4> CANON AUTHORIZED PARTNER <p></p> <p></p> </h4>
              </div>
            </div>
          </div>

          <div className="column">
            <div className="card">
              <img src={BigEpson} alt="Jane" style={{ width: "100%" }} />
              <div className="mt-container">
                <h4>WELL ORGANIZED SERVICE CENTER</h4>
              </div>
            </div>
          </div>

          <div className="column">
            <div className="card">
              <img src={Buiding} alt="John" style={{ width: "100%" }} />
              <div className="mt-container">
                <h4>SUFFICIENT STOCK FOR ALL YOUR NEEDS</h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='container mt-2 disp-card'>
        <h2 className='mb-5'>OUR FORTUE TO SUCCESS</h2>
        <div className='row'>
          <div className='center-head'>
            <div className='col-lg-4 '>
              <img src={Will} alt="" className='img-circle' />
              <div className="badge">01</div>
              <h4>Goodwill</h4>
              <p>Generating brand recognition ”Authorized Agent” through different marketing.</p>
            </div>
            <div className='col-lg-4 '>
              <img src={Quality} alt="" />
              <div className="badge">02</div>
              <h4>Quality</h4>
              <p>Providing quality products right the first time, offering 100% guarantee.</p>
            </div>
            <div className='col-lg-4 '>
              <img src={Responseviness} alt="" />
              <div className="badge">03</div>
              <h4>Responsiveness</h4>
              <p>Responding promptly to customer needs, inquiries, and complaints.</p>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='center-head'>
            <div className='col-lg-4 '>
              <img src={Trust} alt="" className='img-circle' />
              <div className="badge">04</div>
              <h4>Trust</h4>
              <p>Building trust with customers through transparent and ethical business practices.</p>
            </div>
            <div className='col-lg-4 '>
              <img src={Relations} alt="" />
              <div className="badge">05</div>
              <h4>Customer Relations</h4>
              <p>Establishing and maintaining strong customer relationships through effective communication.</p>
            </div>
          </div>
        </div>
      </div>
      <div className='f-p mt-5'>
        <h2 style={{fontFamily:"Montserrat"}}>CHECK OUR VARIOUS SERVICES</h2>
        <p>IQFortune Advanced Technology will serve you as one stop solution for<p>all your office IT needs.</p> </p>
        
        <button className='btn-r'><a href="#">Check Now</a></button>
      </div>
    </div>
    </>
    
  );
}