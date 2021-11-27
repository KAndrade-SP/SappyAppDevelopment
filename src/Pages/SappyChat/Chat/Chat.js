import React, { useEffect, useState } from 'react'
import { ScrollView, View } from 'react-native'
import CardChat from '../../../Components/ChatComponents/CardChat'
import firebase from '../../../Config/firebaseconfig.js'

export default function SappyChat() {

    const [cardData, setCardData] = useState([]) // Armazenar componente de profissional.
    const [cardData2, setCardData2] = useState([]) // Armazenar componete de usuário com mensagem.

    // Pegar dados do usuário atual.
    const current_user = firebase.auth().currentUser.providerData[0].email

    useEffect(() => {
        // Primeira consulta para pegar todos os usuários que são profissionais.
        firebase.database()
            .ref('Users')
            .once('value')
            .then(snapshot => {
                const data = Object.values(snapshot.val()) // Pegando todos os dados.
                setCardData(data.map(({ name, email, isProf, photoUrl, dataProf }, key) => {

                    // Setar cardChat com os valores, caso a validação for verdadeira. 
                    if (data[key].email != current_user && isProf == "true") {
                        return <CardChat
                            key={key} Title={`${name} 💠`}
                            Desc={dataProf.area}
                            ImageAvatar={photoUrl}
                            Identify={email}
                        /> }

                }))
            }) // Fim da primeira consulta.


        /*  Realização da consulta de mensagens, para verificar se o usuário
            comum mandou alguma mensagem para um profissional. Caso verdadeiro,
            o card com a mensagem irá retornar apenas para o profissional logado. */
        firebase.database()
            .ref('Messages')
            .once('value')
            .then(snapshot => {
                const data = Object.values(snapshot.val()) // Pegando todos os dados.
                data.map(({ user }) => {

                    /*  Se o usuário atual for o destinatário
                        de alguma mensagem enviada por outro usuário,
                        entao o card irá aparecer. */
                    if (user.to == current_user) {

                        // Renderizando CardChat com dados do usuário que mandou a mensagem.
                        firebase.database()
                            .ref('Users')
                            .once('value')
                            .then(snapshot2 => {
                                const data2 = Object.values(snapshot2.val()) // Pegando todos os dados.
                                setCardData2(data2.map(({ name, email, photoUrl, isProf }, key) => {

                                    // Retorna o cardChat caso a validação seja satisfeita.
                                    if (data2[key].email == user.from && isProf == "false") {
                                        return <CardChat
                                            key={key} Title={name}
                                            Desc="messages..."
                                            ImageAvatar={photoUrl}
                                            Identify={email}
                                        /> }

                                }))
                            }) // Encerrando terceira consulta.
                    }
                })
            })
    }, [])

    // Renderizando todos profissionais existentes no banco, por cards.
    return (
        <ScrollView style={{ flex: 1, backgroundColor: "#000710" }}>
            <View style={{ marginBottom: 10 }}>
                {cardData}
                {cardData2 /* Retorna os usuarios com mensagens */ }
            </View>
        </ScrollView>
    )
}