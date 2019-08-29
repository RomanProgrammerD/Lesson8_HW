import { Module } from '@nestjs/common';
import { MessagesController } from './messages.controller';
import { MessagesService } from './messages.service';
import { DatabaseModule } from 'src/core/databse.module';
import { messagesProviders } from './messages.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [MessagesController],
  providers: [MessagesService, ...messagesProviders],
  exports: [MessagesService],
})
export class MessagesModule {}
