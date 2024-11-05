import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class usuarios extends Document {

  @Prop()
  nombres: string;

  @Prop()
  email: string;

  @Prop()
  telefono : string;

  @Prop()
  rol: string;

  @Prop()
  genero: string;

  @Prop({ default: () => new Date() })
  timestamp: Date;
}

export const usuariosSchema = SchemaFactory.createForClass(usuarios);