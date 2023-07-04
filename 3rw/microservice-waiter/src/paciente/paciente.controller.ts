import { PacienteService } from './paciente.service';
import {PacienteDTO } from './dto/paciente.dto';
import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { PacienteMSG} from 'src/common/constants';

@Controller()
export class PacienteController {
  constructor(private readonly PacienteService: PacienteService) {}

  @MessagePattern(PacienteMSG.CREATE)
  create(@Payload() PacienteDTO: PacienteDTO) {
    return this.PacienteService.create(PacienteDTO);
  }

  @MessagePattern(PacienteMSG.FIND_ALL)
  findAll() {
    return this.PacienteService.findAll();
  }

  @MessagePattern(PacienteMSG.FIND_ONE)
  findOne(@Payload() id: string) {
    return this.PacienteService.findOne(id);
  }
  @MessagePattern(PacienteMSG.UPDATE)
  update(@Payload() payload: any) {
    return this.PacienteService.update(payload.id, payload.PacienteDTO);
  }

  @MessagePattern(PacienteMSG.DELETE)
  delete(@Payload() id: string) {
    return this.PacienteService.delete(id);
  }
}
