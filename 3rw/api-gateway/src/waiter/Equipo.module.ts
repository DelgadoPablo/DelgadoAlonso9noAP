import { Module } from '@nestjs/common';
import { ProxyModule } from 'src/common/proxy/proxy.module';
import { EquipoController} from './Equipo.controller';


@Module({
  imports: [ProxyModule],
  controllers: [EquipoController],
})
export class EquipoModule {}
