import * as mongoose from 'mongoose';

export const PacienteSchema = new mongoose.Schema(
  {
    descripcion: { type: String, required: true },
    identificacion: { type: String, required: true },
    turno: { type: String, required: true },
  
  },
  { timestamps: true },
);
