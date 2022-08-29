import type { NextPage } from 'next';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ProTip from '../src/ProTip';
import Copyright from '../src/Copyright';

import { Connect } from '../src/components';
import { Account } from '../src/components';

const Home: NextPage = () => {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          my: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
        <Typography variant="h4" component="h1" gutterBottom>
          MUI v5 + Next.js + wagmi + zustand + TypeScript example
        </Typography>
        <Connect />
        <Account />
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  );
};

export default Home;
