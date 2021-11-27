import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({

    container: {
        flex: 1,
        paddingTop: 4,
    },

    spaceChat: {
        flex: 1,
        paddingRight: 8,
        paddingLeft: 8,
    },

    cardChat: {
        backgroundColor: '#212121',
        paddingEnd: 8,
        paddingStart: 8,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        borderTopRightRadius: 15,
        borderTopLeftRadius: 4,
        width: "100%",
        height: 70,
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 4,
        paddingLeft: 12,
    },

    divValuesChat: {
        alignItems: 'center',
        flexDirection: 'row',
        flex: 1
    },

    imageChat: {
        width: 50,
        height: 50,
        borderRadius: 100,
        borderWidth: 0.5,
        borderColor: '#ccad00'
    },

    divNameDesc: {
        marginLeft: 12,
    },

    chatName: {
        fontSize: 16,
        color: '#f5f5f5'
    },

    chatDescription: {
        fontSize: 12,
        color: '#f5f5f580',
        fontStyle: 'italic',
        marginTop: 2,
    },

});

export default styles;