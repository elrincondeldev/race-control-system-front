import { useState } from 'react';
import Loader from './Loader';

function ModifyEmails() {
  const [firstEmail, setFirstEmail] = useState('');
  const [secondEmail, setSecondEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setLoading(true);
  };

  console.log(firstEmail, secondEmail);

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-7 p-7 bg-white rounded-md shadow-lg z-10 animate-in"
    >
      {loading ? (
        <Loader />
      ) : (
        <>
          <label className="ethnocentric text-4xl" htmlFor="contestant">
            Emails
          </label>
          <div className="flex gap-7">
            <div className="flex flex-col w-full">
              <label htmlFor="email">Email del organizador</label>
              <input
                id="email"
                placeholder="Correo electrónico"
                name="email"
                type="email"
                className="shadow-lg p-3 rounded-md"
                onChange={(e) => setFirstEmail(e.target.value)}
              />
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="email">Email del comisario</label>
              <input
                id="email"
                placeholder="Correo electrónico"
                name="email"
                type="email"
                className="shadow-lg p-3 rounded-md"
                onChange={(e) => setSecondEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="m-auto">
            <button className="p-3 px-10 bg-black hover:bg-[#222] rounded-md text-white">
              Guardar emails
            </button>
          </div>
        </>
      )}
    </form>
  );
}

export default ModifyEmails;
