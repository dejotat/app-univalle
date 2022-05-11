//import { user } from './../entity/user';
import { Controller, Get } from '@nestjs/common';
import { UserService } from './user/user.service';
//import { user } from 'src/entity/user'; 
//import { get } from 'http';
@Controller('api/user')
export class UserController { 

    constructor(private userService: UserService) {}

    @Get()
    async getUser(){

        console.log  ("restaurante");

        const user = await this.userService.findAll()
        if (user)
        return user
        else
        return { error: 'no hay datos'};
    }
}
