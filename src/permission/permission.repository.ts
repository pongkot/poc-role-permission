import { EntityRepository, Repository } from 'typeorm';
import { Permission } from './permission.entity';

@EntityRepository(Permission)
export class PermissionRepository extends Repository<Permission> {
  list(): Promise<Array<Permission>> {
    return this.find();
  }
}
