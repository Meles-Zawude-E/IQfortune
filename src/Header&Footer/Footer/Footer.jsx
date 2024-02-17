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
                <li><i className="fa-solid fa-earth-americas"></i><a href="/import" className="">Import</a> </li>
                <li><i className="fa-solid fa-earth-americas"></i><a href="/products" className="">Export</a> </li> 
              </ul>
            </div>
            <div className='col-lg-4'>
              <ul className='foot'>
                <strong className='contact'>Contact Us</strong>
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
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4212.481270061695!2d38.746391581746416!3d9.03372467551782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85f84aa3c3c1%3A0x893dcbf82049b25e!2zS2VsaWZhIEJ1c2luZXNzIENlbnRlciB8IFBpYXp6YSB8IOGKqOGIiuGNiyDhi6jhjIjhiaDhi6sg4Yib4YuV4Yqo4YiNIHwg4Y2S4Yur4Yiz!5e0!3m2!1sen!2set!4v1707906533166!5m2!1sen!2set"
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
            <h6>&copy;IQfortune Advanced Technology PLC, {new Date().getFullYear()}</h6>
          </div>
        </div>
      </footer>
    </div>
  );
}