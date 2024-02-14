import { useState } from 'react';
import gemstoneImage from '../assets/images/gemstone.jpg';
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

import '../styles/product.css';

const Products = () => {

  const [showMore, setShowMore] = useState(false);
  const [rowsToShow, setRowsToShow] = useState(1);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const toggleShowMore = () => {
    setShowMore(!showMore);
    if (showMore) {
      setRowsToShow(1);
    } else {
      setRowsToShow(Infinity);
    }
  };

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };


  const productCards = [
    { image: WhitePea, title: "White Pea", info: "Color – White color\nPurity – Min 98%\nDamaged/Wrinkled/Broken/Cracked – Max1.5%\nDiscolored/stain – Max 1.5%\nCount – 670-720Beans/100grams\nStuffing- 24MT per 20FCL" },
    { image: ReadKidneyBeen, title: "Red Kidney Bean",info: "Color – White color\nPurity – Min 98%\nDamaged/Wrinkled/Broken/Cracked – Max1.5%\nDiscolored/stain – Max 1.5%\nCount – 670-720Beans/100grams\nStuffing- 24MT per 20FCL"},
    { image: SoyBeen, title: "Soy Bean", info: "Color – White color\nPurity – Min 98%\nDamaged/Wrinkled/Broken/Cracked – Max1.5%\nDiscolored/stain – Max 1.5%\nCount – 670-720Beans/100grams\nStuffing- 24MT per 20FCL"},
    { image: Chickpea, title: "Chickpea", info: "Color – White color\nPurity – Min 98%\nDamaged/Wrinkled/Broken/Cracked – Max1.5%\nDiscolored/stain – Max 1.5%\nCount – 670-720Beans/100grams\nStuffing- 24MT per 20FCL" },
    { image: WhiteKidneyBean, title: "White Kidney Bean", info: "Information for White Kidney Bean" },
    { image: Pigeonbean, title: "Pigeon Bean", info: "Information for Pigeon Bean" },
    { image: Greenmungbean, title: "Green Mung Bean", info: "Information for Green Mung Bean" },
    { image: Redspeckledbean, title: "Red Speckled Bean", info: "Information for Red Speckled Bean" },
    { image: Whitishhumera, title: "Whitish Humera Sesame", info: "Information for Whitish Humera Sesame" },
    { image: Pintobeans, title: "Pinto Beans", info: "Information for Pinto Beans" },
    { image: Peanut, title: "Peanut", info: "Information for Peanut" },
    { image: Turmericfinger, title: "Turmeric Finger", info: "Information for Turmeric Finger" },
    { image: Blackcumin, title: "Black Cumin", info: "Information for Black Cumin" },
    { image: Longpepper, title: "Long Pepper", info: "Information for Long Pepper" },
    { image: Linseedflaxseed, title: "Linseed/Flaxseed", info: "Information for Linseed/Flaxseed" },
    { image: LargeLightBrown, title: "Large Light Brown Kidney Peas", info: "Information for Large Light Brown Kidney Peas" },
    { image: NigerSeed, title: "Niger Seed", info: "Information for Niger Seed" },
    { image: LargeLightBrown, title: "Large Light Brown Kidney Peas", info: "Information for Large Light Brown Kidney Peas" },
    { image: NigerSeed, title: "Niger Seed", info: "Information for Niger Seed" },
    { image: NigerSeed, title: "Niger Seed", info: "Information for Niger Seed" }
  ];

  return (
    <div className='container'>
      <div className="row mt-5">
        <div className="col-lg-6">
          <div className="card">
            <div className="card-body">
              <p className="card-text mission-paragraph">From the fertile fields to the global market, IQFortune has mastered every aspect of the supply chain,
               ensuring the delivery of premium quality products to customers around the world.As eco-conscious
                company we help farmers in maximizing productivity while minimizing environmental impact.</p>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="card" style={{backgroundImage: `url(${gemstoneImage})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
            <div className="card-body">
              <button className='btn btn-info mt-3'> <a href="https://www.instagram.com/abm_gem?igsh=MXgxOXFubGUxZjVibQ==" className="btn btn-info" style={{color:'white'}}> GEM STONE</a></button>
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-5">
        {productCards.slice(0, rowsToShow * 4).map((card, index) => (
          <div className="col-lg-3 mb-4" key={index}>
            <div
              className={`card position-relative ${hoveredIndex === index ? 'expanded' : ''}`}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <img src={card.image} alt="" className="card-img-top rounded-circle iconic-image" />
              <div className="card-body">
                <h5 className="card-title">{card.title}</h5>
                {hoveredIndex === index && (
                  <div className="card-overlay">
                    <p className="card-text">{card.info}</p>
                  </div>
                )}
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

export default Products;