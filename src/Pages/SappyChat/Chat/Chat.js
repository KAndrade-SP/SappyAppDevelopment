import React, { useEffect, useState } from 'react'
import { ScrollView, View } from 'react-native'
import CardChat from '../../../Components/ChatComponents/CardChat'
import firebase from '../../../Config/firebaseconfig.js'

export default function SappyChat() {

    const [cardData, setCardData] = useState([])
    const [cardData2, setCardData2] = useState([])
    const [current_user, setCurrent_user] = useState(firebase.auth().currentUser.providerData[0].email)

    useEffect(() => {
        firebase.database()
            .ref('Users')
            .once('value')
            .then(snapshot => {
                const data = Object.values(snapshot.val())

                setCardData(data.map(({ name, email, area, isProf, photoUrl }, key) => {

                    if (data[key].email != current_user && isProf == "true") {
                        return <CardChat
                            key={key} Title={name}
                            Desc={area}
                            ImageAvatar={photoUrl}
                            Identify={email}
                        />
                    }

                }))

            })

        firebase.database()
            .ref('Messages')
            .once('value')
            .then(snapshot => {
                const data = Object.values(snapshot.val())

                data.map(({ user }) => {
                    if (user.to == current_user) {
                        firebase.database()
                            .ref('Users')
                            .once('value')
                            .then(snapshot2 => {
                                const data2 = Object.values(snapshot2.val())

                                setCardData2(data2.map(({ name, email, photoUrl, isProf }, key) => {
                                    if (data2[key].email == user.from && isProf == "false") {
                                        return <CardChat
                                            key={key} Title={name}
                                            Desc="messages..."
                                            ImageAvatar={photoUrl}
                                            Identify={email}
                                        />
                                    }
                                })
                                )
                            })
                    }

                })

            })

    }, [])

    return (
        <ScrollView style={{ flex: 1, backgroundColor: "#000710" }}>
            <View style={{ marginBottom: 10 }}>
                {cardData}
                {cardData2}
            </View>
        </ScrollView>
    )
}