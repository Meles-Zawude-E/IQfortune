import { useState } from 'react';
import WhitePea from '../assets/images/White_peas_been.jpg';
import ReadKidneyBeen from '../assets/images/red_kidney_beans.jpg';
import SoyBeen from '../assets/images/soy_beans.jpg';
import Chickpea from '../assets/images/Check_peas.jpg';
import WhiteKidneyBean from '../assets/images/white_kedney_bean.jpg';
import Pigeonbean from '../assets/images/pigon_peas.jpg';
import Greenmungbean from '../assets/images/green_mung_been.jpg';
import Redspeckledbean from '../assets/images/red_speakedled_beean.jpg';
import Whitishhumera from '../assets/images/Whitish humera sesame seed.jpg';
import Pintobeans from '../assets/images/Pinto beans.jpg';
import Peanut from '../assets/images/Peanuts.jpg';
import Turmericfinger from '../assets/images/turmericFInger.jpg';
import Blackcumin from '../assets/images/Black_cumin_seed.jpg';
import Longpepper from '../assets/images/Long pepper.jpg';
import Linseedflaxseed from '../assets/images/Flaxseed.jpg';
import LargeLightBrown from '../assets/images/Large light brown kideny beans.jpg';
import NigerSeed from '../assets/images/Niger seed.jpg';


const Products = () => {
  const [showMore, setShowMore] = useState(false);
  const [rowsToShow, setRowsToShow] = useState(1);

  const toggleShowMore = () => {
    setShowMore(!showMore);
    if (showMore) {
      setRowsToShow(1);
    } else {
      setRowsToShow(Infinity); 
    }
  };

  return (
    <div className='container'>
      <div className="row mt-5">
        <div className="col-lg-6">
          <div className="card">
            <div className="card-body">
              <p className="card-text mission-paragraph">Our mission is to seamlessly integrate cutting-edge technology solutions 
              and top-tier products into every aspect of our customers 
              lives, while providing exceptional service and support, unparalleled quality, reliability, 
              and delivery every step of the way.</p>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="card">
            <div className="card-body">
              <a href="https://www.instagram.com/abm_gem?igsh=MXgxOXFubGUxZjVibQ==" className="btn btn-primary"> GEM STONE</a>
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-5">
        {productCards.slice(0, rowsToShow * 4).map((card, index) => (
          <div className="col-lg-3 mb-4" key={index}>
            <div className="card">
              <img src={card.image} alt="" className="card-img-top rounded-circle iconic-image" />
              <div className="card-body">
                <h4 className="card-title">{card.title}</h4>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-5 d-flex justify-content-center">
        <button className='glow-on-hover' onClick={toggleShowMore}>
          {showMore ? 'Show less' : 'Show more'}
        </button>
      </div>
    </div>
  );
}

// Define your product cards data
const productCards = [
  { image: WhitePea, title: "White Pea" },
  { image: ReadKidneyBeen, title: "Red Kidney Bean" },
  { image: SoyBeen, title: "Soy Bean" },
  { image: Chickpea, title: "Chickpea" },
  { image: WhiteKidneyBean, title: "White Kidney Bean" },
  { image: Pigeonbean, title: "Pigeon Bean" },
  { image: Greenmungbean, title: "Green Mung Bean" },
  { image: Redspeckledbean, title: "Red Speckled Bean" },
  { image: Whitishhumera, title: "Whitish Humera Sesame" },
  { image: Pintobeans, title: "Pinto Beans" },
  { image: Peanut, title: "Peanut" },
  { image: Turmericfinger, title: "Turmeric Finger" },
  { image: Blackcumin, title: "Black Cumin" },
  { image: Longpepper, title: "Long Pepper" },
  { image: Linseedflaxseed, title: "Linseed/Flaxseed" },
  { image: LargeLightBrown, title: "Large Light Brown Kidney Peas" },
  { image: NigerSeed, title: "Niger Seed" }
];

export default Products;
