import './footer.css';

export default function Footer() {
  return (
    <div>
      <footer style={{ color: "white", marginTop: "30px" }}>
        <div className="container mt-2">
          <div className="row">
            <div className='col-lg-4'>
              <ul className='foot mx-5'>
                <strong>Menu</strong>
                <li><i className="fa-solid fa-house"></i><a href="/" className="">  Home</a></li>
                <li><i className="fa-solid fa-earth-americas"></i><a href="#" className="">  News</a> </li>
                <li><i className="fa-solid fa-message"></i><a href="/contact-us" className="">
                  Contact Us</a> </li>
              </ul>
            </div>

            <div className='col-lg-4'>
              <ul className='foot'>
                <strong>Contact Us</strong>
                <li><i className="fa-solid fa-location-dot"></i> Arada Sub-City, Addis Ababa</li>
                <li><i className="fa-solid fa-phone"></i> Phone: +251911192863  </li>
                <li><i className="fa-solid fa-envelope"></i> Email: support@iqfortune.com</li>
              </ul>
            </div>

            <div className='col-lg-4'>
              <ul className='foot'>
                <strong>Google Map</strong>
                <li>
                  <iframe
                    title="Google Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.575945307145!2d38.76964411051288!3d9.011109191012201!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b850c9b46110b%3A0x21c14a18c9021a30!2sSugar%20Corporation!5e0!3m2!1sen!2set!4v1706702981991!5m2!1sen!2set"
                    width="100%"
                    height="150"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                  ></iframe>
                </li>
              </ul>
            </div>
          </div>
          <hr />

          <div className="text-center">
            <h6>&copy; Addisalem Tefera, {new Date().getFullYear()}</h6>
          </div>
        </div>
      </footer>
    </div>
  );
}