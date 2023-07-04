import { ApiTags } from '@nestjs/swagger';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { EquipoMSG} from '../common/constants';
import { Observable } from 'rxjs';
import {EquipoDTO  } from './dto/Equipo.dto'
import { ClientProxySuperFlights } from '../common/proxy/client-proxy';
import { IEquipo } from 'src/common/interfaces/equipo.interface';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@ApiTags('Equipo')
// @UseGuards(JwtAuthGuard)
@Controller('api/v2/equipo')

export class EquipoController {
  constructor(private readonly clientProxy: ClientProxySuperFlights) {}
  private _clientProxyEquipo = this.clientProxy.clientProxyEquipo();

  @Post()
  create(@Body()EquipoDTO :EquipoDTO ): Observable<IEquipo> {
    return this._clientProxyEquipo.send(EquipoMSG.CREATE,EquipoDTO );
  }

  @Get()
  findAll(): Observable<IEquipo[]> {
    return this._clientProxyEquipo.send(EquipoMSG.FIND_ALL, '');
  }

  @Get(':id')
  findOne(@Param('id') id: string): Observable<IEquipo> {
    return this._clientProxyEquipo.send(EquipoMSG.FIND_ONE, id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body()EquipoDTO :EquipoDTO ): Observable<IEquipo> {
    return this._clientProxyEquipo.send(EquipoMSG.UPDATE, { id,EquipoDTO  });
  }

  @Delete(':id')
  delete(@Param('id') id: string): Observable<any> {
    return this._clientProxyEquipo.send(EquipoMSG.DELETE, id);
  }
}
