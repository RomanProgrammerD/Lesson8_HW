import { Controller, Post, Body, Get, Param, Put, Delete } from '@nestjs/common';
import { ConversationsService } from './conversations.service';
import { CreateConversationDto } from './dto/create-conv.dto';
import { IConversation } from './interfaces/conversation.interface';

@Controller('conversations')
export class ConversationsController {
    constructor(private readonly conversationsService: ConversationsService){}

    @Post()
    async create(@Body() createConversation: CreateConversationDto):Promise<IConversation>{
      return await this.conversationsService.create(createConversation);
    }

    @Get()
    async get():Promise<IConversation[]>{
      return await this.conversationsService.findAll();
    }

    @Get(':id')
	  async getById(@Param('id') id){
		  return this.conversationsService.findById(id);
	  }

    @Put(':id')
	async update(@Param('id') id: string, @Body() updateConversation: CreateConversationDto){
		return await this.conversationsService.update(id, updateConversation);
	}

	@Delete(':id')
	async delete(@Param('id') id:string){
		return await this.conversationsService.delete(id);
	}
}
