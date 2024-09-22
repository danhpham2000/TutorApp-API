import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Tutor } from './tutor.model';
import { TutorDto } from 'src/dto';
import * as argon from 'argon2';

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
    const tutor = await this.tutorModel.findById(tutorId).exec();
    if (!tutor) {
      throw new Error('No tutor found');
    }
    return tutor;
  }

  async createTutor(tutorDto: TutorDto) {
    const hashedPassword = argon.hash(tutorDto.password);
    try {
      const newTutor = new this.tutorModel({
        firstName: tutorDto.firstName,
        lastName: tutorDto.lastName,
        email: tutorDto.email,
        password: hashedPassword,
        role: 'tutor',
        createdAt: Date.now(),
        description: tutorDto.description,
        school: tutorDto.school,
      });
      return await newTutor.save();
    } catch (err) {
      return err;
    }
  }

  async updateTutor(tutorDto: TutorDto, tutorId: string) {
    try {
      const tutor = await this.tutorModel.findById(tutorId).exec();
      if (!tutor) {
        throw new Error('no tutor found');
      }
      tutor.firstName = tutorDto.firstName;
      tutor.lastName = tutorDto.lastName;
      tutor.email = tutorDto.email;
      tutor.description = tutorDto.description;
      return await tutor.save();
    } catch (err) {
      return err;
    }
  }

  async deleteTutor(tutorId: string) {
    try {
      const tutor = await this.tutorModel.findById({ _id: tutorId }).exec();
      if (!tutor) {
        throw new NotFoundException('Tutor not found');
      }
      return await this.tutorModel.deleteOne({ _id: tutorId }).exec();
    } catch (err) {
      return err;
    }
  }
}
