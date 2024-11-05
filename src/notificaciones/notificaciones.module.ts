import { Module } from '@nestjs/common';
import { NotificacionesService } from './notificaciones.service';
import { NotificacionesController } from './notificaciones.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { notificaciones, notificacionesSchema } from './schema/notificaciones.schema';
@Module({
  controllers: [NotificacionesController],
  providers: [NotificacionesService],
})
export class NotificacionesModule {}
