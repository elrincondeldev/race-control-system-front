import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    padding: 10,
  },
  columnContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  section: {
    width: '100%',
    marginBottom: 10,
    padding: 8,
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    // Adjust margin and padding for smaller screens
  },
  main_section: {
    width: '100%',
    margin: 5,
    padding: 8,
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
  },
  heading: {
    fontSize: 14, // Adjust font size for better readability on small screens
    fontWeight: 'bold',
    marginBottom: 5,
  },
  label: {
    fontSize: 10, // Adjust font size for better readability on small screens
    marginBottom: 2,
  },
  value: {
    fontSize: 10, // Adjust font size for better readability on small screens
    marginBottom: 8,
  },
});

function PdfReader({ participant }: { participant: any | null }) {
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
              <Text style={styles.label}>Email del piloto:</Text>
              <Text style={styles.value}>{participant.driver_email}</Text>
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
