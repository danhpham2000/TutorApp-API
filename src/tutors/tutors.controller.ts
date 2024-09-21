import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { TutorsService } from './tutors.service';
import { TutorDto } from 'src/dto';

@Controller('tutors')
export class TutorsController {
  constructor(private readonly tutorService: TutorsService) {}

  @Get()
  async getAllTutors() {
    return await this.tutorService.getTutors();
  }

  @Get(':id')
  async getSingleTutor(@Param('id') tutorId: string) {
    return await this.tutorService.getTutor(tutorId);
  }

  @Post()
  async createTutor(@Body() tutorDto: TutorDto) {
    return await this.tutorService.createTutor(tutorDto);
  }

  @Put(':id')
  async updateTutor(@Body() tutorDto: TutorDto, @Param('id') tutorId: string) {
    return await this.tutorService.updateTutor(tutorDto, tutorId);
  }
}
