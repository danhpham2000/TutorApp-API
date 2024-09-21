import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Tutor } from './tutor.model';
import { TutorDto } from 'src/dto';

@Injectable()
export class TutorsService {
  constructor(
    @InjectModel('Tutor') private readonly tutorModel: Model<Tutor>,
  ) {}

  async getTutors() {
    const tutors = await this.tutorModel.find().exec();
    return tutors;
  }

  async getTutor(tutorId: string) {
    const tutor = await this.tutorModel.findById(tutorId);
    if (!tutor) {
      throw new Error('No tutor found');
    }
    return tutor;
  }

  async createTutor(tutorDto: TutorDto) {
    try {
      const newTutor = new this.tutorModel({
        firstName: tutorDto.firstName,
        lastName: tutorDto.lastName,
        email: tutorDto.email,
        password: tutorDto.password,
        role: 'tutor',
        createdAt: Date.now(),
        description: tutorDto.description,
        schoolGraduated: tutorDto.schoolGraduated,
      });
      return await newTutor.save();
    } catch (err) {
      return err;
    }
  }

  async updateTutor(tutorDto: TutorDto, tutorId: string) {
    try {
      const tutor = await this.tutorModel.findById(tutorId);
      if (!tutor) {
        throw new Error('no tutor found');
      }
      tutor.firstName = tutorDto.firstName;
      tutor.lastName = tutorDto.lastName;
      tutor.email = tutorDto.email;
    } catch (err) {
      return err;
    }
  }
}
