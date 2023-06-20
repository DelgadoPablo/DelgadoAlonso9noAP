import { Resolver, Query, Mutation, Args, Int, ID } from '@nestjs/graphql';
import { CitamedicaService } from './citamedica.service';
import { Citamedica } from './entities/citamedica.entity';
import { UpdateCitamedicaInput, CreateCitamedicaInput } from './dto/inputs';
import { ParseUUIDPipe } from '@nestjs/common';

@Resolver(() => Citamedica)
export class CitamedicaResolver {
  constructor(private readonly citamedicaService: CitamedicaService) {}

  @Mutation(() => Citamedica)
  async createCitamedica(@Args('createCitamedicaInput') createCitamedicaInput: CreateCitamedicaInput)
  :Promise<Citamedica> {
    return this.citamedicaService.create(createCitamedicaInput);
  }

  @Query(() => [Citamedica], { name: 'citas' })
  async findAll():Promise<Citamedica[]> {
    return this.citamedicaService.findAll();
  }

  @Query(() => Citamedica, { name: 'Citas' })
  findOne(@Args('id', { type: () => ID}, ParseUUIDPipe ) id: string): Promise<Citamedica> {
    return this.citamedicaService.findOne(id);
  }

  @Mutation(() => Citamedica)
  updateCitamedica(@Args('updateCitamedicaInput') updateCitamedicaInput: UpdateCitamedicaInput): Promise<Citamedica> {
    return this.citamedicaService.update(updateCitamedicaInput.id, updateCitamedicaInput);
  }

  @Mutation(() => Citamedica)
  removeCitamedica(@Args('id', { type: () => ID }) id: string): Promise<Citamedica> {
    return this.citamedicaService.remove(id);
  }
}
