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
import Lupin from '../assets/images/Flaxseed.jpg'
import WhitePeaBean from '../assets/images/soy_beans.jpg'

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
    { image: ReadKidneyBeen, title: "Red Kidney Bean",info: "Purity – Min 96%\nDamaged/Wrinkled/Broken/Cracked – 3.5%\nCount 450 – 500 Beans/100grams\nContrasting/other color – None\nForeign matter – None" },
    { image: SoyBeen, title: "Soy Bean", info: "Colour – Natural Yellow Colour\nPurity – Min 96%\nForeign Matter – Max 1%\nDamaged Kernels – Max 2%\nProtein Content (wet basis) – Min 35%\nOil Content – Min 18%\nTotal Aflatoxin – not detected\nBean size (using Caliper) – 5.11- 7.79mm\nCount – 670-720Beans/100grams\nStuffing – 21MT per 20FCL" },
    { image: Chickpea, title: "Chickpea", info: "Type – Gondor\nColor – Natural Yellow or brown color\nPurity (sound chickpeas) – Min 98%\nFree from dead or alive weevil\nDamaged/Wrinkled/Broken – max 1%\nSize – 25 % (6mm), 50% (7mm), 25% (8mm)" },
    { image: WhiteKidneyBean, title: "White Kidney Bean", info: "Information for White Kidney Bean" },
    { image: Pigeonbean, title: "Pigeon Bean", info: "Purity – Min 97%\nForeign Matter – Max 1%\nCount – 730 – 750 Beans/100grams\nContainer stuffing – 23/24MT per 20FCL" },
    { image: Greenmungbean, title: "Green Mung Bean", info: "Foreign Matter (ES ISO 605) Zero\nBroken or damaged (ES ISO 605) Zero\nInsect Damaged (ES ISO 605) 0.02%\nAlive or dead Insects/WEEVILS (Visual) Free\nDiscolored (ES ISO 605) 1.7%" },
    { image: Redspeckledbean, title: "Red Speckled Bean", info: "Color- light speckled (red)\nPurity – Min 96%\nForeign matter – None\nDamaged/wrinkled/broken/cracked – Max 1.5%\nContrasting/other color- Max 1.5%\nCount – 220-260 Beans/100grams\nStuffing – 24MT per 20 FCL" },
    { image: Whitishhumera, title: "Whitish Humera Sesame", info: "Color – whitish\nPurity – 99%\nAdmixture – Max 1%\nDecolorizations – Max 1%\nOil content – min. 50%\nFree fatty acid – Max 2%\nContainer stuffing 19MT per 20FCL" },
    { image: Pintobeans, title: "Pinto Beans", info: "Purity- Min 96%\nForeign matter – None\nDamaged/wrinkled/broken/cracked – Max 1.5%\nContrasting/other color – Max 1.5%\nCount – 285-310Beans/100grams\nStuffing – 24MT per 2020FC" },
    { image: Peanut, title: "Peanut", info: "Type – whole\nColor – Reddish\nPurity – Min 97.5%\nForeign Matter – 2.5%\nImperfect – 11.5%\nOil Content – Min 42%\nTotal Aflatoxin – 15PPB max\nBean Count – 160-190Seeds per 100Grams\nStuffing 19MT per 20FCL" },
    { image: Turmericfinger, title: "Turmeric Finger", info: "Type – Whole Turmeric – Finger/bulb mixed\nColor – Yellow\nOdor – Characteristic\nPurity Turmeric – Finger min 67%, Bulb 33%\nForeign Material – Max 0.5%\nStuffing – 28MT per 40FCL" },
    { image: Blackcumin, title: "Black Cumin", info: "Purity 99%, Apperance: Uniformaly Black Color.\nAdmixture/Impurites: 1.0% Max, Moisture Content: 10% Max" },
    { image: Longpepper, title: "Long Pepper", info: "Purity: 95.1%, Field Damage: 2.38%, Molded: 1.76%\nTotal Defect(Damage): 4.14% Total Foreign Matter: 0.86% Moisture Content: 13%" },
    { image: Linseedflaxseed, title: "Linseed/Flaxseed", info: "QUALITY : MACHINE CLEANED PURITY : 98.5% MIN ADMIXTURE : 1.5% OIL CONTENT : 45% MIN MOISTURE : 10% MAX FIT FOR HUMAN CONSUMTION FREE FROM DEAD AND ALIVE INSECTS OR WEEVILS FUMIGATED PRIOR SHIPMNET." },
    { image: LargeLightBrown, title: "Large Light Brown Kidney Peas", info: "Color – Cream\nPurity – 97%\nForeign matter – None\nDamaged/Wrinkled/Broken/Cracked – Max 1.5%\nContrasting/other color – Max 1.5%\nCount – 225-235 Beans/100grams\nStuffing – 24MTs 20FCL" },
    { image: NigerSeed, title: "Niger Seed", info: "QUALITY : MACHINE CLEANED PURITY : 98.5% MIN OIL CONTENT :-34% MIN ADMIXTURE :-1.5% MAX MOISTURE : 7% MAX FFA : 1% MAX FIT FOR HUMAN CONSUMTION FREE FROM DEAD AND ALIVE INSECTS OR WEEVILS FUMIGATED PRIOR SHIPMNET." },
    { image: Lupin, title: "Lupin", info: "QUALITY : MACHINE CLEANED PURITY : 98% MIN,MACHINE CLEANED MOISTURE : 12% MAX DAMAGED : 0.8% MAX FOREIGN MATERIALS :2% MAX FIT FOR HUMAN CONSUMPTION FIT FOR HUMAN CONSUMTION FREE FROM ANY ABNORMAL SMELL OR ODOR AND FUMIGATED PRIOR TO SHIPMENT." },
    { image: WhitePeaBean, title: "White Pea Bean", info: "Purity: 99% Min., Total Admixture: 1% Max., Moisture: 12% Max., Machine cleaned + belt hand picked Free from live/dead weevils and weevils infected holes, free from Odor and Molds, well dried and well fumigated prior to shipment Packing: In new export-worthy PP bags." },
    { image: LargeLightBrown, title: "Large Light Brown Kidney Peas", info: "Information for Large Light Brown Kidney Peas" },
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