import { Inject, Injectable } from '@nestjs/common';
import { IRoleRepository, RoleRepository } from './role/role.repository';
import { from, map, mergeAll, Observable, toArray } from 'rxjs';
import { Role } from './role/role.entity';
import { Permission } from './permission/permission.entity';

export interface IGetHello {
  id: number;
  title: string;
  scope: string;
}

@Injectable()
export class AppService {
  constructor(
    @Inject(RoleRepository)
    private readonly roleRepository: IRoleRepository,
  ) {}

  getHello(): Observable<Array<IGetHello>> {
    return from(this.roleRepository.list()).pipe(
      mergeAll(),
      map((role: Role) => {
        const permissions = role.permissions.map(
          (permission: Permission) => permission.scope,
        );
        return {
          id: role.id,
          title: role.title,
          scope: permissions.join(' '),
        };
      }),
      toArray(),
    );
  }
}
