import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import delImage from '../assets/del.png';
import cannonImage from '../assets/cannon.png';
import ciscoImage from '../assets/cisco.png';
import HP from '../assets/hp.png'
import SinerLine from '../assets/sinarline-copy.png'
import Richo from '../assets/ricoh-copy.png'
import Unomat from '../assets/unomat-copy.png'
import Printer from '../assets/benjamin-sander-bergum-fcLa4CNVnBQ-unsplash.jpg'
import '../styles/product.css';

const productsData = [
  [
    { name: 'DELL', image: delImage },
    { name: 'CANON', image: cannonImage },
    { name: 'CISCO', image: ciscoImage },
    { name: 'HP', image: HP },
  ],
  [
    { name: 'SINER', image: SinerLine },
    { name: 'RICHO', image: Richo },
    { name: 'UNONAT', image: Unomat },
    { name: 'PRINTER', image: Printer },
  ],
];

export default function Import() {
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
