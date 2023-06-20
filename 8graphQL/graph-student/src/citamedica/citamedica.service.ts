import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCitamedicaInput, UpdateCitamedicaInput } from './dto/inputs';
import { Citamedica } from './entities/citamedica.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CitamedicaService {

  constructor( 
    @InjectRepository(Citamedica)
    private readonly citamedicaRepository:Repository<Citamedica> ){}

  async create(createCitamedicaInput: CreateCitamedicaInput): Promise<Citamedica>  {
    const newCitamedica= this.citamedicaRepository.create(createCitamedicaInput);
    return await this.citamedicaRepository.save(newCitamedica); 
  }

  async findAll(): Promise<Citamedica[]> {
    return this.citamedicaRepository.find();
  }

  async findOne(id: string): Promise<Citamedica> {
     const citamedica= await  this.citamedicaRepository.findOneBy({id});
     if (!citamedica) throw new NotFoundException(`Not found`)
     return citamedica;
  }

  async update(id: string, updateCitamedicaInput: UpdateCitamedicaInput): Promise<Citamedica> {
    
    const citamedica = await this.citamedicaRepository.preload(updateCitamedicaInput);
    if (!citamedica) throw new NotFoundException(`Not found`)
    return this.citamedicaRepository.save(citamedica);

  }

  async remove(id: string): Promise<Citamedica> {

    const citamedica= await  this.findOne(id);

    await this.citamedicaRepository.remove(citamedica);

    return {...citamedica, id};

  }
}
