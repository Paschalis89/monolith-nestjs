import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HouseController } from './house.controller';
import { HousesRepository } from './house.repository';
import { HouseService } from './house.service';

@Module({
  imports: [TypeOrmModule.forFeature([HousesRepository])],
  controllers: [HouseController],
  providers: [HouseService],
})
export class HouseModule {}
