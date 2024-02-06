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
import Linseedflaxseed from '../assets/images/Flaxseed.jpg';
import LargeLightBrown from '../assets/images/Large light brown kideny beans.jpg';
import NigerSeed from '../assets/images/Niger seed.jpg';
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
  { name: 'Large light brown kidney peas', image: LargeLightBrown },
  { name: 'Niger seed', image: NigerSeed },
];

const Products = () => {
  const [showMore, setShowMore] = useState(false);
  const itemsPerRow = 4;
  const displayedProducts = showMore ? productsData : productsData.slice(0, itemsPerRow);

  return (
    <>
      <Grid container spacing={1} style={{ marginTop:'16px' }}>
        <Grid item xs={12} md={6} style={{ display: 'flex', justifyContent: 'center' }}>
          <Card sx={{ height: '300px', width: "80%", backgroundRepeat: 'no-repeat', opacity: 1, backgroundSize: 'cover', borderRadius: '15px', display: 'flex', flexDirection: 'column', textAlign:'justify', border: 'none' }}>
            <CardContent>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                <Typography variant='p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Aperiam nisi dolore at maiores atque ratione voluptate delectus consequuntur 
                dicta similique tempore ut quidem doloremque vero esse, consequatur, veritatis, eos cupiditate!
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                Officiis eveniet accusantium sapiente neque est perferendis odit assumenda voluptas quaerat voluptate? Labore,
                 hic veniam. Sit ut iusto quae vitae aliquam accusamus?</Typography>
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6} style={{ display: 'flex', justifyContent: 'center', }}>
          <Card sx={{ height: '300px', width: "80%", backgroundRepeat: 'no-repeat', opacity: 1, backgroundSize: 'cover', borderRadius: '15px', display: 'flex', flexDirection: 'column', justifyContent: 'center', border: 'none' }}>
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
        justifyContent="space-between"
        alignItems="center"
        flexWrap="wrap"
        spacing={2}
        style={{ marginTop: 'auto', padding: '20px' }}
      >
        {displayedProducts.map((product, index) => (
          <Card key={index} style={{ width: '100%', maxWidth: '250px', marginTop:'10px', textAlign: 'center', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)', transition: '0.3s', borderRadius: '15px'}}>
            <CardContent >
              <Avatar
                alt={product.name}
                src={product.image}
                className="avatar"
                sx={{
                  width: '150px',
                  height: '150px',
                  border: '2px solid #000',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  margin:'auto'
                  
                }}
              />
              <Typography variant="subtitle1" style={{ marginTop: '10px' }}>{product.name}</Typography>
            </CardContent>
          </Card>
        ))}
      </Stack>

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <Button
          class="glow-on-hover"
          variant="contained"
          type='button'
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? 'Show less' : 'Show more'}
        </Button>
      </div>
    </>
  );
}
export default Products;