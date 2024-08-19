import { useEffect, useState } from 'react';
import { participantServices } from '../services/participants.service';
import Loader from './Loader';

function CompetitionManagementRent() {
  const [competitions, setCompetitions] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await participantServices.getCompetitions();
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
                        href={`http://localhost:5173/${competition.competition_id}`}
                        target="_blank"
                        className="text-blue-500 hover:underline"
                      >
                        http://localhost:5173/{competition.competition_id}
                      </a>
                    </td>
                    <td className="px-4 py-2 md:px-6 md:py-4">
                      <a
                        href={competition.regulation_url}
                        target="_blank"
                        className="text-blue-500 hover:underline"
                      >
                        {competition.regulation_url}
                      </a>
                    </td>
                    <td className="px-4 py-2 md:px-6 md:py-4">
                      {competition.active ? 'Activa' : 'No activa'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </main>
  );
}

export default CompetitionManagementRent;
