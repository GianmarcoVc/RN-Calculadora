import { useState, useRef } from 'react';

enum Operations {
  sumar, restar, multiplicar, dividir
}

export const useCalculadora = () => {
  const [ numAnterior, setNumAnterior ] = useState('0')
  const [ numActual, setNumActual ] = useState('0')
  const operation = useRef<Operations>()

  const valorPositivo = numActual.replace('-','')

  const limpiar = () => {
    setNumActual('0')
    setNumAnterior('0')
  }

  const armarNumero = (numero:string) => {
    // Para que no tengo mas de un punto 
    if(numActual.includes('.') && numero === '.') return

    // Para reemplazar el 0 al ser el primer número que estamos ingresando
    if((numActual === '0' || numActual === '-0') && numero !== '.'){
      return setNumActual(numActual.replace('0', numero))
    }

    // Se va concatenando el siguiente número
    setNumActual(numActual + numero)
  }

  const positivoNegativo = () => {
    if(numActual.includes('-')){ return setNumActual(valorPositivo)}
   setNumActual('-' + numActual)
  }

  const borrarUltimo = () => {
    if(valorPositivo.length === 1) return setNumActual('0')
    setNumActual( numActual.slice(0, -1))
  }

  const cambiarNumAnterior = () => {
    if(numActual.endsWith('.')){ setNumAnterior(numActual.slice(0,-1)) }
    else { setNumAnterior(numActual) }
    setNumActual('0')
  }
  
  const btnSumar = () => {
    cambiarNumAnterior()
    operation.current = Operations.sumar
  }

  const btnRestar = () => {
    cambiarNumAnterior()
    operation.current = Operations.restar
  }

  const btnMultiplicar = () => {
    cambiarNumAnterior()
    operation.current = Operations.multiplicar
  }

  const btnDividir = () => {
    cambiarNumAnterior()
    operation.current = Operations.dividir
  }

  const calcular = () => {
    const num1 = Number(numAnterior)
    const num2 = Number(numActual)
    const { sumar, restar, multiplicar, dividir } = Operations
  
    switch (operation.current) {
      case sumar:
        setNumActual(`${num1 + num2}`)
        break;

      case restar:
        setNumActual(`${num1 - num2}`)
        break;

      case multiplicar:
        setNumActual(`${num1 * num2}`)
        break;

      case dividir:
        // Para evitar el NaN de 0/0
        if(!num1 && !num2) { return setNumActual('0') }
        setNumActual(`${num1 / num2}`)
        break;
    }

    setNumAnterior('0')
  }

  return {
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
  }
}
