import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class VehiculoDTO {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
   descripcion:string;

    @IsString()
    @IsNotEmpty()
    placa:string;

    @IsString()
    @IsNotEmpty()
    color:string;


}
