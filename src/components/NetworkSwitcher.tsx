import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { useNetwork, useSwitchNetwork } from 'wagmi';

export default function NetworkSwitcher() {
  const { chain } = useNetwork();
  const { chains, error, isLoading, pendingChainId, switchNetwork } =
    useSwitchNetwork();

  return (
    <Box>
      <Typography>
        Connected to {chain?.name ?? chain?.id}
        {chain?.unsupported && ' (unsupported)'}
      </Typography>

      {switchNetwork && (
        <Box>
          {chains.map((x) =>
            x.id === chain?.id ? null : (
              <Button key={x.id} onClick={() => switchNetwork(x.id)}>
                {x.name}
                {isLoading && x.id === pendingChainId && ' (switching)'}
              </Button>
            )
          )}
        </Box>
      )}

      <Typography>{error && error.message}</Typography>
    </Box>
  );
}
