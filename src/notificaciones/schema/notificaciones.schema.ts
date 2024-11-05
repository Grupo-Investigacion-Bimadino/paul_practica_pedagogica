import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class notificaciones extends Document {

  @Prop()
  tipo: string;

  @Prop()
  fecha: string;

  @Prop()
  estado: string;

  @Prop()
  usuarioId: string;

  @Prop()
  descripcion: string;

  @Prop({ default: () => new Date() })
  timestamp: Date;
}

export const notificacionesSchema = SchemaFactory.createForClass(notificaciones);