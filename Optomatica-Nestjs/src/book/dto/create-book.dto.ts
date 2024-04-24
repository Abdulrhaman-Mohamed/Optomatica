import { Transform } from 'class-transformer';
import { IsString, IsEmail, MinLength, IsDate, IsOptional, IsNotEmpty  } from 'class-validator';

export class CreateBookDto {

    @IsNotEmpty()
    @IsString()
    title:string;

    @IsNotEmpty()
    @IsString()
    author:string;

    @IsNotEmpty()
    @IsDate()
    @Transform( ({ value }) => new Date(value))
    publishedDate:Date;

    @IsOptional()
    @IsString()
    description?:string;
}
