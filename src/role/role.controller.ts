import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { IRoleRepository, RoleRepository } from './role.repository';

@Controller('roles')
export class RoleController {
  constructor(
    @Inject(RoleRepository)
    private readonly roleRepository: IRoleRepository,
  ) {}

  @Get()
  async listRole() {
    const roles = await this.roleRepository.list();
    return { roles };
  }

  @Post()
  async createRole(@Body() data: { title: string; scopes: Array<string> }) {
    const { title, scopes } = data;
    return this.roleRepository.createNewRole(title, scopes);
  }
}
