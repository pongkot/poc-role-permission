import { EntityRepository, Repository } from 'typeorm';
import { User } from './user.entity';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  getById(id: number): Promise<Array<User>> {
    return this.find({ where: { id } });
  }
}
