import CreateFeature from '../../application/Feature/CreateFeature';
import { FeatureRepositoryMemory } from '../repository/FeatureRepositoryMemory';
import EnableFeature from '../../application/Feature/EnableFeature';
import DisableFeature from '../../application/Feature/DisableFeature';

export default class FeatureApplicationFactory {
    createFeature(): CreateFeature {
        const repository = new FeatureRepositoryMemory();
        return new CreateFeature(repository);
    }
    
    enableFeature(): EnableFeature {
        const repository = new FeatureRepositoryMemory();
        return new EnableFeature(repository);
    }

    disableFeature(): DisableFeature {
        const repository = new FeatureRepositoryMemory();
        return new DisableFeature(repository);
    }
}
