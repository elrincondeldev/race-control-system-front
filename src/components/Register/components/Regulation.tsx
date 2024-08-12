import { useCompetitionStore } from '../../../store/competitionStore';

function Regulation() {
  const { regulationUrl } = useCompetitionStore((state) => state);

  return (
    <div className="flex flex-col gap-7 p-7 bg-white rounded-md shadow-lg">
      <label className="ethnocentric text-4xl" htmlFor="contestant">
        Reglamento
      </label>
      <div>
        <button className="bg-black text-white py-4 px-6 rounded-md">
          <a href={regulationUrl} target="_blank">
            Link al reglamento
          </a>
        </button>
      </div>
    </div>
  );
}

export default Regulation;
