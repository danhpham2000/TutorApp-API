import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
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
  @HttpCode(HttpStatus.NO_CONTENT)
  async updateTutor(@Body() tutorDto: TutorDto, @Param('id') tutorId: string) {
    return await this.tutorService.updateTutor(tutorDto, tutorId);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async deleteTutor(@Param('id') tutorId: string) {
    return await this.tutorService.deleteTutor(tutorId);
  }
}
