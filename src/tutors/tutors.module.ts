import { Module } from '@nestjs/common';
import { TutorsService } from './tutors.service';
import { TutorsController } from './tutors.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { TutorSchema } from './tutor.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Tutor', schema: TutorSchema }]),
  ],
  providers: [TutorsService],
  controllers: [TutorsController],
})
export class TutorsModule {}
