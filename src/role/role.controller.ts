import { Body, Controller, Get, Post } from '@nestjs/common';
import { RoleRepository } from './role.repository';

@Controller('roles')
export class RoleController {
  constructor(private readonly roleRepository: RoleRepository) {}

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
