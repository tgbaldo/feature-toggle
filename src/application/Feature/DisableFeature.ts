import Feature from '../../domain/entity/Feature';
import FeatureRepositoryContract from '../../domain/contracts/repository/FeatureRepositoryContract';

export default class DisableFeature {
  featureRepository: FeatureRepositoryContract;

  constructor(featureRepository: FeatureRepositoryContract) {
    this.featureRepository = featureRepository;
  }

  public async handle({ key}: { key: string }) {
    const exists = await this.featureRepository.getByName(key);
    if (!exists) {
        throw new Error('Feature not found');
    }
    const state = false
    const feature = new Feature({key, state});
    await this.featureRepository.update(feature)
  }
}
