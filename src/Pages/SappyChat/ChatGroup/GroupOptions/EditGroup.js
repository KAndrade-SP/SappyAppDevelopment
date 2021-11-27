import React, { useState } from "react"
import { Text, View, TextInput, Image, TouchableOpacity, ToastAndroid } from "react-native"

import firebase from '../../../../Config/firebaseconfig'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import { useNavigation } from '@react-navigation/native'

import styles from './StyleEditGroup'

export default function EditGroup({ route }) {
    const navigation = useNavigation()

    const [Picture, setImageGp] = useState(route.params?.photoUrl) //Foto do Grupo
    const [Title, setTitle] = useState(route.params?.groupName)
    const [Description, setDesc] = useState(route.params?.groupDesc)

    const [Messages, setBkpMenssagem] = useState({})
   
    async function changeData() {
        console.log(Messages)
        await firebase.database()
            .ref(`Grupos/${route.params?.groupName}`)
            .once('value')
            .then(snapshot => {
                const data = snapshot.val()
                if(data.Messages != undefined) setBkpMenssagem(data.Messages)
        }).then(() => {
            firebase.database()
            .ref(`Grupos/${Title}`)
            .update({
                Description,
                Messages,
                Picture
            })
            .then(() => {
                ToastAndroid.show("Dados alterados com sucesso!", ToastAndroid.SHORT)
                navigation.navigate('Home')
            })
            firebase.database().ref(`Grupos/${route.params?.groupName}`).remove()
        })
        
    }

    return (
        <View style={styles.container}>
            <View style={styles.panel}>
                <Image
                    style={styles.photo}
                    source={{ uri: Picture }}
                    resizeMode="stretch"
                />

                <View style={styles.contentView}>
                    <View style={styles.contentText}>
                        <Text style={styles.text}>Nome do Grupo:</Text>
                    </View>
                    <View style={styles.contentInput}>
                        <TextInput
                            onChangeText={e => setTitle(e)}
                            maxLength={45}
                            defaultValue={Title}
                            style={styles.textInput}
                        />
                    </View>
                </View>

                <View style={styles.contentView}>
                    <View style={styles.contentText}>
                        <Text style={styles.text}>Descrição:</Text>
                    </View>
                    <View style={styles.contentInputDesc}>
                        <TextInput
                            onChangeText={a => setDesc(a)}
                            maxLength={255}
                            multiline
                            numberOfLines={3}
                            defaultValue={Description}
                            style={styles.textInput}
                        />
                    </View>
                </View>
            </View>

            <TouchableOpacity
                style={styles.floatButton}
                onPress={() => changeData()}
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