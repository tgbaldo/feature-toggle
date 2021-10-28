import Feature from '../../domain/entity/Feature';
import { FeatureRepository } from '../../domain/repository/FeatureRepository';

export default class CreateFeature {
    featureRepository: FeatureRepository;

    constructor(featureRepository: FeatureRepository) {
        this.featureRepository = featureRepository;
    }

    public async handle({ name, state}: { name: string, state: boolean }) {
        const exists = await this.featureRepository.getByName(name);
        if (exists) {
            throw new Error('Feature already exists');
        }
        const feature = new Feature({name, state});
        await this.featureRepository.save(feature)
    }
}
