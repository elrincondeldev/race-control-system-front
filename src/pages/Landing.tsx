// import { useEffect, useState } from 'react';

// import Loader from '../components/Loader';

// export default function Landing() {
//   const [competitions, setCompetitions] = useState([]);
//   const [rentCompetitions, setRentCompetitions] = useState([]);

//   useEffect(() => {
//     const response = async () => {
//       const data = await participantsService.getActiveCompetitions();
//       const rentData =
//         await rentCompetitionsService.getRentActiveCompetitions();

//       setCompetitions(data);
//       setRentCompetitions(rentData);
//     };
//     response();
//   }, []);

//   return (
//     <div className="flex flex-col min-h-[100dvh] animate-in">
//       {competitions.length === 0 ? (
//         <Loader></Loader>
//       ) : (
//         <main className="flex-1">
//           <section className="w-full py-12 md:py-24 lg:py-32 h-screen bg-gray-100">
//             <div className="container px-4 md:px-6 flex m-auto flex-col items-center justify-center space-y-4 text-center">
//               <div className="space-y-2">
//                 <h2 className="text-5xl font-bold tracking-tighter sm:text-6xl">
//                   Próximas carreras
//                 </h2>
//                 <p className="max-w-[900px] text-gray-500 md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed ">
//                   Consulta el calendario de nuestras próximas carreras de
//                   karting y asegura tu plaza.
//                 </p>
//               </div>
//               <div className="grid gap-6">
//                 {competitions.map((competition: any) => (
//                   <div
//                     key={competition.competition_name}
//                     className="grid grid-cols-[auto_1fr_auto] items-center gap-4 rounded-lg bg-white p-4 shadow-sm transition-colors hover:bg-gray-100 "
//                   >
//                     <CalendarIcon className="h-6 w-6 text-red-500" />
//                     <div>
//                       <h3 className=" text-lg font-bold">
//                         {competition.competition_name}
//                       </h3>
//                       <p className="text-sm text-gray-500">
//                         June 15 - June 17, 2024
//                       </p>
//                     </div>
//                     <a
//                       href={`/${competition.competition_id}`}
//                       target="_blank"
//                       className="inline-flex h-9 items-center justify-center rounded-md bg-red-500 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-red-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-red-700 disabled:pointer-events-none disabled:opacity-50 "
//                     >
//                       Registrarse
//                     </a>
//                   </div>
//                 ))}
//               </div>
//               <div className="grid gap-6">
//                 {rentCompetitions.map((competition: any) => (
//                   <div
//                     key={competition.competition_name}
//                     className="grid grid-cols-[auto_1fr_auto] items-center gap-4 rounded-lg bg-white p-4 shadow-sm transition-colors hover:bg-gray-100 "
//                   >
//                     <CalendarIcon className="h-6 w-6 text-red-500" />
//                     <div>
//                       <h3 className=" text-lg font-bold">
//                         {competition.competition_name}
//                       </h3>
//                       <p className="text-sm text-gray-500">
//                         June 15 - June 17, 2024
//                       </p>
//                     </div>
//                     <a
//                       href={`/${competition.competition_id}`}
//                       target="_blank"
//                       className="inline-flex h-9 items-center justify-center rounded-md bg-red-500 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-red-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-red-700 disabled:pointer-events-none disabled:opacity-50 "
//                     >
//                       Registrarse
//                     </a>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </section>
//         </main>
//       )}
//     </div>
//   );
// }

// function CalendarIcon(props: any) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M8 2v4" />
//       <path d="M16 2v4" />
//       <rect width="18" height="18" x="3" y="4" rx="2" />
//       <path d="M3 10h18" />
//     </svg>
//   );
// }
