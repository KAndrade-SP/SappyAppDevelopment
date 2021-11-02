import React from 'react'
import { ScrollView } from 'react-native'
import CardGroup from '../../../Components/ChatComponents/CardGroup'

export default function ChatGroup() {

    return (
        <ScrollView style={{ flex: 1, backgroundColor: "#000710" }}>
            <CardGroup Title="Saúde mental" Desc="120 mil users" ImageGp="a" />
            <CardGroup Title="Pensamentos positivos" Desc="110 mil users" ImageGp="a" />
            <CardGroup Title="Felicidade versos dolar" Desc="60 mil users" ImageGp="a" />
            <CardGroup Title="Treinando a mente" Desc="170 mil users" ImageGp="a" />
        </ScrollView>
    )
}