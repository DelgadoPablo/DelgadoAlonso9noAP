export enum RabbitMQ {
  StudentQueue = 'students',
  EquipoQueue = 'students',
  VehiculoQueue='vehiculo'

}

export enum StudentMsg {
  CREATE = 'CREATE_STUDENT',
  FIND_ALL = 'FIND_STUDENTS',
  FIND_ONE = 'FIND_STUDENT',
  UPDATE = 'UPDATE_STUDENT',
  DELETE = 'DELETE_STUDENT',
}

export enum EquipoMSG {
  CREATE = 'CREATE_Equipo',
  FIND_ALL = 'FIND_EquipoS',
  FIND_ONE = 'FIND_Equipo',
  UPDATE = 'UPDATE_Equipo',
  DELETE = 'DELETE_Equipo',
}

export enum VehiculoMSG {
  CREATE = 'CREATE_VEHICULO',
  FIND_ALL = 'FIND_VEHICULOS',
  FIND_ONE = 'FIND_VEHICULO',
  UPDATE = 'UPDATE_VEHICULO',
  DELETE = 'DELETE_VEHICULO',
  VALID_USER = 'VALID_VEHICULO',
}