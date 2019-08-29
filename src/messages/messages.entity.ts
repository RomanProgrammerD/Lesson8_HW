import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from 'src/users/users.entity';
import { Conversation } from 'src/conversations/conversations.entity';

@Entity()
export class Message {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 500 })
    title: string;

    @Column({ length: 500 })
    text: string;

    @ManyToOne(type => User, user => user.messages)
    user: User;

    @ManyToOne(type => Conversation, conversation => conversation.messages)
    conversations: Conversation;
}

