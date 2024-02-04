import { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
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
import Linseedflaxseed from '../assets/images/Large light brown kideny beans.jpg';
import { Card, CardContent, Grid, Link } from '@mui/material';
import '../styles/product.css';

const productsData = [
  { name: 'White pea bean', image: WhitePea },
  { name: 'Red kidney bean', image: ReadKidneyBeen },
  { name: 'Soy bean', image: SoyBeen },
  { name: 'Chickpea', image: Chickpea },
  { name: 'White kidney bean', image: WhiteKidneyBean },
  { name: 'Pigeon bean', image: Pigeonbean },
  { name: 'Green mung bean', image: Greenmungbean },
  { name: 'Red speckled bean', image: Redspeckledbean },
  { name: 'Whitish humera sesame', image: Whitishhumera },
  { name: 'Pinto beans', image: Pintobeans },
  { name: 'Peanut', image: Peanut },
  { name: 'Turmeric finger', image: Turmericfinger },
  { name: 'Black cumin', image: Blackcumin },
  { name: 'Long pepper', image: Longpepper },
  { name: 'Linseed/flaxseed', image: Linseedflaxseed },
];

const Products = () => {
  const [showMore, setShowMore] = useState(false);
  const itemsPerRow = 5;
  const displayedProducts = showMore ? productsData : productsData.slice(0, itemsPerRow);

  return (
    <>

<>
  <Grid container spacing={1} style={{ margin:'20px' }}>
    <Grid item xs={12} md={6} style={{ display: 'flex', justifyContent: 'center' }}>
      <Card style={{ height: '300px', width: "90%", backgroundRepeat: 'no-repeat', opacity: 1, backgroundSize: 'cover', borderRadius: '15px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        
        <CardContent>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
          <Typography variant='h4'>
          CROPS

        </Typography>
            {productsData.length > itemsPerRow && (
              <Button
                variant="contained"
                onClick={() => setShowMore(!showMore)}
                style={{ marginTop: '20px' }}
              >
                {showMore ? 'Show less' : 'Show more'}
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </Grid>
    <Grid item xs={12} md={6} style={{ display: 'flex', justifyContent: 'center' }}>
      <Card style={{ height: '300px', width: "90%", backgroundRepeat: 'no-repeat', opacity: 1, backgroundSize: 'cover', borderRadius: '15px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <CardContent>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <Button variant="contained" component="button" color='primary' size='large' >
              <Link href="https://www.instagram.com/abm_gem?igsh=MXgxOXFubGUxZjVibQ=="
                color="inherit" style={{ textDecoration: "none", }}>
                GEM STONE
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </Grid>
  </Grid>

  <Stack
    direction="row"
    justifyContent="center"
    alignItems="center"
    flexWrap="wrap"
    style={{ marginTop: '40px', padding: '20px' }}
  >
    {displayedProducts.map((product, index) => (
      <Stack
        key={index}
        direction="column"
        alignItems="center"
        spacing={1}
        sx={{
          width: `${100 / itemsPerRow}%`,
          '@media (min-width: 600px)': { width: `${100 / itemsPerRow}%` },
          '@media (min-width: 768px)': { width: `${100 / itemsPerRow}%` },
        }}
      >
        <Avatar
          alt={product.name}
          src={product.image}
          className="avatar"
          sx={{
            width: '70%',
            height: '80%',
            border: '2px solid #000',
            borderRadius: '50%',
            overflow: 'hidden',
          }}
        />
        <Typography variant="subtitle1">{product.name}</Typography>
      </Stack>
    ))}
  </Stack>
</>
    </>
  );
}

export default Products;
