import React, { useState, useEffect } from 'react'
import { Alert } from 'react-native'
//import { StackActions, NavigationActions } from 'react-navigation';
import {
  Container,
  Logo,
  Input,
  ErrorMessage,
  Button,
  ButtonText,
  SignUpLink,
  SignUpLinkText,
} from './styles'

//var { height, width } = Dimensions.get('window')

export default function Login({ navigation }) {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [error, setError] = useState('')

  handleEmailChange = (email) => {
    setEmail(email)
  }

  function handlePasswordChange(senha) {
    setSenha(senha)
  }

  function handleCreateAccountPress() {
    Alert.alert(
      'OPS!!!',
      'Funcionalidade não implementada...',
      [
        // {
        //   text: 'Cancel',
        //   onPress: () => console.log('Cancel Pressed'),
        //   style: 'cancel',
        // },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      {cancelable: false},
    );
  }

  useEffect(() => {

  }, [])

  const handleSignInPress = async (e) => {
    e.preventDefault()
    if (email.length === 0 || senha.length === 0) {
      setError('Preencha usuário e senha para continuar!', () => false)
    } else {
      if (email === 'admin@admin.com' && senha === '123456') {
        navigation.navigate('Index')
      } else {
        setError('Email ou senha incorreto!')
      }
    }
  }

  return (
    <Container>
      {/* <StatusBar hidden /> */}
      <Logo source={require('../../../assets/icon.png')} resizeMode="contain" />
      <Input
        placeholder="Endereço de e-mail"
        value={email}
        onChangeText={handleEmailChange}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Input
        placeholder="Senha"
        value={senha}
        onChangeText={handlePasswordChange}
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry
      />
      {error.length !== 0 && <ErrorMessage>{error}</ErrorMessage>}
      <Button onPress={handleSignInPress}>
        <ButtonText>Entrar</ButtonText>
      </Button>
      <SignUpLink onPress={handleCreateAccountPress}>
        <SignUpLinkText>Criar conta</SignUpLinkText>
      </SignUpLink>
    </Container>
  )
}
