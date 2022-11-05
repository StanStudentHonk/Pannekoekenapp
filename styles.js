import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#fff",
  },
  formContainer: {
    flex: 1,
    padding: 30,
    backgroundColor: "#fff",
  },
  formTitel: {
    fontSize: 50,
  },
  formExplainText: {
    color: "#989898",
  },

  input: {
    height: 50,
    width: 250,
    fontSize: 25,
    margin: 12,
    borderBottomWidth: 1,
    padding: 15,
  },

  datePicker: {
    height: 50,
    width: "65%",
    margin: 15,
    
  },

  inputSmall: {
    height: 40,
    width: 250,
    fontSize: 20,
    margin: 12,
    borderBottomWidth: 1,
    padding: 10,
  },

  inputLarge: {
    height: 100,
    width: 250,
    fontSize: 15,
    margin: 12,
    borderWidth: 1,
    borderColor: "#00000",
    padding: 15,
  },
  formButton: {
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 36,
    borderRadius: 26,
    elevation: 3,
    backgroundColor: '#AD40AF',
  },

  progresbar: {
    margin: 10,
  },

  formText: {
    fontSize: 22,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});

export default styles