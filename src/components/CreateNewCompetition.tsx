import { useState, ChangeEvent, FormEvent } from 'react';

import toast from 'react-hot-toast';
import imageCompression from 'browser-image-compression';
import Loader from './Loader';

function CreateNewCompetition() {
  const [competitionName, setCompetitionName] = useState('');
  const [bank, setBank] = useState('');
  const [iban, setIban] = useState('');
  const [beneficiary, setBeneficiary] = useState('');
  const [inscriptionPrice, setInscriptionPrice] = useState<number | ''>('');
  const [regulationLink, setRegulationLink] = useState('');
  const [date, setDate] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState<File | null>(null);
  const [email, setEmail] = useState('');
  const [categories, setCategories] = useState('');

  const formatCompetitionName = (name: string) => {
    const withoutAccents = name
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');
    return withoutAccents.trim().toLowerCase().replace(/\s+/g, '_');
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    setImage(file);
  };

  const compressImage = async (
    imageFile: string | File | null,
  ): Promise<File | null> => {
    if (!imageFile) return null;
    const options = {
      maxSizeMB: 1,
      maxWidthOrHeight: 1024,
      useWebWorker: true,
      fileType: 'image/jpeg',
    };
    try {
      const file = imageFile instanceof File ? imageFile : new File([], '');
      const compressedBlob = await imageCompression(file, options);
      const compressedFile = new File(
        [compressedBlob],
        file.name.replace(/\.[^.]+$/, '.jpg'), // Replace file extension with .jpg
        { type: 'image/jpeg', lastModified: Date.now() },
      );
      return compressedFile;
    } catch (error) {
      console.error('Error compressing image:', error);
      return imageFile instanceof File ? imageFile : null;
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (
      !competitionName ||
      !bank ||
      !iban ||
      !beneficiary ||
      !inscriptionPrice ||
      !regulationLink ||
      !date ||
      !email ||
      !categories
    ) {
      toast.error('Por favor, rellena todos los campos');
      return;
    }

    const compressedImage = await compressImage(image);

    let formData = new FormData();
    formData.append('competition_image', compressedImage || '');
    formData.append('competition_name', competitionName);
    formData.append('bank', bank);
    formData.append('iban', iban);
    formData.append('beneficiary', beneficiary);
    formData.append('inscription_price', inscriptionPrice.toString());
    formData.append('active', 'true');
    formData.append('email', email);
    formData.append('categories', categories);
    formData.append('competition_date', new Date(date).toISOString());
    formData.append('regulation_url', regulationLink);
    formData.append('competition_id', formatCompetitionName(competitionName));

    try {
      setLoading(true);
      await participantsService.createNewCompetition(formData);
      setLoading(false);

      toast.success('Competición creada correctamente');

      setCompetitionName('');
      setBank('');
      setIban('');
      setBeneficiary('');
      setInscriptionPrice('');
      setRegulationLink('');
      setDate('');
      setImage(null);
      setEmail('');
      setCategories('');
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
            Ajustes competición
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
                name="beneficiary"
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
                name="price"
                type="number"
                className="shadow-lg p-3 rounded-md"
                onChange={(e) => setInscriptionPrice(Number(e.target.value))}
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
            <div className="flex flex-col w-full">
              <label htmlFor="image">Imagen de la competición</label>
              <input
                id="image"
                name="image"
                type="file"
                className="shadow-lg p-3 rounded-md"
                onChange={handleFileChange}
              />
            </div>
          </div>
          <div className="flex gap-7">
            <div className="flex flex-col w-full">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                value={email}
                name="email"
                type="email"
                className="shadow-lg p-3 rounded-md"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="categories">Categorías</label>
              <input
                id="categories"
                value={categories}
                name="categories"
                type="text"
                className="shadow-lg p-3 rounded-md"
                onChange={(e) => setCategories(e.target.value)}
              />
            </div>
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

export default CreateNewCompetition;
