import { Module } from '@nestjs/common';
import { CitamedicaService } from './citamedica.service';
import { CitamedicaResolver } from './citamedica.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Citamedica } from './entities/citamedica.entity';

@Module({
  providers: [CitamedicaResolver, CitamedicaService],
  imports:[
    TypeOrmModule.forFeature([Citamedica])
  ]
})
export class CitamedicaModule {}
