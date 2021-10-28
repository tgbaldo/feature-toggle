import { NextFunction, Request, Response } from "express";
import FeatureApplicationFactory from '../../../factory/FeatureApplicationFactory';

export default class FeatureHttpAdapter {
    applicationFactory: FeatureApplicationFactory;

    constructor(applicationFactory: FeatureApplicationFactory) {
        this.applicationFactory = applicationFactory;
    }

    public async create(request: Request, response: Response, next: NextFunction) {
        const input = { name: request.body.name, state: request.body.state };
        await this.applicationFactory.createFeature().handle({ ...input });
        return response.send({ message: 'Feature created' });
    }

    public async enableFeature(request: Request, response: Response, next: NextFunction) {
        const input = { name: request.body.name };
        await this.applicationFactory.enableFeature().handle({ ...input });
        return response.send({ message: 'Feature enabled' });
    }

    public async disableFeature(request: Request, response: Response, next: NextFunction) {
        const input = { name: request.body.name };
        await this.applicationFactory.disableFeature().handle({ ...input });
        return response.send({ message: 'Feature disabled' });
    }
}
