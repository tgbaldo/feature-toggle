import Feature from '../../domain/entity/Feature';
import FeatureRepositoryContract from '../../domain/contracts/repository/FeatureRepositoryContract';

export default class DisableFeature {
  featureRepository: FeatureRepositoryContract;

  constructor(featureRepository: FeatureRepositoryContract) {
    this.featureRepository = featureRepository;
  }

  public async handle({ name}: { name: string }) {
    const exists = await this.featureRepository.getByName(name);
    if (!exists) {
        throw new Error('Feature not found');
    }
    const state = false
    const feature = new Feature({name, state});
    await this.featureRepository.update(feature)
  }
}
