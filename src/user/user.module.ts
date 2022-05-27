import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from './user.repository';
import { UserController } from './user.controller';

@Module({
  imports: [TypeOrmModule.forFeature([UserRepository])],
  providers: [],
  controllers: [UserController],
  exports: [TypeOrmModule.forFeature([UserRepository])],
})
export class UserModule {}
