import { FeatureRepository } from '../../domain/repository/FeatureRepository';
import DataNotFoundException from '../../share/domain/exception/DataNotFoundException';

export default class GetFeature {
    featureRepository: FeatureRepository;

    constructor(featureRepository: FeatureRepository) {
        this.featureRepository = featureRepository;
    }

    public async handle({ name }: { name: string }): Promise<{ name: string, state: boolean }> {
        const feature = await this.featureRepository.getByName(name);
        if (!feature) {
            throw new DataNotFoundException('Feature not found');
        }
        return {
          name: feature.name,
          state: feature.state
        };
    }
}
