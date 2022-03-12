import { IsEmail, Length} from "class-validator";
import {Entity as TOEntity, Column, Index, BeforeInsert, OneToMany} from "typeorm";
import bcrypt from 'bcryptjs'
import { Exclude, Expose } from 'class-transformer';
import Entity from './Entity';
import Post from "./Post";
import Vote from "./Vote";

@TOEntity('users')
export default class User extends Entity{

    constructor(user: Partial<User>) {
        super();
        Object.assign(this, user);
    }

    @Index()
    @IsEmail(undefined, { message: 'Must be a valid Email address' })
    @Length(1, 255,{message: "Email is empty"})
    @Column({ unique: true })
    email: string

    @Index()
    @Length(3, 255,{message: "Must be atleast 3 characters long"})
    @Column({ unique: true })
    username: string

    @Exclude()
    @Length(6, 255,{message: "Must be atleast 6 characters long"})
    @Column()
    password: string

    @Column({ nullable: true })
    imageUrn: string

    @OneToMany(() => Post, post => post.user)
    posts: Post[];
    
    @OneToMany(() => Vote, vote => vote.user)
    votes: Vote[];

    @Expose()
    get imageUrl(): string {
        return this.imageUrn ? `${process.env.APP_URL}/images/${this.imageUrn}` : 'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y';
    }

    @BeforeInsert()
    async hashPassword() {
        this.password = await bcrypt.hash(this.password, 6);
    }

}
