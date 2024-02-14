
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header&Footer/Header/Header';
import Footer from './Header&Footer/Footer/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import ContactUs from './pages/ContactUs';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import Blogs from './pages/Blogs';
import Request from './pages/Request';
import QRcode from './pages/QRcode';
import Import from './pages/Import';

function App() {
  return (
    <Router>
      <div>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blogs />} />
          <Route path="/request-sample" element={<Request/>} />
          <Route path="/import" element={<Import />} />
          <Route path="/qrcode" element={<QRcode />} />
        </Routes>

        <Footer/>
      </div>
    </Router>
  );
}

export default App;
