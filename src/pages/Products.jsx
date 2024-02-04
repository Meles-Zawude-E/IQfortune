
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
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
// import Largelightbrown from '../assets/images/Large light brown kideny beans.jpg';
// import Nigerseed from '../assets/images/Niger seed.jpg';

import '../styles/product.css';

const productsData = [
  [
    { name: 'White pea bean', image: WhitePea },
    { name: 'Red kidney bean', image: ReadKidneyBeen },
    { name: 'Soy bean', image: SoyBeen },
    { name: 'Chickpea', image: Chickpea },
    { name: 'White kidney bean', image: WhiteKidneyBean },
  ],
  [
    { name: 'Pigeon bean', image: Pigeonbean },
    { name: 'Green mung bean', image: Greenmungbean },
    { name: 'Red speckled bean', image: Redspeckledbean },
    { name: 'Whitish humera sesame', image: Whitishhumera },
    { name: 'Pinto beans', image: Pintobeans },
  ],
  [
    { name: 'Peanut', image: Peanut },
    { name: 'Turmeric finger', image: Turmericfinger },
    { name: 'Black cumin', image: Blackcumin },
    { name: 'Long pepper', image: Longpepper },
    { name: 'Linseed/flaxseed', image: Linseedflaxseed },
  ],
];

export default function Products() {
  return (
    <>
      {productsData.map((row, rowIndex) => (
        <Stack
          key={rowIndex}
          direction="row"
          spacing={2}
          justifyContent="center"
          alignItems="center"
          flexWrap="wrap"
          style={{ marginTop: '40px', padding: '20px' }}
        >
          {row.map((product, index) => (
            <Stack
              key={index}
              direction="column"
              alignItems="center"
              spacing={1}
              sx={{ width: '100%', '@media (min-width: 600px)': { width: '48%' }, '@media (min-width: 768px)': { width: '15%' } }}
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
      ))}
    </>
  );
}
