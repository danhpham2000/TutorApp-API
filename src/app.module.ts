import { Module } from '@nestjs/common';
import { TutorsModule } from './tutors/tutors.module';
import { StudentsModule } from './students/students.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TutorsModule,
    StudentsModule,
    MongooseModule.forRoot(
      `mongodb+srv://Danh:gXDifDOvrMXeGVLZ@tutorcluster.go4yv.mongodb.net/tutorapp?retryWrites=true&w=majority&appName=TutorCluster`,
    ),
    AuthModule,
  ],
})
export class AppModule {}
