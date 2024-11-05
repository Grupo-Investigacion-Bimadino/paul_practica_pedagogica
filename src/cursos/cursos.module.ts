import { Module } from '@nestjs/common';
import { CursosService } from './cursos.service';
import { CursosController } from './cursos.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { cursos, cursosSchema } from './schema/cursos.schema';

@Module({
  controllers: [CursosController],
  providers: [CursosService],
})
export class CursosModule {}
