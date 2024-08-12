// import { useEffect, useState } from 'react';

// import PdfReader from './PdfReader';
// import { PDFViewer } from '@react-pdf/renderer';
// import Loader from './Loader';

// function Table() {
//   const [participants, setParticipants] = useState([]);
//   const [pdf, setPdf] = useState(false);
//   const [selectedParticipant, setSelectedParticipant] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       const data = await participantsService.getParticipants();
//       setParticipants(data);
//     };

//     fetchData();
//   }, []);

//   const downloadPdf = (participant: any) => {
//     setSelectedParticipant(participant);
//     setPdf(true);
//   };

//   const downloadImage = (image_id: string) => {
//     const fetchData = async () => {
//       try {
//         const response = await participantsService.downloadImage(image_id);

//         // Verifica si la respuesta contiene datos válidos
//         if (response?.data) {
//           // Convierte la cadena base64 en un ArrayBuffer
//           const arrayBuffer = base64ToArrayBuffer(response.data);

//           // Crea un Blob a partir del ArrayBuffer
//           const blob = new Blob([arrayBuffer], {
//             type: response.headers['content-type'],
//           });

//           // Crea una URL de objeto y descarga el archivo
//           const url = URL.createObjectURL(blob);
//           const a = document.createElement('a');
//           a.href = url;
//           a.download = image_id; // Nombre del archivo de descarga
//           document.body.appendChild(a); // Añadir el enlace al DOM
//           a.click(); // Simular un clic en el enlace
//           a.remove(); // Remover el enlace del DOM
//           window.URL.revokeObjectURL(url); // Liberar la URL del Blob
//         } else {
//           console.error('No se recibieron datos válidos para la imagen.');
//         }
//       } catch (error) {
//         console.error('Error downloading the image:', error);
//       }
//     };

//     fetchData();
//   };

//   // Función para convertir cadena base64 en ArrayBuffer
//   function base64ToArrayBuffer(base64: string): ArrayBuffer {
//     const binaryString = window.atob(base64);
//     const length = binaryString.length;
//     const bytes = new Uint8Array(length);
//     for (let i = 0; i < length; i++) {
//       bytes[i] = binaryString.charCodeAt(i);
//     }
//     return bytes.buffer;
//   }

//   return (
//     <main className="flex flex-col gap-5 mb-10 animate-in">
//       {participants.length > 0 ? (
//         <>
//           <div className="relative overflow-x-auto rounded-md">
//             <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
//               <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
//                 <tr>
//                   <th scope="col" className="px-6 py-3">
//                     Categoría
//                   </th>
//                   <th scope="col" className="px-6 py-3">
//                     Nombre concursante
//                   </th>
//                   <th scope="col" className="px-6 py-3">
//                     Representante
//                   </th>
//                   <th scope="col" className="px-6 py-3">
//                     Licencia concursante
//                   </th>
//                   <th scope="col" className="px-6 py-3">
//                     NIF concursante
//                   </th>
//                   <th scope="col" className="px-6 py-3">
//                     Email concursante
//                   </th>
//                   <th scope="col" className="px-6 py-3">
//                     Teléfono concursante
//                   </th>
//                   <th scope="col" className="px-6 py-3">
//                     Nombre piloto
//                   </th>
//                   <th scope="col" className="px-6 py-3">
//                     Apellidos piloto
//                   </th>
//                   <th scope="col" className="px-6 py-3">
//                     Licencia piloto
//                   </th>
//                   <th scope="col" className="px-6 py-3">
//                     NIF piloto
//                   </th>
//                   <th scope="col" className="px-6 py-3">
//                     Provincia piloto
//                   </th>
//                   <th scope="col" className="px-6 py-3">
//                     País piloto
//                   </th>
//                   <th scope="col" className="px-6 py-3">
//                     Data nacimiento piloto
//                   </th>
//                   <th scope="col" className="px-6 py-3">
//                     Teléfono piloto
//                   </th>
//                   <th scope="col" className="px-6 py-3">
//                     Chasis
//                   </th>
//                   <th scope="col" className="px-6 py-3">
//                     Primer motor
//                   </th>
//                   <th scope="col" className="px-6 py-3">
//                     Segundo motor
//                   </th>
//                   <th scope="col" className="px-6 py-3">
//                     Alquiler transponder
//                   </th>
//                   <th scope="col" className="px-6 py-3">
//                     Número transponder
//                   </th>
//                   <th scope="col" className="px-6 py-3">
//                     Dorsal
//                   </th>
//                   <th scope="col" className="px-6 py-3">
//                     Competición
//                   </th>
//                   <th scope="col" className="px-6 py-3">
//                     Licencia concursante
//                   </th>
//                   <th scope="col" className="px-6 py-3">
//                     Licencia piloto
//                   </th>
//                   <th scope="col" className="px-6 py-3">
//                     Justificante de pago
//                   </th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {participants.map((participant: any) => (
//                   <tr
//                     key={participant.driver_license}
//                     className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
//                   >
//                     <th
//                       scope="row"
//                       className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
//                     >
//                       {participant.category}
//                     </th>
//                     <td className="px-6 py-4">{participant.contestant_name}</td>
//                     <td className="px-6 py-4">
//                       {participant.contestant_manager}
//                     </td>
//                     <td className="px-6 py-4">
//                       {participant.contestant_license}
//                     </td>
//                     <td className="px-6 py-4">{participant.contestant_nif}</td>
//                     <td className="px-6 py-4">
//                       {participant.contestant_email}
//                     </td>
//                     <td className="px-6 py-4">
//                       {participant.contestant_phone}
//                     </td>
//                     <td className="px-6 py-4">{participant.driver_name}</td>
//                     <td className="px-6 py-4">
//                       {participant.driver_last_name}
//                     </td>
//                     <td className="px-6 py-4">{participant.driver_license}</td>
//                     <td className="px-6 py-4">{participant.driver_nif}</td>
//                     <td className="px-6 py-4">{participant.driver_province}</td>
//                     <td className="px-6 py-4">{participant.driver_country}</td>
//                     <td className="px-6 py-4">
//                       {participant.driver_birthdate}
//                     </td>
//                     <td className="px-6 py-4">{participant.driver_phone}</td>
//                     <td className="px-6 py-4">{participant.chasis}</td>
//                     <td className="px-6 py-4">{participant.first_engine}</td>
//                     <td className="px-6 py-4">{participant.second_engine}</td>
//                     <td className="px-6 py-4">{participant.transponder}</td>
//                     <td className="px-6 py-4">
//                       {participant.transponder_number}
//                     </td>
//                     <td className="px-6 py-4">{participant.dorsal}</td>
//                     <td className="px-6 py-4">{participant.competition}</td>
//                     <td
//                       className="px-6 py-4 cursor-pointer"
//                       onClick={() =>
//                         downloadImage(participant.contestant_license_file)
//                       }
//                     >
//                       Descargar
//                     </td>
//                     <td
//                       className="px-6 py-4 cursor-pointer"
//                       onClick={() =>
//                         downloadImage(participant.driver_license_file)
//                       }
//                     >
//                       Descargar
//                     </td>
//                     <td
//                       className="px-6 py-4 cursor-pointer"
//                       onClick={() =>
//                         downloadImage(participant.paid_justification_file)
//                       }
//                     >
//                       Descargar
//                     </td>
//                     <td
//                       onClick={() => downloadPdf(participant)}
//                       className="px-6 py-4 text-center cursor-pointer"
//                     >
//                       Descargar PDF
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//           {pdf ? (
//             <section className="fixed inset-0 flex items-center justify-center z-50 mt-[200px]">
//               <div className="bg-white p-5 rounded-md flex flex-col gap-3 relative">
//                 <div className="ml-auto">
//                   <button
//                     className="text-white bg-black p-3 px-8 rounded-md font-bold"
//                     onClick={() => setPdf(false)}
//                   >
//                     Cerrar
//                   </button>
//                 </div>
//                 <PDFViewer width="1000" height="650">
//                   <PdfReader participant={selectedParticipant} />
//                 </PDFViewer>
//               </div>
//             </section>
//           ) : null}
//         </>
//       ) : (
//         <Loader />
//       )}
//     </main>
//   );
// }

// export default Table;
