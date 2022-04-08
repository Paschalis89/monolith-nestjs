import { IsOptional, IsString } from 'class-validator';

export class GetHouseFilterDto {
  @IsOptional()
  @IsString()
  name?: string;
}
