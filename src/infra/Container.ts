import { Container } from 'typedi';
import FeatureHttpAdapter from './adapter/http/FeatureHttpAdapter';
import FeatureApplicationFactory from './factory/FeatureApplicationFactory';
import { FeatureRepositoryMemory } from './repository/FeatureRepositoryMemory';

const applicationFactory = new FeatureApplicationFactory();
const httpAdapter = new FeatureHttpAdapter(applicationFactory);

Container.set('HttpAdapterContract', httpAdapter);
Container.set('HttpAdapterContract', httpAdapter);

Container.set('FeatureRepositoryContract', FeatureRepositoryMemory);