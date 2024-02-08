
import delImage from '../assets/del.png';
import cannonImage from '../assets/cannon.png';
import ciscoImage from '../assets/cisco.png';
import HP from '../assets/hp.png';
import SinerLine from '../assets/sinarline-copy.png';
import Richo from '../assets/ricoh-copy.png';
import Unomat from '../assets/unomat-copy.png';
import Printer from '../assets/benjamin-sander-bergum-fcLa4CNVnBQ-unsplash.jpg';
import '../styles/product.css';

export default function Import() {
  return (
    <div className="container">
      <div className="row mt-4">
        <div className="col-lg-3 mb-4">
          <div className="card">
            <img src={delImage} alt="" className="card-img-top rounded-circle iconic-image" />
            <div className="card-body">
            </div>
          </div>
        </div>
        <div className="col-lg-3 mb-4">
          <div className="card">
            <img src={cannonImage} alt="" className="card-img-top rounded-circle iconic-image" />
            <div className="card-body">
            </div>
          </div>
        </div>
        <div className="col-lg-3 mb-4">
          <div className="card">
            <img src={ciscoImage} alt="" className="card-img-top rounded-circle iconic-image" />
            <div className="card-body">
            </div>
          </div>
        </div>
        <div className="col-lg-3 mb-4">
          <div className="card">
            <img src={HP} alt="" className="card-img-top rounded-circle iconic-image" />
            <div className="card-body">
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-3 mb-4">
          <div className="card">
            <img src={SinerLine} alt="" className="card-img-top rounded-circle iconic-image" />
            <div className="card-body">
            </div>
          </div>
        </div>
        <div className="col-lg-3 mb-4">
          <div className="card">
            <img src={Richo} alt="" className="card-img-top rounded-circle iconic-image" />
            <div className="card-body">
            </div>
          </div>
        </div>
        <div className="col-lg-3 mb-4">
          <div className="card">
            <img src={Unomat} alt="" className="card-img-top rounded-circle iconic-image" />
            <div className="card-body">
            </div>
          </div>
        </div>
        <div className="col-lg-3 mb-4">
          <div className="card">
            <img src={Printer} alt="" className="card-img-top rounded-circle iconic-image" />
            <div className="card-body">
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
