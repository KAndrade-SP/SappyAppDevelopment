import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({

    container: {
        flex: 1,
        paddingTop: 4,
    },

    spaceGroup: {
        flex: 1,
        paddingRight: 8,
        paddingLeft: 8,
    },

    cardGroup: {
        backgroundColor: '#212121',
        paddingEnd: 8,
        paddingStart: 8,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        borderTopRightRadius: 15,
        borderTopLeftRadius: 4,
        width: "100%",
        height: 70,
        marginTop: 4,
        paddingLeft: 12,
    },

    divValuesGroup: {
        alignItems: 'center',
        flexDirection: 'row',
        flex: 1
    },

    imageGroup: {
        width: 50,
        height: 50,
        borderRadius: 100,
        borderWidth: 0.5,
        borderColor: '#ccad00'
    },

    divNameDesc: {
        marginLeft: 12
    },

    groupName: {
        fontSize: 16,
        color: '#f5f5f5'
    },

    groupDescription: {
        fontSize: 12,
        color: '#f5f5f580',
        fontStyle: 'italic',
        marginTop: 2,
        maxWidth: 260,
        maxHeight: 50,
    },

    containerButton: {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
    },

    enterButton: {
        width: 80,
        height: 36,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#ccad00",
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        borderTopRightRadius: 15,
        borderTopLeftRadius: 4,
        marginLeft: 12
    },

    editButton: {
        width: 80,
        height: 36,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#ccad00",
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        borderTopRightRadius: 15,
        borderTopLeftRadius: 4,
        marginLeft: 18
    },

    groupOptions:{
        width: '100%',           
        position: 'absolute',
        marginTop: 68,                      
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        opacity: 0
    },

    text: {
        fontSize: 12,
        color: '#f5f5f5'
    },

    contentOptions: {
        flexDirection: "row",
        paddingTop: 8,
        justifyContent: 'center',
        paddingLeft: 12,
        marginBottom: 8,
    },

    containerIcon: {
        justifyContent: 'center'
    },

    iconMod: {
        marginTop: 6,
    },

});

export default styles;