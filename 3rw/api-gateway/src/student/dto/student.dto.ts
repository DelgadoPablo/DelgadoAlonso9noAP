import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class StudentDTO {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
   descripcion:string;

    @IsString()
    @IsNotEmpty()
    caracteristica:string;


}
