import { useEffect, useState } from 'react';
import { participantServices } from '../services/participants.service';
import Loader from './Loader';
import { CompetitionEditModal } from './CompetitionEditModal';

function CompetitionManagementRent() {
  const [competitions, setCompetitions] = useState<any[]>([]);
  const [selectedCompetition, setSelectedCompetition] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEditClick = (competition: any) => {
    setSelectedCompetition(competition);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCompetition(null);
  };

  const handleSaveCompetition = async (updatedCompetition: any) => {
    try {
      console.log(updatedCompetition);
      await participantServices.modifyCompetition(updatedCompetition);
      const data = await participantServices.getCompetitions();

      setCompetitions(data?.data);
    } catch (error) {
      console.log('Error al modificar la competición:', error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await participantServices.getCompetitions();
      console.log(data);
      setCompetitions(data?.data);
    };

    fetchData();
  }, []);

  return (
    <main className="flex flex-col gap-5 animate-in">
      {competitions.length === 0 ? (
        <Loader />
      ) : (
        <>
          <div className="relative overflow-x-auto rounded-md">
            <table className="min-w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-4 py-2 md:px-6 md:py-3">
                    Nombre de la competición
                  </th>
                  <th scope="col" className="px-4 py-2 md:px-6 md:py-3">
                    Precio de la inscripción (€)
                  </th>
                  <th scope="col" className="px-4 py-2 md:px-6 md:py-3">
                    Url de la competición
                  </th>
                  <th scope="col" className="px-4 py-2 md:px-6 md:py-3">
                    Url del reglamento
                  </th>
                  <th scope="col" className="px-4 py-2 md:px-6 md:py-3">
                    Estado
                  </th>
                  <th scope="col" className="px-4 py-2 md:px-6 md:py-3">
                    Modificar
                  </th>
                </tr>
              </thead>
              <tbody>
                {competitions.map((competition) => (
                  <tr
                    key={competition.competition_name}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  >
                    <th
                      scope="row"
                      className="px-4 py-2 md:px-6 md:py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {competition.competition_name}
                    </th>
                    <td className="px-4 py-2 md:px-6 md:py-4">
                      {competition.inscription_price}
                    </td>
                    <td className="px-4 py-2 md:px-6 md:py-4">
                      <a
                        href={`https://www.racecontrolsystem.com/`}
                        target="_blank"
                        className="text-blue-500 hover:underline"
                      >
                        https://www.racecontrolsystem.com/
                      </a>
                    </td>
                    <td className="px-4 py-2 md:px-6 md:py-4">
                      <a
                        href={'https://www.racecontrolsystem.com/'}
                        target="_blank"
                        className="text-blue-500 hover:underline"
                      >
                        {competition.regulation_url}
                      </a>
                    </td>
                    <td className="px-4 py-2 md:px-6 md:py-4">
                      {competition.active ? 'Activa' : 'No activa'}
                    </td>
                    <td className="px-4 py-2 md:px-6 md:py-4">
                      <button
                        onClick={() => handleEditClick(competition)}
                        className="text-blue-500 hover:underline"
                      >
                        Modificar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {isModalOpen && (
            <CompetitionEditModal
              competition={selectedCompetition}
              onSave={handleSaveCompetition}
              onClose={handleCloseModal}
            />
          )}
        </>
      )}
    </main>
  );
}

export default CompetitionManagementRent;
