import { Injectable } from '@nestjs/common';
import { CreateEvaluacioneDto } from './dto/create-evaluacione.dto';
import { UpdateEvaluacioneDto } from './dto/update-evaluacione.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { evaluaciones } from './schema/evaluaciones.schema';
@Injectable()
export class EvaluacionesService {
  constructor(@InjectModel(evaluaciones.name) private songModel: Model<evaluaciones>) {}
  async create(createEvaluacioneDto: CreateEvaluacioneDto) {
    const createdEvaluacione = new this.songModel(createEvaluacioneDto);
    const result = await createdEvaluacione.save();
    return result
  }

  findAll() {
    return `This action returns all evaluaciones`;
  }

  findOne(id: number) {
    return `This action returns a #${id} evaluacione`;
  }

  update(id: number, updateEvaluacioneDto: UpdateEvaluacioneDto) {
    return `This action updates a #${id} evaluacione`;
  }

  remove(id: number) {
    return `This action removes a #${id} evaluacione`;
  }
}
