import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './strategy';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { StudentsModule } from 'src/students/students.module';
import { TutorsModule } from 'src/tutors/tutors.module';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    StudentsModule,
    TutorsModule,
    JwtModule,
  ],
  providers: [JwtStrategy, AuthService],
  exports: [PassportModule],
  controllers: [AuthController],
})
export class AuthModule {}
