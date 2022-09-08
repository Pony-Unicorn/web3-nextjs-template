import Typography from '@mui/material/Typography';

import { useAccount } from 'wagmi';
import { useIsMounted } from '../hooks';

export default function Account() {
  const { address } = useAccount();
  const isMounted = useIsMounted();

  return <Typography>{isMounted && address}</Typography>;
}
