import React, { useEffect, useState } from "react"
import { Text, View, TextInput, Image, TouchableOpacity, ToastAndroid } from "react-native"

import { useNavigation } from '@react-navigation/native'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'

import firebase from '../../../Config/firebaseconfig'
import styles from './styleProfile'

export default function Profile() {

    const navigation = useNavigation()

    // Pegando id e foto do usuario atual.
    const { uid, photoURL } = firebase.auth().currentUser.providerData[0]
    
    // Constantes para armazenar valores alterados.
    const [nameUser, setNameUser] = useState()
    const [ageUser, setAgeUser] = useState()
    const [isProf, setIsProf] = useState()
    const [area, setArea] = useState()

    // Armazenando dados iniciais, a partir do banco.
    useEffect(() => {
        firebase.database()
            .ref(`Users/${uid}`)
            .once('value')
            .then(snapshot => {
                const { age, area, isProf, name } = snapshot.val()
                setNameUser(name)
                setAgeUser(age)
                setIsProf(isProf)
                setArea(area)
            })
    }, [])

    // Função para atualizar os dados do usuário no banco.
    async function changeData(id, name, age, area, photoUrl) {
        await firebase.database()
            .ref(`Users/${id}`)
            .update({
                name,
                age,
                area,
                photoUrl
            })
            .then(() => {
                ToastAndroid.show("Dados alterados com sucesso!", ToastAndroid.SHORT)
                navigation.navigate('Home')
            })
    }

    return (
        <View style={styles.container}>
            <View style={styles.panel}>
                <Image
                    style={styles.photo}
                    source={{ uri: photoURL }}
                    resizeMode="stretch"
                />

                <View style={styles.contentView}>
                    <View style={styles.contentText}>
                        <Text style={styles.text}>Nome de Usuário:</Text>
                    </View>
                    <View style={styles.contentInput}>
                        <TextInput
                            onChangeText={e => setNameUser(e)}
                            maxLength={45}
                            defaultValue={nameUser}
                            style={styles.textInput}
                        />
                    </View>
                </View>

                <View style={styles.contentView}>
                    <View style={styles.contentText}>
                        <Text style={styles.text}>Idade:</Text>
                    </View>
                    <View style={styles.contentInput}>
                        <TextInput
                            onChangeText={a => setAgeUser(a)}
                            maxLength={2}
                            keyboardType={'numeric'}
                            defaultValue={ageUser}
                            style={styles.textInput}
                        />
                    </View>
                </View>

                {isProf == "true"
                    ?
                    <View style={styles.contentView}>
                        <View style={styles.contentText}>
                            <Text style={styles.text}>Área de atuação:</Text>
                        </View>
                        <View style={styles.contentInput}>
                            <TextInput
                                onChangeText={a => setArea(a)}
                                maxLength={45}
                                autoCapitalize='none'
                                defaultValue={area}
                                style={styles.textInput}
                            />
                        </View>
                    </View>
                    :
                    <>
                    </>
                }
            </View>

            <TouchableOpacity
                style={styles.floatButton}
                onPress={() => changeData(uid, nameUser, ageUser, area, photoURL)}
            >
                <SimpleLineIcons
                    name="pencil"
                    color={'#f5f5f5'}
                    size={22}
                />
            </TouchableOpacity>
        </View>
    )
}