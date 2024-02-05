import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import CardMedia from '@mui/material/CardMedia';
import Stack from '@mui/material/Stack';
import Printer from '../assets/benjamin-sander-bergum-fcLa4CNVnBQ-unsplash.jpg';
import SinerLine from '../assets/images/landmark-1.png';
import Richo from '../assets/images/settings-1.png';
import Unomat from '../assets/images/sketch1-1.png';

const CardSection = ({ text, style }) => (
  <Card style={{ 
    display: 'flex', 
    flexDirection: 'column', 
    margin: '10px', 
    ...style,
    '@media (max-width: 600px)': {
      maxWidth: '100%',
    },
  }}>
    <CardContent style={{ textAlign: 'center', width: '100%' }}>
      <Typography variant="body1" style={{ textAlign: 'justify' }}>
        {text}
      </Typography>
    </CardContent>
  </Card>
);

CardSection.propTypes = {
  text: PropTypes.string.isRequired,
  style: PropTypes.object, 
};

const productsData = [
  [
    { name: 'SINER', image: SinerLine },
    { name: 'RICHO', image: Richo },
    { name: 'UNONAT', image: Unomat },
  ],
];

const ParagraphCard = ({ text }) => (
  <Card style={{ 
    margin: '10px',
    width: '100%', 
    maxWidth: '500px',
    height: '300px',
    textAlign: 'center',
    alignItems: 'center',
    '@media (max-width: 600px)': {
      margin: '10px',
    },
  }}>
    <CardContent>
      <Typography variant="body1" style={{ textAlign: 'justify', alignItems: 'center' }}>
        {text}
      </Typography>
    </CardContent>
  </Card>
);

ParagraphCard.propTypes = {
  text: PropTypes.string.isRequired,
};

const ImageCard = ({ image, imageHeight, imageWidth }) => (
  <Card style={{ 
    margin: '26px',
    width: '100%', 
    maxWidth: '500px',
    height: '300px',
    '@media (max-width: 600px)': {
      margin: '10px',
    },
  }}>
    <CardMedia
      component="img"
      alt="About Us Image"
      height={imageHeight}
      width={imageWidth}
      image={image}
      style={{ width: '100%' }} 
    />
  </Card>
);

ImageCard.propTypes = {
  image: PropTypes.string.isRequired,
  imageHeight: PropTypes.number.isRequired,
  imageWidth: PropTypes.number.isRequired,
};

const AboutUs = () => {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'justify', flexWrap: 'wrap', marginTop:'50px'}}>
        <ParagraphCard 
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut tincidunt ex. Nunc ac justo et urna sagittis tristique vel eu leo. Duis ultricies tortor at est scelerisque, a interdum ex feugiat. Integer nec magna eu elit sagittis volutpat at nec sapien. Sed id efficitur nisi. Curabitur in nibh vel velit laoreet tincidunt. Maecenas aliquam, odio vel hendrerit laoreet, libero lacus venenatis mauris, nec finibus nulla nisl sit amet justo. Suspendisse potenti."
        />
        <ImageCard
          image={Printer}
          imageHeight={300}
          imageWidth={300}
        />
        <ImageCard
          image={Printer}
          imageHeight={300}
          imageWidth={300}
        />
        <ParagraphCard
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut tincidunt ex. Nunc ac justo et urna sagittis tristique vel eu leo. Duis ultricies tortor at est scelerisque, a interdum ex feugiat. Integer nec magna eu elit sagittis volutpat at nec sapien. Sed id efficitur nisi. Curabitur in nibh vel velit laoreet tincidunt. Maecenas aliquam, odio vel hendrerit laoreet, libero lacus venenatis mauris, nec finibus nulla nisl sit amet justo. Suspendisse potenti."
        />
        <ParagraphCard
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut tincidunt ex. Nunc ac justo et urna sagittis tristique vel eu leo. Duis ultricies tortor at est scelerisque, a interdum ex feugiat. Integer nec magna eu elit sagittis volutpat at nec sapien. Sed id efficitur nisi. Curabitur in nibh vel velit laoreet tincidunt. Maecenas aliquam, odio vel hendrerit laoreet, libero lacus venenatis mauris, nec finibus nulla nisl sit amet justo. Suspendisse potenti."
        />
        <ImageCard
          image={Printer}
          imageHeight={300}
          imageWidth={300}
        />
      </div>
      <div>
        {productsData.map((row, rowIndex) => (
          <Stack
            key={rowIndex}
            direction="row"
            spacing={8} 
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
      </div>
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        textAlign: 'justify', 
        flexWrap: 'wrap', 
        marginLeft: '30px', 
        marginRight: '30px',
      }}>
        {Array.from({ length: 3 }).map((_, index) => (
          <CardSection
            key={index}
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut tincidunt ex. Nunc ac justo et urna sagittis tristique vel eu leo. Duis ultricies tortor at est scelerisque, a interdum ex feugiat. Integer nec magna eu elit sagittis volutpat at nec sapien. Sed id efficitur nisi. Curabitur in nibh vel velit laoreet tincidunt. Maecenas aliquam, odio vel hendrerit laoreet, libero lacus venenatis mauris, nec finibus nulla nisl sit amet justo. Suspendisse potenti."
            style={{ 
              flex: 1, 
              maxWidth: '350px', 
              margin: '10px',
              '@media (max-width: 600px)': {
                maxWidth: '100%',
              },
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default AboutUs;
