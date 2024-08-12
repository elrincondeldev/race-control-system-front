import React, { useState } from 'react';

import toast from 'react-hot-toast';

interface ModifyCompetitionProps {
  modifyCompetition: any; // Puedes definir un tipo específico en lugar de `any` si tienes el tipo definido
  closeModal: () => void;
}

const ModifyCompetition: React.FC<ModifyCompetitionProps> = ({
  modifyCompetition,
  closeModal,
}) => {
  const [competitionName, setCompetitionName] = useState(
    modifyCompetition.competition_name,
  );
  const [bank, setBank] = useState(modifyCompetition.bank);
  const [iban, setIban] = useState(modifyCompetition.iban);
  const [beneficiary, setBeneficiary] = useState(modifyCompetition.beneficiary);
  const [inscriptionPrice, setInscriptionPrice] = useState(
    modifyCompetition.inscription_price,
  );
  const [active, setActive] = useState(modifyCompetition.active);
  const [urlPath, setUrlPath] = useState(modifyCompetition.url_path);
  const [regulationUrl, setRegulationUrl] = useState(
    modifyCompetition.regulation_url,
  );

  const onModifyCompetition = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      await participantsService.modifyCompetitionData({
        competitionName,
        bank,
        iban,
        beneficiary,
        inscriptionPrice,
        active,
        urlPath,
        regulationUrl,
      });
      toast.success('Competición modificada correctamente');
      closeModal();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-60 bg-black bg-opacity-50 animate-in">
      <div className="bg-white z-70 p-7 rounded-md shadow-lg min-w-[800px]">
        <div className="text-right">
          <button
            onClick={closeModal}
            className="bg-red-500 text-white p-2 rounded-md"
          >
            Cerrar
          </button>
        </div>
        <form onSubmit={onModifyCompetition} className="flex flex-col gap-5">
          <div className="flex gap-7">
            <div className="flex flex-col w-full">
              <label htmlFor="name">Nombre de la competición</label>
              <input
                value={competitionName}
                id="name"
                name="name"
                type="text"
                className="shadow-lg p-3 rounded-md"
                onChange={(e) => setCompetitionName(e.target.value)}
              />
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="bank">Banco</label>
              <input
                value={bank}
                id="bank"
                name="bank"
                type="text"
                className="shadow-lg p-3 rounded-md"
                onChange={(e) => setBank(e.target.value)}
              />
            </div>
          </div>
          <div className="flex gap-7">
            <div className="flex flex-col w-full">
              <label htmlFor="iban">IBAN</label>
              <input
                id="iban"
                value={iban}
                name="iban"
                type="text"
                className="shadow-lg p-3 rounded-md"
                onChange={(e) => setIban(e.target.value)}
              />
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="beneficiary">Beneficiario</label>
              <input
                value={beneficiary}
                id="beneficiary"
                name="nif"
                type="text"
                className="shadow-lg p-3 rounded-md"
                onChange={(e) => setBeneficiary(e.target.value)}
              />
            </div>
          </div>
          <div className="flex gap-7">
            <div className="flex flex-col w-full">
              <label htmlFor="inscriptionPrice">
                Precio de la inscripción €
              </label>
              <input
                id="inscriptionPrice"
                value={inscriptionPrice}
                name="email"
                type="text"
                className="shadow-lg p-3 rounded-md"
                onChange={(e) => setInscriptionPrice(e.target.value)}
              />
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="urlPath">Url de la competición</label>
              <input
                value={urlPath}
                id="urlPath"
                name="urlPath"
                type="text"
                className="shadow-lg p-3 rounded-md"
                onChange={(e) => setUrlPath(e.target.value)}
              />
            </div>
          </div>
          <div className="flex gap-7">
            <div className="flex flex-col w-full">
              <label htmlFor="inscriptionPrice">Estado</label>
              <select
                id="active"
                name="active"
                value={active}
                onChange={(e) => setActive(e.target.value === 'true')}
                className="shadow-lg p-3 rounded-md"
              >
                <option value="true">Activa</option>
                <option value="false">Inactiva</option>
              </select>
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="regulationUrl">Url del reglamento</label>
              <input
                value={regulationUrl}
                id="regulationUrl"
                name="regulationUrl"
                type="text"
                className="shadow-lg p-3 rounded-md"
                onChange={(e) => setRegulationUrl(e.target.value)}
              />
            </div>
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="p-3 px-10 bg-black hover:bg-[#222] rounded-md text-white"
            >
              Guardar cambios
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModifyCompetition;
