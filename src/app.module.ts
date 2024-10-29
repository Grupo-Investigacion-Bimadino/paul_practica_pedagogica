import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EvaluacionesModule } from './evaluaciones/evaluaciones.module';
import { NotificacionesModule } from './notificaciones/notificaciones.module';
import { CursosModule } from './cursos/cursos.module';
import { UsuariosModule } from './usuarios/usuarios.module';

@Module({
  imports: [EvaluacionesModule, NotificacionesModule, CursosModule, UsuariosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
