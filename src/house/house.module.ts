import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HouseController } from './house.controller';
import { HouseRepository } from './house.repository';
import { HouseService } from './house.service';

@Module({
  imports: [TypeOrmModule.forFeature([HouseRepository])],
  controllers: [HouseController],
  providers: [HouseService],
})
export class HouseModule {}
