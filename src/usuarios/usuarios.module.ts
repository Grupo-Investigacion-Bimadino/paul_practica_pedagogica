import { Module } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { UsuariosController } from './usuarios.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { usuarios, usuariosSchema } from './schema/usuarios.schema';
@Module({
  controllers: [UsuariosController],
  providers: [Usu1ariosService],
})
export class UsuariosModule {}
