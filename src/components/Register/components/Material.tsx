import { useValueStore } from '../../../store/valueStore';

function Material() {
  const {
    setChasis,
    setDorsal,
    setFirstMotor,
    setSecondMotor,
    setTransponder,
    setTransponderNumber,
    transponder,
  } = useValueStore((state) => ({
    setChasis: state.setChasis,
    setDorsal: state.setDorsal,
    setFirstMotor: state.setFirstMotor,
    setSecondMotor: state.setSecondMotor,
    setTransponder: state.setTransponder,
    setTransponderNumber: state.setTransponderNumber,
    transponder: state.transponder,
  }));

  return (
    <div className="flex flex-col gap-7 p-7 bg-white rounded-md shadow-lg">
      <label className="ethnocentric text-4xl" htmlFor="contestant">
        Material
      </label>
      <div className="flex gap-7">
        <div className="flex flex-col w-full">
          <label htmlFor="chasis">Chasis</label>
          <input
            id="chasis"
            placeholder="Tipo de chasis"
            name="chasis"
            type="text"
            className="shadow-lg p-3 rounded-md"
            onChange={(e) => setChasis(e.target.value)}
          />
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="dorsal">Dorsal</label>
          <input
            placeholder="A elegir por el piloto"
            id="dorsal"
            name="dorsal"
            type="text"
            className="shadow-lg p-3 rounded-md"
            onChange={(e) => setDorsal(e.target.value)}
          />
        </div>
      </div>
      <div className="flex gap-7">
        <div className="flex flex-col w-full">
          <label htmlFor="motor">Motor</label>
          <input
            id="motor"
            placeholder="Tipo de motor"
            name="motor"
            type="text"
            className="shadow-lg p-3 rounded-md"
            onChange={(e) => setFirstMotor(e.target.value)}
          />
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="motor2">Motor 2 (Solo KZ)</label>
          <input
            placeholder="Tipo de motor"
            id="motor2"
            name="motor2"
            type="text"
            className="shadow-lg p-3 rounded-md"
            onChange={(e) => setSecondMotor(e.target.value)}
          />
        </div>
      </div>
      <div className="flex gap-7">
        <div className="flex flex-col w-full">
          <label htmlFor="transponder">Alquiler de transponder</label>
          <select
            id="transponder"
            name="transponder"
            className="shadow-lg p-3 rounded-md custom-select"
            onChange={(e) => setTransponder(e.target.value)}
          >
            <option value="Sí">Sí</option>
            <option value="No">No</option>
          </select>
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="transponder-number">Nº de Transponder</label>
          <input
            disabled={transponder === 'No'}
            placeholder="1242268"
            id="transponder-number"
            name="transponder-number"
            type="text"
            className="shadow-lg p-3 rounded-md"
            onChange={(e) => setTransponderNumber(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}

export default Material;
