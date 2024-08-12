// import { useEffect, useState } from 'react';
// import { useLocation, useNavigate } from 'react-router';
// import toast from 'react-hot-toast';
// import imageCompression from 'browser-image-compression';
// import Category from './components/Category';
// import Contestant from './components/Contestant';
// import Driver from './components/Driver';
// import Material from './components/Material';
// import BankData from './components/BankData';
// import AttachFiles from './components/AttachFiles';
// import Regulation from './components/Regulation';
// import Loader from '../Loader';
// import { useValueStore } from '../../store/valueStore';
// import { useCompetitionStore } from '../../store/competitionStore';
// import RegisterRentParticipant from './components/RegisterRentParticipant';

// function Register() {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const currentPath = location.pathname;
//   const [image, setImage] = useState('');
//   const [comeptitionCategories, setCompetitionCategories] = useState([]);

//   const {
//     category,
//     contestantName,
//     managerName,
//     license,
//     nif,
//     email,
//     telephone,
//     driverName,
//     driverLastName,
//     driverLicense,
//     driverNif,
//     driverProvince,
//     driverCountry,
//     driverBirthDate,
//     driverTelephone,
//     chasis,
//     dorsal,
//     firstMotor,
//     secondMotor,
//     transponder,
//     transponderNumber,
//     contestantLicenseFile,
//     driverLicenseFile,
//     paidJustificationFile,
//     termsAndConditions,
//     setCategory,
//     setContestantName,
//     setManagerName,
//     setLicense,
//     setNif,
//     setEmail,
//     setTelephone,
//     setDriverName,
//     setDriverLastName,
//     setDriverLicense,
//     setDriverNif,
//     setDriverProvince,
//     setDriverCountry,
//     setDriverBirthDate,
//     setDriverTelephone,
//     setChasis,
//     setDorsal,
//     setFirstMotor,
//     setSecondMotor,
//     setTransponder,
//     setTransponderNumber,
//     setContestantLicenseFile,
//     setDriverLicenseFile,
//     setPaidJustificationFile,
//     setTermsAndConditions,
//   } = useValueStore((state) => state);

//   const {
//     setCompetitionName,
//     setBank,
//     iban,
//     setIban,
//     setBeneficiary,
//     setInscriptionPrice,
//     setRegulationUrl,
//     competitionName,
//   } = useCompetitionStore((state) => state);

//   const pathWithoutSlash = currentPath.startsWith('/')
//     ? currentPath.substring(1)
//     : currentPath;

//   // useEffect(() => {
//   //   const fetchData = async () => {
//   //     try {
//   //       const data = await participantsService.getCompetitionDataByUrlPath(
//   //         pathWithoutSlash,
//   //       );
//   //       console.log(data);
//   //       if (data) {
//   //         setCompetitionCategories(data.categories);
//   //         setCompetitionName(data.competition_name);
//   //         setBank(data.bank);
//   //         setIban(data.iban);
//   //         setBeneficiary(data.beneficiary);
//   //         setInscriptionPrice(data.inscription_price);
//   //         setRegulationUrl(data.regulation_url);
//   //         setImage(data.competition_image);
//   //       } else {
//   //         navigate('/');
//   //       }
//   //     } catch (error) {
//   //       console.error(error);
//   //       navigate('/');
//   //     }
//   //   };

//   //   fetchData();
//   // }, [pathWithoutSlash, navigate]);

//   const validateForm = () => {
//     const requiredFields = [
//       contestantName,
//       managerName,
//       license,
//       nif,
//       email,
//       telephone,
//       driverName,
//       driverLastName,
//       driverLicense,
//       driverNif,
//       driverProvince,
//       driverCountry,
//       driverBirthDate,
//       driverTelephone,
//       chasis,
//       dorsal,
//       firstMotor,
//       transponder,
//       contestantLicenseFile,
//       driverLicenseFile,
//       paidJustificationFile,
//       competitionName,
//     ];
//     return requiredFields.every(Boolean);
//   };

//   const compressImage = async (
//     imageFile: string | File | null,
//   ): Promise<File | null> => {
//     if (!imageFile) return null;
//     const options = {
//       maxSizeMB: 1,
//       maxWidthOrHeight: 1024,
//       useWebWorker: true,
//       fileType: 'image/jpeg',
//     };
//     try {
//       const file = imageFile instanceof File ? imageFile : new File([], '');
//       const compressedBlob = await imageCompression(file, options);
//       const compressedFile = new File(
//         [compressedBlob],
//         file.name.replace(/\.[^.]+$/, '.jpg'), // Replace file extension with .jpg
//         { type: 'image/jpeg', lastModified: Date.now() },
//       );
//       return compressedFile;
//     } catch (error) {
//       console.error('Error compressing image:', error);
//       return imageFile instanceof File ? imageFile : null;
//     }
//   };

//   const obSubmitForm = async (e: React.FormEvent) => {
//     e.preventDefault();

//     if (!validateForm()) {
//       toast.error('Por favor, rellena todos los campos antes de enviar.');
//       return;
//     }

//     if (!termsAndConditions) {
//       toast.error(
//         'Por favor, acepta los términos y condiciones antes de enviar.',
//       );
//       return;
//     }

//     const formatCompetitionName = (name: string) => {
//       const withoutAccents = name
//         .normalize('NFD')
//         .replace(/[\u0300-\u036f]/g, '');

//       return withoutAccents.trim().toLowerCase().replace(/\s+/g, '_');
//     };

//     const competition_id = formatCompetitionName(competitionName);

//     let formData = new FormData();
//     formData.append('category', category.toLowerCase());
//     formData.append('contestant_name', contestantName);
//     formData.append('contestant_manager', managerName);
//     formData.append('contestant_license', license);
//     formData.append('contestant_nif', nif);
//     formData.append('contestant_email', email);
//     formData.append('contestant_phone', telephone);
//     formData.append('driver_name', driverName);
//     formData.append('driver_last_name', driverLastName);
//     formData.append('driver_license', driverLicense);
//     formData.append('driver_nif', driverNif);
//     formData.append('driver_province', driverProvince);
//     formData.append('driver_country', driverCountry);
//     formData.append('driver_birthdate', driverBirthDate);
//     formData.append('driver_phone', driverTelephone);
//     formData.append('chasis', chasis);
//     formData.append('dorsal', dorsal);
//     formData.append('first_engine', firstMotor);
//     formData.append('second_engine', secondMotor);
//     formData.append('transponder', transponder);
//     formData.append('transponder_number', transponderNumber);

//     const compressedContestantLicenseFile = await compressImage(
//       contestantLicenseFile,
//     );
//     const compressedDriverLicenseFile = await compressImage(driverLicenseFile);
//     const compressedPaidJustificationFile = await compressImage(
//       paidJustificationFile,
//     );

//     formData.append(
//       'contestant_license_file',
//       compressedContestantLicenseFile || '',
//     );
//     formData.append('driver_license_file', compressedDriverLicenseFile || '');
//     formData.append(
//       'paid_justification_file',
//       compressedPaidJustificationFile || '',
//     );
//     formData.append('competition_id', competition_id);

//     try {
//       const response = await participantsService.registerParticipant(formData);

//       if (response) {
//         setCategory('');
//         setContestantName('');
//         setManagerName('');
//         setLicense('');
//         setNif('');
//         setEmail('');
//         setTelephone('');
//         setDriverName('');
//         setDriverLastName('');
//         setDriverLicense('');
//         setDriverNif('');
//         setDriverProvince('');
//         setDriverCountry('');
//         setDriverBirthDate('');
//         setDriverTelephone('');
//         setChasis('');
//         setDorsal('');
//         setFirstMotor('');
//         setSecondMotor('');
//         setTransponder('');
//         setTransponderNumber('');
//         setContestantLicenseFile(null);
//         setDriverLicenseFile(null);
//         setPaidJustificationFile(null);
//         setTermsAndConditions(false);

//         toast.success('Inscripción enviada correctamente');
//       } else {
//         toast.error('Licencia ya registrada');
//       }
//     } catch (error) {
//       console.error(error);
//       toast.error('Error al enviar la inscripción');
//     }
//   };

//   const obSubmitRentForm = async (e: React.FormEvent) => {
//     e.preventDefault();

//     // if (!validateForm()) {
//     //   toast.error('Por favor, rellena todos los campos antes de enviar.');
//     //   return;
//     // }

//     // if (!termsAndConditions) {
//     //   toast.error(
//     //     'Por favor, acepta los términos y condiciones antes de enviar.',
//     //   );
//     //   return;
//     // }

//     const formatCompetitionName = (name: string) => {
//       const withoutAccents = name
//         .normalize('NFD')
//         .replace(/[\u0300-\u036f]/g, '');

//       return withoutAccents.trim().toLowerCase().replace(/\s+/g, '_');
//     };

//     const competition_id = formatCompetitionName(competitionName);

//     let formData = new FormData();
//     formData.append('category', category.toLowerCase());
//     formData.append('driver_email', email);
//     formData.append('driver_name', driverName);
//     formData.append('driver_last_name', driverLastName);
//     formData.append('driver_nif', driverNif);
//     formData.append('driver_birthdate', driverBirthDate);
//     formData.append('driver_phone', driverTelephone);
//     formData.append('competition_id', competition_id);

//     try {
//       const response = await rentCompetitionsService.registerRentParticipant(
//         formData,
//       );

//       if (response) {
//         setCategory('');
//         setEmail('');
//         setTelephone('');
//         setDriverName('');
//         setDriverLastName('');
//         setDriverNif('');
//         setDriverBirthDate('');
//         setDriverTelephone('');
//         setTermsAndConditions(false);

//         toast.success('Inscripción enviada correctamente');
//       } else {
//         toast.error('Licencia ya registrada');
//       }
//     } catch (error) {
//       console.error(error);
//       toast.error('Error al enviar la inscripción');
//     }
//   };

//   return (
//     <>
//       {competitionName ? (
//         <>
//           {iban ? (
//             <form
//               onSubmit={obSubmitForm}
//               className="flex flex-col gap-10 max-w-[800px] m-auto mb-10 animate-in"
//             >
//               {image ? (
//                 <img
//                   src={`https://ni995h4az3.execute-api.eu-west-1.amazonaws.com/competitions/images/${image}`}
//                 />
//               ) : null}
//               <Category competitionCategories={comeptitionCategories} />
//               <Contestant />
//               <Driver />
//               <Material />
//               <BankData />
//               <AttachFiles />
//               <Regulation />
//               <div className="m-auto">
//                 <input
//                   type="submit"
//                   value="Enviar Inscripción"
//                   className="bg-black text-white py-4 px-6 rounded-md cursor-pointer hover:bg-[#222]"
//                 />
//               </div>
//             </form>
//           ) : (
//             <form
//               onSubmit={obSubmitRentForm}
//               className="flex flex-col gap-10 max-w-[800px] m-auto mb-10 animate-in"
//             >
//               {image ? (
//                 <img
//                   src={`https://ni995h4az3.execute-api.eu-west-1.amazonaws.com/competitions/images/${image}`}
//                 />
//               ) : null}
//               <Category competitionCategories={comeptitionCategories} />
//               <RegisterRentParticipant />
//               <div className="m-auto">
//                 <input
//                   type="submit"
//                   value="Enviar Inscripción"
//                   className="bg-black text-white py-4 px-6 rounded-md cursor-pointer hover:bg-[#222]"
//                 />
//               </div>
//             </form>
//           )}
//         </>
//       ) : (
//         <Loader />
//       )}
//     </>
//   );
// }

// export default Register;
