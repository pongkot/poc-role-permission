import { EntityRepository, Repository } from 'typeorm';
import { Role } from './role.entity';
import { Permission } from '../permission/permission.entity';

@EntityRepository(Role)
export class RoleRepository extends Repository<Role> {
  async createNewRole(title: string, permissions: Array<string>) {
    const scopes = [];
    let id = 1;

    for (const permission of permissions) {
      const p = new Permission();
      p.id = id;
      p.scope = permission;
      await this.manager.save(p);
      scopes.push(p);

      id += 1;
    }

    const r = new Role();
    r.title = title;
    r.permissions = scopes;

    return this.manager.save(r);
  }

  list() {
    return this.find({ relations: ['permissions'] });
  }
}
