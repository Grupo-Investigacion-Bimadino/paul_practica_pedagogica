import { Injectable } from '@nestjs/common';
import { CreateNotificacioneDto } from './dto/create-notificacione.dto';
import { UpdateNotificacioneDto } from './dto/update-notificacione.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { notificaciones } from './schema/notificaciones.schema';
@Injectable()
export class NotificacionesService {
  constructor(@InjectModel(notificaciones.name) private songModel: Model<notificaciones>) {}
  async create(createNotificacioneDto: CreateNotificacioneDto) {
    const creatednotificacione = new this.songModel(createNotificacioneDto);
    const result = await creatednotificacione.save();

    return result
  }

  findAll() {
    return `This action returns all notificaciones`;
  }

  findOne(id: number) {
    return `This action returns a #${id} notificacione`;
  }

  update(id: number, updateNotificacioneDto: UpdateNotificacioneDto) {
    return `This action updates a #${id} notificacione`;
  }

  remove(id: number) {
    return `This action removes a #${id} notificacione`;
  }
}
