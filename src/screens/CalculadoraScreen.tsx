import { View, Text } from 'react-native';
import { styles } from '../theme/appTheme';
import { BotonCalc } from '../components/BotonCalc';
import { useCalculadora } from '../hooks/useCalculadora';

export const CalculadoraScreen = () => {
  const {
    numAnterior,
    numActual,
    limpiar,
    borrarUltimo,
    positivoNegativo,
    armarNumero,
    btnSumar,
    btnRestar,
    btnMultiplicar,
    btnDividir,
    calcular
  } = useCalculadora()
  return (
    <View style={{ flex: 1 }}>
      <View style={ styles.cajaTexto }>
        {
          (numAnterior !== '0') && (
            <Text style={ styles.numAnterior }>
              { numAnterior }
            </Text>
          )
        }
        <Text
          numberOfLines={1}
          adjustsFontSizeToFit
          style={ styles.numActual }
        >
          { numActual }
        </Text>
      </View>
      <View style={ styles.cajaBotones }>
        <View style={ styles.listaBotones }>
          <BotonCalc title='C'   action={ limpiar }          theme='gris'/>
          <BotonCalc title='+/-' action={ positivoNegativo } theme='gris'/>
          <BotonCalc title='D'   action={ borrarUltimo }     theme='gris'/>
          <BotonCalc title='/'   action={ btnDividir }       theme='naranja'/>
        </View>
        <View style={ styles.listaBotones }>
          <BotonCalc title='7' action={ armarNumero }/>
          <BotonCalc title='8' action={ armarNumero }/>
          <BotonCalc title='9' action={ armarNumero }/>
          <BotonCalc title='x' action={ btnMultiplicar } theme='naranja'/>
        </View>
        <View style={ styles.listaBotones }>
          <BotonCalc title='4' action={ armarNumero }/>
          <BotonCalc title='5' action={ armarNumero }/>
          <BotonCalc title='6' action={ armarNumero }/>
          <BotonCalc title='-' action={ btnRestar } theme='naranja'/>
        </View>
        <View style={ styles.listaBotones }>
          <BotonCalc title='1' action={ armarNumero }/>
          <BotonCalc title='2' action={ armarNumero }/>
          <BotonCalc title='3' action={ armarNumero }/>
          <BotonCalc title='+' action={ btnSumar } theme='naranja'/>
        </View>
        <View style={ styles.listaBotones }>
          <BotonCalc title='0' action={ armarNumero } ancho/>
          <BotonCalc title='.' action={ armarNumero }/>
          <BotonCalc title='=' action={ calcular } theme='naranja'/>
        </View>
      </View>
    </View>
  )
}
