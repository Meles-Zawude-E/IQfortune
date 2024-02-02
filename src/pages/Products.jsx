
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Will from '../assets/base1.png';
import Quality from '../assets/quality.png';
import Responseviness from '../assets/respons.png';
import Trust from '../assets/base3.png';
import Relations from '../assets/respons.png';
import '../styles/product.css';

export default function Products() {
  return (
    <>
      <h1>Hello First page</h1>
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={6}
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap"
      >
        {[
          { name: 'Remy Sharp', job: 'Web Developer', image: Will },
          { name: 'Travis Howard', job: 'Quality Assurance', image: Quality },
          { name: 'Cindy Baker', job: 'Responsiveness Expert', image: Responseviness },
          { name: 'John Doe', job: 'Trust Specialist', image: Trust },
          { name: 'Jane Doe', job: 'Relationship Manager', image: Relations },
        ].map((person, index) => (
          <Stack key={index} direction="column" alignItems="center" spacing={1}>
            <Avatar
              alt={person.name}
              src={person.image}
              className="avatar"
              sx={{
                width: 120,
                height: 120,
                border: '2px solid #000',
                borderRadius: '50%',
                overflow: 'hidden',
                flex: 1,
              }}
            />
            <Typography variant="subtitle1">{person.name}</Typography>
            <Typography variant="body2">{person.job}</Typography>
          </Stack>
        ))}
      </Stack>


      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={6}
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap"
      >
        {[
          { name: 'Remy Sharp', job: 'Web Developer', image: Will },
          { name: 'Travis Howard', job: 'Quality Assurance', image: Quality },
          { name: 'Cindy Baker', job: 'Responsiveness Expert', image: Responseviness },
          { name: 'John Doe', job: 'Trust Specialist', image: Trust },
          { name: 'Jane Doe', job: 'Relationship Manager', image: Relations },
        ].map((person, index) => (
          <Stack key={index} direction="column" alignItems="center" spacing={1}>
            <Avatar
              alt={person.name}
              src={person.image}
              className="avatar"
              sx={{
                width: 120,
                height: 120,
                border: '2px solid #000',
                borderRadius: '50%',
                overflow: 'hidden',
                flex: 1,
              }}
            />
            <Typography variant="subtitle1">{person.name}</Typography>
            <Typography variant="body2">{person.job}</Typography>
          </Stack>
        ))}
      </Stack>
    </>
  );
}
