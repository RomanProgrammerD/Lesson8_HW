import { Injectable, Inject, Body  } from '@nestjs/common';
import { IUser } from './interfaces/users.interface';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './users.entity';

@Injectable()
export class UsersService {
	constructor(
		@Inject('USER_REPOSITORY')
		private readonly userRepository: Repository<IUser>,
	){}

	async findAll(): Promise<IUser[]>{
		return await this.userRepository.find();
	}

	async create(user: IUser): Promise<IUser>{
		/*const user = new User();
		user.username = 'test';
		user.email = 'test@test.com';
		user.password = 'password';

		return await this.userRepository.save(user);*/
		return await this.userRepository.save(user);
	}

	async update(id: string, user: IUser){
		return await this.userRepository.update(id, user);
	}

	async delete(id: string){
		return await this.userRepository.delete(id);
	}

	async findById(id: string){
		return await this.userRepository.findOne(id);
	}
}