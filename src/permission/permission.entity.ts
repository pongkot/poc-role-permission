import { Entity, Column, ManyToOne } from 'typeorm';
import { ModelEntity } from '../common/model.entity';
import { Role } from '../role/role.entity';

@Entity()
export class Permission extends ModelEntity {
  @Column()
  scope: string;
}
