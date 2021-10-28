import { Router, Request, Response, NextFunction } from 'express';
import FeatureHttpAdapter from '../FeatureHttpAdapter';

const router = Router();

export default class RoutesConfig {
  featureHttpAdapter: FeatureHttpAdapter;

  constructor(featureHttpAdapter: FeatureHttpAdapter) {
    this.featureHttpAdapter = featureHttpAdapter;
  }

  public getRouter(): Router {
    router.get('/features/:name', async (request: Request, response: Response, next: NextFunction) => {
      try {
        await this.featureHttpAdapter.getByName(request, response);
      } catch (error) {
        next(error);
      }
    });

    return router;
  }
}
