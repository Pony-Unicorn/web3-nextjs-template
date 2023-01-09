/**
 * 🔥🔥 Please do not put the sensitive data in the test here 🔥🔥
 * 🔥🔥 Please add sensitive data to the .env.local file 🔥🔥
 * 1、The configuration files that need to be hidden externally are written to
 * 2、Publicable configuration writes development or production file
 * You can configure different environment variables
 * NEXT_PUBLIC_APP_MODE production, preview, or development.
 * @platform Web,Native
 * @language en_US
 */
/**
 * 🔥🔥 请不要将测试中的敏感数据放在此处🔥🔥
 * 🔥🔥 请将敏感数据添加到.env.local文件🔥🔥
 * 1、需要在外部隐藏的配置文件被写入
 * 2、可公开配置写入开发或生产文件
 * 您可以配置不同的环境变量
 * NEXT_PUBLIC_APP_MODE生产、预览或开发。
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
