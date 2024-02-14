import '../styles/qrcode.css'
import {  Button } from '@mui/material';
import { NavLink } from 'react-router-dom';
function QRcode() {
  return (
   <>
   <div className="container" style={{display: "flex", justifyContent:'center', alignItems: "center",height: "100vh"}}>
      <div className="qr-code">
        <h2>Iq fortune advanced technology PLC</h2>
        <p>Abel Isayas Mebrahtu</p>
        <p>+251911192862</p>
        <p>Abel.Isayas@iqfortune.com</p>
        <p>Esayasabel@gmail.com</p>
        <p>Kelifa business center 1stFloor 113</p>

        <Button variant="contained" color="primary" component={NavLink} to="/" style={{ marginTop: '20px'}}>
             Home Page
        </Button>
      </div>
      
    </div>
   </>
  )
}

export default QRcode