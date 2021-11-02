import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { LogBox, View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { GiftedChat, Send } from '../../../Components/react-native-gifted-chat/lib';
import api from '../../../Config/API';
import firebase from '../../../Config/firebaseconfig';

export default function ChatSappy({ route }) {

    const navigator = useNavigation()
    const [messages, setMessages] = useState([])

    const nameProf = route.params?.nome
    const idProf = route.params?.identify
    const { photoURL, email, uid } = firebase.auth().currentUser.providerData[0]

    const user = {
        _id: uid,
        avatar: photoURL,
        from: email,
        to: idProf,
        chatName: nameProf
    };

    useEffect(() => {
        setMessages([])

        navigator.setOptions({ title: nameProf })

        if (Platform.OS != "web") {
            LogBox.ignoreAllLogs(true)
            LogBox.ignoreLogs(['Setting a timer'])
        }

        api.updateMessages(msg => {
            if (msg.user.chatName == nameProf
                || msg.user.from == idProf
                || msg.user.to == idProf) {

                if (msg.user.from == email || msg.user.to == email) {
                    setMessages(previousMessages => GiftedChat.append(previousMessages, msg))
                }

            }
        })

    }, [])

    function onSendMessage(messages) {
        messages.forEach(message => {
            let msg = `${message.text}`.trimEnd()
            if (msg != '' && msg != null) {
                message.createdAt = new Date().getTime();
                api.createMessage(message);
            }
        })
    }

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