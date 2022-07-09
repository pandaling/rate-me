import app from './server';
import { Logger } from './server/util/logger';

const PORT = process.env.PORT;

app
  .listen(PORT, () => {
    Logger.info(`server running on port: ${PORT}`);
  })
  .on('error', (e) => Logger.error(e));
