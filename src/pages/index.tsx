import type { NextPage } from 'next';

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import shallow from 'zustand/shallow';

import { ConnectButton } from '@rainbow-me/rainbowkit';

import Copyright from '../components/Copyright';
import ProTip from '../components/ProTip';

import useStoreDemo from '../store/useStoreDemo';

import conf from '../conf/env';

const Home: NextPage = () => {
  const [count, setCount] = useStoreDemo(
    (state) => [state.count, state.increase],
    shallow
  );

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
          MUI v5 + Next.js + rainbowkit + zustand + TypeScript example
        </Typography>
        <ConnectButton />
        <Typography>{conf.MODE}</Typography>
        <Typography>zustand count: {count}</Typography>
        <Button
          variant="outlined"
          onClick={() => {
            setCount(Math.random());
          }}>
          zustand setCount
        </Button>
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  );
};

export default Home;
