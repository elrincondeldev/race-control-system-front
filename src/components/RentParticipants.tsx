import React, { useEffect, useState } from 'react';
import { participantServices } from '../services/participants.service';
import PdfReader from './PdfReader';
import { PDFViewer } from '@react-pdf/renderer';
import Loader from './Loader';

import { ParticipantType, ParticipantsGrouped } from './types';

function RentParticipants() {
  const [participants, setParticipants] = useState<ParticipantType[]>([]);
  const [pdf, setPdf] = useState<boolean>(false);
  const [selectedParticipant, setSelectedParticipant] =
    useState<ParticipantType | null>(null);
  const [groupedParticipants, setGroupedParticipants] =
    useState<ParticipantsGrouped>({});
  const [totalTeams, setTotalTeams] = useState<number>(0);

  useEffect(() => {
    const fetchData = async () => {
      const response = await participantServices.getParticipants();
      const participants: ParticipantType[] = response?.data || [];

      const teams = participants.reduce<ParticipantsGrouped>(
        (acc, participant) => {
          const team = participant.driver_team || 'Sin equipo';
          if (!acc[team]) {
            acc[team] = [];
          }
          acc[team].push(participant);
          return acc;
        },
        {},
      );

      setParticipants(participants);
      setGroupedParticipants(teams);
      setTotalTeams(Object.keys(teams).length);
    };

    fetchData();
  }, []);

  const downloadPdf = (participant: ParticipantType) => {
    setSelectedParticipant(participant);
    setPdf(true);
  };

  return (
    <main className="flex flex-col gap-5 mb-10 animate-in">
      {participants.length > 0 ? (
        <>
          <div className="relative overflow-x-auto rounded-md">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Categoría
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Nombre piloto
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Apellidos piloto
                  </th>
                  <th scope="col" className="px-6 py-3">
                    NIF piloto
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Fecha nacimiento
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Teléfono piloto
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Equipo
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Descargar PDF
                  </th>
                </tr>
              </thead>
              <tbody>
                {Object.keys(groupedParticipants).map((team) => (
                  <React.Fragment key={team}>
                    <tr className='bg-gray-900'>
                      <td
                        colSpan={8}
                        className="px-6 py-4 font-bold text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        Equipo: {team} ({groupedParticipants[team].length}{' '}
                        pilotos)
                      </td>
                    </tr>
                    {groupedParticipants[team].map((participant) => (
                      <tr
                        key={participant.driver_nif}
                        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                      >
                        <td className="px-6 py-4">{participant.category}</td>
                        <td className="px-6 py-4">{participant.driver_name}</td>
                        <td className="px-6 py-4">
                          {participant.driver_lastname}
                        </td>
                        <td className="px-6 py-4">{participant.driver_nif}</td>
                        <td className="px-6 py-4">
                          {participant.driver_birthdate}
                        </td>
                        <td className="px-6 py-4">
                          {participant.driver_phone}
                        </td>
                        <td className="px-6 py-4">{participant.driver_team}</td>
                        <td
                          onClick={() => downloadPdf(participant)}
                          className="px-6 py-4 text-center cursor-pointer"
                        >
                          Descargar PDF
                        </td>
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
          <div className="text-right mt-5">
            <p className="text-lg font-bold">Total de equipos: {totalTeams}</p>
          </div>
          {pdf && selectedParticipant && (
            <section className="fixed inset-0 flex items-center justify-center z-50 mt-[200px]">
              <div className="bg-white p-5 rounded-md flex flex-col gap-3 relative">
                <div className="ml-auto">
                  <button
                    className="text-white bg-black p-3 px-8 rounded-md font-bold"
                    onClick={() => setPdf(false)}
                  >
                    Cerrar
                  </button>
                </div>
                <PDFViewer style={{ width: '60vw', height: '60vh' }}>
                  <PdfReader participant={selectedParticipant} />
                </PDFViewer>
              </div>
            </section>
          )}
        </>
      ) : (
        <Loader />
      )}
    </main>
  );
}

export default RentParticipants;
