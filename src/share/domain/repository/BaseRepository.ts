import Feature from '../../../domain/entity/Feature';

export interface BaseRepository {
    getByName(name: string): Promise<Feature>;
    save(feature: Feature): Promise<void>;
    update(feature: Feature): Promise<void>;
}