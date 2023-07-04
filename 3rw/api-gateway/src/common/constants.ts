export enum RabbitMQ {
  UserQueue = 'users',
  PassengerQueue = 'passengers',
  FlightQueue = 'flights',
  StudentQueue = 'students',
  EquipoMSG = 'Equipo',
  VehiculoQueue = 'vehiculo',

}

export enum UserMSG {
  CREATE = 'CREATE_USER',
  FIND_ALL = 'FIND_USERS',
  FIND_ONE = 'FIND_USER',
  UPDATE = 'UPDATE_USER',
  DELETE = 'DELETE_USER',
  VALID_USER = 'VALID_USER',
}

export enum StudentMSG {
  CREATE = 'CREATE_STUDENT',
  FIND_ALL = 'FIND_STUDENTS',
  FIND_ONE = 'FIND_STUDENT',
  UPDATE = 'UPDATE_STUDENT',
  DELETE = 'DELETE_STUDENT',
  VALID_USER = 'VALID_STUDENT',
}


export enum PassengerMSG {
  CREATE = 'CREATE_PASSENGER',
  FIND_ALL = 'FIND_PASSENGERS',
  FIND_ONE = 'FIND_PASSENGER',
  UPDATE = 'UPDATE_PASSENGER',
  DELETE = 'DELETE_PASSENGER',
}

export enum FlightMSG {
  CREATE = 'CREATE_FLIGHT',
  FIND_ALL = 'FIND_FLIGHTS',
  FIND_ONE = 'FIND_FLIGHT',
  UPDATE = 'UPDATE_FLIGHT',
  DELETE = 'DELETE_FLIGHT',
  ADD_PASSENGER = 'ADD_PASSENGER',
}

export enum EquipoMSG {
  CREATE = 'CREATE_Equipo',
  FIND_ALL = 'FIND_Equipos',
  FIND_ONE = 'FIND_Equipo',
  UPDATE = 'UPDATE_Equipo',
  DELETE = 'DELETE_Equipo',
  VALID_USER = 'VALID_Equipo',
}

export enum VehiculoMSG {
  CREATE = 'CREATE_VEHICULO',
  FIND_ALL = 'FIND_VEHICULOS',
  FIND_ONE = 'FIND_VEHICULO',
  UPDATE = 'UPDATE_VEHICULO',
  DELETE = 'DELETE_VEHICULO',
  VALID_USER = 'VALID_VEHICULO',
}
