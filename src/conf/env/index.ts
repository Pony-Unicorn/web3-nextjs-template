import development from './development';
import production from './production';

// You can configure different environment variables
// NEXT_PUBLIC_VERCEL_ENV production, preview, or development.
export default process.env.NEXT_PUBLIC_VERCEL_ENV === 'production'
  ? production
  : development;
