import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class cursos  extends Document {

  @Prop()
  nombre: string;

  @Prop()
  fechainicio: string;

  @Prop()
  fechacierre: string;

  @Prop()
  tipo: string;

  @Prop()
  descripcion: string;

  @Prop({ default: () => new Date() })
  timestamp: Date;
}

export const cursosSchema = SchemaFactory.createForClass(cursos);