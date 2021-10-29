import Feature from '../../domain/entity/Feature';
import FeatureRepositoryContract from '../../domain/contracts/repository/FeatureRepositoryContract';

export default class CreateFeature {
  featureRepository: FeatureRepositoryContract;

  constructor(featureRepository: FeatureRepositoryContract) {
    this.featureRepository = featureRepository;
  }

  public async handle({ key, state}: { key: string, state: boolean }) {
    const exists = await this.featureRepository.getByName(key);
    if (exists) {
        throw new Error('Feature already exists');
    }
    const feature = new Feature({key, state});
    await this.featureRepository.save(feature)
  }
}
