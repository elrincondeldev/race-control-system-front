import Header from '../components/Header';
import { useState } from 'react';
import CreateNewCompetitionRent from '../components/CreateNewCompetitionRent';
import Participants from '../components/Participants';

import CompetitionManagementRent from '../components/CompetitionManagementRent';
import RentParticipants from '../components/RentParticipants';

function Dashboard() {
  const [view, setView] = useState('rent-participants');
  const [participantsModal, setParticipantsModal] = useState(false); // Controla el modal de Participants
  // const [modifyCompetitionModal, setModifyCompetitionModal] = useState(false); // Controla el modal de ModifyCompetition

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
      <div className="flex flex-col gap-5 px-10 z-10 animate-in">
        <section className="flex gap-5">
          <button
            className={
              view === 'rent-participants'
                ? 'p-3 px-5 bg-black rounded-md text-white'
                : 'p-3 px-5 bg-gray-300 rounded-md text-black'
            }
            onClick={() => setView('rent-participants')}
          >
            Todos los participantes
          </button>
          <button
            className={
              view === 'competitions-rent'
                ? 'p-3 px-5 bg-black rounded-md text-white'
                : 'p-3 px-5 bg-gray-300 rounded-md text-black'
            }
            onClick={() => setView('competitions-rent')}
          >
            Competiciones
          </button>
          <button
            className={
              view === 'new-competition-rent'
                ? 'p-3 px-5 bg-black rounded-md text-white'
                : 'p-3 px-5 bg-gray-300 rounded-md text-black'
            }
            onClick={() => setView('new-competition-rent')}
          >
            Crear nueva competición
          </button>
          {/* {view === 'participants' || view === 'rent-participants' ? (
            <DownloadCSV />
          ) : null} */}
        </section>
        {renderView()}
      </div>
      {participantsModal && (
        <Participants
          participants={[]}
          closeModal={() => setParticipantsModal(false)}
        />
      )}
      {/* {modifyCompetitionModal && (
        <ModifyCompetition
          modifyCompetition={{}}
          closeModal={() => setModifyCompetitionModal(false)}
        />
      )} */}
    </main>
  );
}

export default Dashboard;
