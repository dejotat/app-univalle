import { Module } from '@nestjs/common';
import { LoginController } from './login.controller';
import { reserva } from 'src/entity/reserva';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([reserva])
],
  controllers: [LoginController]
})
export class LoginModule {}

