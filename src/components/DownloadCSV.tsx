import { useState, useEffect } from 'react';
import { participantServices } from '../services/participants.service';

function DownloadCSV() {
  const [participants, setParticipants] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await participantServices.getParticipants();

      if (data) {
        setParticipants(data.data);
      }
    };

    fetchData();
  }, []);

  const convertToCSV = (objArray: any) => {
    const array =
      typeof objArray !== 'object' ? JSON.parse(objArray) : objArray;
    let str = '';
    let row = '';

    for (const index in array[0]) {
      row += index + ',';
    }
    row = row.slice(0, -1);
    str += row + '\r\n';

    for (let i = 0; i < array.length; i++) {
      let line = '';
      for (const index in array[i]) {
        if (line !== '') line += ',';
        line += array[i][index];
      }
      str += line + '\r\n';
    }
    return str;
  };

  const downloadCSV = (participants: any) => {
    const csv = convertToCSV(participants);
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    if (link.download !== undefined) {
      const url = URL.createObjectURL(blob);
      link.setAttribute('href', url);
      link.setAttribute('download', 'pilotos.csv');
      link.style.visibility = 'hidden';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <button
      className="p-3 px-10 bg-black hover:bg-[#222] rounded-md text-white"
      onClick={() => downloadCSV(participants)}
    >
      Descargar CSV
    </button>
  );
}

export default DownloadCSV;
