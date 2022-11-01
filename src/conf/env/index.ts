import development from './development';
import production from './production';

// 🔥🔥 Please do not put the sensitive data in the test here 🔥🔥
// You can configure different environment variables
// NEXT_PUBLIC_VERCEL_ENV production, preview, or development.
export default process.env.NEXT_PUBLIC_VERCEL_ENV === 'production'
  ? production
  : development;
