import { Module } from '@nestjs/common';
import { EvaluacionesService } from './evaluaciones.service';
import { EvaluacionesController } from './evaluaciones.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { evaluaciones, evaluacionesSchema } from './schema/evaluaciones.schema';

@Module({
  controllers: [EvaluacionesController],
  providers: [EvaluacionesService],
})
export class EvaluacionesModule {}
