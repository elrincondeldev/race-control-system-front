import { create } from 'zustand';

export interface Values {
  category: string;
  setCategory: (category: string) => void;
  contestantName: string;
  setContestantName: (contestantName: string) => void;
  managerName: string;
  setManagerName: (managerName: string) => void;
  license: string;
  setLicense: (license: string) => void;
  nif: string;
  setNif: (nif: string) => void;
  email: string;
  setEmail: (email: string) => void;
  telephone: string;
  setTelephone: (telephone: string) => void;
  driverName: string;
  setDriverName: (driverName: string) => void;
  driverLastName: string;
  setDriverLastName: (driverLastName: string) => void;
  driverLicense: string;
  setDriverLicense: (driverLicense: string) => void;
  driverNif: string;
  setDriverNif: (driverNif: string) => void;
  driverProvince: string;
  setDriverProvince: (driverProvince: string) => void;
  driverCountry: string;
  setDriverCountry: (driverCountry: string) => void;
  driverBirthDate: string;
  setDriverBirthDate: (driverBirthDate: string) => void;
  driverTelephone: string;
  setDriverTelephone: (driverTelephone: string) => void;
  chasis: string;
  setChasis: (chasis: string) => void;
  dorsal: string;
  setDorsal: (dorsal: string) => void;
  firstMotor: string;
  setFirstMotor: (firstMotor: string) => void;
  secondMotor: string;
  setSecondMotor: (secondMotor: string) => void;
  transponder: string;
  setTransponder: (transponder: string) => void;
  transponderNumber: string;
  setTransponderNumber: (transponderNumber: string) => void;
  contestantLicenseFile: string | null; // Cambiado a string para almacenar el blob como URL
  setContestantLicenseFile: (file: string | null) => void;
  driverLicenseFile: string | null; // Cambiado a string para almacenar el blob como URL
  setDriverLicenseFile: (file: string | null) => void;
  paidJustificationFile: string | null; // Cambiado a string para almacenar el blob como URL
  setPaidJustificationFile: (file: string | null) => void;
  termsAndConditions: boolean;
  setTermsAndConditions: (termsAndConditions: boolean) => void;
  participantCompetitionName: string;
  setParticipantCompetitionName: (participantCompetitionName: string) => void;
  accessToken: string;
  setAccessToken: (accessToken: string) => void;
  driver_team: string;
  setDriverTeam: (driver_team: string) => void;
}

export const useValueStore = create<Values>((set) => ({
  category: '',
  setCategory: (category) => set({ category }),
  contestantName: '',
  setContestantName: (contestantName) => set({ contestantName }),
  managerName: '',
  setManagerName: (managerName) => set({ managerName }),
  license: '',
  setLicense: (license) => set({ license }),
  nif: '',
  setNif: (nif) => set({ nif }),
  email: '',
  setEmail: (email) => set({ email }),
  telephone: '',
  setTelephone: (telephone) => set({ telephone }),
  driverName: '',
  setDriverName: (driverName) => set({ driverName }),
  driverLastName: '',
  setDriverLastName: (driverLastName) => set({ driverLastName }),
  driverLicense: '',
  setDriverLicense: (driverLicense) => set({ driverLicense }),
  driverNif: '',
  setDriverNif: (driverNif) => set({ driverNif }),
  driverProvince: '',
  setDriverProvince: (driverProvince) => set({ driverProvince }),
  driverCountry: '',
  setDriverCountry: (driverCountry) => set({ driverCountry }),
  driverBirthDate: '',
  setDriverBirthDate: (driverBirthDate) => set({ driverBirthDate }),
  driverTelephone: '',
  setDriverTelephone: (driverTelephone) => set({ driverTelephone }),
  chasis: '',
  setChasis: (chasis) => set({ chasis }),
  dorsal: '',
  setDorsal: (dorsal) => set({ dorsal }),
  firstMotor: '',
  setFirstMotor: (firstMotor) => set({ firstMotor }),
  secondMotor: '',
  setSecondMotor: (secondMotor) => set({ secondMotor }),
  transponder: 'Sí',
  setTransponder: (transponder) => set({ transponder }),
  transponderNumber: '',
  setTransponderNumber: (transponderNumber) => set({ transponderNumber }),
  contestantLicenseFile: null,
  setContestantLicenseFile: (file) => set({ contestantLicenseFile: file }),
  driverLicenseFile: null,
  setDriverLicenseFile: (file) => set({ driverLicenseFile: file }),
  paidJustificationFile: null,
  setPaidJustificationFile: (file) => set({ paidJustificationFile: file }),
  termsAndConditions: false,
  setTermsAndConditions: (termsAndConditions) => set({ termsAndConditions }),
  participantCompetitionName: '',
  setParticipantCompetitionName: (participantCompetitionName) =>
    set({ participantCompetitionName }),
  accessToken: '',
  setAccessToken: (accessToken) => set({ accessToken }),
  driver_team: '',
  setDriverTeam: (driver_team) => set({ driver_team }),
}));
