export interface competitionInterface {
  competition_id: string;
  competition_name: string;
  bank: string;
  iban: string;
  beneficiary: string;
  inscription_price: number;
  regulation_url: string;
  active: boolean;
  competition_image: File | null;
  competition_date: string;
  email: string;
  categories: string;
}
