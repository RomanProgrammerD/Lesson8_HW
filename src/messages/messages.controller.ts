import { Controller, Post, Body, Delete, Param, Put, UseGuards, Get, Inject } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { IMessage } from './interface/message.interface';
import { CreateMessageDto } from './dto/create-message.dto';

@Controller('messages')
export class MessagesController {
    constructor(private readonly messagesService: MessagesService){}

    @Post()
    async create(@Body() createMessage: CreateMessageDto):Promise<IMessage>{
      console.log('creae', createMessage)
      return await this.messagesService.create(createMessage);
    }

    @Get()
    async get():Promise<IMessage[]>{
      return await this.messagesService.findAll();
    }

    @Get(':id')
	  async getById(@Param('id') id){
		  return this.messagesService.findById(id);
	  }

    @Put(':id')
	async update(@Param('id') id: string, @Body() updateMessage: CreateMessageDto){
		return await this.messagesService.update(id, updateMessage);
	}

	@Delete(':id')
	async delete(@Param('id') id:string){
		return await this.messagesService.delete(id);
	}
    /*@Get()
    async get():Promise<IMessage[]>{
      return this.messagesService.getAll();
    }

    @Get('/user/:user')
    getByUserId(@Param('user') user: string): Promise<IMessage>{
      return this.messagesService.find({user});
    }

    @UseGuards(AuthGuard('jwt'))
    @Post()
    async create(@Body() createUser: CreateMessageDto): Promise<IMessage>{
		return this.messagesService.create(createUser);
    }
    
    @UseGuards(AuthGuard('jwt'))
    @Put(':id')
    async update(@Param('id') id: string,@Body() updateMessageDto: CreateMessageDto): Promise<IMessage>{
      return this.messagesService.update(id, updateMessageDto);
    }

    @Delete(':id')
    @UseGuards(AuthGuard('jwt'), UsersGuard)
    async delete(@Param('id') id: string):Promise<IMessage>{
        return this.messagesService.delete(id);
    }*/
}
