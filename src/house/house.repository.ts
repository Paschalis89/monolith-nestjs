import { EntityRepository, MongoRepository } from 'typeorm';
import { CreateHouseDto } from './dto/create-house.dto';
import { GetHouseFilterDto } from './dto/get-house-filter-dto';
import { House } from './house.entity';

@EntityRepository(House)
export class HouseRepository extends MongoRepository<House> {
  async createHouse(createHouseDto: CreateHouseDto): Promise<House> {
    const { name } = createHouseDto;

    const house = this.create({ name });
    await this.save(house);
    return house;
  }

  async getHouses(filterDto: GetHouseFilterDto): Promise<House[]> {
    const { name } = filterDto;
    let options = {};
    if (name) {
      options = {
        where: {
          name: { $eq: name },
        },
      };
    }
    const houses = await this.find(options);

    return houses;
  }
}
