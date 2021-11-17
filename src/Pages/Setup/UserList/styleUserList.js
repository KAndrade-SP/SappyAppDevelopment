import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        justifyContent: 'flex-start'
    },

    button: {
        backgroundColor: '#000710',
        borderRadius: 10,
        height: 50,
        width: 150,
        justifyContent: 'center',
        alignItems: 'center',
    },

    containerUser: {
        backgroundColor: '#000710',
        width: "100%",
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        borderRadius: 16,
        borderBottomWidth: 0.2,
        borderBottomColor: '#f5f5f540',
        marginTop: 10,
        paddingHorizontal: 8,
    },

    contentUser: {
        flexDirection: "row",
        paddingTop: 8,
        paddingLeft: 12,
        marginBottom: 8,

    },

    iconButton: {
        alignItems: 'flex-end',
        flex: 1,
    },

    text: {
        color: '#f5f5f5',
        fontSize: 16,
    }
})

export default styles