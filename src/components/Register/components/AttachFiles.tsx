import { ChangeEvent } from 'react';
import { useValueStore } from '../../../store/valueStore';

function AttachFiles() {
  const {
    setContestantLicenseFile,
    setDriverLicenseFile,
    setPaidJustificationFile,
    setTermsAndConditions,
  } = useValueStore();

  const handleFileChange = async (
    event: ChangeEvent<HTMLInputElement>,
    setFile: (file: string | null) => void,
  ) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      const blob = await readFileAsBlob(file);
      setFile(event.target.files[0]);
    }
  };

  const readFileAsBlob = (file: File): Promise<string | null> => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string | null;
        resolve(result);
      };
      reader.readAsDataURL(file);
    });
  };

  return (
    <div className="flex flex-col gap-7 p-7 bg-white rounded-md shadow-lg">
      <label className="ethnocentric text-4xl" htmlFor="contestant">
        Adjuntar archivos
      </label>
      <div className="flex gap-7">
        <div className="flex flex-col w-full">
          <label htmlFor="licencia">
            Concursante - Adjuntar copia de la licencia
          </label>
          <input
            id="licencia"
            name="licencia"
            type="file"
            className="shadow-lg p-3 rounded-md overflow-hidden w-full"
            onChange={(e) => handleFileChange(e, setContestantLicenseFile)}
          />
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="licencia">
            Piloto - Adjuntar copia de la licencia
          </label>
          <input
            id="licencia"
            name="licencia"
            type="file"
            className="shadow-lg p-3 rounded-md overflow-hidden w-full"
            onChange={(e) => handleFileChange(e, setDriverLicenseFile)}
          />
        </div>
      </div>
      <div className="flex gap-7">
        <div className="flex flex-col w-full">
          <label htmlFor="paid-jusitification">
            Adjuntar justificante de pago de la inscripción
          </label>
          <input
            id="paid-jusitification"
            name="paid-jusitification"
            type="file"
            className="shadow-lg p-3 rounded-md overflow-hidden w-full"
            onChange={(e) => handleFileChange(e, setPaidJustificationFile)}
          />
        </div>
        <div className="flex flex-col w-full"></div>
      </div>
      <div className="flex flex-col items-center gap-4 m-auto max-w-[500px]">
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
        <p className="text-center">
          El concursante declara conocer los reglamentos que rigen los
          campeonatos de España de karting, así como el código deportivo
          internacional, aceptándolos sin ninguna reserva y se compromete a
          cumplir cuantas normas complementarias sean dictadas
        </p>
        {/* <button
          onClick={handleSubmit}
          className="p-3 bg-blue-500 text-white rounded-md"
        >
          Enviar
        </button> */}
      </div>
    </div>
  );
}

export default AttachFiles;
