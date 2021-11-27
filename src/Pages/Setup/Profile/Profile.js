import React, { useEffect, useState } from "react"
import { Text, View, TextInput, Image, TouchableOpacity, ToastAndroid } from "react-native"

import { useNavigation } from '@react-navigation/native'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'

import firebase from '../../../Config/firebaseconfig'
import styles from './styleProfile'

export default function Profile() {

    const navigation = useNavigation()

    // Pegando id do usuario atual.
    const { uid } = firebase.auth().currentUser.providerData[0]
    
    // Constantes para armazenar valores alterados.
    const [nameUser, setNameUser] = useState()
    const [photoUrl, setPhotoURL] = useState()
    const [bio, setBio] = useState()

    // Armazenando dados iniciais, a partir do banco.
    useEffect(() => {
        firebase.database()
            .ref(`Users/${uid}`)
            .once('value')
            .then(snapshot => {
                const { name, bio, photoUrl } = snapshot.val()
                setNameUser(name)
                setBio(bio)
                setPhotoURL(photoUrl)
            })
    }, [])

    // Função para atualizar os dados do usuário no banco.
    async function changeData(id, name, bio) {
        await firebase.database()
            .ref(`Users/${id}`)
            .update({
                name,
                bio
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
                    source={{ uri: photoUrl }}
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
                        <Text style={styles.text}>Bio:</Text>
                    </View>
                    <View style={styles.contentInputDesc}>
                        <TextInput
                            onChangeText={a => setBio(a)}
                            maxLength={150}
                            multiline
                            numberOfLines={3}  
                            defaultValue={bio}
                            style={styles.textInput}
                        />
                    </View>
                </View>
                
            </View>

            <TouchableOpacity
                style={styles.floatButton}
                onPress={() => changeData(uid, nameUser, bio)}
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