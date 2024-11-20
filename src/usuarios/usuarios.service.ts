import { Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { usuarios } from './schema/usuarios.schema';

@Injectable()
export class UsuariosService {
  constructor(@InjectModel(usuarios.name) private songModel: Model<usuarios>) {}
 async  create(createUsuarioDto: CreateUsuarioDto) {
    const createdUsuario = new this.songModel(createUsuarioDto);
    const result = await createdUsuario.save();

    return result
  }

  findAll() {
    return `This action returns all usuarios`;
  }

  findOne(id: number) {
    return `This action returns a #${id} usuario`;
  }

  update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    return `This action updates a #${id} usuario`;
  }

  remove(id: number) {
    return `This action removes a #${id} usuario`;
  }
}
