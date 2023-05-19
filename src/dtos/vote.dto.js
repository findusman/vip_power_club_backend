import {IsString, IsEmail, IsNotEmpty, Min, Max, IsBoolean, IsUrl,IsIn} from 'class-validator';
import 'reflect-metadata';


export  class PerformVoteDto {

    

    @IsString()
    @IsNotEmpty()
    photoID;


    @IsString()
    @IsNotEmpty()
    @IsIn(['add', 'remove'])
    actionType;

  }

