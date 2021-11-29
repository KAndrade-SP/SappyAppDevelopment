import React, { useEffect, useState } from 'react'
import { ScrollView, View, TouchableOpacity } from 'react-native'
import CardGroup from '../../../Components/ChatComponents/CardGroup'
import firebase from '../../../Config/firebaseconfig.js'

import { useNavigation } from '@react-navigation/native'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'

import styles from './StyleGroupChat'

export default function ChatGroup() {

    // Constante para armazenar o componente CardGroup.
    const [cardData, setCardData] = useState([])
    const [adm, setadm] = useState()

    const { uid } = firebase.auth().currentUser.providerData[0]
    const navigation = useNavigation()

    // Pegando informações dos grupos, no banco.
    useEffect(() => {
        let isMounted = true

        if (isMounted) {
            firebase.database()
                .ref(`Users/${uid}`)
                .once('value')
                .then(snapshot => {
                    const { isAdmin } = snapshot.val()
                    setadm(isAdmin)
                })

            firebase.database()
                .ref('Grupos')
                .once('value')
                .then(snapshot => {
                    const data = Object.values(snapshot.val()) // Pegando todos os valores.
                    const keys = Object.keys(snapshot.val())   // Pegando apenas chaves.

                    // Armazenado busca com valores, na constante cardData.
                    setCardData(data.map(({ Description, Picture }, key) => {
                        return <CardGroup
                            key={key} Title={keys[key]}
                            Desc={Description}
                            ImageGp={Picture}
                        />
                    }))
                })
            isMounted = false
        }

    }, [])

    function goToCreateGroup() {
        navigation.navigate('CreateGroup')
    }

    // Renderizando todos os grupos existentes no banco, por cards.
    return (
        <>
            <ScrollView style={{ flex: 1, backgroundColor: "#000710" }}>
                <View style={{ marginBottom: 10 }}>
                    {cardData}
                </View>
            </ScrollView>

            {adm == 'true' ? 
            <View style={styles.containerFloatButton}>
                <TouchableOpacity
                    style={styles.floatButton}
                    onPress={goToCreateGroup}
                >
                    <SimpleLineIcons
                        name="plus"
                        color={'#f5f5f5'}
                        size={28}
                    />
                </TouchableOpacity> 
            </View>
            : <></>}
        </>
    )
}