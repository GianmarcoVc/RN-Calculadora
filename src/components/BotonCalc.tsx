import { StyleSheet, Text, TouchableOpacity } from 'react-native'

interface Props {
  title:string;
  ancho?: boolean;
  theme?: 'black' | 'gris' | 'naranja',
  action: (numero:string) => void
}

export const BotonCalc = ({ title, ancho=false, theme='black', action }:Props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => action(title)}
      style={{
        ...styles.boton,
        width: ancho ? 180 : 80,
        backgroundColor:
          theme==='black' ? '#2D2D2D' :
          theme==='gris'  ? '#b3b3b3' : '#cc7823'
      }}
    >
      <Text style={{
        ...styles.botonText,
        color: (theme === 'gris') ? '#333' : 'white'
      }}>
        {title}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  boton: {
    height: 80,
    borderRadius: 100,
    marginHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  botonText: {
    fontSize: 27
  }
});