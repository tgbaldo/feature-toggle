import Feature from '../../domain/entity/Feature';
import { BaseRepository } from '../../share/domain/repository/BaseRepository';

export class FeatureRepositoryMemory implements BaseRepository {
  private features: Feature[] = [
    { key: 'feature_1', state: true },
    { key: 'feature_2', state: true },
    { key: 'feature_3', state: true },
    { key: 'feature_4', state: true },
    { key: 'feature_5', state: true },
  ];

  public async getByName(key: string): Promise<Feature> {
    return this.features.find(f => f.key === key);
  }

  public async save(feature: Feature): Promise<void> {
    this.features.push(feature);
  }

  public async update(feature: Feature): Promise<void> {
    const index = this.features.findIndex(f => f.key === feature.key);
    if (!index) {
        throw new Error('Feature not found');
    }
    this.features[index] = feature;
  }
}
