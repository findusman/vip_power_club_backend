import {IsString, IsEmail, IsNotEmpty, Min, Max, IsBoolean, IsUrl } from 'class-validator';
import 'reflect-metadata';


export  class AddCommentDto {

 

  @IsString()
  @IsNotEmpty()
  photoID;

  @IsString()
  @IsNotEmpty()
  commentText;



  }

