import React, { useEffect } from 'react'

import {
  View,
  TouchableOpacity,
  Image,
} from 'react-native'

import * as Google from 'expo-google-app-auth'
import { useNavigation } from '@react-navigation/native'
import * as Animatable from 'react-native-animatable';

import styles from './styleLogin'
import firebase from "../../Config/firebaseconfig"
import GoogleLogo from '../../../assets/sourceIcons/google_signin_buttons/GoogleLogo.svg'
import WhiteLogo800x800 from '../../../assets/logos/WhiteLogo800x800.png'
import { TextCustom } from '../../Components/CustomText'
import WavyHeader from '../../Components/WavyHeader'
import api from '../../Config/API'

export default function Login() {

  const navigation = useNavigation()

  // Verifica mudança de estado de usuario, se:
  // - user for verdadeiro, será direcionado para Home.
  useEffect(() => {
    let isMounted = true

    firebase.auth().onAuthStateChanged(user => {
      if (isMounted && user) {
        navigation.reset({
          index: 0,
          routes: [{ name: 'Home' }],
        })
      } else navigation.navigate('Login')
    })
    return () => { isMounted = false }
  }, [])

  // Função que verificar se o usuário já está logado no firebase.
  function isUserEqual(googleUser, firebaseUser) {
    if (firebaseUser) {
      const providerData = firebaseUser.providerData;
      for (const i = 0; i < providerData.length; i++) {
        if (providerData[i].providerId === firebase.auth.GoogleAuthProvider.PROVIDER_ID &&
          providerData[i].uid === googleUser.getBasicProfile().getId()) {
          // Nós não precisamos reautenticar no firebase.
          return true
        }
      }
    }
    return false
  }

  // Função que troca a resposta da autenticação por uma credencial do Google.
  function onSignIn(googleUser) {

    // Pegando dados do usuário para inserir na função de criar usuário no banco.
    const { email, id, name, photoUrl } = googleUser.user
    api.createUser(email, id, name, photoUrl)

    // É definido um escutador para garantir a inicialização da autenticação.
    const unsubscribe = firebase.auth().onAuthStateChanged(firebaseUser => {
      
      // Verifica se o usuário logado com o firebase é o usuário correto.
      if (!isUserEqual(googleUser, firebaseUser)) {
        // Cria uma credencial para o usuário com o Google ID Token.
        const credential = firebase.auth.GoogleAuthProvider.credential(
          googleUser.idToken,
          googleUser.accessToken
        )
        // Loga com a credencial do usuário do Google.
        firebase.auth().signInWithCredential(credential)
      }
    })
    unsubscribe() // chamando função
  };

  // Função que prepara os dados a função de login.
  async function signInWithGoogleAsync() {
    try {
      const result = await Google.logInAsync({
        androidClientId: '74520676936-ki3s1tplmui4bjbi9drntngm1fat7fvo.apps.googleusercontent.com',
        iosClientId: '74520676936-c7j9p5b3vrrhss5pj85bj01mcnbdn2m6.apps.googleusercontent.com',
        scopes: ['profile', 'email'],
      })

      // Se tiver sucesso na busca dos dados, é chamado a função de login.
      if (result.type === 'success') {
        onSignIn(result)
        return result.accessToken

      } else return { cancelled: true }
    
    } catch (e) {return { error: true }}
  }

  return (
    <View style={styles.container}>
      <WavyHeader
        customStyles={styles.svgCurve}
        customHeight={300}
        customTop={130}
        customBgColor='#ccad00'
        customWavePattern="M0,224L60,202.7C120,181,240,139,360,138.7C480,139,600,181,720,218.7C840,256,960,288,1080,277.3C1200,267,1320,213,1380,186.7L1440,160L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
      >
      </WavyHeader>

      <View style={styles.headerContainer}>
        <Animatable.Image 
          animation="pulse" 
          useNativeDriver            
          iterationCount="infinite"
          easing="ease-out"
          style={styles.image} 
          source={WhiteLogo800x800}
        />
        <TouchableOpacity
          style={styles.googleBtn}
          onPress={() => signInWithGoogleAsync()}
        >
          <Image style={styles.logoStyle} source={GoogleLogo} />
          <TextCustom style={styles.textGoogleBtn} ValueText='Continuar com Google' />
        </TouchableOpacity>
      </View>
    </View>
  );
};