import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { LogBox, Platform, View } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { GiftedChat, Send } from '../../../Components/react-native-gifted-chat/lib'
import api from '../../../Config/API'
import firebase from '../../../Config/firebaseconfig.js'

export default function GroupChat({ route }) {

    const navigator = useNavigation()
    const nameGroup = route.params?.title // Pegando nome do grupo, recebido pelo cardGroup.

    // Constantes para armazenar nome de usuário e mensagens.
    const [username, setUsername] = useState()
    const [messages, setMessages] = useState([])

    // Pegando id e foto do usuário atual.
    const { photoURL, uid } = firebase.auth().currentUser.providerData[0]

    // Pegando nome do usuário atual.
    firebase.database()
        .ref(`Users/${uid}`)
        .once('value')
        .then(snapshot => {
            const { name } = snapshot.val()
            setUsername(name)
        })

    // Constante para armazenar dados do usuário atual.
    const user = {
        _id: uid,
        name: username,
        avatar: photoURL,
        chatName: nameGroup
    }
    
    useEffect(() => {
        let isMounted = true
        if (isMounted) {
            // Enviando nome do grupo, para a tela de conversas.
            navigator.setOptions({ title: nameGroup })
            
            // Ignorando logs.
            if (Platform.OS != "web") {
                LogBox.ignoreAllLogs(true)
                LogBox.ignoreLogs(['Setting a timer']) }

            // Pegando mensagens do banco, e setando na tela de conversas.
            api.updateGroupMessages(msg => {
                if (msg.user.chatName == nameGroup) {
                    setMessages(previousMessages => GiftedChat.append(previousMessages, msg))
                }
            }, way => { return nameGroup })
        }
        return () => { isMounted = false }
    }, [])

    // Função para setar/criar na tela de conversas e no banco.
    function onSendMessage(messages, way = nameGroup) {
        messages.forEach(message => {
            // Pegando as mensagens, e tirando espaços no final.
            let msg = `${message.text}`.trimEnd()
            if (msg != '' && msg != null) {
                message.createdAt = new Date().getTime()
                api.createGroupMessage(message, way)
            }
        })
    }

    // Função para o botão de enviar.
    const renderSend = props => {
        return (
            <Send {...props}>
                <View>
                    <MaterialCommunityIcons
                        name="send-circle"
                        size={45}
                        color="#f5f5f5"
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
    );
}