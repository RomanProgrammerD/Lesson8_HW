import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MessagesModule } from './messages/messages.module';
import { APP_GUARD } from '@nestjs/core';
import { ConversationsModule } from './conversations/conversations.module';

@Module({
  imports: [UsersModule, MessagesModule, ConversationsModule],
  controllers: [AppController],
  providers: [AppService, /*{
    provide: APP_GUARD,
    useClass: RolesGuard,
  },*/
],
})
export class AppModule {}
