import { Column, Entity } from 'typeorm';
import { ModelEntity } from '../common/model.entity';

@Entity()
export class Permission extends ModelEntity {
  @Column()
  scope: string;
}
