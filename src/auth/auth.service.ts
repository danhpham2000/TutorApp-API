import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthDto } from './dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Student } from 'src/students/student.model';
import { Tutor } from 'src/tutors/tutor.model';
import * as argon from 'argon2';

@Injectable()
export class AuthService {
  constructor(
    private jwt: JwtService,
    @InjectModel('Student') private readonly studentModel: Model<Student>,
    @InjectModel('Tutor') private readonly tutorModel: Model<Tutor>,
  ) {}

  async login(authDto: AuthDto) {
    const studentUser = await this.studentModel.findOne({
      email: authDto.email,
    });
    const tutorUser = await this.tutorModel.findOne({ email: authDto.email });

    if (!studentUser && !tutorUser) {
      throw new Error('No user found');
    }

    if (studentUser) {
      const passwordMatch = await argon.verify(
        studentUser.password,
        authDto.password,
      );

      if (!passwordMatch) {
        throw new Error('Credential incorrect');
      }
      return this.signToken(studentUser._id, studentUser.email);
    }

    if (tutorUser) {
      const passwordMatch = await argon.verify(
        tutorUser.password,
        authDto.password,
      );

      if (!passwordMatch) {
        throw new Error('Credential incorrect');
      }
      return this.signToken(tutorUser._id, tutorUser.email);
    }
  }

  async signToken(
    userId: any,
    email: string,
  ): Promise<{ access_token: string }> {
    const payload = {
      sub: userId,
      email,
    };

    const token = await this.jwt.signAsync(payload, {
      expiresIn: '15m',
      secret: 'HS256',
    });

    return { access_token: token };
  }
}
