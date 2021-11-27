import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000710",
    },

    panel: {
        width: "100%",
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        marginTop: 4,
        marginBottom: 4,
        paddingHorizontal: 8,
    },

    contentView: {
        marginBottom: 4,
    },

    floatButton: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 70,
        height: 70,
        position: 'absolute',
        bottom: 16,
        right: 16,
        backgroundColor: '#ccad00',
        borderRadius: 100,
    },

    contentText: {  
        paddingEnd: 8,
        paddingStart: 8,
        paddingLeft: 8,
        paddingBottom: 8,
        justifyContent: 'flex-start',
        marginBottom: 4,
    },

    contentInput:{
        height: 50,
        backgroundColor: '#212121',
        paddingEnd: 8,
        paddingStart: 8,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        borderTopRightRadius: 15,
        borderTopLeftRadius: 4,
        width: "100%",
        flexDirection: "row",
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 4,
        marginBottom: 8,
        paddingLeft: 12
    },

    contentInputDesc: {
        height: 90,
        backgroundColor: '#212121',
        paddingEnd: 8,
        paddingStart: 8,
        paddingBottom: 8,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        borderTopRightRadius: 15,
        borderTopLeftRadius: 4,
        width: "100%",
        flexDirection: "row",
        justifyContent: 'flex-start',
        alignItems: 'baseline',
        marginTop: 4,
        marginBottom: 8,
        paddingLeft: 12
    },

    contentButton: {
        flexDirection: "row",
        justifyContent: 'flex-start',
        marginTop: 4,
    },

    textInput: {
        color: '#f5f5f5',
        fontSize: 16,
        flex: 1,
    },

    text: {
        color: '#f5f5f5',
        fontSize: 16,
    },

    textButton: {
        color: '#f5f5f5',
        fontSize: 16,
    },

    photo: {
        justifyContent: 'center',
        alignSelf: 'center',
        width: 70,
        height: 70,
        borderRadius: 70,
        marginBottom: 12,
    }
})

export default styles