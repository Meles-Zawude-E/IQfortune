import '../styles/qrcode.css'
import {  Button } from '@mui/material';
import { NavLink } from 'react-router-dom';
function QRcode() {
  return (
   <>
   <div className="container" style={{display: "flex", justifyContent:'center', alignItems: "center",height: "100vh"}}>
      <div className="qr-code">
        <h2>Iq fortune advanced technology PLC</h2>
        <p ><i className="fa-solid fa-signature"></i>Abel Isayas Mebrahtu</p>
        <p><i className="fa-solid fa-phone"></i>+251911192862</p>
        <p><i className="fa-solid fa-envelope"></i>Abel.Isayas@iqfortune.com</p>
        <p><i className="fa-sharp fa-regular fa-envelope"></i>Esayasabel@gmail.com</p>
        <p><i className="fa-solid fa-building-columns"></i>Kelifa business center 1stFloor 113</p>

        <Button variant="contained" color="primary" component={NavLink} to="/" style={{ marginTop: '20px'}}>
             Home Page
        </Button>
      </div>
      
    </div>
   </>
  )
}

export default QRcode