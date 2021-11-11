import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import { useNavigation } from '@react-navigation/native'

import firebase from "../../Config/firebaseconfig"

import styles from './styleSetup'

import ModalUserList from '../../Components/ModalComponents/ModalUserList'
import ModalDisableUser from '../../Components/ModalComponents/ModalDisableUser'
import ModalHelp from '../../Components/ModalComponents/ModalHelp'

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
    const [validAdm, setValidAdm] = useState()

    useEffect(() => {
        let isMounted = true
        // Busca no banco para pegar estado de administrador do usuario atual.
        firebase.database()
            .ref(`Users/${uid}`)
            .once('value')
            .then(snapshot => {
                const { isAdmin } = snapshot.val()
                if (isAdmin != "false" && isMounted) setValidAdm(true)
            })
        return () => { isMounted = false }
    }, [])

    // Constantes para abrir e fechar modais.
    const [openList, setOpenList] = useState(false)
    const [disable, setOpenDisable] = useState(false)
    const [help, setOpenHelp] = useState(false)

    // Função para carregar tela de perfil.
    function goToProfile() { navigation.navigate('Profile') }
    
    // Funções para abrir e fechar modais
    function goToUserList() { setOpenList(!openList) }
    function goToDisableUser() { setOpenDisable(!disable) }
    function goToHelp() { setOpenHelp(!help) }

    return (
        <View
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}
        >
            <ModalUserList open={openList} onClose={() => setOpenList(false)} />
            <ModalDisableUser open={disable} onClose={() => setOpenDisable(false)} />
            <ModalHelp open={help} onClose={() => setOpenHelp(false)} />

            <View
                style={styles.options}
            >
                <TouchableOpacity
                    style={styles.contentOptions}
                    onPress={() => goToProfile()}
                >
                    <SimpleLineIcons
                        style={styles.iconMod}
                        name="user"
                        color={'#ccad00'}
                        size={22}
                    />
                    <Text
                        style={styles.textOptions}
                    >Perfil
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.contentOptions}
                    onPress={() => goToDisableUser()}
                >
                    <SimpleLineIcons
                        style={styles.iconMod}
                        name="user-unfollow"
                        color={'#ccad00'}
                        size={22}
                    />
                    <Text
                        style={styles.textOptions}
                    >Desativar conta
                    </Text>
                </TouchableOpacity>

                {validAdm != false ? <TouchableOpacity
                    style={styles.contentOptions}
                    onPress={() => goToUserList()}
                >
                    <SimpleLineIcons
                        style={styles.iconMod}
                        name="user-follow"
                        color={'#ccad00'}
                        size={22}
                    />
                    <Text
                        style={styles.textOptions}
                    >Tornar Profissional
                    </Text>
                </TouchableOpacity> : console.log('')}

                <TouchableOpacity
                    style={styles.contentOptions}
                    onPress={() => goToHelp()}
                >
                    <SimpleLineIcons
                        style={styles.iconMod}
                        name="question"
                        color={'#ccad00'}
                        size={22}
                    />
                    <Text
                        style={styles.textOptions}
                    >Ajuda
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.contentOptions}
                    onPress={() => signOutFirebase()}
                >
                    <SimpleLineIcons
                        style={styles.iconMod}
                        name="logout"
                        color={'#ccad00'}
                        size={22}
                        onPress={() => signOutFirebase()}
                    />
                    <Text
                        style={styles.textOptions}
                        onPress={() => signOutFirebase()}
                    >Sair
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}