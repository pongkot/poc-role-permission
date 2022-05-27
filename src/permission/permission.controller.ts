import { Controller, Get } from '@nestjs/common';
import { PermissionRepository } from './permission.repository';

@Controller('permissions')
export class PermissionController {
  constructor(private readonly permissionRepository: PermissionRepository) {}

  @Get()
  async listPermission() {
    const permissions = await this.permissionRepository.list();
    return { permissions };
  }
}
