import { useCompetitionStore } from '../../../store/competitionStore';

function BankData() {
  const { bank, iban, beneficiary, inscriptionPrice } = useCompetitionStore(
    (state) => ({
      bank: state.bank,
      iban: state.iban,
      beneficiary: state.beneficiary,
      inscriptionPrice: state.inscriptionPrice,
    }),
  );

  return (
    <div className="flex flex-col gap-7 p-7 bg-white rounded-md shadow-lg">
      <label className="ethnocentric text-4xl" htmlFor="contestant">
        Datos Bancarios
      </label>
      <div className="flex flex-col gap-10">
        <div className="flex flex-col w-full gap-5">
          <h3 className="font-bold text-xl">
            Derechos de inscripción: {inscriptionPrice}€ Sábado y Domingo del
            evento
          </h3>
          <h3 className="font-bold text-lg">
            Los datos bancarios para realizar la transferencia son:
          </h3>
          <p>
            <span className="font-bold">BENEFICIARIO:</span> {beneficiary}
          </p>
          <p>
            <span className="font-bold">CONCEPTO:</span> NOMBRE DEL PILOTO
          </p>
          <p>
            <span className="font-bold">BANCO:</span> {bank}
          </p>
          <p>
            <span className="font-bold">IBAN:</span> {iban}
          </p>
        </div>
        <p className="text-center font-bold text-xl">
          *** TODAS LAS INSCRIPCIONES SE CONFIRMARAN MEDIANTE CORREO ELECTRONICO
          ***
        </p>
      </div>
    </div>
  );
}

export default BankData;
