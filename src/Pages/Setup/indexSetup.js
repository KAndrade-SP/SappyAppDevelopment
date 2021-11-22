import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import { useNavigation } from '@react-navigation/native'

import firebase from '../../Config/firebaseconfig'

import styles from './styleSetup'
import ModalHelp from '../../Components/ModalComponents/ModalHelp'
import ModalContact from '../../Components/ModalComponents/ModalContact'

export default function Setup() {

    const navigation = useNavigation()

    // Função para deslogar
    const signOutFirebase = async () => {
        await firebase.auth().signOut().then(() => {
            navigation.reset({
                index: 0,
                routes: [{ name: 'Login' }],
            })
        })
    }

    const { uid } = firebase.auth().currentUser.providerData[0] // Pegando id do usuário atual
    const [validAdm, setValidAdm] = useState() // setando estado administrador

    useEffect(() => {
        // Busca no banco para pegar estado de administrador do usuario atual.
        firebase.database()
            .ref(`Users/${uid}`)
            .once('value')
            .then(snapshot => {
                const { isAdmin } = snapshot.val()
                setValidAdm(isAdmin)
            })
    }, [])

    // Constantes para abrir e fechar modais.
    const [help, setOpenHelp] = useState(false)
    const [contact, setOpenContact] = useState(false)

    // Função para carregar telas.
    function goToUserList() { navigation.navigate('UserList') }
    function goToProfile() { navigation.navigate('Profile') }
    
    // Funções para abrir e fechar modais
    function goToHelp() { setOpenHelp(!help) }
    function goToContact() { setOpenContact(!contact) }

    return (
        <View
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}
        >
            <ModalHelp open={help} onClose={() => setOpenHelp(false)}/>
            <ModalContact open={contact} onClose={() => setOpenContact(false)}/>

            <View
                style={styles.options}
            >
                <TouchableOpacity
                    style={styles.contentOptions}
                    onPress={() => goToProfile()}
                >
                    <View style={styles.containerIcon}>
                        <SimpleLineIcons
                            style={styles.iconMod}
                            name="user"
                            color={'#ccad00'}
                            size={22}
                        />
                    </View>
                    <View style={styles.containerText}>
                        <Text
                            style={styles.textOptions}
                        >Perfil
                        </Text>
                        <Text
                            style={styles.descOptions}
                        >
                            Altere seu nome de perfil e assinatura
                        </Text>
                    </View>           
                </TouchableOpacity>

                {validAdm == "true" ? <TouchableOpacity
                    style={styles.contentOptions}
                    onPress={() => goToUserList()}
                >
                    <View style={styles.containerIcon}>
                        <SimpleLineIcons
                            style={styles.iconMod}
                            name="user-follow"
                            color={'#ccad00'}
                            size={22}
                        />
                    </View>
                    <View style={styles.containerText}>
                        <Text
                            style={styles.textOptions}
                        >Tornar profissional
                        </Text>
                        <Text
                            style={styles.descOptions}
                        >
                            Área de gerenciamento de usuários
                        </Text>
                    </View> 
                </TouchableOpacity> : <></>}

                <TouchableOpacity
                    style={styles.contentOptions}
                    onPress={() => goToHelp()}
                >
                    <View style={styles.containerIcon}>
                        <SimpleLineIcons
                            style={styles.iconMod}
                            name="question"
                            color={'#ccad00'}
                            size={22}
                        />
                    </View>
                    <View style={styles.containerText}>
                        <Text
                            style={styles.textOptions}
                        >Ajuda
                        </Text>
                        <Text
                            style={styles.descOptions}
                        >
                            Descrição de funcionalidades do aplicativo
                        </Text>
                    </View> 
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.contentOptions}
                    onPress={() => goToContact()}
                >
                    <View style={styles.containerIcon}>
                        <SimpleLineIcons
                            style={styles.iconMod}
                            name="info"
                            color={'#ccad00'}
                            size={22}
                        />
                    </View>
                    <View style={styles.containerText}>
                        <Text
                            style={styles.textOptions}
                        >Sobre
                        </Text>
                        <Text
                            style={styles.descOptions}
                        >
                            Informações para contato para solicitação de cargo de profissional dentro do aplicativo
                        </Text>
                    </View> 
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.contentOptions}
                    onPress={() => signOutFirebase()}
                >
                    <View style={styles.containerIcon}>
                        <SimpleLineIcons
                            style={styles.iconMod}
                            name="logout"
                            color={'#ccad00'}
                            size={22}
                            onPress={() => signOutFirebase()}
                        />
                    </View>
                    <View style={styles.containerText}>
                        <Text
                            style={styles.textOptions}
                            onPress={() => signOutFirebase()}
                        >Sair
                        </Text>
                        <Text
                            style={styles.descOptions}
                        >
                            Pressione para realizar o logoff do aplicativo
                        </Text>
                    </View> 
                </TouchableOpacity>
            </View>
        </View>
    )
}