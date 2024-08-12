import { useValueStore } from '../../../store/valueStore';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import PhoneInput, { Value } from 'react-phone-number-input';

function Driver() {
  const {
    setDriverName,
    setDriverLastName,
    setDriverLicense,
    setDriverNif,
    setDriverProvince,
    setDriverCountry,
    setDriverBirthDate,
    setDriverTelephone,
    driverCountry,
    driverProvince,
    driverTelephone,
  } = useValueStore((state) => ({
    setDriverName: state.setDriverName,
    setDriverLastName: state.setDriverLastName,
    setDriverLicense: state.setDriverLicense,
    setDriverNif: state.setDriverNif,
    setDriverProvince: state.setDriverProvince,
    setDriverCountry: state.setDriverCountry,
    setDriverBirthDate: state.setDriverBirthDate,
    setDriverTelephone: state.setDriverTelephone,
    driverCountry: state.driverCountry,
    driverProvince: state.driverProvince,
    driverTelephone: state.driverTelephone,
  }));

  return (
    <div className="flex flex-col gap-7 p-7 bg-white rounded-md shadow-lg">
      <label className="ethnocentric text-4xl" htmlFor="contestant">
        Piloto
      </label>
      <div className="flex gap-7">
        <div className="flex flex-col w-full">
          <label htmlFor="name">Nombre</label>
          <input
            id="name"
            placeholder="Nombre del piloto"
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
            type="text"
            className="shadow-lg p-3 rounded-md"
            onChange={(e) => setDriverLastName(e.target.value)}
          />
        </div>
      </div>
      <div className="flex gap-7">
        <div className="flex flex-col w-full">
          <label htmlFor="license">Licencia</label>
          <input
            id="license"
            placeholder="Número de licencia del piloto"
            name="license"
            type="text"
            className="shadow-lg p-3 rounded-md"
            onChange={(e) => setDriverLicense(e.target.value)}
          />
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="nif">NIF</label>
          <input
            placeholder="Número de identificación fiscal del piloto"
            id="nif"
            name="nif"
            type="text"
            className="shadow-lg p-3 rounded-md"
            onChange={(e) => setDriverNif(e.target.value)}
          />
        </div>
      </div>
      <div className="flex gap-7">
        <div className="flex flex-col w-full">
          <label htmlFor="country">País</label>
          <div className="shadow-lg p-3 rounded-md">
            <CountryDropdown
              value={driverCountry}
              onChange={(val) => setDriverCountry(val)}
            />
          </div>
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="province">Provincia</label>
          <div className="shadow-lg p-3 rounded-md">
            <RegionDropdown
              country={driverCountry}
              value={driverProvince}
              onChange={(val) => setDriverProvince(val)}
            />
          </div>
        </div>
      </div>
      <div className="flex gap-7">
        <div className="flex flex-col w-full">
          <label htmlFor="date">Fecha de nacimiento</label>
          <input
            id="date"
            placeholder="Fecha de nacimiento del piloto"
            name="date"
            type="date"
            className="shadow-lg p-3 rounded-md"
            onChange={(e) => setDriverBirthDate(e.target.value)}
          />
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="telephone">Teléfono</label>
          <PhoneInput
            className="shadow-lg p-3 rounded-md"
            placeholder="Introduce tu número de teléfono"
            value={driverTelephone}
            onChange={(value) =>
              setDriverTelephone(value as Value)
            }
          />
        </div>
      </div>
    </div>
  );
}

export default Driver;
