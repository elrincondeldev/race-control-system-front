import Header from '../components/Header';
import { useState } from 'react';
import CreateNewCompetitionRent from '../components/CreateNewCompetitionRent';
import Participants from '../components/Participants';
import CompetitionManagementRent from '../components/CompetitionManagementRent';
import RentParticipants from '../components/RentParticipants';

function Dashboard() {
  const [view, setView] = useState('rent-participants');
  const [participantsModal, setParticipantsModal] = useState(false); // Controla el modal de Participants

  const renderView = () => {
    if (view === 'new-competition-rent') {
      return <CreateNewCompetitionRent />;
    } else if (view === 'competitions-rent') {
      return <CompetitionManagementRent />;
    } else if (view === 'rent-participants') {
      return <RentParticipants />;
    }
  };

  return (
    <main className="relative">
      <Header />
      <div className="flex flex-col gap-5 px-5 md:px-10 z-10 animate-in">
        <section className="flex flex-col sm:flex-row gap-3 sm:gap-5">
          <button
            className={`p-3 px-4 md:px-5 rounded-md transition ${
              view === 'rent-participants'
                ? 'bg-black text-white'
                : 'bg-gray-300 text-black'
            }`}
            onClick={() => setView('rent-participants')}
          >
            Todos los participantes
          </button>
          <button
            className={`p-3 px-4 md:px-5 rounded-md transition ${
              view === 'competitions-rent'
                ? 'bg-black text-white'
                : 'bg-gray-300 text-black'
            }`}
            onClick={() => setView('competitions-rent')}
          >
            Competiciones
          </button>
          <button
            className={`p-3 px-4 md:px-5 rounded-md transition ${
              view === 'new-competition-rent'
                ? 'bg-black text-white'
                : 'bg-gray-300 text-black'
            }`}
            onClick={() => setView('new-competition-rent')}
          >
            Crear nueva competición
          </button>
        </section>
        {renderView()}
      </div>
      {participantsModal && (
        <Participants
          participants={[]}
          closeModal={() => setParticipantsModal(false)}
        />
      )}
    </main>
  );
}

export default Dashboard;
