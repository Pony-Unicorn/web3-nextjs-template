import Typography from '@mui/material/Typography';

import { useAccount } from 'wagmi';
import useIsMounted from '../hooks/useIsMounted';

export default function Account() {
  const account = useAccount();

  const isMounted = useIsMounted();

  if (!isMounted || account.isConnecting) return null;

  if (!account.isConnected) return <Typography> Unlinked </Typography>;

  return <Typography>{account.address || ''}</Typography>;
}
