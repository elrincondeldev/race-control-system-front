import { useState, FormEvent } from 'react';
import { participantServices } from '../services/participants.service';
import toast from 'react-hot-toast';

import Loader from './Loader';

function CreateNewCompetitionRent() {
  const [competitionName, setCompetitionName] = useState('');
  const [inscriptionPrice, setInscriptionPrice] = useState<string | ''>('');
  const [regulationLink, setRegulationLink] = useState('');
  const [date, setDate] = useState<string>('');
  const [loading, setLoading] = useState(false);
  // const [image, setImage] = useState<File | null>(null);
  const [categories, setCategories] = useState<string[]>([]);

  // const formatCompetitionName = (name: string) => {
  //   const withoutAccents = name
  //     .normalize('NFD')
  //     .replace(/[\u0300-\u036f]/g, '');
  //   return withoutAccents.trim().toLowerCase().replace(/\s+/g, '_');
  // };

  // const compressImage = async (
  //   imageFile: string | File | null,
  // ): Promise<File | null> => {
  //   if (!imageFile) return null;
  //   const options = {
  //     maxSizeMB: 1,
  //     maxWidthOrHeight: 1024,
  //     useWebWorker: true,
  //     fileType: 'image/jpeg',
  //   };
  //   try {
  //     const file = imageFile instanceof File ? imageFile : new File([], '');
  //     const compressedBlob = await imageCompression(file, options);
  //     const compressedFile = new File(
  //       [compressedBlob],
  //       file.name.replace(/\.[^.]+$/, '.jpg'), // Replace file extension with .jpg
  //       { type: 'image/jpeg', lastModified: Date.now() },
  //     );
  //     return compressedFile;
  //   } catch (error) {
  //     console.error('Error compressing image:', error);
  //     return imageFile instanceof File ? imageFile : null;
  //   }
  // };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (
      !competitionName ||
      !inscriptionPrice ||
      !regulationLink ||
      !date ||
      categories.length === 0
    ) {
      toast.error('Por favor, rellena todos los campos');
      return;
    }

    const competitionData = {
      competition: {
        competition_name: competitionName,
        categories: categories,
        date: date,
        active: true,
        inscription_price: inscriptionPrice,
        regulation_url: regulationLink,
      },
    };

    try {
      setLoading(true);
      await participantServices.createCompetition(competitionData);
      setLoading(false);

      toast.success('Competición creada correctamente');

      setCompetitionName('');
      setInscriptionPrice('');
      setRegulationLink('');
      setDate('');
      setCategories([]);
    } catch (error) {
      setLoading(false);
      toast.error('Error al crear la competición');
    }
  };

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
            Ajustes competición de alquiler
          </label>
          <div className="flex gap-7">
            <div className="flex flex-col w-full">
              <label htmlFor="name">Nombre de la competición</label>
              <input
                id="name"
                value={competitionName}
                name="name"
                type="text"
                className="shadow-lg p-3 rounded-md"
                onChange={(e) => setCompetitionName(e.target.value)}
              />
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="categories">Categorías</label>
              <input
                id="categories"
                value={categories.join(', ')} // Display the array as a comma-separated string
                name="categories"
                type="text"
                className="shadow-lg p-3 rounded-md"
                onChange={(e) =>
                  setCategories(
                    e.target.value.split(',').map((cat) => cat.trim()),
                  )
                }
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
                name="price"
                type="number"
                className="shadow-lg p-3 rounded-md"
                onChange={(e) => setInscriptionPrice(e.target.value)}
              />
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="regulationLink">Link al reglamento</label>
              <input
                id="regulationLink"
                value={regulationLink}
                name="regulationLink"
                type="text"
                className="shadow-lg p-3 rounded-md"
                onChange={(e) => setRegulationLink(e.target.value)}
              />
            </div>
          </div>
          <div className="flex gap-7">
            <div className="flex flex-col w-full">
              <label htmlFor="date">Fecha de la competición</label>
              <input
                id="date"
                value={date}
                name="date"
                type="date"
                className="shadow-lg p-3 rounded-md"
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <div className="flex flex-col w-full"></div>
          </div>
          <div className="m-auto">
            <button className="p-3 px-10 bg-black hover:bg-[#222] rounded-md text-white">
              Crear nueva competición
            </button>
          </div>
        </>
      )}
    </form>
  );
}

export default CreateNewCompetitionRent;
