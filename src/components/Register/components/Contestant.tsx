import { useValueStore } from '../../../store/valueStore';
import PhoneInput, { type Value } from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

function Contestant() {
  const {
    setContestantName,
    setManagerName,
    setLicense,
    setNif,
    setEmail,
    setTelephone,
    telephone,
  } = useValueStore((state: any) => ({
    setContestantName: state.setContestantName,
    setManagerName: state.setManagerName,
    setLicense: state.setLicense,
    setNif: state.setNif,
    setEmail: state.setEmail,
    setTelephone: state.setTelephone,
    telephone: state.telephone,
  }));

  return (
    <div className="flex flex-col gap-7 p-7 bg-white rounded-md shadow-lg">
      <label className="ethnocentric text-4xl" htmlFor="contestant">
        Concursante
      </label>
      <div className="flex gap-7">
        <div className="flex flex-col w-full">
          <label htmlFor="name">Nombre</label>
          <input
            id="name"
            placeholder="Nombre del concursante"
            name="name"
            type="text"
            className="shadow-lg p-3 rounded-md"
            onChange={(e) => setContestantName(e.target.value)}
          />
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="representative">
            Representante (si concursante colectivo)
          </label>
          <input
            placeholder="Nombre del representante"
            id="representative"
            name="representative"
            type="text"
            className="shadow-lg p-3 rounded-md"
            onChange={(e) => setManagerName(e.target.value)}
          />
        </div>
      </div>
      <div className="flex gap-7">
        <div className="flex flex-col w-full">
          <label htmlFor="license">Licencia</label>
          <input
            id="license"
            placeholder="Número de licencia"
            name="license"
            type="text"
            className="shadow-lg p-3 rounded-md"
            onChange={(e) => setLicense(e.target.value)}
          />
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="nif">NIF</label>
          <input
            placeholder="Número de identificación fiscal"
            id="nif"
            name="nif"
            type="text"
            className="shadow-lg p-3 rounded-md"
            onChange={(e) => setNif(e.target.value)}
          />
        </div>
      </div>
      <div className="flex gap-7">
        <div className="flex flex-col w-full">
          <label htmlFor="email">Correo electrónico</label>
          <input
            id="email"
            placeholder="Correo electrónico"
            name="email"
            type="email"
            className="shadow-lg p-3 rounded-md"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="phone-number">Teléfono</label>
          <PhoneInput
            className="shadow-lg p-3 rounded-md"
            placeholder="Introduce tu número de teléfono"
            value={telephone}
            onChange={(value) => setTelephone(value as Value)}
          />
        </div>
      </div>
    </div>
  );
}

export default Contestant;
