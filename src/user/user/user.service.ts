import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { user } from 'src/entity/user';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
constructor(
    @InjectRepository(user)
    private userRepository: Repository<user>,

){}

findAll(): Promise<user[]> {
    return this.userRepository.find();
}

}