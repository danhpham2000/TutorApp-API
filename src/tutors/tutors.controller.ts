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

  // This endpoints available for all users
  @Get()
  async getAllTutors() {
    return await this.tutorService.getTutors();
  }

  // This end points available for users but only public data, authorized user can have their edit button
  @Get(':id')
  async getSingleTutor(@Param('id') tutorId: string) {
    return await this.tutorService.getTutor(tutorId);
  }

  // This is sign up page for tutor
  // With Guard
  @Post()
  async createTutor(@Body() tutorDto: TutorDto) {
    return await this.tutorService.createTutor(tutorDto);
  }

  // This is the edit page for tutor
  // With Guard
  @Put(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async updateTutor(@Body() tutorDto: TutorDto, @Param('id') tutorId: string) {
    return await this.tutorService.updateTutor(tutorDto, tutorId);
  }

  // This is delete with Guard as well
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async deleteTutor(@Param('id') tutorId: string) {
    return await this.tutorService.deleteTutor(tutorId);
  }
}
