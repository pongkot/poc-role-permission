import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PermissionRepository } from './permission.repository';
import { PermissionController } from './permission.controller';

@Module({
  imports: [TypeOrmModule.forFeature([PermissionRepository])],
  controllers: [PermissionController],
  exports: [TypeOrmModule.forFeature([PermissionRepository])],
})
export class PermissionModule {}
