import { useAccount } from 'wagmi';
import { useIsMounted } from '../hooks';

export function Account() {
  const { address } = useAccount();
  const isMounted = useIsMounted();

  return <div>{isMounted && address}</div>;
}
