import React, { useCallback, useEffect, useState } from 'react';
import { LogBox, Platform, View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { GiftedChat, Send } from '../../../Components/react-native-gifted-chat/lib';
import api from '../../../Config/API';


export default function GroupChat() {

    const [messages, setMessages] = useState([])
    useEffect(() => {
        if (Platform.OS != "web") {
            LogBox.ignoreAllLogs(['Setting a timer for a long period of time'])
        }
        api.updateMessages((msg) => {
            setMessages(previousMessages => GiftedChat.append(previousMessages, msg))
        })
    }, [])

    const user = {
        _id: 2,
        name: 'josé'
    }

    const onSend = useCallback((messages = []) => {
        messages.forEach(message => {
            message.createdAt = new Date().getTime()
            api.createMessage(message)
        });
    }, [])


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
            user={user}
            messages={messages}
            onSend={messages => onSend(messages)}
            renderSend={renderSend}
            renderUsernameOnMessage={true}
            isTyping={true}
            alwaysShowSend={true}
        />
    );
}