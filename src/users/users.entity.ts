import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToMany, JoinTable } from 'typeorm';
import { Message } from 'src/messages/messages.entity';
import { Conversation } from 'src/conversations/conversations.entity';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 500 })
    username: string;

    @Column()
    password: string;
    
    @OneToMany(type => Message, message => message.user)
    messages: Message[];

    @ManyToMany(() => Conversation, conversation => conversation.users, { cascade: true })
    @JoinTable()
    conversations: Conversation[];
}
