import { useEffect, useState } from 'react';

import ModifyCompetition from './ModifyCompetition';
import Participants from './Participants';
import Loader from './Loader';

function CompetitionManagement() {
  const [participants, setParticipants] = useState<any[]>([]);
  const [competitions, setCompetitions] = useState<any[]>([]);
  const [modifyCompetition, setModifyCompetition] = useState<any>({});
  const [view, setView] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const data = await participantsService.getCompetitionData();
      setCompetitions(data);
    };

    fetchData();
  }, []);

  const onHandleModify = async (url_path: string) => {
    try {
      const data = await participantsService.getCompetitionDataByUrlPath(
        url_path,
      );
      setModifyCompetition(data);
      setView('modify-competition');
    } catch (error) {
      console.log(error);
    }
  };

  const onHandleViewParticipants = async (competition_id: string) => {
    try {
      const data = await participantsService.getParticipantsByCompetitionName(
        competition_id,
      );

      setParticipants(data);
      setView('view-participants');
    } catch (error) {
      console.log(error);
    }
  };

  const closeModal = () => {
    setView('');
    setModifyCompetition({});
    setParticipants([]);
  };

  return (
    <main className="flex flex-col gap-5 animate-in">
      {competitions.length === 0 ? (
        <Loader />
      ) : (
        <>
          {' '}
          <div className="relative overflow-x-auto rounded-md">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Nombre de la competición
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Banco
                  </th>
                  <th scope="col" className="px-6 py-3">
                    IBAN
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Beneficiario
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Precio de la inscripción (€)
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Url de la competición
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Url de del reglamento
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Estado
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Modificar
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Participantes
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
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {competition.competition_name}
                    </th>
                    <td className="px-6 py-4">{competition.bank}</td>
                    <td className="px-6 py-4">{competition.iban}</td>
                    <td className="px-6 py-4">{competition.beneficiary}</td>
                    <td className="px-6 py-4">
                      {competition.inscription_price}
                    </td>
                    <td className="px-6 py-4">
                      <a
                        href={`http://localhost:5173/${competition.competition_id}`}
                        target="_blank"
                      >
                        http://localhost:5173/{competition.competition_id}
                      </a>
                    </td>
                    <td className="px-6 py-4">
                      <a href={competition.regulation_url} target="_blank">
                        {competition.regulation_url}
                      </a>
                    </td>
                    <td className="px-6 py-4">
                      {competition.active ? 'Activa' : 'No activa'}
                    </td>
                    <td className="px-6 py-4">
                      <button
                        onClick={() => onHandleModify(competition.url_path)}
                        className="bg-black text-white p-2 rounded-md"
                      >
                        Modificar
                      </button>
                    </td>
                    <td className="px-6 py-4">
                      <button
                        onClick={() =>
                          onHandleViewParticipants(competition.competition_id)
                        }
                        className="bg-black text-white p-2 rounded-md"
                      >
                        Ver participantes
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {view === 'modify-competition' ? (
            <ModifyCompetition
              modifyCompetition={modifyCompetition}
              closeModal={closeModal}
            />
          ) : view === 'view-participants' ? (
            <Participants participants={participants} closeModal={closeModal} />
          ) : null}
        </>
      )}
    </main>
  );
}

export default CompetitionManagement;
