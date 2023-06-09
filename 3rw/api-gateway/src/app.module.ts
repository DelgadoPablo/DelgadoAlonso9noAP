import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { PassengerModule } from './passenger/passenger.module';
import { FlightModule } from './flight/flight.module';
import { AuthModule } from './auth/auth.module';
import { EquipoModule } from './waiter/Equipo.module';
import { StudentModule } from './student/student.module';
import { VehiculoModule } from './vehiculo/vehiculo.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.development'],
      isGlobal: true,
    }),
    UserModule,
    PassengerModule,
    FlightModule,
    AuthModule,
    StudentModule,
    EquipoModule,
    VehiculoModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
