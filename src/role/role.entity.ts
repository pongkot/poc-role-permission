import { Column, Entity, JoinTable, ManyToMany } from 'typeorm';
import { ModelEntity } from '../common/model.entity';
import { Permission } from '../permission/permission.entity';

@Entity()
export class Role extends ModelEntity {
  @Column()
  title: string;

  @ManyToMany(() => Permission)
  @JoinTable()
  permissions: Array<Permission>;
}
