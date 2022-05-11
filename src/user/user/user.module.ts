import { UserController } from './../user.controller';
import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { user } from 'src/entity/user';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
    imports: [
        TypeOrmModule.forFeature([user])
    ],
    providers: [UserService],
    controllers: [UserController]
})
export class UserModule {}
