/**
 * ð¥ð¥ Please do not put the sensitive data in the test here ð¥ð¥
 * ð¥ð¥ Please add sensitive data to the .env.local file ð¥ð¥
 * 1ãThe configuration files that need to be hidden externally are written to
 * 2ãPublicable configuration writes development or production file
 * You can configure different environment variables
 * NEXT_PUBLIC_APP_MODE production, preview, or development.
 * @platform Web,Native
 * @language en_US
 */
/**
 * ð¥ð¥ è¯·ä¸è¦å°æµè¯ä¸­çæææ°æ®æ¾å¨æ­¤å¤ð¥ð¥
 * ð¥ð¥ è¯·å°æææ°æ®æ·»å å°.env.localæä»¶ð¥ð¥
 * 1ãéè¦å¨å¤é¨éèçéç½®æä»¶è¢«åå¥
 * 2ãå¯å¬å¼éç½®åå¥å¼åæçäº§æä»¶
 * æ¨å¯ä»¥éç½®ä¸åçç¯å¢åé
 * NEXT_PUBLIC_APP_MODEçäº§ãé¢è§æå¼åã
 * @language zh_CN
 */

import development from './development';
import production from './production';

const MODE = process.env.NEXT_PUBLIC_APP_MODE || 'development';

const CONF_ENV = MODE === 'production' ? production : development;

const LOCAL_ENV = {
  MODE
};

const ENV = Object.assign(CONF_ENV, LOCAL_ENV);

export default ENV;
