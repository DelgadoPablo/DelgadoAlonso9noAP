import { IsUUID } from 'class-validator';
import { CreateCitamedicaInput } from './create-citamedica.input';
import { InputType, Field, Int, PartialType, ID } from '@nestjs/graphql';

@InputType()
export class UpdateCitamedicaInput extends PartialType(CreateCitamedicaInput) {

  @Field(() => ID)
  @IsUUID()
  id: string;
  
}
