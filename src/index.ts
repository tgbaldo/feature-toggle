import * as express from 'express';
import { NextFunction, Request, Response } from 'express';
import * as cors from 'cors';
import RoutesConfig from './infra/adapter/http/routes/RoutesConfig';
import FeatureApplicationFactory from './infra/factory/FeatureApplicationFactory';
import FeatureHttpAdapter from './infra/adapter/http/FeatureHttpAdapter';

const app = express();

app.disable('etag');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

const applicationFactory = new FeatureApplicationFactory();
const featureHttpAdapter = new FeatureHttpAdapter(applicationFactory);
app.use('/v1', new RoutesConfig(featureHttpAdapter).getRouter());

app.use((error: any, req: Request, res: Response, next: NextFunction) => {
  if (error.toJSON) {
    return res.status(error.statusCode || 500).json(error.toJSON());
  }

  if (error.isJoi) {
    return res.status(400).json(error);
  }

  console.log(error);

  const env = process.env.APP_ENV;
  if (env === 'development') {
    return res.status(error.statusCode || 500).json({ message: error.toString() });
  }

  return res.status(error.statusCode || 500).json({ message: "Internal Server Error" });
});

(async () => {
  app.listen(3001, () => {
    console.info(`app started`);
  });
})();