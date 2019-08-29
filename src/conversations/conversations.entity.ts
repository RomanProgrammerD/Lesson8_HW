import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToMany } from 'typeorm';
import { Message } from 'src/messages/messages.entity';
import { User } from 'src/users/users.entity';

@Entity()
export class Conversation {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 500 })
    name: string;

    @Column({ length: 500 })
    description: string;
    
    @OneToMany(type => Message, message => message.conversations)
    messages: Message[];

    @ManyToMany(() => User, user => user.conversations)
    users: User[];
}