// types.ts

// Define el tipo de participante con todas las propiedades necesarias
export interface ParticipantType {
  category: string;
  driver_name: string;
  driver_lastname: string;
  driver_nif: string;
  driver_birthdate: string;
  driver_phone: string;
  driver_team: string;
  contestant_name?: string; // Opcional, añadir si es necesario
  contestant_manager?: string; // Opcional, añadir si es necesario
  contestant_license?: string; // Opcional, añadir si es necesario
  contestant_nif?: string; // Opcional, añadir si es necesario
  // Añadir más campos según sea necesario
}

// Tipos para participantes agrupados
export interface ParticipantsGrouped {
  [teamName: string]: ParticipantType[];
}
