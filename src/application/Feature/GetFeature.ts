import DataNotFoundException from '../../share/domain/exception/DataNotFoundException';
import FeatureRepositoryContract from '../../domain/contracts/repository/FeatureRepositoryContract';

export default class GetFeature {
  featureRepository: FeatureRepositoryContract;

  constructor(featureRepository: FeatureRepositoryContract) {
    this.featureRepository = featureRepository;
  }

  public async handle({ key }: { key: string }): Promise<{ key: string, state: boolean }> {
    const feature = await this.featureRepository.getByName(key);
    if (!feature) {
      throw new DataNotFoundException('Feature not found');
    }
    return {
      key: feature.key,
      state: feature.state
    };
  }
}
