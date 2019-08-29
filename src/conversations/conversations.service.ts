import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { IConversation } from './interfaces/conversation.interface';

@Injectable()
export class ConversationsService {
    constructor(
		@Inject('CONVERSATION_REPOSITORY')
		private readonly conversationRepository: Repository<IConversation>,
	){}

    async create(conversation: IConversation):Promise<IConversation>{
      return await this.conversationRepository.save(conversation);
    }

    async findAll():Promise<IConversation[]>{
      return await this.conversationRepository.find();
    }

    async update(id: string, conversation: IConversation){
		return await this.conversationRepository.update(id, conversation);
	}

	async delete(id: string){
		return await this.conversationRepository.delete(id);
    }
    
    async findById(id: string){
		return await this.conversationRepository.findOne(id);
	}
}
