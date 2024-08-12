export interface ParticipantInterface {
  category: string;
  contestantName: string;
  managerName: string;
  license: string;
  nif: string;
  email: string;
  telephone: string;
  driverName: string;
  driverLastName: string;
  driverLicense: string;
  driverNif: string;
  driverProvince: string;
  driverCountry: string;
  driverBirthDate: string;
  driverTelephone: string;
  chasis: string;
  dorsal: string;
  firstMotor: string;
  secondMotor: string;
  transponder: string;
  transponderNumber: string;
  contestantLicenseFile: string | null;
  driverLicenseFile: string | null;
  paidJustificationFile: string | null;
  competitionName: string;
}
