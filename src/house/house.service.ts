import { Injectable } from '@nestjs/common';
import { House } from './house.model';
import { CreateHouseDto } from './dto/create-house.dto';

@Injectable()
export class HouseService {
  private houses: House[] = [];

  getHouseById(id: string): House {
    return this.houses.find((house) => house.id === id);
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
    this.houses = this.houses.filter((house) => house.id !== id);
  }

  updateHouse(id: string, createHouseDto: CreateHouseDto): House {
    const house = this.getHouseById(id);
    house.name = createHouseDto.name;
    return house;
  }
}
