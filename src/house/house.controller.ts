import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { House } from './house.model';
import { CreateHouseDto } from './dto/create-house.dto';
import { HouseService } from './house.service';
import { GetHouseFilterDto } from './dto/get-house-filter-dto';

@Controller('house')
export class HouseController {
  constructor(private houseService: HouseService) {}

  @Get()
  getHouses(@Query() filterDto: GetHouseFilterDto): void {
    if (Object.keys(filterDto).length) {
    } else {
    }
  }

  @Post()
  createHouse(@Body() createHouseDto: CreateHouseDto): House {
    return this.houseService.createHouse(createHouseDto);
  }

  @Get('/:id')
  getHouseById(@Param('id') id: string): House {
    return this.houseService.getHouseById(id);
  }

  @Delete('/:id')
  deleteHuouse(@Param('id') id: string): void {
    return this.houseService.deleteHouse(id);
  }

  @Patch('/:id')
  updateHouse(
    @Param('id') id: string,
    @Body() createHouseDto: CreateHouseDto,
  ): House {
    return this.updateHouse(id, createHouseDto);
  }
}
