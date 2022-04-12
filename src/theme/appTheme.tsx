import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    fondo: {
      flex: 1,
      backgroundColor: '#141414'
    },
    cajaTexto: {
      flex: 1,
      paddingHorizontal: 25,
      alignItems: 'flex-end',
      justifyContent: 'flex-end',
    },
    numAnterior: {
      fontSize: 30,
      color: 'gray',
    },
    numActual: {
      fontSize: 60,
      color: 'white',
    },
    cajaBotones: {
      paddingTop: 15,
    },
    listaBotones: {
      paddingBottom: 15,
      flexWrap: 'wrap',
      flexDirection: 'row',
      justifyContent: 'center'
    },

});