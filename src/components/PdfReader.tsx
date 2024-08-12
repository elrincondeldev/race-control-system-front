import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    padding: 20,
  },
  columnContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  section: {
    width: '45%',
    margin: 10,
    padding: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
  },
  main_section: {
    width: '100%',
    margin: 10,
    padding: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
  },
  heading: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  label: {
    fontSize: 12,
    marginBottom: 3,
  },
  value: {
    fontSize: 12,
    marginBottom: 10,
  },
});

interface ParticipantType {
  contestant_name: string;
  contestant_manager: string;
  contestant_license: string;
  contestant_nif: string;
  contestant_email: string;
  contestant_phone: string;
  driver_name: string;
  driver_last_name: string;
  driver_license: string;
  driver_nif: string;
  driver_province: string;
  driver_country: string;
  driver_birthdate: string;
  driver_phone: string;
  chasis: string;
  first_engine: string;
  second_engine: string;
  transponder: string;
  transponder_number: string;
  dorsal: string;
}

function PdfReader({ participant }: { participant: ParticipantType | null }) {
  if (!participant) {
    return (
      <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.main_section}>
            <Text>No participant data available.</Text>
          </View>
        </Page>
      </Document>
    );
  }

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.main_section}>
          <Text style={styles.heading}>Información del Participante</Text>
          <View style={styles.columnContainer}>
            <View style={styles.section}>
              <Text style={styles.label}>Nombre del Concursante:</Text>
              <Text style={styles.value}>{participant.contestant_name}</Text>
              <Text style={styles.label}>Representante:</Text>
              <Text style={styles.value}>{participant.contestant_manager}</Text>
              <Text style={styles.label}>Licencia del Concursante:</Text>
              <Text style={styles.value}>{participant.contestant_license}</Text>
              <Text style={styles.label}>NIF del Concursante:</Text>
              <Text style={styles.value}>{participant.contestant_nif}</Text>
              <Text style={styles.label}>Email del Concursante:</Text>
              <Text style={styles.value}>{participant.contestant_email}</Text>
              <Text style={styles.label}>Teléfono del Concursante:</Text>
              <Text style={styles.value}>{participant.contestant_phone}</Text>
              <Text style={styles.heading}>Información del Piloto</Text>
              <Text style={styles.label}>Nombre del Piloto:</Text>
              <Text style={styles.value}>{participant.driver_name}</Text>
              <Text style={styles.label}>Apellidos del Piloto:</Text>
              <Text style={styles.value}>{participant.driver_last_name}</Text>
              <Text style={styles.label}>Licencia del Piloto:</Text>
              <Text style={styles.value}>{participant.driver_license}</Text>
              <Text style={styles.label}>NIF del Piloto:</Text>
              <Text style={styles.value}>{participant.driver_nif}</Text>
              <Text style={styles.label}>Provincia del Piloto:</Text>
              <Text style={styles.value}>{participant.driver_province}</Text>
            </View>
            <View style={styles.section}>
              <Text style={styles.label}>País del Piloto:</Text>
              <Text style={styles.value}>{participant.driver_country}</Text>
              <Text style={styles.label}>Fecha de Nacimiento del Piloto:</Text>
              <Text style={styles.value}>{participant.driver_birthdate}</Text>
              <Text style={styles.label}>Teléfono del Piloto:</Text>
              <Text style={styles.value}>{participant.driver_phone}</Text>
              <Text style={styles.heading}>Detalles del Kart</Text>
              <Text style={styles.label}>Chasis:</Text>
              <Text style={styles.value}>{participant.chasis}</Text>
              <Text style={styles.label}>Primer Motor:</Text>
              <Text style={styles.value}>{participant.first_engine}</Text>
              <Text style={styles.label}>Segundo Motor:</Text>
              <Text style={styles.value}>{participant.second_engine}</Text>
              <Text style={styles.label}>Alquiler Transponder:</Text>
              <Text style={styles.value}>{participant.transponder}</Text>
              <Text style={styles.label}>Número Transponder:</Text>
              <Text style={styles.value}>{participant.transponder_number}</Text>
              <Text style={styles.label}>Dorsal:</Text>
              <Text style={styles.value}>{participant.dorsal}</Text>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
}

export default PdfReader;
