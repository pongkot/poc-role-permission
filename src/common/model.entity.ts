import { PrimaryGeneratedColumn } from 'typeorm';

export class ModelEntity {
  @PrimaryGeneratedColumn()
  id: number;
}
