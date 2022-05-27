import { Injectable } from '@nestjs/common';
import { UserRepository } from './user/user.repository';

@Injectable()
export class AppService {
  constructor(private readonly userRepository: UserRepository) {}

  getHello(): string {
    return 'Hello World!';
  }
}
