import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Will from '../assets/base1.png';
import Quality from '../assets/quality.png';
import Responseviness from '../assets/respons.png';
import Trust from '../assets/base3.png';
import Relations from '../assets/respons.png';
import '../styles/product.css';

const productsData = [
  [
    { name: 'White pea bean', image: Will },
    { name: 'Red kidney bean', image: Quality },
    { name: 'Soy bean', image: Responseviness },
    { name: 'Chickpea', image: Trust },
    { name: 'White kidney bean', image: Relations },
  ],
  [
    { name: 'Pigeon bean', image: Will },
    { name: 'Green mung bean', image: Quality },
    { name: 'Red speckled bean', image: Responseviness },
    { name: 'Whitish humera sesame', image: Trust },
    { name: 'Pinto beans', image: Relations },
  ],
  [
    { name: 'Peanut', image: Will },
    { name: 'Turmeric finger', image: Quality },
    { name: 'Black cumin', image: Responseviness },
    { name: 'Long pepper', image: Trust },
    { name: 'Linseed/flaxseed', image: Relations },
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
          style={{marginTop:'40px', padding:'20px'}}
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
