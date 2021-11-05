import React, { useEffect } from 'react';

import {
  View,
  TouchableOpacity,
  Image,
} from 'react-native';

import * as Google from 'expo-google-app-auth';
import { useNavigation } from '@react-navigation/native';

import styles from './styleLogin'
import firebase from "../../Config/firebaseconfig"
import GoogleLogo from '../../../assets/sourceIcons/google_signin_buttons/GoogleLogo.svg'
import WhiteLogo800x800 from '../../../assets/logos/WhiteLogo800x800.png'
import { TextCustom } from '../../Components/CustomText'
import WavyHeader from '../../Components/WavyHeader';
import api from '../../Config/API'

export default function Login() {

  const navigation = useNavigation();

  //Função que verificar se o usuário já está logado no firebase
  function isUserEqual(googleUser, firebaseUser) {
    if (firebaseUser) {
      const providerData = firebaseUser.providerData;

      for (const i = 0; i < providerData.length; i++) {

        if (providerData[i].providerId === firebase.auth.GoogleAuthProvider.PROVIDER_ID &&
          providerData[i].uid === googleUser.getBasicProfile().getId()) {
          // We don't need to reauth the Firebase connection.
          return true;
        };
      };
    };
    return false;
  };

  //Função que troca a resposta da autenticação por uma credencial do Google
  function onSignIn(googleUser) {
    const { email, id, name, photoUrl } = googleUser.user
    console.log(photoUrl)
    api.createUser(email, id, name, photoUrl)

    // We need to register an Observer on Firebase Auth to make sure auth is initialized.
    const unsubscribe = firebase.auth().onAuthStateChanged((firebaseUser) => {
      unsubscribe();
      // Check if we are already signed-in Firebase with the correct user.
      if (!isUserEqual(googleUser, firebaseUser)) {
        // Build Firebase credential with the Google ID token.
        const credential = firebase.auth.GoogleAuthProvider.credential(
          googleUser.idToken,
          googleUser.accessToken
        );

        // Sign in with credential from the Google user.
        firebase.auth().signInWithCredential(credential)
          .then(() => {
            console.log('Usuário logado pelo Google');
          })
          .catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            const credential = error.credential;
            // ...
          });
      } else {
        console.log('User already signed-in Firebase.');
      }
    });
  };

  async function signInWithGoogleAsync() {
    try {
      const result = await Google.logInAsync({
        androidClientId: '74520676936-ki3s1tplmui4bjbi9drntngm1fat7fvo.apps.googleusercontent.com',
        iosClientId: '74520676936-c7j9p5b3vrrhss5pj85bj01mcnbdn2m6.apps.googleusercontent.com',
        scopes: ['profile', 'email'],
      });

      if (result.type === 'success') {
        onSignIn(result);
        return result.accessToken;
      } else {
        return { cancelled: true };
      }
    } catch (e) {
      return { error: true };
    }
  }

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        navigation.reset({
          index: 0,
          routes: [{ name: 'Home' }],
        });
        console.log('logado, será redirecionado para a Home');
      } else {
        navigation.navigate('Login');
        console.log('deslogado, retornado para a tela de login');
      }
    });

    return () => { }
  }, []);

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
        <Image style={styles.image} source={WhiteLogo800x800}></Image>

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