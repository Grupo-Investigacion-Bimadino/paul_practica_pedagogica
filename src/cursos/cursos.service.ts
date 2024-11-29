import { Injectable } from '@nestjs/common';
import { CreateCursoDto } from './dto/create-curso.dto';
import { UpdateCursoDto } from './dto/update-curso.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { cursos } from './schema/cursos.schema';


@Injectable()
export class CursosService {
  constructor(@InjectModel(cursos.name) private songModel: Model<cursos>) {}
async create(createCursoDto: CreateCursoDto) {
  const createdCurso = new this.songModel(createCursoDto);
  const result = await createdCurso.save();

  return result
  }

  findAll() {
    return `This action returns all cursos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} curso`;
  }

  update(id: number, updateCursoDto: UpdateCursoDto) {
    return `This action updates a #${id} curso`;
  }

  remove(id: number) {
    return `This action removes a #${id} curso`;
  }
}
