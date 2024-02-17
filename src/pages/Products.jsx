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
import WollegaS from '../assets/images/WollegaS.jpg'
import Lupin from '../assets/images/Lupin.jpg'
import NigerSeed from '../assets/images/Niger seed.jpg';
import Redish from '../assets/images/Redish.jpg'

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
    { 
      image: WollegaS, 
      title: "Wollega Sesame Seed", 
      info: "Color Whitish\n\nPurity Min 98.5 %\n\nAdmixture Max 1.5 %\n\nDiscolorization Max 1.0%\n\nChemical requirements:\n\nMoisture content Max. 7.0 %\n\nOil content Min. 52%\n\nFree fatty acid Max. 2%" 
   },
   
   { 
    image: Whitishhumera, 
    title: "Whitish Humera", 
    info: "color – whitish\n\npurity – 99%\n\nadmixture – max 1%\n\ndecolorizations – max 1%\n\noil content – min. 50%\n\nfree fatty acid – max 2%\n\ncontainer stuffing 19mt per 20fcl" 
   },
   { 
    image: Redish, 
    title: "Reddish Sesame seed", 
    // change image
    info: "Color Reddish\nPurity Min 98.0 %,\n Admixture Max 2.0 %\n Discolorization Max 1.0%\n Moisture content Max. 7.0 %\n Oil content Min. 51%\n Free fatty acid Max. 2%"
   },
   { 
    image: NigerSeed, 
    title: "Niger Seed", 
    info: "color: black\n\npurity: min 98.5%\n\nadmixture: max 1.5%\n\nmoisture content: max. 6.0%\n\noil content: min. 34%" 
    },
    { 
      image: Linseedflaxseed, 
      title: "Linseed/flaxseed", 
      info: "Linseed/Flaxseed\n\nColor: Brown\n\nPurity: Min 98.0%\n\nAdmixture: Max 2.0%\n\nMoisture content: Max. 8.0%\n\nOil content: Min. 35%" 
     
     },
     { 
      image: SoyBeen, 
      title: "Soy Bean", 
      info: "colour – natural yellow colour\n\npurity – min 96%\n\nforeign matter – max 1%\n\ndamaged kernels – max 2%\n\nprotein content (wet basis) – min 35%\n\noil content – min 18%\n\ntotal aflatoxin – not detected\n\nbean size (using caliper) – 5.11- 7.79mm\n\ncount – 670-720beans/100grams\n\nstuffing – 21mt per 20fcl" 
     },
     { 
      image: Peanut, 
      title: "Peanut", 
      info: "type – whole\n\ncolor – reddish\n\npurity – min 97.5%\n\nforeign matter – 2.5%\n\nimperfect – 11.5%\n\noil content – min 42%\n\ntotal aflatoxin – 15ppb max\n\nbean count – 160-190seeds per 100grams\n\nstuffing 19mt per 20fcl" 
     },
     { 
      image: ReadKidneyBeen, 
      title: "Red Kidney Bean", 
      info: "purity – min 96%\n\ndamaged/wrinkled/broken/cracked – 3.5%\n\ncount 450 – 500 beans/100grams\n\ncontrasting/other color – none\n\nforeign matter – none" 
      },

    { 
        image: WhitePea, 
        title: "White Pea", 
        info: "color – white color\n\npurity – min 98%\n\ndamaged/wrinkled/broken/cracked – max1.5%\n\ndiscolored/stain – max 1.5%\n\ncount – 670-720beans/100grams\n\nstuffing- 24mt per 20fcl" 
    },
   
    { 
      image: Greenmungbean, 
      title: "Green Mung Bean", 
      info: "foreign matter (ES ISO 605) zero\n\nbroken or damaged (ES ISO 605) zero\n\ninsect damaged (ES ISO 605) 0.02%\n\nalive or dead insects/weevils (visual) free\n\ndiscolored (ES ISO 605) 1.7%" 
    },
    { 
        image: Chickpea, 
        title: "Kabuli Chickpea", 
        info: "type – gondor\n\ncolor – natural yellow or brown color\n\npurity (sound chickpeas) – min 98%\n\nfree from dead or alive weevil\n\ndamaged/wrinkled/broken – max 1%\n\nsize – 25 % (6mm), 50% (7mm), 25% (8mm)" 
    },
    { 
      image: WhiteKidneyBean, 
      title: "Desi ChickPea", 
      info: "Type – Desi\n\nPurity – Min 97%\n\nForeign Matter – Max 1%\n\nBlack Chick Peas – Max 1%\\Size – 4.5-5.5mm" 
    },
    { 
      image: Pintobeans, 
      title: "Pinto Beans", 
      info: "purity- min 96%\n\nforeign matter – none\n\ndamaged/wrinkled/broken/cracked – max 1.5%\n\ncontrasting/other color – max 1.5%\n\ncount – 285-310beans/100grams\n\nstuffing – 24mt per 2020fc" 
    },
    { 
        image: LargeLightBrown, 
        title: "Large Light Brown Kidney Peas", 
        info: "Color – Cream, Purity - 97%, Foreign matter – None, Damaged/Wrinkled/Broken/Cracked – Max 1.5%, Contrasting/other color – Max 1.5%, Count – 225-235 Beans/100grams, Stuffing – 24MTs 20FCL" 
    },
    { 
      image: Pigeonbean, 
      title: "Pigeon Bean", 
      info: "purity – min 97%\n\nforeign matter – max 1%\n\ncount – 730 – 750 beans/100grams\n\ncontainer stuffing – 23/24mt per 20fcl" 
    },
    { 
      image: Lupin, 
      title: "Lupin", 
      info: "Quality: machine cleaned\nPurity 98% min\nMachine cleaned moisture 12% max\nDamaged 0.8% max\nForeign materials 2% max\nFit for human consumption\nFree from any abnormal smell or odor and fumigated prior to shipment." 
    },
    
    { 
      image: Redspeckledbean, 
      title: "Red Speckled Bean", 
      info: "Two types with different origin\nColor- light speckled (red)\nPurity – Min 96%\nForeign matter – None\nDamaged/wrinkled/broken/cracked – Max 1.5%\nContrasting/other color- Max 1.5%\nCount – 220-260 Beans/100grams\nStuffing – 24MT per 20 FCL" 
    },
    { 
      image: Blackcumin, 
      title: "Black Cumin", 
      info: "Type Machine cleaned\nColor Uniform black color seeds\nPurity Min 99%\nAdmixture Max 1.0%\nMoisture content Max. 8.0%" 
    
    },
    { 
      image: Turmericfinger, 
      title: "Turmeric Finger", 
      info: "type – whole turmeric – finger/bulb mixed\n\ncolor – yellow\n\nodor – characteristic\n\npurity turmeric – finger min 67%, bulb 33%\n\nforeign material – max 0.5%\n\nstuffing – 28mt per 40fcl" 
     },
     { 
      image: Longpepper, 
      title: "Long Pepper", 
      info: "purity: 95.1%, field damage: 2.38%, molded: 1.76%\n\ntotal defect(damage): 4.14% total foreign matter: 0.86% moisture content: 13%" 
     },   
];



return (
  <div className='container'>
    <div className="row mt-5">
      <div className="col-lg-6">
        <div className="card">
          <div className="card-body">
            <p className="card-text mission-paragraph">From the fertile fields to the global market, IQFortune has mastered every aspect of the supply chain,
             ensuring the delivery of premium quality products to customers around the world. As eco-conscious
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
