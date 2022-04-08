import { Injectable, NotFoundException } from '@nestjs/common';
import { House } from './house.model';
import { CreateHouseDto } from './dto/create-house.dto';

@Injectable()
export class HouseService {
  private houses: House[] = [];

  getHouseById(id: string): House {
    const found = this.houses.find((house) => house.id === id);

    if (!found) {
      throw new NotFoundException(`House with ID ${id} is not found`);
    }

    return found;
  }

  createHouse(createHouseDto: CreateHouseDto): House {
    const { name } = createHouseDto;

    const house: House = {
      name,
    };
    this.houses.push(house);
    return house;
  }

  deleteHouse(id: string): void {
    const found = this.getHouseById(id);
    this.houses = this.houses.filter((house) => house.id !== found.id);
  }

  updateHouse(id: string, createHouseDto: CreateHouseDto): House {
    const house = this.getHouseById(id);
    house.name = createHouseDto.name;
    return house;
  }
}
