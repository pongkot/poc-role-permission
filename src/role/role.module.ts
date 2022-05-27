import { Module } from '@nestjs/common';
import { RoleController } from './role.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoleRepository } from './role.repository';

@Module({
  imports: [TypeOrmModule.forFeature([RoleRepository])],
  controllers: [RoleController],
  exports: [TypeOrmModule.forFeature([RoleRepository])],
})
export class RoleModule {}
