import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';


interface CompetitionData {
  competition_name: string;
  bank: string;
  iban: string;
  beneficiary: string;
  inscription_price: number;
  regulation_url: string;
  competition_image: string;
  active: boolean;
}

const useCompetitionData = (path: string) => {
  const [image, setImage] = useState<string>('');
  const [competitionData, setCompetitionData] =
    useState<CompetitionData | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = (await participantsService.getCompetitionDataByUrlPath(
          path,
        )) as CompetitionData;
        if (data.active) {
          setCompetitionData(data);
          setImage(`data:image/jpg;base64,${data.competition_image}`);
        } else {
          navigate('/');
        }
      } catch (error) {
        console.error(error);
        navigate('/');
      }
    };

    fetchData();
  }, [path, navigate]);

  return { competitionData, image };
};

export default useCompetitionData;
