import { Card, CardContent, Typography, Button, Grid } from '@mui/material';
import { NavLink } from 'react-router-dom';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import Building from '../assets/images/building-1.png';
import Consaltation from '../assets/images/consultation-1.png';
import Interior from '../assets/images/interior-design-1.png';
import Landmark from '../assets/images/landmark-1.png';
import Setting from '../assets/images/settings-1.png';
import Skech from '../assets/images/sketch1-1.png';
import '../styles/service.css'

export default function Services() {
  const rowData = [
    [
      { image: Building, description: 'Selling Printers, Computers, Duplicators' },
      { image: Consaltation, description: 'Selling Stationary Items' },
      { image: Interior, description: 'Selling Printing Press items' },
    ],
    [
      { image: Landmark, description: 'We refill toner cartridges and Inks' },
      { image: Setting, description: 'Servicing sold printers, computers, Copy Machines, and Duplicators' },
      { image: Skech, description: 'We Sell Inks and Toners' },
    ],
   
  ];

  return (
    <div style={{ padding: '20px' }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '130px' }}>
          <Card style={{ height: '300px', width: '80%', marginLeft: 'auto', marginRight: 'auto', borderRadius: '15px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <CardContent style={{ textAlign: 'center' }}>
              <Typography variant="h5" gutterBottom className='h3'> 
              Pulses Oilseeds and Spices
              </Typography>
              <Button variant="contained" color="primary" component={NavLink} to="/products" style={{ marginTop: '10px' }}>
                <ExitToAppIcon />
              </Button>
            </CardContent>
          </Card>
        </Grid>
  
        <Grid item xs={12} md={8} style={{ marginBottom: '20px' }}>
          {rowData.map((row, rowIndex) => (
            <Grid container spacing={2} key={rowIndex} style={{ marginTop: '15px' }}>
              {row.map((item, colIndex) => (
                <Grid item xs={12} md={4} key={colIndex}>
                  <Card style={{  height: '100%', width: '90%', marginLeft: 'auto', marginRight: 'auto', borderRadius: '15px'}}>
                    <CardContent style={{ textAlign: 'center'}}>
                      <img
                        src={item.image}
                        alt={`Image ${rowIndex + 1}-${colIndex + 1}`}
                        style={{ width: '50%', height: 'auto', objectFit: 'cover', margin: '0 auto', borderRadius: '10px' }}
                      />
  
                      <Typography variant="body2" style={{ marginTop: '10px', display: 'block', fontWeight: 'bold' }}>
                        {item.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          ))}
        </Grid>
      </Grid>
    </div>
  );
}
