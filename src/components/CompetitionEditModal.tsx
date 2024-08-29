import { useState } from 'react';

export const CompetitionEditModal = ({ competition, onSave, onClose }: any) => {
  const [formData, setFormData] = useState({ ...competition });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = async () => {
    await onSave(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg mx-4 sm:mx-auto">
        <h2 className="text-2xl font-bold mb-4">Modificar Competición</h2>

        <div className="mb-4">
          <label
            htmlFor="competition_name"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Nombre de la Competición
          </label>
          <input
            type="text"
            id="competition_name"
            name="competition_name"
            value={formData.competition_name}
            onChange={handleChange}
            disabled
            className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-100 text-gray-500"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="inscription_price"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Precio de Inscripción (€)
          </label>
          <input
            type="text"
            id="inscription_price"
            name="inscription_price"
            value={formData.inscription_price}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="regulation_url"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            URL del Reglamento
          </label>
          <input
            type="text"
            id="regulation_url"
            name="regulation_url"
            value={formData.regulation_url}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
          />
        </div>

        <div className="mb-4 flex items-center">
          <input
            type="checkbox"
            id="active"
            name="active"
            checked={formData.active}
            onChange={(e) =>
              setFormData({ ...formData, active: e.target.checked })
            }
            className="mr-2"
          />
          <label htmlFor="active" className="text-sm text-gray-700">
            Activa
          </label>
        </div>

        <div className="flex justify-end gap-2">
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Guardar
          </button>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
};
