import { Module } from '@nestjs/common';
import { HouseModule } from './house/house.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { House } from './house/house.entity';

@Module({
  imports: [
    HouseModule,
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: 'mongodb://localhost/house-management',
      synchronize: true,
      useUnifiedTopology: true,
      entities: [House],
    }),
  ],
})
export class AppModule {}
