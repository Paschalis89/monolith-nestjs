import { Column, Entity, ObjectIdColumn } from 'typeorm';

@Entity()
export class House {
  @ObjectIdColumn()
  _id: string;

  @Column()
  name: string;
}
