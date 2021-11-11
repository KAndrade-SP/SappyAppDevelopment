import React, { useEffect, useState } from 'react'
import { ScrollView, View } from 'react-native'
import CardGroup from '../../../Components/ChatComponents/CardGroup'
import firebase from '../../../Config/firebaseconfig.js'

export default function ChatGroup() {

    // Constante para armazenar o componente CardGroup.
    const [cardData, setCardData] = useState([])

    // Pegando informações dos grupos, no banco.
    useEffect(() => {
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
    })

    // Renderizando todos os grupos existentes no banco, por cards.
    return (
        <ScrollView style={{ flex: 1, backgroundColor: "#000710" }}>
            <View style={{ marginBottom: 10 }}>
                {cardData}
            </View>
        </ScrollView>
    )
}