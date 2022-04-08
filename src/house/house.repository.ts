import { EntityRepository, Repository } from 'typeorm';
import { House } from './house.entity';

@EntityRepository(House)
export class HousesRepository extends Repository<House> {}
