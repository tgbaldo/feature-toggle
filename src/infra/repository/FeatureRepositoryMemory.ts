import Feature from '../../domain/entity/Feature';
import { BaseRepository } from '../../share/domain/repository/BaseRepository';

export class FeatureRepositoryMemory implements BaseRepository {
    private features: Feature[] = [
        { name: 'feature_1', state: true },
        { name: 'feature_2', state: true },
        { name: 'feature_3', state: true },
        { name: 'feature_4', state: true },
        { name: 'feature_5', state: true },
    ];

    public async getByName(name: string): Promise<Feature> {
        return this.features.find(f => f.name === name);
    }

    public async save(feature: Feature): Promise<void> {
        this.features.push(feature);
    }

    public async update(feature: Feature): Promise<void> {
        const index = this.features.findIndex(f => f.name === feature.name);
        if (!index) {
            throw new Error('Feature not found');
        }
        this.features[index] = feature;
    }
}
