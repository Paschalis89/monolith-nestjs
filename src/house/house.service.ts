import { Injectable } from '@nestjs/common';
import { House } from './house.model';

@Injectable()
export class HouseService {
  private houses: House[] = [];
}
