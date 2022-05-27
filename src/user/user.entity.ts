import { Column, Entity } from 'typeorm';
import { ModelEntity } from '../common/model.entity';

@Entity()
export class User extends ModelEntity {
  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ default: true })
  isActive: boolean;
}
