import { Module } from '@nestjs/common';
import { ConversationsService } from './conversations.service';
import { DatabaseModule } from 'src/core/databse.module';
import { ConversationsController } from './conversations.controller';
import { conversationsProviders } from './conversations.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [ConversationsController],
  providers: [ConversationsService, ...conversationsProviders],
  exports: [ConversationsService],
})
export class ConversationsModule {}
