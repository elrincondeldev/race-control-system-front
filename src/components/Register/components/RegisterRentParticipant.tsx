import { useValueStore } from '../../../store/valueStore';
import PhoneInput, { Value } from 'react-phone-number-input';
import Category from './Category';
import { useEffect, useState } from 'react';
import { participantServices } from '../../../services/participants.service';
import toast from 'react-hot-toast';
import 'react-phone-number-input/style.css';
import Loader from '../../Loader';

function RegisterRentParticipant() {
  const {
    setDriverName,
    setDriverLastName,
    setDriverNif,
    setDriverBirthDate,
    setDriverTelephone,
    driverTelephone,
    setEmail,
    email,
    driverName,
    driverLastName,
    driverNif,
    driverBirthDate,
    driver_team,
    setDriverTeam,
    setTermsAndConditions,
    termsAndConditions,
    category,
    setCategory,
  } = useValueStore((state) => ({
    setDriverName: state.setDriverName,
    setDriverLastName: state.setDriverLastName,
    setDriverNif: state.setDriverNif,
    setDriverBirthDate: state.setDriverBirthDate,
    setDriverTelephone: state.setDriverTelephone,
    driverTelephone: state.driverTelephone,
    setEmail: state.setEmail,
    email: state.email,
    driverName: state.driverName,
    driverLastName: state.driverLastName,
    driverNif: state.driverNif,
    driverBirthDate: state.driverBirthDate,
    driver_team: state.driver_team,
    setDriverTeam: state.setDriverTeam,
    setTermsAndConditions: state.setTermsAndConditions,
    termsAndConditions: state.termsAndConditions,
    category: state.category,
    setCategory: state.setCategory,
  }));

  const [comeptitionCategories, setCompetitionCategories] = useState([]);
  const [competitionName, setCompetitionName] = useState('');
  const [loading, setLoading] = useState(false);
  const [price, setPrice] = useState('');
  const [date, setDate] = useState('');
  const [regulationUrl, setRegulationUrl] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const response = await participantServices.getActiveCompetition();

      if (response?.data) {
        setCompetitionCategories(response.data[0].categories);
        setCompetitionName(response.data[0].competition_name);
        setPrice(response.data[0].inscription_price);
        setDate(response.data[0].date);
        setRegulationUrl(response.data[0].regulation_url);
      }
    };

    fetchData();
  }, []);

  const validateForm = () => {
    if (
      category === '' ||
      driverName === '' ||
      driverLastName === '' ||
      driverNif === '' ||
      driverBirthDate === '' ||
      driverTelephone === '' ||
      email === '' ||
      driver_team === '' ||
      !termsAndConditions
    ) {
      return false;
    }

    return true;
  };

  const onSubmitForm = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error('Por favor, rellena todos los campos antes de enviar.');
      return;
    }

    if (!termsAndConditions) {
      toast.error(
        'Por favor, acepta los términos y condiciones antes de enviar.',
      );
      return;
    }

    const data = {
      category,
      driver_name: driverName,
      driver_lastname: driverLastName,
      driver_nif: driverNif,
      driver_phone: driverTelephone,
      driver_birthdate: driverBirthDate,
      driver_email: email,
      driver_team,
    };

    try {
      const response = await participantServices.registerParticipant(data);

      setLoading(true);

      if (response?.data) {
        toast.success('Inscripción realizada correctamente.');

        setCategory('');
        setDriverName('');
        setDriverLastName('');
        setDriverNif('');
        setDriverBirthDate('');
        setDriverTelephone('');
        setEmail('');
        setDriverTeam('');
        setTermsAndConditions(false);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      toast.error('Ha ocurrido un error al enviar la inscripción.');
    }
  };

  return (
    <form
      onSubmit={onSubmitForm}
      className="flex flex-col gap-10 max-w-[800px] m-auto my-10 animate-in p-4 sm:p-8"
    >
      <h1 className="ethnocentric text-2xl sm:text-4xl text-center">
        {competitionName}
      </h1>
      <img src="/images/main-image.jpeg" alt="" />
      <Category competitionCategories={comeptitionCategories} />
      <div className="flex flex-col gap-7 p-5 sm:p-7 bg-white rounded-md shadow-lg">
        <label
          className="ethnocentric text-xl sm:text-4xl"
          htmlFor="contestant"
        >
          Piloto
        </label>
        <div className="flex flex-col sm:flex-row gap-7">
          <div className="flex flex-col w-full">
            <label htmlFor="name">Nombre</label>
            <input
              id="name"
              placeholder="Nombre del piloto"
              value={driverName}
              name="name"
              type="text"
              className="shadow-lg p-3 rounded-md"
              onChange={(e) => setDriverName(e.target.value)}
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="last-name">Apellidos</label>
            <input
              placeholder="Apellidos del piloto"
              id="last-name"
              name="last-name"
              value={driverLastName}
              type="text"
              className="shadow-lg p-3 rounded-md"
              onChange={(e) => setDriverLastName(e.target.value)}
            />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-7">
          <div className="flex flex-col w-full">
            <label htmlFor="nif">NIF</label>
            <input
              placeholder="Número de identificación fiscal del piloto"
              id="nif"
              name="nif"
              value={driverNif}
              type="text"
              className="shadow-lg p-3 rounded-md"
              onChange={(e) => setDriverNif(e.target.value)}
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="telephone">Teléfono</label>
            <PhoneInput
              className="shadow-lg p-3 rounded-md"
              placeholder="Introduce tu número de teléfono"
              value={driverTelephone}
              onChange={(value) => setDriverTelephone(value as Value)}
            />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-7">
          <div className="flex flex-col w-full">
            <label htmlFor="date">Fecha de nacimiento</label>
            <input
              id="date"
              placeholder="Fecha de nacimiento del piloto"
              name="date"
              value={driverBirthDate}
              type="date"
              className="shadow-lg p-3 rounded-md"
              onChange={(e) => setDriverBirthDate(e.target.value)}
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              value={email}
              name="email"
              type="email"
              placeholder="Introduce el email del piloto"
              className="shadow-lg p-3 rounded-md"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div className="flex flex-col gap-7">
          <div className="flex flex-col w-full">
            <label>Nombre del equipo</label>
            <input
              id="team"
              value={driver_team}
              name="team"
              type="text"
              placeholder="Introduce el nombre del equipo"
              className="shadow-lg p-3 rounded-md"
              onChange={(e) => setDriverTeam(e.target.value)}
            />
          </div>
        </div>
        <div className="flex flex-col items-center gap-4 m-auto">
          <div className="flex gap-3">
            <input
              id="terms"
              name="terms"
              type="checkbox"
              className="p-3 rounded-md"
              onChange={(e) => setTermsAndConditions(e.target.checked)}
            />
            <label htmlFor="terms" className="font-bold">
              Acepto los términos y condiciones
            </label>
          </div>
          <p className="text-center text-sm sm:text-base">
            El equipo declara conocer las normas de competición, así como el uso
            correcto del material. Se podrá exigir al equipo el importe del daño
            causado así como la expulsión del evento.
          </p>
          <a
            href={'https://' + regulationUrl}
            target="_blank"
            className="bg-black text-white py-4 px-6 rounded-md cursor-pointer hover:bg-[#222]"
          >
            Link al reglamento
          </a>
          <p className="font-bold">Precio por equipo: {price} €</p>
          <p className="font-bold">Fecha de la competición: {date}</p>
        </div>
      </div>
      <div className="m-auto">
        {loading ? (
          <div className="bg-black text-white py-4 px-6 rounded-md hover:bg-[#222]">
            <Loader />
          </div>
        ) : (
          <input
            type="submit"
            value="Enviar Inscripción"
            className="bg-black text-white py-4 px-6 rounded-md cursor-pointer hover:bg-[#222]"
          />
        )}
      </div>
    </form>
  );
}

export default RegisterRentParticipant;
