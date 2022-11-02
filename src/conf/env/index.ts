import development from './development';
import production from './production';

// 🔥🔥 Please do not put the sensitive data in the test here 🔥🔥
// 🔥🔥 Please add sensitive data to the .env.local file 🔥🔥
// 1、The configuration files that need to be hidden externally are written to
// 2、Publicable configuration writes development or production file
// You can configure different environment variables
// NEXT_PUBLIC_APP_MODE production, preview, or development.
const MODE = process.env.NEXT_PUBLIC_APP_MODE || 'development';

const CONF_ENV = MODE === 'production' ? production : development;

const LOCAL_ENV = {
  MODE
};

const ENV = Object.assign(CONF_ENV, LOCAL_ENV);

export default ENV;
