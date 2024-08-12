import { useCompetitionStore } from '../store/competitionStore';

function Header() {
  const { competitionName } = useCompetitionStore((state) => ({
    competitionName: state.competitionName,
  }));

  return (
    <div className="relative bg-[#16151F] p-10 flex justify-center mb-10">
      <h1 className="text-white ethnocentric text-2xl">{competitionName}</h1>
      <div className="hidden md:block background-element left-[30%] h-[400px] w-[700px] blur-3xl absolute inset-0 bg-white opacity-20 rounded-full z-0"></div>
    </div>
  );
}

export default Header;
