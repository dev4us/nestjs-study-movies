import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from '@nestjs/common';
import { create } from 'eslint/lib/rules/*';

@Controller('movies')
export class MoviesController {
  @Get()
  getAll(){
    return "this will return All movies"
  }

  @Get("search")
  search(@Query("year") searchingYear: string ){
    return `We are searching for a movie made after: ${searchingYear}`;
  }

  @Get("/:id")
  getOne(@Param('id') movieID: string){
    return `This will return one Movie with the id: ${movieID}`;
  }

  @Post()
  create(@Body() movieData){
    console.log(movieData);
    return movieData;
  }

  @Delete("/:id")
  remove(@Param('id') movieID: string){
    return `This will delete a movie with the id: ${movieID}`
  }

  @Patch('/:id')
  patch(@Param('id') movieID: string, @Body() updateData){
    return {
      updatedMovie: movieID,
      ...updateData
    }
  }
}
