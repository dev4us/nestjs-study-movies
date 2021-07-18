import { Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { create } from 'eslint/lib/rules/*';

@Controller('movies')
export class MoviesController {
  @Get()
  getAll(){
    return "this will return All movies"
  }

  @Get("/:id")
  getOne(@Param('id') movieID: string){
    return `This will return one Movie with the id: ${movieID}`;
  }

  @Post()
  create(){
    return 'This will create a movie' 
  }

  @Delete("/:id")
  remove(@Param('id') movieID: string){
    return `This will delete a movie with the id: ${movieID}`
  }

  @Patch('/:id')
  patch(@Param('id') movieID: string){
    return `This will patch a movie with the id: ${movieID}`
  }
}
