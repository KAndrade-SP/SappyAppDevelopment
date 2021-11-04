import React, { useEffect, useState } from 'react'
import { ScrollView } from 'react-native'
import CardGroup from '../../../Components/ChatComponents/CardGroup'
import firebase from '../../../Config/firebaseconfig.js'


export default function ChatGroup() {

    const [cardData, setCardData] = useState([])

    useEffect(() => {
        firebase.database()
            .ref('Grupos')
            .once('value')
            .then(snapshot => {
                const data = Object.values(snapshot.val())
                const keys = Object.keys(snapshot.val())

                setCardData(data.map(({ Description, Picture }, key) => {

                    return <CardGroup
                        key={key} Title={keys[key]}
                        Desc={Description}
                        ImageGp={Picture}
                    />

                }))

            })
    })

    return (
        <ScrollView style={{ flex: 1, backgroundColor: "#000710" }}>
            {cardData}
        </ScrollView>
    )
}