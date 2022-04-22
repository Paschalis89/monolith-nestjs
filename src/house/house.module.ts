import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { HouseController } from './house.controller';
import { HouseRepository } from './house.repository';
import { HouseService } from './house.service';

@Module({
  imports: [TypeOrmModule.forFeature([HouseRepository]), AuthModule],
  controllers: [HouseController],
  providers: [HouseService],
})
export class HouseModule {}
