import { Controller, Get, Param } from '@nestjs/common';
import { UserRepository } from './user.repository';

@Controller('users')
export class UserController {
  constructor(private readonly userRepository: UserRepository) {}

  @Get(':id')
  async getById(@Param('id') id: number) {
    const user = await this.userRepository.getById(id);
    return { user };
  }
}
