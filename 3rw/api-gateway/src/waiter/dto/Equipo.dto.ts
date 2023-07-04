import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class EquipoDTO {
    @IsString()
    @IsNotEmpty()
   decripcion:string;

    @IsString()
    @IsNotEmpty()
    caracteristica:string;

    
}
