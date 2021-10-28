import CreateFeature from '../../application/Feature/CreateFeature';
import { FeatureRepositoryMemory } from '../repository/FeatureRepositoryMemory';
import EnableFeature from '../../application/Feature/EnableFeature';
import DisableFeature from '../../application/Feature/DisableFeature';
import GetFeature from '../../application/Feature/GetFeature';

export default class FeatureApplicationFactory {
    getFeature(): GetFeature {
      const repository = new FeatureRepositoryMemory();
      return new GetFeature(repository);
    }

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
