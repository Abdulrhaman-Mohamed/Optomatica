import { IsOptional, IsString, MaxLength, maxLength, MinLength } from "class-validator";


export class QueryBookDto {
    @IsOptional()
    @IsString()
    title?:string;

    @IsOptional()
    @IsString()
    @MaxLength(4)
    @MinLength(4)
    year?:number;
}