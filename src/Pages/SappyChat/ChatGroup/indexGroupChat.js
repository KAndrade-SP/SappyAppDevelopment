import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { LogBox, Platform, View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { GiftedChat, Send } from '../../../Components/react-native-gifted-chat/lib';
import api from '../../../Config/API';
import firebase from '../../../Config/firebaseconfig.js'

export default function GroupChat({ route }) {

    const nameGroup = route.params?.title
    const navigator = useNavigation()

    const [username, setUsername] = useState()
    const [messages, setMessages] = useState([])

    const { photoURL, uid } = firebase.auth().currentUser.providerData[0]

    firebase.database().ref(`Users/${uid}`).once('value').then(snapshot => {
        const { name } = snapshot.val()
        setUsername(name)
    })

    const user = {
        _id: uid,
        name: username,
        avatar: photoURL,
        chatName: nameGroup
    }

    useEffect(() => {
        setMessages([])

        navigator.setOptions({ title: nameGroup })

        if (Platform.OS != "web") {
            LogBox.ignoreAllLogs(true)
            LogBox.ignoreLogs(['Setting a timer'])
        }

        api.updateGroupMessages(msg => {

            if (msg.user.chatName == nameGroup) {
                setMessages(previousMessages => GiftedChat.append(previousMessages, msg))
            }
        }, way => { return nameGroup })

    }, [])

    function onSendMessage(messages, way = nameGroup) {
        messages.forEach(message => {
            let msg = `${message.text}`.trimEnd()
            if (msg != '' && msg != null) {
                message.createdAt = new Date().getTime();
                api.createGroupMessage(message, way);
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
    );
}