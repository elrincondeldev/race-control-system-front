import { create } from 'zustand';

export interface Competition {
  competitionName: string;
  setCompetitionName: (competitionName: string) => void;
  bank: string;
  setBank: (bank: string) => void;
  iban: string;
  setIban: (iban: string) => void;
  beneficiary: string;
  setBeneficiary: (beneficiary: string) => void;
  inscriptionPrice: number;
  setInscriptionPrice: (inscriptionPrice: number) => void;
  regulationUrl: string;
  setRegulationUrl: (regulationUrl: string) => void;
  rentRegister: string;
  setRentRegister: (rentRegister: string) => void;
}

export const useCompetitionStore = create<Competition>((set) => ({
  competitionName: '',
  setCompetitionName: (competitionName) => set({ competitionName }),
  bank: '',
  setBank: (bank) => set({ bank }),
  iban: '',
  setIban: (iban) => set({ iban }),
  beneficiary: '',
  setBeneficiary: (beneficiary) => set({ beneficiary }),
  inscriptionPrice: 0,
  setInscriptionPrice: (inscriptionPrice) => set({ inscriptionPrice }),
  regulationUrl: '',
  setRegulationUrl: (regulationUrl) => set({ regulationUrl }),
  rentRegister: '',
  setRentRegister: (rentRegister) => set({ rentRegister }),
}));
