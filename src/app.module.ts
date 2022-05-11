import { UserModule } from './user/user/user.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
//import { AppController } from './app.controller';
//import { AppService } from './app.service';
import { ReservaController } from './componentes/reserva/reserva.controller';
import { ReservaService } from './componentes/reserva/reserva.service';
import { LoginModule } from './login/login.module';


@Module({
  imports: [TypeOrmModule.forRoot(),
  UserModule,
  LoginModule
  ],
  controllers: [ReservaController],
  providers: [ReservaService],

  //controllers: [AppController],
  //providers: [AppService],
})
export class AppModule {}

