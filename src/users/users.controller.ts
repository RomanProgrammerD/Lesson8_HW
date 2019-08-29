import { Controller, Get, Post, Put, Body, HttpException, UseGuards, Param, Delete } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { IUser } from './interfaces/users.interface';
import { UsersService } from './users.service'
import { Http2SecureServer } from 'http2';

@Controller('users')
export class UsersController {
	constructor(private readonly usersService: UsersService){}
	@Post()
	async create(@Body() createUser: CreateUserDto): Promise<IUser>{
		return await this.usersService.create(createUser);
	}

	@Get()
	async get(): Promise<IUser[]>{
		return await this.usersService.findAll();
	}

	@Get(':id')
	async getById(@Param('id') id){
		return this.usersService.findById(id);
	}
	@Put(':id')
	async update(@Param('id') id: string, @Body() updateUser: CreateUserDto){
		return await this.usersService.update(id, updateUser);
	}

	@Delete(':id')
	async delete(@Param('id') id:string){
		return await this.usersService.delete(id);
	}
/*@Get()
	getAll(): Promise<IUser[]> {
		return this.usersService.getAll();
	}

	@UseGuards(AuthGuard('jwt'))
	@Post()
	async create(@Body() createUser: CreateUserDto): Promise<IUser>{
        const user = await this.usersService.findOne(createUser.username);
        if(user){
            throw new HttpException('Unauthorized', 403);
        }
		return this.usersService.create(createUser);
	}

	@UseGuards(AuthGuard('jwt'))
	@Put(':id')
    async update(@Param('id') id: string, @Body() updateUserDto: CreateUserDto): Promise<IUser>{
        return this.usersService.update(id, updateUserDto);
	}
	
	@UseGuards(AuthGuard('jwt'))
	@Delete(':id')
    delete(@Param('id') id: string):Promise<IUser>{
        return this.usersService.delete(id);
    }*/
}
