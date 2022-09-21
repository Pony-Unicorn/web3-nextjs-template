import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { useAccount, useConnect, useDisconnect } from 'wagmi';

import useIsMounted from '../hooks/useIsMounted';

export default function Connect() {
  const isMounted = useIsMounted();
  const { connector, isConnected } = useAccount();
  const { connect, connectors, error, isLoading, pendingConnector } =
    useConnect();
  const { disconnect } = useDisconnect();

  return (
    <Box>
      {isMounted && (
        <Box>
          {isConnected && (
            <Button onClick={() => disconnect()}>
              Disconnect from {connector?.name}
            </Button>
          )}

          {connectors
            .filter((x) => x.ready && x.id !== connector?.id)
            .map((x) => (
              <Button key={x.id} onClick={() => connect({ connector: x })}>
                {x.name}
                {isLoading && x.id === pendingConnector?.id && ' (connecting)'}
              </Button>
            ))}
        </Box>
      )}

      {error && <Typography>{error.message}</Typography>}
    </Box>
  );
}
