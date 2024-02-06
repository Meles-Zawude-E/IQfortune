
import Printer from '../assets/benjamin-sander-bergum-fcLa4CNVnBQ-unsplash.jpg';
 import Value from '../assets/images/values.png';
 import Vission from '../assets/images/Vision.png';
 import Building from '../assets/images/ourBuilding.jpg';
 import '../styles/aboutUs.css'
 const AboutUs = () => {
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-lg-5 mt-4" style={{margin:'auto'}}>
          <h1 style={headingStyle}>Who we Are</h1>
          <p style={paragraphStyle}>Who we are IQ Fortune Advanced Technology PLC was founded in 2004 and is a distributor of 
            computer components, printers, copiers, toners, cartridges, papers, and all kinds of inks. As our reputation has grown and our financial capacity has expanded,
            IQ Fortune has now expanded into the exportation of oilseeds, pulses, and spices.</p>
        </div>
        <div className="col-lg-6" >
          <img src={Printer} alt="" style={imageStyle} />
        </div>
      </div>
      <div className="row" style={{ marginTop:'50px'}}>
        <div className="col-lg-6 ">
          <img src={Printer} alt="" style={imageStyle} />
        </div>
        <div className="col-lg-5 " style={{margin:'auto', marginTop:'50px'}}>
          <h1 style={headingStyle}>Why work with us</h1>
          <p style={paragraphStyle}>
            1. The company has more than 15 years of experience in retaining loyal customers through quality customer service and undeniable product quality.<br />
            2. We pride ourselves on our financial strength and unrestricted ability to supply products throughout the year with the highest quality products and unbeatable service.<br />
            3. Our business strategy is centered on achieving mutual benefits. We believe in cultivating prosperous relationships with our partners. To achieve this, we place great emphasis on open and effective communication, unwavering reliability, and timely delivery.
          </p>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-lg-5 mt-5 "  style={{ marginTop:'50px'}}>
          <h1 style={headingStyle}>Our Building</h1>
          <p style={paragraphStyle}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero eius expedita, 
            sequi dolorem in commodi itaque, voluptatibus fuga eum laudantium quaerat consequuntur ipsum.
             Quos alias optio facere vitae cum ad!</p>
        </div>
        <div className="col-lg-6 " style={{ margin:'auto'}}>
          <img src={Building} alt="" style={imageStyle} />
        </div>
      </div>

      <div className="row mt-5">
      <div className="col-lg-6" >
          <div className="card">
            <img src={Vission} alt="" className="card-img-top rounded-circle iconic-image" />
            <div className="card-body">
              <h4 className="card-title">Mission</h4>
              <p className="card-text mission-paragraph">Our mission is to seamlessly integrate cutting-edge technology solutions 
              and top-tier products into every aspect of our customers 
              lives, while providing exceptional service and support, unparalleled quality, reliability, 
              and delivery every step of the way.</p>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="card">
            <img src={Value} alt="" className="card-img-top rounded-circle iconic-image" />
            <div className="card-body">
              <h4 className="card-title">Values</h4>
              <ul className="list-unstyled values-list">
                <li>Professionalism</li>
                <li>Customer centric approach</li>
                <li>Innovation and adaptability</li>
                <li>Reliability and dependability</li>
                <li>Sustainability and responsibility</li>
                <li>Quality assurance</li>
              </ul>
            </div>
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default AboutUs;

const headingStyle = {
  fontSize: '24px',
  fontWeight: 'bold',
  marginBottom: '20px',
};

const paragraphStyle = {
  fontSize: '16px',
  lineHeight: '1.5',
  marginBottom: '20px',
  textAlign: 'justify',
};

const imageStyle = {
  width: '100%',
  height: '450px',
  marginBottom: '20px',
};

