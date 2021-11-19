import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { LogBox, View } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { GiftedChat, Send } from '../../../Components/react-native-gifted-chat/lib'
import api from '../../../Config/API'
import firebase from '../../../Config/firebaseconfig'

export default function ChatSappy({ route }) {

    const navigator = useNavigation()

    const nameProf = route.params?.nome // Pegando nome do profissional, recebido pelo cardChat.
    const idProf = route.params?.identify // Pegando o ID do profissional, recebido pelo cardChat.

    const [messages, setMessages] = useState([]) // Constante para armazenar mensagens. 

    // Pegando id, email e foto do usuário atual.
    const { photoURL, email, uid } = firebase.auth().currentUser.providerData[0]

    // Constante para armazenar dados do usuário atual.
    const user = {
        _id: uid,
        avatar: photoURL,
        from: email,
        to: idProf,
        chatName: nameProf
    }

    useEffect(() => {
        let isMounted = true
        if (isMounted) {
            // Enviando nome do profissional, para a tela de conversas.
            navigator.setOptions({ title: nameProf })

            // Ignorando logs.
            if (Platform.OS != "web") {
                LogBox.ignoreAllLogs(true)
                LogBox.ignoreLogs(['Setting a timer'])
            }

            // Pegando mensagens do banco, e setando na tela de conversas.
            api.updateMessages(msg => {
                const {chatName, from, to} = msg.user 
                // Validando se a mensagem pode ser setada no chat.
                if (chatName == nameProf || from == idProf || to == idProf) {
                    if (from == email || to == email) {
                        setMessages(previousMessages => GiftedChat.append(previousMessages, msg))
                    }
                }
            })
        }
        return () => { isMounted = false }
    }, [])

    // Função para setar/criar na tela de conversas e no banco.
    function onSendMessage(messages) {
        messages.forEach(message => {
            // Pegando as mensagens, e tirando espaços no final.
            let msg = `${message.text}`.trimEnd()
            if (msg != '' && msg != null) {
                message.createdAt = new Date().getTime()
                api.createMessage(message)
            }
        })
    }

    // Função para o botão de enviar.
    const renderSend = (props) => {
        return (
            <Send {...props}>
                <View>
                    <MaterialCommunityIcons
                        name="send-circle"
                        size={45}
                        color="white"
                    />
                </View>
            </Send>
        )
    }

    // Componente do chat.
    return (
        <GiftedChat
            isTyping={true}
            user={user}
            messages={messages}
            showAvatarForEveryMessage={false}
            showUserAvatar={false}
            onSend={onSendMessage}
            renderSend={renderSend}
            isTyping={true}
            alwaysShowSend={true}
        />
    )
}