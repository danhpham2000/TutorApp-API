import { Injectable, NotFoundException } from '@nestjs/common';
import { Student } from './student.model';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { StudentDto } from 'src/dto';

@Injectable()
export class StudentsService {
  constructor(
    @InjectModel('Student') private readonly studentModel: Model<Student>,
  ) {}

  async getStudents() {
    const students = await this.studentModel.find().exec();
    return students;
  }

  async getStudent(studentId: string) {
    const student = await this.studentModel.findById(studentId).exec();
    if (!student) {
      throw new NotFoundException('Student not found');
    }
  }

  async createStudent(studentDto: StudentDto) {
    try {
      const newTutor = new this.studentModel({
        firstName: studentDto.firstName,
        lastName: studentDto.lastName,
        email: studentDto.email,
        password: studentDto.password,
        role: 'student',
        createdAt: Date.now(),
        description: studentDto.description,
        school: studentDto.school,
      });
      return await newTutor.save();
    } catch (err) {
      return err;
    }
  }

  async updateStudent(studentDto: StudentDto, studentId: string) {
    try {
      const student = await this.studentModel.findById(studentId).exec();
      if (!student) {
        throw new Error('no student found');
      }
      student.firstName = studentDto.firstName;
      student.lastName = studentDto.lastName;
      student.email = studentDto.email;
      student.description = studentDto.description;
      return await student.save();
    } catch (err) {
      return err;
    }
  }

  async deleteStudent(studentId: string) {
    try {
      const student = await this.studentModel
        .findById({ _id: studentId })
        .exec();
      if (!student) {
        throw new NotFoundException('Student not found');
      }
      return await this.studentModel.deleteOne({ _id: studentId }).exec();
    } catch (err) {
      return err;
    }
  }
}
