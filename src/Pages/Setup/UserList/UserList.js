import React, { useEffect, useState } from "react"
import { TouchableOpacity, Text, View, ToastAndroid } from "react-native"

import firebase from '../../../Config/firebaseconfig'

import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import styles from './styleUserList'

function UserList() {
    // Constante para armazenar lista de usuários.
    const [list, setList] = useState([])

    // Função para pegar dados dos usuários no banco.
    async function fetchData() {
        await firebase.database()
            .ref('Users')
            .once('value')
            .then(snapshot => {
                const data = Object.values(snapshot.val()) // Pegando todos os valores.
                setList(data.map(({ name, isProf }, key) => {
                    return (
                        <View style={styles.contentUser} key={key}>
                            <Text style={styles.text}>{name}</Text>
                            {isProf == "true" // validação para setar cor do botao: É profissional(verde), Não é(vermelho)
                                ?
                                <TouchableOpacity
                                    style={styles.iconButton}
                                    onPress={() => {
                                        const keyID = Object.keys(snapshot.val())[key]
                                        changeStatusProf("false", keyID)
                                        ToastAndroid.show(`O usuario ${name}, não é mais um Profissional`, ToastAndroid.LONG);
                                    }}
                                >
                                    <SimpleLineIcons
                                        name="check"
                                        color={'#00c853'}
                                        size={22}
                                    />
                                </TouchableOpacity>
                                :
                                <TouchableOpacity
                                    style={styles.iconButton}
                                    onPress={() => {
                                        const keyID = Object.keys(snapshot.val())[key]
                                        changeStatusProf("true", keyID)
                                        ToastAndroid.show(`O usuario ${name}, agora é um Profissional`, ToastAndroid.LONG)
                                    }}
                                >
                                    <SimpleLineIcons
                                        name="close"
                                        color={'#ff5131'}
                                        size={22}
                                    />
                                </TouchableOpacity>}
                        </View>
                    )
                }))
            })
    }

    // Carrega a lista de usuários.
    useEffect(() => {
        let isMounted = true
        if (isMounted) fetchData()
        return () => { isMounted = false }
    }, [])

    // Função chamada nos botões, que torna usuario profissional 
    // ou torna apenas usuário comum.
    async function changeStatusProf(isProf, id) {
        // Ao final do update, ele carrega novamente os usuarios do banco.
        await firebase.database()
            .ref(`Users/${id}`)
            .update({
                isProf,
            }).then(fetchData())
    }

    return (
        <View style={styles.containerUser}>
            {list}
        </View>  
    )
}

export default UserList;