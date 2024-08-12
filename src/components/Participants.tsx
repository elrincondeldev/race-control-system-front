import React, { useState } from 'react';
import DownloadCSV from './DownloadCSV';
import { PDFViewer } from '@react-pdf/renderer';
import PdfReader from './PdfReader';

interface ParticipantsProps {
  participants: any[];
  closeModal: () => void;
}

const Participants: React.FC<ParticipantsProps> = ({
  participants,
  closeModal,
}) => {
  const [pdf, setPdf] = useState(false);
  const [selectedParticipant, setSelectedParticipant] = useState<any>(null);

  const downloadPdf = (participant: any) => {
    setSelectedParticipant(participant);
    setPdf(true);
  };

  const downloadBase64File = (base64: string, fileName: string) => {
    const link = document.createElement('a');
    link.href = base64;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-60 bg-black bg-opacity-50 animate-in">
      <div className="overflow-x-auto max-w-[1400px] bg-white p-7 rounded-md shadow-lg relative z-50">
        <table className="min-w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Categoría
              </th>
              <th scope="col" className="px-6 py-3">
                Nombre concursante
              </th>
              <th scope="col" className="px-6 py-3">
                Representante
              </th>
              <th scope="col" className="px-6 py-3">
                Licencia concursante
              </th>
              <th scope="col" className="px-6 py-3">
                NIF concursante
              </th>
              <th scope="col" className="px-6 py-3">
                Email concursante
              </th>
              <th scope="col" className="px-6 py-3">
                Teléfono concursante
              </th>
              <th scope="col" className="px-6 py-3">
                Nombre piloto
              </th>
              <th scope="col" className="px-6 py-3">
                Apellidos piloto
              </th>
              <th scope="col" className="px-6 py-3">
                Licencia piloto
              </th>
              <th scope="col" className="px-6 py-3">
                NIF piloto
              </th>
              <th scope="col" className="px-6 py-3">
                Provincia piloto
              </th>
              <th scope="col" className="px-6 py-3">
                País piloto
              </th>
              <th scope="col" className="px-6 py-3">
                Data nacimiento piloto
              </th>
              <th scope="col" className="px-6 py-3">
                Teléfono piloto
              </th>
              <th scope="col" className="px-6 py-3">
                Chasis
              </th>
              <th scope="col" className="px-6 py-3">
                Primer motor
              </th>
              <th scope="col" className="px-6 py-3">
                Segundo motor
              </th>
              <th scope="col" className="px-6 py-3">
                Alquiler transponder
              </th>
              <th scope="col" className="px-6 py-3">
                Número transponder
              </th>
              <th scope="col" className="px-6 py-3">
                Dorsal
              </th>
              <th scope="col" className="px-6 py-3">
                Licencia concursante
              </th>
              <th scope="col" className="px-6 py-3">
                Licencia piloto
              </th>
              <th scope="col" className="px-6 py-3">
                Justificante de pago
              </th>
            </tr>
          </thead>
          <tbody>
            {participants.map((participant) => (
              <tr
                key={participant.driver_license}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {participant.category}
                </th>
                <td className="px-6 py-4">{participant.contestant_name}</td>
                <td className="px-6 py-4">{participant.contestant_manager}</td>
                <td className="px-6 py-4">{participant.contestant_license}</td>
                <td className="px-6 py-4">{participant.contestant_nif}</td>
                <td className="px-6 py-4">{participant.contestant_email}</td>
                <td className="px-6 py-4">{participant.contestant_phone}</td>
                <td className="px-6 py-4">{participant.driver_name}</td>
                <td className="px-6 py-4">{participant.driver_last_name}</td>
                <td className="px-6 py-4">{participant.driver_license}</td>
                <td className="px-6 py-4">{participant.driver_nif}</td>
                <td className="px-6 py-4">{participant.driver_province}</td>
                <td className="px-6 py-4">{participant.driver_country}</td>
                <td className="px-6 py-4">{participant.driver_birthdate}</td>
                <td className="px-6 py-4">{participant.driver_phone}</td>
                <td className="px-6 py-4">{participant.chasis}</td>
                <td className="px-6 py-4">{participant.first_engine}</td>
                <td className="px-6 py-4">{participant.second_engine}</td>
                <td className="px-6 py-4">{participant.transponder}</td>
                <td className="px-6 py-4">{participant.transponder_number}</td>
                <td className="px-6 py-4">{participant.dorsal}</td>
                <td
                  className="px-6 py-4 cursor-pointer"
                  onClick={() =>
                    downloadBase64File(
                      participant.contestant_license_file,
                      `${participant.contestant_name}_licencia_concursante.png`,
                    )
                  }
                >
                  Descargar
                </td>
                <td
                  className="px-6 py-4 cursor-pointer"
                  onClick={() =>
                    downloadBase64File(
                      participant.driver_license_file,
                      `${participant.contestant_name}_licencia_piloto.png`,
                    )
                  }
                >
                  Descargar
                </td>
                <td
                  className="px-6 py-4 cursor-pointer"
                  onClick={() =>
                    downloadBase64File(
                      participant.paid_justification_file,
                      `${participant.contestant_name}_justificante_pago.png`,
                    )
                  }
                >
                  Descargar
                </td>
                <td
                  onClick={() => downloadPdf(participant)}
                  className="px-6 py-4 text-center cursor-pointer"
                >
                  Descargar PDF
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex gap-5 mt-5">
          <DownloadCSV />
          <button
            onClick={closeModal}
            className="p-3 px-10 bg-red-500 hover:bg-[#ff6262] rounded-md text-white"
          >
            Cerrar
          </button>
        </div>
      </div>
      {pdf && (
        <section className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50">
          <div className="bg-white p-5 rounded-md flex flex-col gap-3 relative">
            <div className="ml-auto">
              <button
                className="text-white bg-black p-3 px-8 rounded-md font-bold"
                onClick={() => setPdf(false)}
              >
                Cerrar
              </button>
            </div>
            <PDFViewer width="1000" height="650">
              <PdfReader participant={selectedParticipant} />
            </PDFViewer>
          </div>
        </section>
      )}
    </div>
  );
};

export default Participants;
