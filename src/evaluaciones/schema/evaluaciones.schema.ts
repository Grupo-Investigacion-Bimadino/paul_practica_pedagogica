import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class evaluaciones extends Document {

  @Prop()
  puntuacion: string;

  @Prop()
  fechainicio: string;

  @Prop()
  fechacierre: string;

  @Prop()
  usuarioId: string;

  @Prop()
  cursoId: string;

  @Prop({ default: () => new Date() })
  timestamp: Date;
}

export const evaluacionesSchema = SchemaFactory.createForClass(evaluaciones);