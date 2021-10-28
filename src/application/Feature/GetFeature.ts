import DataNotFoundException from '../../share/domain/exception/DataNotFoundException';
import FeatureRepositoryContract from '../../domain/contracts/repository/FeatureRepositoryContract';

export default class GetFeature {
  featureRepository: FeatureRepositoryContract;

  constructor(featureRepository: FeatureRepositoryContract) {
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
